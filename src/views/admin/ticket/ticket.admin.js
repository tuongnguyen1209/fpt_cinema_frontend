import { BarcodeOutlined, FontSizeOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sessionService from "../../../serivces/session.service";
import ticketService from "../../../serivces/ticket.service";
import { formatPrice } from "../../../ultil/format";

const Tickets = () => {
  const [listTicket, setListTicket] = useState([]);
  const [listSession, setListSession] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [loadingSession, setLoadingSession] = useState(false);
  const [sort, setSort] = useState({
    nam_mv: "",
    day: "",
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rs = await ticketService.getAll();
      console.log(rs);
      setListTicket(rs.data.ticket);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (date && time) {
        setLoadingSession(true);
        const rs = await sessionService.getAll({
          day: date,
          id_showtimes: time,
        });
        setListSession(rs.data.session);
        setLoadingSession(false);
      }
    })();
  }, [date, time]);

  const collums = [
    {
      title: "Tên khách hàng",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Tên phim",
      dataIndex: "name_mv",
      key: "name_mv",
    },
    {
      title: "Ngày chiếu",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Suất chiếu",
      dataIndex: "time_start",
      key: "time_start",
    },
    {
      title: "Tổng tiền",
      dataIndex: "price",
      key: "price",
      render: (_, record) => {
        let price = record.seat.length * 50000;
        for (let i = 0; i < record.combo.length; i++) {
          const element = record.combo[i];
          price += element.unit_price * element.quantity;
        }

        return formatPrice(price);
      },
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Link to={`ticket/${record.id_ticket}`}>
          <Button type="primary">Chi tiết</Button>
        </Link>
      ),
    },
  ];
  const onFinish = (e) => {
    console.log(e);
    setSort({
      nam_mv: e.name[0],
      day: e.name[1],
    });
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>Danh sách vé đã đặt</Typography.Title>
        </Col>

        <Col span={12} className="text-right mb-3">
          <Space>
            <Button icon={<BarcodeOutlined />} type="primary" color="#27ae60">
              Nhập barcode
            </Button>
            <Button icon={<FontSizeOutlined />} type="primary" color="#27ae60">
              Nhập mã vé
            </Button>
          </Space>
        </Col>
        <Col span={24}>
          <Form onFinish={onFinish}>
            <Space className="w-100 justify-content-end">
              <Form.Item>
                <DatePicker
                  placeholder="Chọn ngày"
                  onChange={(e) => {
                    setDate(moment(e).format("YYYY-MM-DD"));
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Select
                  placeholder="Chọn thời gian"
                  onChange={(e) => setTime(e)}
                >
                  <Select.Option value="1">Khung giờ 1</Select.Option>
                  <Select.Option value="2">Khung giờ 2</Select.Option>
                  <Select.Option value="3">Khung giờ 3</Select.Option>
                  <Select.Option value="4">Khung giờ 4</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="name">
                <Select
                  placeholder="Chọn suất chiếu"
                  loading={loadingSession}
                  style={{ width: "300px" }}
                >
                  {listSession
                    .filter(
                      (el) =>
                        (!sort.day && !sort.nam_mv) ||
                        (el.name_mv === sort.nam_mv && el.date === sort.day)
                    )
                    .map((el, ind) => (
                      <Select.Option key={ind} value={[el.name_mv, el.day]}>
                        {el.name_mv}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Lọc
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Đặt lại</Button>
              </Form.Item>
            </Space>
          </Form>
        </Col>
      </Row>

      <Table dataSource={listTicket} columns={collums} loading={loading} />
    </div>
  );
};

export default Tickets;
