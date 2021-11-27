import { Col, Descriptions, Row, Typography, Table, Image } from "antd";
import React, { useEffect, useState } from "react";
import movieData from "../../../data/movie.data";
import { formatPrice } from "../../../ultil/format";

const TicketDetail = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState();

  useEffect(() => {
    setData([
      {
        key: "1",
        location: "H1",
        type: "persion",
        price: "50000",
      },
      {
        key: "1",
        location: "H2",
        type: "persion",
        price: "50000",
      },
    ]);
    setData1([
      {
        key: "1",
        name: "Combo1",
        quantity: 1,
        price: 50000,
      },
      {
        key: "2",
        name: "Combo2",
        quantity: 2,
        price: 50000,
      },
    ]);
  }, []);

  const columns = [
    {
      title: "Vị trí",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
  ];
  const columns1 = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: () => <p>Hình ảnh</p>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Số lượng",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Tổng cộng",
      dataIndex: "total",
      key: "total",
      render: (_, record) => {
        let total = record.quantity * record.price;
        return formatPrice(total);
      },
    },
  ];

  return (
    <div>
      <Row>
        <Col span={24} className="text-center">
          <Typography.Title level={5} type="secondary">
            Chi tiết vé xem phim
          </Typography.Title>
        </Col>
        <Col span={12}>
          <Descriptions title="Thông tin khách hàng" column={1}>
            <Descriptions.Item label="Thông tin khách hàng">
              Nguyễn Văn A
            </Descriptions.Item>
            <Descriptions.Item label="Email">a@gmail.com</Descriptions.Item>
            <Descriptions.Item label="Số lượng">2</Descriptions.Item>
            <Descriptions.Item label="Tổng hóa đơn">
              120.000VND
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={12}>
          <div className="text-center">
            <Typography.Title level={5}>Thông tin phim</Typography.Title>
          </div>

          <Row>
            <Col span={12}>
              <div>
                <Descriptions column={1}>
                  <Descriptions.Item label="Tên phim">
                    {movieData[0].name}
                  </Descriptions.Item>
                  <Descriptions.Item label="Ngày">25/11/2021</Descriptions.Item>
                  <Descriptions.Item label="Khung thời gian">
                    19:00 - 21:00
                  </Descriptions.Item>
                  <Descriptions.Item label="Phòng">PH011</Descriptions.Item>
                  <Descriptions.Item label="Loại">2D</Descriptions.Item>
                </Descriptions>
              </div>
            </Col>
            <Col span={12}>
              <div className="text-center">
                <Image src={movieData[0].image} width="200px" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="mt-3">
          <Typography.Text strong>Thông tin Vị trí</Typography.Text>
          <Table dataSource={data} columns={columns} pagination={false} />
        </Col>
        <Col span={24} className="mt-3">
          <Typography.Text strong>Thông tin đồ ăn kèm theo</Typography.Text>
          <Table dataSource={data1} columns={columns1} pagination={false} />
        </Col>
      </Row>
    </div>
  );
};

export default TicketDetail;
