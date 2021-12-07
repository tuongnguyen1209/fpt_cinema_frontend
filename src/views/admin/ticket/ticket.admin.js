import {
  ExclamationCircleOutlined,
  FontSizeOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  Tabs,
  Typography,
  Tag,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import QrReader from "react-qr-reader";
import { Link, useHistory } from "react-router-dom";
import ticketService from "../../../serivces/ticket.service";
import { formatPrice } from "../../../ultil/format";

const Tickets = () => {
  const [listTicket, setListTicket] = useState([]);
  // const [listSession, setListSession] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [date, setDate] = useState();
  // const [time, setTime] = useState();
  // const [loadingSession, setLoadingSession] = useState(false);
  // const [sort, setSort] = useState({
  //   nam_mv: "",
  //   day: "",
  // });
  const [pangitantion, setPangitation] = useState({
    pageSize: 10,
    current: 1,
    total: 10,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [currentIdSession, setCurrentIDSession] = useState(0);
  const qrcodeRef = useRef();
  const history = useHistory();
  // const [form] = Form.useForm();

  useEffect(() => {
    (async () => {
      setLoading(true);

      let params = {
        page: pangitantion.current,
        limit: pangitantion.pageSize,
      };
      // if (currentIdSession)
      //   params = {
      //     ...params,
      //     code: currentIdSession,
      //     type: "session",
      //   };

      const rs = await ticketService.getAll(params);
      console.log(rs);
      const newPan = { ...pangitantion };
      setPangitation({
        ...newPan,
        total: rs.data[0].total_ticket,
      });
      setListTicket(rs.data.ticket);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pangitantion.current, pangitantion.pageSize]);

  // useEffect(() => {
  //   (async () => {
  //     if (date && time) {
  //       setLoadingSession(true);
  //       const rs = await sessionService.getAll({
  //         day: date,
  //         id_showtimes: time,
  //       });
  //       setListSession(rs.data.session);
  //       setLoadingSession(false);
  //     }
  //   })();
  // }, [date, time]);

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
      dataIndex: "Total_money",
      key: "Total_money",
      render: (Total_money) => formatPrice(Total_money),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "0" ? (
          <>
            <Tag color="red">Chưa thanh toán</Tag>
          </>
        ) : (
          <>
            <Tag color="green">Đã thanh toán</Tag>
          </>
        ),
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
  // const onFinish = (e) => {
  //   console.log(e);
  //   setCurrentIDSession(e.name);
  // };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onScanFile = (result) => {
    if (result) {
      if (`${result}`.includes("polycinema")) {
        handleChangePage(result.split("/")[1]);
      }
    }
  };

  const onSubmitForm = (value) => {
    handleChangePage(value.code);
  };

  const handleChangePage = (id) => {
    Modal.confirm({
      title: "Xác nhận chuyển trang",
      icon: <ExclamationCircleOutlined />,
      content:
        "Đã tìm thấy thông tin vé xem phim, bạn có muốn chuyển đến trang chi tiết",
      okText: "Có",
      cancelText: "Không",
      onOk: () => {
        history.push(`/admin/ticket/${id}?type=qrcode`);
      },
    });
  };

  const onChoneFile = () => {
    qrcodeRef.current.openImageDialog();
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Typography.Title level={5}>Danh sách vé đã đặt</Typography.Title>
        </Col>

        <Col span={12} className="text-right mb-3">
          <Space>
            <Button
              icon={<QrcodeOutlined />}
              type="primary"
              color="#27ae60"
              onClick={showModal}
            >
              Nhập QRCode
            </Button>
            <Button
              icon={<FontSizeOutlined />}
              type="primary"
              color="#27ae60"
              onClick={showModal}
            >
              Nhập mã vé
            </Button>
          </Space>
        </Col>
        <Col span={24}>
          {/* <Form form={form} onFinish={onFinish}>
            <Space className="w-100 justify-content-end">
              <Form.Item name="data">
                <DatePicker
                  placeholder="Chọn ngày"
                  onChange={(e) => {
                    setDate(moment(e).format("YYYY-MM-DD"));
                  }}
                />
              </Form.Item>

              <Form.Item name="time">
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
                  {listSession.map((el, ind) => (
                    <Select.Option key={ind} value={el.id_session}>
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
                <Button
                  type="primary"
                  onClick={() => {
                    setListSession([]);
                    form.resetFields();
                    // setSort({
                    //   day: "",
                    //   nam_mv: "",
                    // });
                  }}
                >
                  Đặt lại
                </Button>
              </Form.Item>
            </Space>
          </Form> */}
        </Col>
      </Row>

      <Table
        dataSource={listTicket}
        onChange={(pan) => {
          // console.log(pan);
          setPangitation(pan);
        }}
        rowKey="id_ticket"
        pagination={pangitantion}
        columns={collums}
        loading={loading}
      />
      <Modal
        title="Nhập vé"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="QRCode" key="1">
            <Button type="primary" onClick={onChoneFile}>
              Chọn hình
            </Button>
            <QrReader
              ref={qrcodeRef}
              style={{ width: "100%" }}
              delay={300}
              legacyMode
              onError={(e) => console.log(e)}
              onScan={onScanFile}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Nhập mã" key="2">
            <Form onFinish={onSubmitForm}>
              <Form.Item name="code">
                <Input placeholder="Nhập mã vé" />
              </Form.Item>
              <Form.Item className="text-center">
                <Button type="primary" htmlType="submit">
                  Kiểm tra
                </Button>
              </Form.Item>
            </Form>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default Tickets;
