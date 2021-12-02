// contain  app

export const URL_API = "https://6189cf9d34b4f400177c425b.mockapi.io/";

// export const URL_API_BACKEND = "https://cinemafptproject.herokuapp.com";
export const URL_API_BACKEND = "http://localhost/fpt_cinema_backend";
export const ADMIN_PREFIX_PATH = "/admin";
export const AUTH_PREFIX_PATH = "/auth";

export const APP_SITE_MENU = [
  { name: "Trang chủ", url: "" },
  {
    name: "Phim",
    url: "",
    submenu: [
      { name: "Phim đang chiếu", url: "/pagemovie" },
      { name: "Phim sắp chiếu", url: "" },
    ],
  },
  { name: "Đặt vé", url: "/buyticket" },
  { name: "Góc điện ảnh", url: "/pageblog" },
  { name: "Hỗ trợ", url: "/pagesupport" },
  { name: "Thành viên", url: "/member" },
];
