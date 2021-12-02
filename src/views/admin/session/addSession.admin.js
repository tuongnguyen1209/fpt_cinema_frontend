import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  message,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ADMIN_PREFIX_PATH } from "../../../config/app.config";
import MovieService from "../../../serivces/movie.service";
import roomService from "../../../serivces/room.service";
import sessionService from "../../../serivces/session.service";
import showTimeService from "../../../serivces/showTime.service";

// const timeDefault = [
//   { id: 1, start: "9:30", end: "11:30" },
//   { id: 2, start: "11:00", end: "13:00" },
//   { id: 3, start: "13:30", end: "15:00" },
//   { id: 4, start: "15:00", end: "17:00" },
//   { id: 5, start: "17:00", end: "19:00" },
//   { id: 6, start: "19:00", end: "21:00" },
//   { id: 7, start: "21:00", end: "23:00" },
// ];

const AddSession = () => {
  const [listRoom, setListRoom] = useState([]);
  const [listMovie, setListMovie] = useState([]);
  const [timeDefault, setTimeDefault] = useState([]);
  const [listTimeByRoom, setListTimeByRoom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const rs = await Promise.all([
        MovieService.getAllMovie({ limit: 100 }),
        roomService.getAll(),
        showTimeService.getShowTime(),
      ]);

      setListMovie(rs[0].data.movie);
      setListRoom(rs[1].data.room);
      setTimeDefault(rs[2].data.showtimes);
    })();
  }, []);

  const onFinish = async (value) => {
    // console.log(value);
    setLoading(true);
    try {
      for (let i = 0; i < value.session.length; i++) {
        const element = value.session[i];

        const newData = {
          id_movie: value.id_movie,
          id_room: element.room,
          day: moment(value.date).format("YYYY-MM-DD"),
          type: element.type,
          id_showtimes: element.time,
        };
        await sessionService.create(newData);
      }
      setLoading(false);
      message.success("Thêm danh sách chiếu thành công!");
      history.push(`${ADMIN_PREFIX_PATH}/session`);
    } catch (error) {
      setLoading(false);
      message.error("Có lỗi xảy ra, vui lòng kiểm tra và thử lại!");
    }
  };

  const handlerChangeDay = async (e) => {
    try {
      const rs = await showTimeService.check({
        day: moment(e).format("YYYY-MM-DD"),
      });

      setListTimeByRoom(rs.data.list);
    } catch (error) {
      message.error("Có lỗi xảy ra, vui lòng kiểm tra và thử lại!");
    }
  };

  const checkShowTime = (value, item) => {
    const session = form.getFieldsValue(true).session;
    if (listTimeByRoom.length === 0) return false;

    if (!session[value.name]?.room) return false;

    const indList = listTimeByRoom.findIndex(
      (el) => `${el.id_room}` === `${session[value.name].room}`
    );

    if (indList === -1) return false;

    if (
      !listTimeByRoom[indList].list_time ||
      listTimeByRoom[indList].list_time.length === 0
    )
      return false;

    const check = listTimeByRoom[indList].list_time.includes(
      `${item.id_showtimes}`
    );
    return check;
  };

  return (
    <div>
      <div>
        <Typography.Title level={5}>Thêm suất chiếu</Typography.Title>
      </div>
      <Form onFinish={onFinish} form={form}>
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
                {listMovie.map((el) => (
                  <Select.Option key={el.id_movie}>{el.name}</Select.Option>
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
              <DatePicker onChange={handlerChangeDay} />
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
                    <div key={field.key}>
                      <Space key={field.key} align="baseline">
                        <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, curValues) =>
                            // prevValues.time !== curValues.time ||
                            {
                              return (
                                prevValues.session[field.fieldKey]?.room !==
                                  curValues.session[field.fieldKey]?.room ||
                                prevValues.session[field.fieldKey]?.time !==
                                  curValues.session[field.fieldKey]?.time
                              );
                            }
                          }
                        >
                          {() => (
                            <Form.Item
                              {...field}
                              label="Phòng"
                              name={[field.name, "room"]}
                              fieldKey={[field.fieldKey, "room"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Bạn phải chọn phòng",
                                },
                              ]}
                            >
                              <Select
                                style={{ width: 130 }}
                                // onChange={(e) => setLastDay()}
                              >
                                {listRoom.map((item) => (
                                  <Select.Option
                                    key={item.id_room}
                                    value={item.id_room}
                                  >
                                    {item.name_room}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          )}
                        </Form.Item>
                        <Form.Item
                          noStyle
                          shouldUpdate={(prevValues, curValues) =>
                            prevValues.session[field.fieldKey]?.room !==
                              curValues.session[field.fieldKey]?.room ||
                            !prevValues.session[field.fieldKey]?.time ||
                            !curValues.session[field.fieldKey]?.time
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
                                {timeDefault.map((item) =>
                                  checkShowTime(field, item) ? (
                                    <Select.Option
                                      key={item.id_showtimes}
                                      value={item.id_showtimes}
                                      disabled
                                    >
                                      {item.time_start} - {item.time_end}
                                    </Select.Option>
                                  ) : (
                                    <Select.Option
                                      key={item.id_showtimes}
                                      value={item.id_showtimes}
                                    >
                                      {item.time_start} - {item.time_end}
                                    </Select.Option>
                                  )
                                )}
                              </Select>
                            </Form.Item>
                          )}
                        </Form.Item>

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
            <Button type="primary" htmlType="submit" loading={loading}>
              Lưu
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddSession;
