import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  message,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import roomService from "../../../serivces/room.service";
import sessionService from "../../../serivces/session.service";
import showTimeService from "../../../serivces/showTime.service";

const handleResult = (arr = []) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    const index = newArr.findIndex(
      (el) => el.name === element.name_mv && el.date === element.day
    );

    if (index !== -1) {
      newArr[index].session.push({
        id: element.id_session,
        start: element.date_start,
        end: element.date_end,
        room: element.room_number,
        type: element.type,
      });
    } else {
      newArr.push({
        key: i,
        name: element.name_mv,
        id_movie: element.id_movie,
        date: element.day,
        session: [
          {
            id: element.id_session,
            start: element.date_start,
            end: element.date_end,
            type: element.type,
            room: element.room_number,
          },
        ],
      });
    }
  }

  return newArr;
};

const ListSession = () => {
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({});
  const [timeDefault, setTimeDefault] = useState([]);
  const [listRoom, setListRoom] = useState([]);
  const [listTimeByRoom, setListTimeByRoom] = useState([]);
  const [currentRoom, setCurrentRoom] = useState();
  const [loadingAdd, setLoadingAdd] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const listSession = await sessionService.getAll();
      setSessions(handleResult(listSession.data.session));
      setLoading(false);

      const rs = await Promise.all([
        roomService.getAll(),
        showTimeService.getShowTime(),
      ]);

      setListRoom(rs[0].data.room);
      setTimeDefault(rs[1].data.showtimes);
    })();
  }, []);
  const showModal = async (record) => {
    setIsModalVisible(true);
    setCurrentRecord(record);

    const rs = await showTimeService.check({
      day: record.date,
    });
    setListTimeByRoom(rs.data.list);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentRecord({});
    setListTimeByRoom([]);
  };

  const columns = [
    {
      title: "T??n phim",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Ng??y chi???u",
      dataIndex: "date",
      key: "date",
      sorter: (a, b) => (a.date > b.date ? 1 : -1),
    },
    {
      title: "Thao T??c",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={(e) => showModal(record)}
          >
            Th??m l???ch chi???u
          </Button>
        </Space>
      ),
    },
  ];
  const columns1 = [
    { title: "Th???i gian b???t ?????u", dataIndex: "start", key: "start" },
    { title: "Th???i gian k???t th??c", dataIndex: "end", key: "end" },
    { title: "Ph??ng", dataIndex: "room", key: "room" },
    { title: "lo???i chi???u", dataIndex: "type", key: "type" },
    {
      title: "Thao T??c",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            onClick={() =>
              Modal.confirm({
                title: "B???n c?? mu???n x??a su???t chi???u n??y",
                icon: <ExclamationCircleOutlined />,
                content: "Nh???ng thay ?????i c???a b???n c?? th??? ???nh h?????ng ?????n d??? li???u",
                okText: "C??",
                cancelText: "Kh??ng",
                onOk: () => onDeleteSession(record.id),
              })
            }
          >
            X??a
          </Button>
        </Space>
      ),
    },
  ];

  const onDeleteSession = async (id) => {
    try {
      await sessionService.delete({ id_session: id });
      message.success("X??a th??nh c??ng");
      setLoading(true);
      const listSession = await sessionService.getAll();
      setSessions(handleResult(listSession.data.session));
      setLoading(false);
    } catch (error) {
      message.error("C?? l???i x???y ra, vui l??ng ki???m tra l???i");
    }
  };

  const checkShowTime = (item) => {
    if (!currentRoom || !item) return false;

    if (listTimeByRoom.length === 0) return false;

    const indList = listTimeByRoom.findIndex(
      (el) => `${el.id_room}` === `${currentRoom}`
    );
    if (indList === -1) return false;

    const check = listTimeByRoom[indList].list_time.includes(
      `${item.id_showtimes}`
    );
    return check;
  };

  const onFinish = async (value) => {
    console.log(currentRecord);
    setLoadingAdd(true);
    try {
      const data = {
        ...value,
        day: currentRecord?.date,
        id_movie: currentRecord?.id_movie,
      };
      console.log(data);

      await sessionService.create(data);

      setLoading(true);
      const listSession = await sessionService.getAll();
      setSessions(handleResult(listSession.data.session));
      setLoading(false);
      handleCancel();
    } catch (error) {
      message.error("C?? l???i x???y ra, vui l??ng th??? l???i sau");
    }
    setLoadingAdd(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title level={5} type="secondary">
          L???ch chi???u phim
        </Typography.Title>
        <Link to="session/addsession">
          <Button type="primary">Th??m l???ch chi???u</Button>
        </Link>
      </div>
      <Table
        loading={loading}
        columns={columns}
        rowKey="key"
        expandable={{
          expandedRowRender: (record) => (
            <Table
              rowKey="id"
              columns={columns1}
              dataSource={record.session}
              pagination={false}
            />
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={sessions}
      />
      <Modal
        title="Khung gi??? chi???u"
        visible={isModalVisible}
        onOk={handleCancel}
        width={700}
        footer={false}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish}>
          <Form.Item label="T??n phim">
            <Input disabled value={currentRecord?.name} />
          </Form.Item>
          <Form.Item label="Ng??y">
            <Input disabled value={currentRecord?.date} />
          </Form.Item>
          <Form.Item
            label="Ph??ng"
            name={"id_room"}
            rules={[
              {
                required: true,
                message: "B???n ph???i ch???n ph??ng",
              },
            ]}
          >
            <Select style={{ width: 200 }} onChange={(e) => setCurrentRoom(e)}>
              {listRoom.map((item) => (
                <Select.Option key={item.id_room} value={item.id_room}>
                  {item.name_room}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Khung Th???i gian"
            name={"id_showtimes"}
            rules={[
              {
                required: true,
                message: "B???n ph???i ch???n khung gi???",
              },
            ]}
          >
            <Select style={{ width: 200 }}>
              {timeDefault.map((item) =>
                checkShowTime(item) ? (
                  <Select.Option
                    key={item.id_showtimes}
                    value={item.id_showtimes}
                    disabled
                  >
                    {item.time_start} - {item.time_end}
                  </Select.Option>
                ) : (
                  <Select.Option
                    key={item.id_showtimes}
                    value={item.id_showtimes}
                  >
                    {item.time_start} - {item.time_end}
                  </Select.Option>
                )
              )}
            </Select>
          </Form.Item>
          <Form.Item
            name="type"
            label="Lo???i chi???u"
            rules={[
              {
                required: true,
                message: "B???n ph???i ch???n lo???i chi???u",
              },
            ]}
          >
            <Select style={{ width: 200 }}>
              <Select.Option value="2D">2D</Select.Option>
              <Select.Option value="3D">3D</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="text-right">
            <Button danger type="primary" onClick={handleCancel}>
              ????ng
            </Button>
            <Button htmlType="submit" type="primary" loading={loadingAdd}>
              L??u
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ListSession;
