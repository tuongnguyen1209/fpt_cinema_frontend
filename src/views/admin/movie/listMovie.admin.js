import {
  Button,
  Col,
  Drawer,
  Image,
  Modal,
  Row,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import MovieService from "../../../serivces/movie.service";
import { ADMIN_PREFIX_PATH } from "../../../config/app.config";

const ListMovie = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTraller, setCurrentTraller] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const listmovie = await MovieService.getAllMovie();
        console.log(listmovie);
        setMovieData(listmovie.movie);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, []);

  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Image
          src={image}
          width="50px"
          fallback="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
        />
      ),
    },
    {
      title: "Tên phim",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thể loại",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Traller",
      dataIndex: "traller",
      key: "traller",
      render: (traller) => (
        <Button type="ghost" danger onClick={() => showTraller(traller)}>
          Xem traller
        </Button>
      ),
    },
    {
      title: "Thời gian khởi chiếu",
      dataIndex: "datestart",
      key: "datestart",
    },
    {
      title: "Thời lượng",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Thao tác",
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <>
          <Button type="primary" onClick={() => showMovie(item)}>
            Xem chi tiết
          </Button>
        </>
      ),
    },
  ];

  const showMovie = (item) => {
    setVisible(true);
    setCurrentMovie(item);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showTraller = (traller) => {
    setIsModalVisible(true);
    setCurrentTraller(traller);
  };

  const handleCancel = async () => {
    await setCurrentTraller("");
    setIsModalVisible(false);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Typography.Title level={4}>Danh sách phim</Typography.Title>
        </Col>
        <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="movie/addmovie">
            <Button type="primary">Thêm phim mới</Button>
          </Link>
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Tất cả phim</Button>
          <Button>Phim đã chiếu</Button>
          <Button>Phim đang chiếu</Button>
          <Button>Phim Sắp chiếu</Button>
        </Col>
      </Row>

      <Table
        rowKey="id_movie"
        dataSource={movieData}
        columns={columns}
        loading={loading}
      />

      <Modal
        title="Traller"
        visible={isModalVisible}
        footer={null}
        width="650px"
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            width="560"
            height="315"
            src={currentTraller}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>

      <Drawer
        title={currentMovie?.name}
        placement="right"
        onClose={onClose}
        visible={visible}
        width="769px"
        extra={
          <Button
            type="primary"
            onClick={() => {
              onClose();
              history.push(
                `${ADMIN_PREFIX_PATH}/movie/${currentMovie.id_movie}`
              );
            }}
          >
            Chỉnh sửa
          </Button>
        }
      >
        <Row gutter={20}>
          <Col span={16}>
            <Row>
              <Col span={12}>
                <Typography.Title level={5} type="secondary">
                  Thể loại:
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography.Text strong>
                  {currentMovie?.category}
                </Typography.Text>
              </Col>
              <Col span={12}>
                <Typography.Title level={5} type="secondary">
                  Đạo diễn:
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography.Text strong>
                  {currentMovie?.dirctor}
                </Typography.Text>
              </Col>
              <Col span={12}>
                <Typography.Title level={5} type="secondary">
                  Diễn viên:
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography.Text strong>{currentMovie?.actor}</Typography.Text>
              </Col>
              <Col span={12}>
                <Typography.Title level={5} type="secondary">
                  Nhà sản xuất
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography.Text strong>
                  {currentMovie?.production}
                </Typography.Text>
              </Col>
              <Col span={12}>
                <Typography.Title level={5} type="secondary">
                  Quốc gia
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography.Text strong>
                  {currentMovie?.country}
                </Typography.Text>
              </Col>
              <Col span={12}>
                <Typography.Title level={5} type="secondary">
                  Thời lượng
                </Typography.Title>
              </Col>
              <Col span={12}>
                <Typography.Text strong>{currentMovie?.time}</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <div>
              <Image
                src={currentMovie?.image}
                width="100%"
                fallback="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
              />
            </div>
          </Col>
          <Col span={15}>
            <Typography.Title level={5} type="secondary">
              Nội dung chính
            </Typography.Title>
            <div>{currentMovie?.content}</div>
          </Col>
          <Col span={9}>
            <Typography.Title level={5} type="secondary">
              Traler
            </Typography.Title>
            <div>
              <iframe
                width="100%"
                height="200"
                src={currentMovie?.traller}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default ListMovie;
