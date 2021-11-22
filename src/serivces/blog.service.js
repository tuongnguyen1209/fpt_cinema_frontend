import axiosClient from "./axios.client";

const BlogService = {
  getAllBlog: () => {
    return axiosClient.get("/v1.php/blog");
  },
  createBlog: (data) => {
    return axiosClient.post("/v1.php/blog", data);
  },
};

export default BlogService;
