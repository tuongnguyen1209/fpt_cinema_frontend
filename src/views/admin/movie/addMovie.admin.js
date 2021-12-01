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
  Typography,
  Upload,
} from "antd";
import React, { useEffect, useState } from "react";
import CategoryService from "../../../serivces/category.service";
import MovieService from "../../../serivces/movie.service";
import Uploadfile from "../../../serivces/uploadImg.service";
import { FormatDateRequest } from "../../../ultil/format";
import { WrapCkediter } from "./movie.style.admin";

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

const AddMovie = () => {
  const [imgFile, setImgFile] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });
  const [description, setDescription] = useState("");
  const [form] = Form.useForm();
  const [listcategory, setListCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await CategoryService.getAll();
        setListCategory(result.data.category);
      } catch (error) {}
    })();
  }, []);

  const onPreview = async (res) => {
    if (!res.response.url) {
      res.preview = await getBase64(res.originFileObj);
    }
    setImgFile({
      ...imgFile,
      previewImage: res.response.url || res.preview,
      previewVisible: true,
      previewTitle: res.name || res.url.substring(res.url.lastIndexOf("/") + 1),
    });
  };
  const uploadImage = (options) => {
    const { onSuccess, onError, file } = options;

    Uploadfile(file)
      .then((res) => {
        setImgFile({ ...imgFile, previewImage: res.url });
        onSuccess(res);
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
      image_mv: imgFile.previewImage,
      detail: description,
      rate: "5",
      date_end: "",
      banner: "tthm.jpg",
    };
    try {
      message.loading({ content: "Đang tạo mới phim", key: "upload" });
      const rs = await MovieService.createMovie(newMovie);
      form.resetFields();
      message.success({ content: "Thêm phim mới thành công", key: "upload" });
      console.log(rs);
      setImgFile({
        previewVisible: false,
        previewImage: "",
        previewTitle: "",
        fileList: [],
      });

      setDescription("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            Thêm phim mới
          </Typography.Title>
        </Col>
      </Row>

      <Form form={form} onFinish={onFinish} {...formItemLayout}>
        <Row>
          <Col span={12}>
            <Form.Item
              label="Tên phim tiếng anh"
              name="name_mv"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào tên phim" />
            </Form.Item>
            <Form.Item
              label="Tên phim tiếng việt"
              name="name_vn"
              required
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
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào tên đạo diễn" />
            </Form.Item>
            <Form.Item
              name="actor"
              label="Diễn viên"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nhập vào tên diễn viên" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Form.Item label="Hình ảnh" required>
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
    </div>
  );
};

export default AddMovie;
