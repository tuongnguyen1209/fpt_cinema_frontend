import {
  Button,
  Col,
  Descriptions,
  Image,
  Row,
  Spin,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ticketService from "../../../serivces/ticket.service";
import { formatPrice } from "../../../ultil/format";
import queryString from "query-string";
import { useReactToPrint } from "react-to-print";

import { useLocation } from "react-router-dom";

const TicketDetail = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const currentRef = useRef();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rs = await ticketService.getAll({
        code: id,
        type: query.type ? "TK_code" : "id_ticket",
      });
      console.log(rs);
      setData(rs.data.ticket[0]);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const columns = [
    {
      title: "Vị trí",
      dataIndex: "seat",
      key: "seat",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: () => formatPrice(65000),
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
      dataIndex: "combo",
      key: "combo",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Số lượng",
      dataIndex: "unit_price",
      key: "unit_price",
    },
    {
      title: "Tổng cộng",
      dataIndex: "total",
      key: "total",
      render: (_, record) => {
        let total = record.quantity * record.unit_price;
        return formatPrice(total);
      },
    },
  ];

  const print = useReactToPrint({
    content: () => currentRef.current,
  });

  return (
    <div>
      <Spin spinning={loading}>
        <Row ref={currentRef} className="print-p-3">
          <Col span={24} className="text-center">
            <Typography.Title level={5} type="secondary">
              Chi tiết vé xem phim
            </Typography.Title>
          </Col>
          <Col span={24} className=" ">
            <div className="hiddent-print text-right">
              <Button type="primary" onClick={print} className="hiddent-print">
                In hóa đơn
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <Descriptions title="Thông tin khách hàng" column={1}>
              <Descriptions.Item label="Thông tin khách hàng">
                <Typography.Text strong>{data?.full_name}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <Typography.Text strong>{data?.email} </Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">
                <Typography.Text strong> {data?.phone}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="Số lượng">
                <Typography.Text strong> {data?.seat.length}</Typography.Text>
              </Descriptions.Item>
              <Descriptions.Item label="Tổng hóa đơn">
                <Typography.Text strong>
                  {data?.Total_money && formatPrice(data?.Total_money)}
                </Typography.Text>
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
                      <Typography.Text strong>{data?.name_mv}</Typography.Text>
                    </Descriptions.Item>
                    <Descriptions.Item label="Ngày">
                      {data?.date}
                    </Descriptions.Item>
                    <Descriptions.Item label="Khung thời gian">
                      {data?.time_start}
                    </Descriptions.Item>
                    <Descriptions.Item label="Phòng">
                      {data?.id_room}
                    </Descriptions.Item>
                    <Descriptions.Item label="Loại">2D</Descriptions.Item>
                  </Descriptions>
                </div>
              </Col>
              <Col span={12}>
                <div className="text-center">
                  <Image src={data?.image} width="200px" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="mt-3">
            <Typography.Text strong>Thông tin Vị trí</Typography.Text>
            <Table
              dataSource={data?.seat}
              columns={columns}
              pagination={false}
            />
          </Col>
          {data?.combo && data.combo.length > 0 && (
            <Col span={24} className="mt-3">
              <Typography.Text strong>Thông tin đồ ăn kèm theo</Typography.Text>
              <Table
                dataSource={data?.combo}
                columns={columns1}
                pagination={false}
              />
            </Col>
          )}
        </Row>
      </Spin>
    </div>
  );
};

export default TicketDetail;
