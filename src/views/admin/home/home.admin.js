import React, { useState } from "react";
import {
  Col,
  Row,
  Statistic,
  Typography,
  Select,
  DatePicker,
  Space,
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
const data = [
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

const data01 = [
  { name: "Khung giờ 1", value: 400 },
  { name: "Khung giờ 2", value: 300 },
  { name: "Khung giờ 3", value: 300 },
  { name: "Khung giờ 4", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const HomeAdmin = () => {
  const [selectOption, setSelectOption] = useState("1");

  return (
    <div>
      <Row>
        <Col span={6} className="text-center">
          <Statistic
            title="Tổng phim hiện có"
            value={1128}
            prefix={<ContainerOutlined />}
          />
        </Col>
        <Col span={6} className="text-center">
          <Statistic
            title="Tổng phim đang chiếu"
            value={1128}
            prefix={<FileProtectOutlined />}
          />
        </Col>
        <Col span={6} className="text-center">
          <Statistic
            title="Tổng doanh thu trong năm"
            value={formatPrice(1854)}
            prefix={<DollarOutlined />}
          />
        </Col>
        <Col span={6} className="text-center">
          <Statistic
            title="Số lượng người dùng mới"
            value={1128}
            prefix={<UsergroupAddOutlined />}
          />
        </Col>
      </Row>

      <div class="mt-5">
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
                data={data}
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
                <Bar dataKey="uv" name="Doanh thu" fill="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col span={12} style={{ height: 500 }}>
            <div className="text-center">
              <Typography.Title type="secondary" level={5}>
                Số lượng khách hàng theo từng khung giờ trong tháng 11
              </Typography.Title>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={data01}
                  cx="50%"
                  cy="50%"
                  outerRadius={"70%"}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
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
            data={data}
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
    </div>
  );
};

export default HomeAdmin;
