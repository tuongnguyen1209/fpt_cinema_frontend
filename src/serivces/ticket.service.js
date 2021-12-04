import axiosClient from "./axios.client";
const url = "/v1.php/ticket";

const TicketService = {
  createTicket: (data) => {
    return axiosClient.post(url, data);
  },
  getTicketByUser: (idUser) => {
    return axiosClient.get(`${url}?code=${idUser}&type=id_user`);
  },
  getAll: (params) => {
    return axiosClient.get(url, { params });
  },
};

export default TicketService;
