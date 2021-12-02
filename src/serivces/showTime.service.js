import axiosClient from "./axios.client";

const showTimeService = {
  getShowTime: () => {
    return axiosClient.get("/v1.php/showtimes");
  },
  check: (params) => {
    return axiosClient.get("/v1.php/checkshowtime", { params });
  },
};

export default showTimeService;
