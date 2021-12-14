import axiosClient from "./axios.client";

const url = "/v1.php/session";

const sessionService = {
  getAll: (params = {}) => {
    return axiosClient.get(url, { params });
  },
  create: (data) => {
    return axiosClient.post(url, data);
  },
  delete: (data) => axiosClient.delete(url, { params: data }),

  getAll2: (data) => {
    return axiosClient.get("v2.php/session/movie", data)
  }
};

export default sessionService;
