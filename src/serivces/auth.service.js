import axiosClient from "./axios.client";

const url = `/v1.php/auth`;

const AuthService = {
  login: (data) => {
    return axiosClient.post(`${url}`, data);
  },
};
export default AuthService;
