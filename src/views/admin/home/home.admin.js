import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Statistic,
  Typography,
  Select,
  DatePicker,
  Space,
  Spin,
} from "antd";
import {
  ContainerOutlined,
  DollarOutlined,
  FileProtectOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { formatPrice } from "../../../ultil/format";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dasboardService from "../../../serivces/dasboard.service";
import moment from "moment";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomeAdmin = () => {
  const [selectOption, setSelectOption] = useState("1");
  const [data, setData] = useState([
    { count_all_id_movie: 0 },
    { count_show_id_movie: 0 },
    { total_price: 0 },
    { total_user: 0 },
  ]);
  const [listPriceByTime, setListPriceByTime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingByTime, setLoadingByTime] = useState(false);
  const [time, setTime] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    start: moment(new Date()).format("YYYY-MM-DD"),
    end: moment(new Date()).format("YYYY-MM-DD"),
  });

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rs = await dasboardService.showAll();
      const newArr = [];
      for (let i = 0; i < rs.data.dasboard[5].price_by_showtime.length; i++) {
        const element = rs.data.dasboard[5].price_by_showtime[i];
        newArr.push({
          name: `Khung giờ ${element.shotime}`,
          value: element.total * 1,
        });
      }
      const newRs = [...rs.data.dasboard];
      newRs[5] = { price_by_showtime: newArr };
      setData(newRs);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoadingByTime(true);
      if (selectOption === "2") {
        const rs = await dasboardService.showAll({
          type: "month",
          month: time.month,
          year: time.year,
        });
        setListPriceByTime(rs.static);
      } else if (selectOption === "3") {
        const rs = await dasboardService.showAll({
          type: "date",
          start: time.start,
          end: time.end,
        });
        setListPriceByTime(rs.static);
      } else {
        const rs = await dasboardService.showAll({
          type: "month",
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        });
        setListPriceByTime(rs.static);
      }
      setLoadingByTime(false);
    })();
  }, [time, selectOption]);

  return (
    <Spin spinning={loading}>
      <Row>
        <Col span={6} className="text-center">
          <Statistic
            title="Tổng phim hiện có"
            value={data[0] && data[0]?.count_all_id_movie}
            prefix={<ContainerOutlined />}
          />
        </Col>
        <Col span={6} className="text-center">
          <Statistic
            title="Tổng phim đang chiếu"
            value={data[1] && data[1]?.count_show_id_movie}
            prefix={<FileProtectOutlined />}
          />
        </Col>
        <Col span={6} className="text-center">
          <Statistic
            title="Tổng doanh thu trong năm"
            value={formatPrice(data[2]?.total_price || 0)}
            prefix={<DollarOutlined />}
          />
        </Col>
        <Col span={6} className="text-center">
          <Statistic
            title="Số lượng người dùng mới"
            value={data[3] && data[3]?.total_user}
            prefix={<UsergroupAddOutlined />}
          />
        </Col>
      </Row>

      <div className="mt-5">
        <Row>
          <Col span={12} style={{ height: 500 }}>
            <div className="text-center">
              <Typography.Title type="secondary" level={5}>
                Doanh thu theo tháng
              </Typography.Title>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data[4]?.price_by_month || []}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="4 3" />
                <XAxis dataKey="date" name="Tháng" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" name="Doanh thu" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col span={12} style={{ height: 500 }}>
            <div className="text-center">
              <Typography.Title type="secondary" level={5}>
                Số lượng doanh thu theo từng khung giờ
              </Typography.Title>
            </div>
            {data[5]?.price_by_showtime && (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data[5]?.price_by_showtime || []}
                    cx="50%"
                    cy="50%"
                    outerRadius={"70%"}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {data[5]?.price_by_showtime.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </Col>
        </Row>
      </div>

      <div style={{ height: "700px" }} className="mt-5">
        <div className="text-center">
          <Typography.Title type="secondary" level={5}>
            Doanh thu theo thời gian
          </Typography.Title>
        </div>
        <div className="p-3 pl-5 ">
          <Space>
            <Select
              style={{ width: 200 }}
              defaultValue={selectOption}
              onChange={(e) => setSelectOption(e)}
            >
              <Select.Option value="1">Tháng hiện tại</Select.Option>
              <Select.Option value="2">Chọn theo tháng</Select.Option>
              <Select.Option value="3">Chọn theo thời gian</Select.Option>
            </Select>

            {selectOption === "2" && (
              <DatePicker
                picker="month"
                onChange={(e) => {
                  console.log(
                    new Date(e).getMonth(),
                    new Date(e).getFullYear()
                  );
                  const newTime = {
                    ...time,
                    month: new Date(e).getMonth() + 1,
                    year: new Date(e).getFullYear(),
                  };
                  setTime(newTime);
                }}
              />
            )}
            {selectOption === "3" && (
              <DatePicker.RangePicker
                format="YYYY-MM-DD"
                onChange={(e) => {
                  console.log(e);
                  const newTime = {
                    ...time,
                    start: moment(new Date(e[0])).format("YYYY-MM-DD"),
                    end: moment(new Date(e[1])).format("YYYY-MM-DD"),
                  };
                  setTime(newTime);
                }}
              />
            )}
          </Space>
        </div>
        <Spin spinning={loadingByTime}>
          <div style={{ height: 500, width: "100%" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={listPriceByTime}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Spin>
      </div>
    </Spin>
  );
};

export default HomeAdmin;
