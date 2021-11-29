import axiosClient from "./axios.client";

const url = `/v1.php/user`;

const userService = {
  create: (data) => {
    return axiosClient.post(url, data);
  },
};

export default userService;
