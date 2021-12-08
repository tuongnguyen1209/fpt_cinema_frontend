import { HistoryOutlined } from "@ant-design/icons";
import {
  Button,
  Image,
  message,
  Modal,
  Popconfirm,
  Table,
  Tag,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TicketService from "../../../serivces/ticket.service";
import userService from "../../../serivces/user.service";
import { formatPrice } from "../../../ultil/format";

const ListUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingTicket, setLoadingTicket] = useState(false);
  const [listTicket, setListTicket] = useState([]);
  const [num, setNum] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rs = await userService.getAll();
      setListUser(rs.data.user);
      setLoading(false);
    })();
  }, [num]);

  const showModal = async (record) => {
    setIsModalVisible(true);
    setLoadingTicket(true);
    const rs = await TicketService.getTicketByUser(record.id_user);
    setListTicket(rs.data.ticket);
    setLoadingTicket(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangeRole = async (id, role) => {
    try {
      let data = {};
      if (`${role}` === "0") {
        data = { administration: 1 };
      } else {
        data = { administration: 0 };
      }
      await userService.changeRole(id, data);
      setNum(num + 1);
      message.success("Thay đổi quyền thành công");
    } catch (error) {
      message.error("Có lỗi xảy ra, vui lòng thử lại sau!");
    }
  };

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "img_user",
      key: "img_user",
      render: (img_user) => (
        <Image
          src={img_user}
          width="50px"
          fallback="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        />
      ),
    },
    { title: "Tên", dataIndex: "name_user", key: "name_user" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    {
      title: "Chức vụ",

      dataIndex: "administration",
      key: "administration",
      sort: true,
      render: (administration) =>
        administration === "1" ? (
          <Tag color="#f50"> Admin</Tag>
        ) : (
          <Tag color="#87d068"> Khách hàng</Tag>
        ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status !== 0 ? (
          <Tag color="green">Đang hoạt động</Tag>
        ) : (
          <Tag color="red">Bị khóa</Tag>
        ),
    },
    {
      title: "Tác vụ",
      key: "acton",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            icon={<HistoryOutlined />}
            onClick={() => showModal(record)}
          >
            Lịch sử đặt hàng
          </Button>
          <Popconfirm
            okText="Có"
            cancelText="Không"
            title="Bạn có muốn thay đổi quyền của người dùng này?"
            onConfirm={() =>
              handleChangeRole(record.id_user, record.administration)
            }
          >
            <Button type="primary" danger>
              Thay đổi quyền
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const collumsTicket = [
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
      title: "Ngày mua",
      dataIndex: "time_create",
      key: "time_create",
    },
    {
      title: "Ngày chiếu",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Thời gian chiếu",
      dataIndex: "time_start",
      key: "time_start",
    },

    {
      title: "Tổng tiền",
      dataIndex: "Total_money",
      key: "Total_money",
      render: (Total_money) => {
        return formatPrice(Total_money);
      },
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

  return (
    <div>
      <div className="text-center">
        <Typography.Title level={4}>Danh sách người dùng</Typography.Title>
      </div>
      <div>
        <Table
          dataSource={listUser}
          columns={columns}
          Ticket={loading}
          rowKey="id_user"
          loading={loading}
        />
      </div>
      <Modal
        title="Lịch sử đặt hàng"
        visible={isModalVisible}
        onOk={handleOk}
        width={1000}
        onCancel={handleCancel}
      >
        <Table
          dataSource={listTicket}
          columns={collumsTicket}
          loading={loadingTicket}
        />
      </Modal>
    </div>
  );
};

export default ListUser;
