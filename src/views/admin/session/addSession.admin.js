import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import React from "react";
import movieData from "../../../data/movie.data";

const timeDefault = [
  { id: 1, start: "9:30", end: "11:30" },
  { id: 2, start: "11:00", end: "13:00" },
  { id: 3, start: "13:30", end: "15:00" },
  { id: 4, start: "15:00", end: "17:00" },
  { id: 5, start: "17:00", end: "19:00" },
  { id: 6, start: "19:00", end: "21:00" },
  { id: 7, start: "21:00", end: "23:00" },
];
const roomDefault = [
  { id: 1, name: "Phòng A1" },
  { id: 2, name: "Phòng A2" },
];

const AddSession = () => {
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div>
        <Typography.Title level={5}>Thêm suất chiếu</Typography.Title>
      </div>
      <Form onFinish={onFinish}>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Chọn phim"
              name="id_movie"
              rules={[
                {
                  required: true,
                  message: "Bạn phải chọn phim",
                },
              ]}
            >
              <Select>
                {movieData.map((el) => (
                  <Select.Option key={el.id}>{el.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Chọn Ngày"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Bạn phải chọn ngày chiếu",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.List
              name="session"
              initialValue={[{ time: 1, type: "2d", room: 1 }]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field) => (
                    <div>
                      <Space key={field.key} align="baseline">
                        <Form.Item
                          {...field}
                          label="Phòng"
                          name={[field.name, "room"]}
                          fieldKey={[field.fieldKey, "room"]}
                          rules={[
                            { required: true, message: "Bạn phải chọn phòng" },
                          ]}
                        >
                          <Select style={{ width: 130 }}>
                            {roomDefault.map((item) => (
                              <Select.Option key={item.id} value={item.id}>
                                {item.name}
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, curValues) =>
                            prevValues.time !== curValues.time ||
                            prevValues.room !== curValues.room
                          }
                        >
                          {() => (
                            <Form.Item
                              {...field}
                              label="Khung Thời gian"
                              name={[field.name, "time"]}
                              fieldKey={[field.fieldKey, "time"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Bạn phải chọn khung giờ",
                                },
                              ]}
                            >
                              <Select style={{ width: 130 }}>
                                {timeDefault.map((item) => (
                                  <Select.Option key={item.id} value={item.id}>
                                    {item.start} - {item.end}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          )}
                        </Form.Item>
                        <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, curValues) =>
                            prevValues.time !== curValues.time ||
                            prevValues.room !== curValues.room
                          }
                        >
                          {() => (
                            <Form.Item
                              {...field}
                              label="Loại"
                              name={[field.name, "type"]}
                              fieldKey={[field.fieldKey, "type"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Bạn phải chọn loại",
                                },
                              ]}
                            >
                              <Select style={{ width: 130 }}>
                                <Select.Option key={1} value="2d">
                                  2D
                                </Select.Option>
                                <Select.Option key={2} value="3d">
                                  3D
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          )}
                        </Form.Item>

                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </Space>
                    </div>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Thêm khung thời gian
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
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

export default AddSession;
