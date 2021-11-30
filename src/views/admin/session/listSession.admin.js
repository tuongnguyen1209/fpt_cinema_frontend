import { Button, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sessionService from "../../../serivces/session.service";

const columns = [
  {
    title: "Tên phim",
    dataIndex: "name",
    key: "name",
    render: (_, element) => <Link to="/move/">{element.name}</Link>,
  },
  { title: "Ngày chiếu", dataIndex: "date", key: "date" },
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
  useEffect(() => {
    (async () => {
      setLoading(true);
      const listSession = await sessionService.getAll();
      setSessions(handleResult(listSession.data.session));
      setLoading(false);
    })();
  }, []);

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
    </div>
  );
};

export default ListSession;
