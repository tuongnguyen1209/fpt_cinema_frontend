import axiosClient from "./axios.client";

const url = `/v1.php/auth`;

const AuthService = {
  login: (data, type = null) => {
    return axiosClient.post(`${url}${type ? `?type=${type}` : ""}`, data);
  },
};
export default AuthService;
