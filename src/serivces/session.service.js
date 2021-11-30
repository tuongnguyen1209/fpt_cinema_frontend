import axiosClient from "./axios.client";

const url = "/v1.php/session";

const sessionService = {
  getAll: (params = {}) => {
    return axiosClient.get(url, { params });
  },
  create: (data) => {
    return axiosClient.post(url, data);
  },
};

export default sessionService;
