import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import roomService from "../../../serivces/room.service";

const ListRoom = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [currentRecord, setCurrentRecord] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rs = await roomService.getAll();
      setData(rs.data.room);
      setLoading(false);
    })();
  }, []);

  const columns = [
    { title: "Id", dataIndex: "id_room", key: "id_room" },
    {
      title: "Tên phòng",
      dataIndex: "name_room",
      key: "name_room",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => showDrawer(record)}>
            Edit
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const showDrawer = (record = null) => {
    setVisible(true);
    // console.log(record);
    setCurrentRecord(record);
  };
  const onClose = () => {
    setVisible(false);
    setCurrentRecord(null);
  };

  return (
    <div>
      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button type="primary" onClick={() => showDrawer()}>
            Thêm phòng mới
          </Button>
        </Col>
        <Col span={24}>
          <Typography.Title level={5} type="secondary">
            Danh sách phòng
          </Typography.Title>
          <Table
            dataSource={data}
            loading={loading}
            rowKey="id_room"
            form={form}
            component={false}
            columns={columns}
          />
        </Col>
      </Row>
      <Drawer
        title={currentRecord ? currentRecord.name : "Phòng chiếu phim"}
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Input value={currentRecord ? currentRecord.name_room : ""} />
      </Drawer>
    </div>
  );
};

export default ListRoom;
