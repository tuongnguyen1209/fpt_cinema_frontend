import axiosClient from "./axios.client";

const TicketService = {
    createTicket: (data) => {
      return axiosClient.post("/v1.php/ticket", data);
    },
    getTicketByUser: (idUser) => {
        return axiosClient.get("/v1.php/ticket",idUser);
    }
}

export default TicketService;