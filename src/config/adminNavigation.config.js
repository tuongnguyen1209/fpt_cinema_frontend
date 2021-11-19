import {
  CalendarOutlined,
  DashboardOutlined,
  LayoutOutlined,
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
  },
  {
    key: "room",
    title: "Phòng chiếu",
    icon: <LayoutOutlined />,
    path: `${ADMIN_PREFIX_PATH}/room`,
  },
  {
    key: "User",
    title: "Người dùng",
    icon: <UserOutlined />,
    path: `${ADMIN_PREFIX_PATH}/user`,
  },
];

export default adminNavigation;
