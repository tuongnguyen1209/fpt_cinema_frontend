import axiosClient from "./axios.client";
const url = "/v1.php/combo";

const ComboService = {
    getComBoAll: () => {
      return axiosClient.get(url);
    },
};

export default ComboService;