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
  },
  changeRole: (id, data) => {
    return axiosClient.put(`/v1.php/changePq?id_user=${id}`, data);
  },
};

export default userService;
