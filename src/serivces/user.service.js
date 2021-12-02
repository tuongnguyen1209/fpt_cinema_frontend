import axiosClient from "./axios.client";

const url = `/v1.php/user`;

const userService = {
  create: (data) => {
    return axiosClient.post(url, data);
  },
  getAll: () => {
    return axiosClient.get(url);
  },
  getUserById: (idUser) => {
    return axiosClient.get(`${url}?id_user=${idUser}`);
  }
};

export default userService;
