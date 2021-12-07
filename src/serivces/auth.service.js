import axiosClient from "./axios.client";

const url = `/v1.php/auth`;

const AuthService = {
  login: (data, type = null) => {
    return axiosClient.post(`${url}${type ? `?type=${type}` : ""}`, data);
  },
  forgotPass: (data) => axiosClient.post("/v1.php/forgotPass", data),
};
export default AuthService;
