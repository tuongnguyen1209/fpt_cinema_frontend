import axiosClient from "./axios.client";
const url = "/v1.php/payment";

const PaymentService = {
  getLinkPayment: (idTicket) => {
    return axiosClient.get(`${url}?id_ticket=${idTicket}`);
  },
};

export default PaymentService;