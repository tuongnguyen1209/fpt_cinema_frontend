import { Button, Space, Table, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

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
    render: () => (
      <Space>
        <Button type="primary" onClick={(e) => e.preventDefault()}>
          Edit
        </Button>
        <Button type="primary" danger onClick={(e) => e.preventDefault()}>
          Delete
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
];

const data = [
  {
    key: 1,
    name: "Phim 1",
    date: "11/25/2021",
    session: [
      { id: 1, start: "10:00", end: "12:00", room: "Phong 1", type: "2D" },
      { id: 2, start: "12:00", end: "14:00", room: "Phong 1", type: "2D" },
    ],
  },
];
const ListSession = () => {
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
        columns={columns}
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
        dataSource={data}
      />
    </div>
  );
};

export default ListSession;
