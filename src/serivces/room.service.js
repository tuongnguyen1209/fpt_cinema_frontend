import axiosClient from "./axios.client";
const url = "/v1.php/room";

const roomService = {
  getAll: () => {
    return axiosClient.get(url);
  },
};

export default roomService;
