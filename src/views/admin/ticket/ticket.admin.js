import { BarsOutlined, InsertRowAboveOutlined } from "@ant-design/icons";
import { Button, Col, Row, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import movieData, { listTicketDefault } from "../../../data/movie.data";
import { formatPrice } from "../../../ultil/format";
import ListLayout from "./layoutTicket/listLayout";

const Tickets = () => {
  const [currentMovie, setCurrentMovie] = useState(1);
  const [typeShow, setTypeShow] = useState("list");
  const [listTicket, setListTicket] = useState([]);

  useEffect(() => {
    const indexTickets = listTicketDefault.findIndex(
      (el) => el.idMovie === currentMovie
    );
    console.log(indexTickets);
    setListTicket(listTicketDefault[indexTickets].list);
  }, [currentMovie]);

  const handleClickMovie = (id) => {
    setCurrentMovie(id);
  };

  const collums = [
    {
      title: "Tên khách hàng",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Ngày mua",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Tổng tiền",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        let price = record.quantity * 50000;
        for (let i = 0; i < record.combo.length; i++) {
          const element = record.combo[i];
          price += element.price * element.quantity;
        }

        return formatPrice(price);
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Link to={`ticket/${record.id}`}>
          <Button type="primary">Chi tiết</Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>Danh sách vé đã đặt</Typography.Title>
        </Col>
        <Col span={12} className="text-right">
          <Button
            type={typeShow === "list" ? "link" : "text"}
            onClick={() => setTypeShow("list")}
          >
            <BarsOutlined />
          </Button>
          <Button
            type={typeShow === "table" ? "link" : "text"}
            onClick={() => setTypeShow("table")}
          >
            <InsertRowAboveOutlined />
          </Button>
          <Button></Button>
        </Col>
      </Row>
      <ListLayout
        movieData={movieData}
        currentMovie={currentMovie}
        handleClickMovie={(id) => handleClickMovie(id)}
      >
        <Table dataSource={listTicket} columns={collums} />
      </ListLayout>
    </div>
  );
};

export default Tickets;
