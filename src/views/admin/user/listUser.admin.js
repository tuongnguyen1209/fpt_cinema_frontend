import { Image, Table, Typography, Tag, Button, Space, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listTicketDefault, listUser } from "../../../data/movie.data";
import { formatPrice } from "../../../ultil/format";

const ListUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Image
          src={
            "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
          }
          width="50px"
          fallback="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        />
      ),
    },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    {
      title: "Chức vụ",
      dataIndex: "role",
      key: "role",
      render: (role) =>
        role === 1 ? (
          <Tag color="#87d068"> Khách hàng</Tag>
        ) : (
          <Tag color="#f50"> Admin</Tag>
        ),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === 1 ? (
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
          <Space>
            <Button type="primary" onClick={showModal}>
              Lịch sử đặt hàng
            </Button>
            <Button type="primary" danger>
              Khóa tài khoản
            </Button>
          </Space>
        </>
      ),
    },
  ];

  const collumsTicket = [
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
      <div className="text-center">
        <Typography.Title level={4}>Danh sách người dùng</Typography.Title>
      </div>
      <div>
        <Table dataSource={listUser} columns={columns} />
      </div>
      <Modal
        title="Lịch sử đặt hàng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Table dataSource={listTicketDefault[0].list} columns={collumsTicket} />
      </Modal>
    </div>
  );
};

export default ListUser;
