import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select,
  Spin,
  Typography,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import CategoryService from "../../../serivces/category.service";
import MovieService from "../../../serivces/movie.service";
import Uploadfile from "../../../serivces/uploadImg.service";
import { FormatDateRequest } from "../../../ultil/format";
import { WrapCkediter } from "./movie.style.admin";
import { useParams } from "react-router-dom";

import moment from "moment";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const rulesInputdefault = [{ required: true }, { warningOnly: true }];

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const createFiled = (newResult, listCateOfMovie) => {
  return [
    {
      name: ["name_mv"],
      value: newResult.name_movie,
    },
    {
      name: ["name_vn"],
      value: newResult.name_movie,
    },

    {
      name: ["date_start"],
      value: moment(newResult.day),
    },

    {
      name: ["director"],
      value: newResult.director,
    },
    {
      name: ["actor"],
      value: newResult.actor,
    },
    {
      name: ["country"],
      value: newResult.country,
    },
    {
      name: ["id_cate"],
      value: listCateOfMovie,
    },
    {
      name: ["Traller"],
      value: newResult.Traller,
    },
    {
      name: ["production"],
      value: newResult.production,
    },
    {
      name: ["country"],
      value: newResult.country,
    },
    {
      name: ["traller"],
      value: newResult.traller,
    },
    {
      name: ["time_mv"],
      value: newResult.time_mv,
    },
  ];
};
const EditMovie = () => {
  const [imgFile, setImgFile] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });
  const [description, setDescription] = useState("");
  const [form] = Form.useForm();
  const [listcategory, setListCategory] = useState([]);
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [filed, setFiled] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await CategoryService.getAll();
        setListCategory(result.data.category);

        if (id) {
          let movie = await MovieService.getMovieById(id);
          movie = movie.data;
          // console.log(movie);
          let listCateOfMovie = movie.cate.split(",");

          for (let i = 0; i < listCateOfMovie.length; i++) {
            let element = listCateOfMovie[i];

            listCateOfMovie[i] = result.data.category.find(
              (el) => el.name_category === element.trim()
            ).id_category;
          }

          const newFL = [
            {
              uid: "1",
              name: movie.name_movie,
              status: "done",
              url: movie.img_large,
            },
            {
              uid: "2",
              name: movie.name_movie,
              status: "done",
              url: movie.img_medium,
            },

            {
              uid: "-1",
              name: movie.name_movie,
              status: "done",
              url: movie.image_banner,
            },
          ];
          const newImgFile = { ...imgFile, fileList: newFL };
          setImgFile(newImgFile);

          setMovieDetail(movie);
          setDescription(movie.detail);
          setFiled(createFiled(movie, listCateOfMovie));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onPreview = async (res) => {
    if (!res.url && !res.preview) {
      res.preview = await getBase64(res.originFileObj);
    }
    setImgFile({
      ...imgFile,
      previewImage: res.url || res.preview,
      previewVisible: true,
      previewTitle: res.name || res.url.substring(res.url.lastIndexOf("/") + 1),
    });
  };
  const uploadImage = (options) => {
    const { onSuccess, onError, file } = options;

    Uploadfile(file)
      .then((res) => {
        setImgFile({ ...imgFile, previewImage: res.url });

        onSuccess(res.secure_url);
      })
      .catch((err) => {
        const error = new Error("Some error");
        onError({ event: error });
      });
  };

  const onChange = ({ fileList }) => {
    setImgFile({ ...imgFile, fileList });
  };

  const handleCancel = () => setImgFile({ ...imgFile, previewVisible: false });
  const { previewVisible, previewImage, fileList, previewTitle } = imgFile;

  const onFinish = async (movie) => {
    // console.log(movie);
    movie.date_start = FormatDateRequest(new Date(movie.date_start._d));
    const newMovie = {
      ...movie,

      image_lage: imgFile.fileList[0].url || imgFile.fileList[0].response,
      image_medium: imgFile.fileList[1].url || imgFile.fileList[1].response,
      detail: description,
      rate: "5",
      date_end: "",
      banner: imgFile.fileList[2].url || imgFile.fileList[2].response,
    };
    console.log(imgFile, newMovie);
    try {
      message.loading({ content: "Đang cập nhật", key: "upload" });
      const rs = await MovieService.updateMovie(id, newMovie);

      message.success({
        content: "Cập nhật phim thành công",
        key: "upload",
      });
      console.log(rs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Spin spinning={loading}>
      <Row>
        <Col span={24}>
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            Chỉnh sửa phim
          </Typography.Title>
        </Col>
      </Row>

      <Form form={form} onFinish={onFinish} fields={filed} {...formItemLayout}>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Tên phim tiếng anh"
              name="name_mv"
              required
              // initialValue={movieDetail.name_movie}
              rules={[...rulesInputdefault]}
            >
              <Input
                placeholder="Nhập vào tên phim"
                value={movieDetail.name_movie}
              />
            </Form.Item>
            <Form.Item
              label="Tên phim tiếng việt"
              name="name_vn"
              required
              initialValue={id ? movieDetail.name_movie : ""}
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào tên phim" />
            </Form.Item>
            <Form.Item name="date_start" label="Ngày công chiếu" required>
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="director"
              label="Đạo diễn"
              required
              initialValue={movieDetail?.director}
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào tên đạo diễn" />
            </Form.Item>
            <Form.Item
              name="actor"
              label="Diễn viên"
              initialValue={id ? movieDetail.actor : ""}
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào tên diễn viên" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Form.Item label="Hình ảnh " required>
                  <Upload
                    action=""
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    customRequest={uploadImage}
                  >
                    {fileList.length < 3 && (
                      <>
                        {fileList.length === 0 && "+ Tải hình ảnh lớn"}
                        {fileList.length === 1 && "+ Tải hình vừa"}
                        {fileList.length === 2 && "+ Tải hình banner"}
                      </>
                    )}
                  </Upload>

                  <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    onCancel={handleCancel}
                  >
                    <img
                      alt="example"
                      style={{ width: "100%" }}
                      src={previewImage}
                    />
                  </Modal>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="id_cate"
                  label="Thể loại"
                  required
                  initialValue={movieDetail ? movieDetail.cate : ""}
                  rules={[
                    { required: true, message: "Please select your category!" },
                  ]}
                >
                  <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Chọn thể loại"
                    optionLabelProp="label"
                  >
                    {listcategory.map((el) => (
                      <Select.Option
                        key={el.id_category}
                        value={el.id_category}
                        label={el.name_category}
                      >
                        {el.name_category}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="production"
                  label="Nhà sản xuất"
                  required
                  rules={[...rulesInputdefault]}
                >
                  <Input placeholder="Nhập vào nhà sản xuất" />
                </Form.Item>
                <Form.Item
                  name="country"
                  label="Quốc gia"
                  required
                  rules={[...rulesInputdefault]}
                >
                  <Input placeholder="Nhập vào quốc gia" />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Form.Item
              name="traller"
              label="Traller"
              rules={[
                { required: true },
                { type: "url", warningOnly: true },
                { type: "string", min: 6 },
              ]}
            >
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="time_mv"
              label="Thời lượng phim"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào thời lượng của phim" type="number" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <WrapCkediter>
              <Typography.Title level={5}>Nội dung chính</Typography.Title>
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(event, editor) => {
                  const newdata = editor.getData();
                  setDescription(newdata);
                }}
              />
            </WrapCkediter>
          </Col>
          <Col span={24} style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default EditMovie;
