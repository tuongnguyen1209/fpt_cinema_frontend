// contain  app
 
export const URL_API = "https://6189cf9d34b4f400177c425b.mockapi.io/";

 export const URL_API = "https://cinemafptproject.herokuapp.com";
export const ADMIN_PREFIX_PATH = "/admin";
export const AUTH_PREFIX_PATH = "/auth";
 
export const APP_SITE_MENU = [
  { name: "Trang chủ", url: "" },
  {name: "Đặt vé", url: "/buyticket"},
  {
    name: "Phim",
    url: "",
    submenu: [
      { name: "Phim đang chiếu", url: "/pagemovie" },
      { name: "Phim sắp chiếu", url: "" },
    ],
  },
  { name: "Góc điện ảnh", url: "/pageblog" },
  { name: "Hỗ trợ", url: "/pagesupport" },
  { name: "Thành viên", url: "/member" },
];
