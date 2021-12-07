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
const data0 = [
  {
    name: "Tháng 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tháng 2",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Tháng 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Tháng 4",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tháng 5",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Tháng 6",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Tháng 7",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Tháng 8",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Tháng 9",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Tháng 10",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Tháng 11",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tháng 12",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomeAdmin = () => {
  const [selectOption, setSelectOption] = useState("1");
  const [data, setData] = useState([
    { count_all_id_movie: 0 },
    { count_show_id_movie: 0 },
    { total_price: 0 },
    { total_user: 0 },
  ]);
  // const [listPriceByShowTime, setListPriceByShowTime] = useState([]);
  const [loading, setLoading] = useState(false);

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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" name="Tháng" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" name="Doanh thu" fill="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
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

      <div style={{ height: "1000px" }} className="mt-5">
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

            {selectOption === "2" && <DatePicker picker="month" />}
            {selectOption === "3" && (
              <DatePicker.RangePicker format="YYYY-MM-DD" />
            )}
          </Space>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data0}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Spin>
  );
};

export default HomeAdmin;
