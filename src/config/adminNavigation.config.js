import {
  CalendarOutlined,
  ContainerOutlined,
  DashboardOutlined,
  PlaySquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ADMIN_PREFIX_PATH } from "./app.config";

const adminNavigation = [
  {
    key: "dashboard",
    title: "Dashboard",
    path: `${ADMIN_PREFIX_PATH}/`,
    icon: <DashboardOutlined />,
  },
  {
    key: "Movie",
    title: "Phim",
    path: `${ADMIN_PREFIX_PATH}/movie`,
    icon: <PlaySquareOutlined />,
    submenu: [
      {
        key: "Movielist",
        title: "Danh sách phim",
        path: `${ADMIN_PREFIX_PATH}/movie`,
      },
      {
        key: "Movieadd",
        title: "Thêm phim mới",
        path: `${ADMIN_PREFIX_PATH}/movie/addmovie`,
      },
    ],
  },
  {
    key: "session",
    title: "Lịch chiếu",
    icon: <CalendarOutlined />,
    path: `${ADMIN_PREFIX_PATH}/session`,
    submenu: [
      {
        key: "sessionlist",
        title: "Danh sách lịch chiếu phim theo ngày",
        path: `${ADMIN_PREFIX_PATH}/session`,
      },
      {
        key: "sessionadd",
        title: "Thêm lịch chiếu phim",
        path: `${ADMIN_PREFIX_PATH}/session/addsession`,
      },
      // {
      //   key: "room",
      //   title: "Phòng chiếu",
      //   path: `${ADMIN_PREFIX_PATH}/room`,
      // },
    ],
  },
  {
    key: "orders",
    title: "Quản lý vé",
    icon: <ContainerOutlined />,
    path: `${ADMIN_PREFIX_PATH}/ticket`,
  },
  {
    key: "User",
    title: "Người dùng",
    icon: <UserOutlined />,
    path: `${ADMIN_PREFIX_PATH}/user`,
  },
];

export default adminNavigation;
