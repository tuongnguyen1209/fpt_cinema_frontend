import axiosClient from "./axios.client";
const url = "/v1.php/tk_seat";

const SeatService = {
    getSeatByIdSession: (idSession) => {
      return axiosClient.get(`${url}?id_session=${idSession}`);
    },
};

export default SeatService;