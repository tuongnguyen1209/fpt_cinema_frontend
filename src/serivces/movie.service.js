import axiosClient from "./axios.client";

const MovieService = {
  getAllMovie: () => {
    return axiosClient.get("/v1.php/movie");
  },
  createMovie: (data) => {
    return axiosClient.post("/v1.php/movie", data);
  },
};

export default MovieService;
