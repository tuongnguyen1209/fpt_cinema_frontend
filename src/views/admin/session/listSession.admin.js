import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
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
      title: "Tên phim",
      dataIndex: "name",
      key: "name",
      render: (_, element) => <Link to="/move/">{element.name}</Link>,
    },
    { title: "Ngày chiếu", dataIndex: "date", key: "date" },
    {
      title: "Thao Tác",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            onClick={(e) => showModal(record)}
          >
            Thêm lịch chiếu
          </Button>
        </Space>
      ),
    },
  ];
  const columns1 = [
    { title: "Thời gian bắt đầu", dataIndex: "start", key: "start" },
    { title: "Thời gian kết thúc", dataIndex: "end", key: "end" },
    { title: "Phòng", dataIndex: "room", key: "room" },
    { title: "loại chiếu", dataIndex: "type", key: "type" },
    {
      title: "Thao Tác",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space>
          <Button
            icon={<DeleteOutlined />}
            type="primary"
            danger
            onClick={(e) => e.preventDefault()}
          >
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title level={5} type="secondary">
          Lịch chiếu phim
        </Typography.Title>
        <Link to="session/addsession">
          <Button type="primary">Thêm lịch chiếu</Button>
        </Link>
      </div>
      <Table
        loading={loading}
        columns={columns}
        rowKey="key"
        expandable={{
          expandedRowRender: (record) => (
            <Table
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
        title="Khung giờ chiếu"
        visible={isModalVisible}
        onOk={handleCancel}
        width={700}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Tên phim">
            <Input disabled value={currentRecord?.name} />
          </Form.Item>
          <Form.Item label="Ngày">
            <Input disabled value={currentRecord?.date} />
          </Form.Item>
          <Form.Item
            label="Phòng"
            name={"room"}
            rules={[
              {
                required: true,
                message: "Bạn phải chọn phòng",
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
            label="Khung Thời gian"
            name={"time"}
            rules={[
              {
                required: true,
                message: "Bạn phải chọn khung giờ",
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
        </Form>
      </Modal>
    </div>
  );
};

export default ListSession;
