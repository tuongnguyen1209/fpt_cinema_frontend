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

const dataInit = [
  { id: 1, name: "Phong 1" },
  { id: 2, name: "Phong 1" },
];

const ListRoom = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [currentRecord, setCurrentRecord] = useState("");

  useEffect(() => {
    setData(dataInit);
  }, []);

  const columns = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "Tên phòng", dataIndex: "name", key: "name", editable: true },
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
    console.log(record);
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
        <Input value={currentRecord ? currentRecord.name : ""} />
      </Drawer>
    </div>
  );
};

export default ListRoom;
