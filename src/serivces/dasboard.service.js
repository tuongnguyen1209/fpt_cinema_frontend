import axiosClient from "./axios.client";

const url = `/v1.php/dasboard`;

const dasboardService = {
  showAll: () => axiosClient.get(url),
};

export default dasboardService;
