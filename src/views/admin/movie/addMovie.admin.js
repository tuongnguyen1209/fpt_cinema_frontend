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
    // console.log(newMovie);
    try {
      message.loading({ content: "??ang t???o m???i phim", key: "upload" });
      const rs = await MovieService.createMovie(newMovie);
      form.resetFields();
      message.success({ content: "Th??m phim m???i th??nh c??ng", key: "upload" });
      console.log(rs);
      setImgFile({
        previewVisible: false,
        previewImage: "",
        previewTitle: "",
        fileList: [],
      });

      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Typography.Title level={4} style={{ textAlign: "center" }}>
            Th??m phim m???i
          </Typography.Title>
        </Col>
      </Row>

      <Form form={form} onFinish={onFinish} {...formItemLayout}>
        <Row>
          <Col span={12}>
            <Form.Item
              label="T??n phim ti???ng anh"
              name="name_mv"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nh???p v??o t??n phim" />
            </Form.Item>
            <Form.Item
              label="T??n phim ti???ng vi???t"
              name="name_vn"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nh???p v??o t??n phim" />
            </Form.Item>
            <Form.Item name="date_start" label="Ng??y c??ng chi???u" required>
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="director"
              label="?????o di???n"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nh???p v??o t??n ?????o di???n" />
            </Form.Item>
            <Form.Item
              name="actor"
              label="Di???n vi??n"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nh???p v??o t??n di???n vi??n" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <Form.Item label="H??nh ???nh" required>
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
                        {fileList.length === 0 && "+ T???i h??nh ???nh l???n"}
                        {fileList.length === 1 && "+ T???i h??nh v???a"}
                        {fileList.length === 2 && "+ T???i h??nh banner"}
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
                  label="Th??? lo???i"
                  required
                  rules={[
                    { required: true, message: "Please select your category!" },
                  ]}
                >
                  <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Ch???n th??? lo???i"
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
                  label="Nh?? s???n xu???t"
                  required
                  rules={[...rulesInputdefault]}
                >
                  <Input placeholder="Nh???p v??o nh?? s???n xu???t" />
                </Form.Item>
                <Form.Item
                  name="country"
                  label="Qu???c gia"
                  required
                  rules={[...rulesInputdefault]}
                >
                  <Input placeholder="Nh???p v??o qu???c gia" />
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
              label="Th???i l?????ng phim"
              required
              rules={[...rulesInputdefault]}
            >
              <Input placeholder="Nh???p v??o th???i l?????ng c???a phim" type="number" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <WrapCkediter>
              <Typography.Title level={5}>N???i dung ch??nh</Typography.Title>
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
              L??u
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddMovie;
