import axiosClient from "./axios.client";

const url = `/v1.php/dasboard`;

const dasboardService = {
  showAll: (params) => axiosClient.get(url, { params }),
};

export default dasboardService;
