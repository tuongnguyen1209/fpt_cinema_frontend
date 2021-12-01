import axiosClient from "./axios.client";

const url = "/v1.php/ticket";
const ticketService = {
  getAll: (params) => {
    return axiosClient.get(url, { params });
  },
};

export default ticketService;
