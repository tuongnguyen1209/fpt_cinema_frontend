import axiosClient from "./axios.client";

const CategoryService = {
  getAll: () => {
    return axiosClient.get("/v1.php/category");
  },
};

export default CategoryService;
