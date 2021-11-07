import axios from "axios";
import queryString from "query-string";

// set up default config for http request here
// please have a look at here `https://www.npmjs.com/package/axios#request-config` for full list of configs
const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// xử lý dữ liệu gửi đi
axiosClient.interceptors.request.use(async (config) => {
  //handle token here ...

  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

//xử lý dữ liệu trước khi trả về
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    if (error.response.data) throw error.response.data;
    else throw error.response;
  }
);

export default axiosClient;
