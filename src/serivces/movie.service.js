import axiosClient from "./axios.client";

const MovieService = {
  getAllMovie: () => {
    return axiosClient.get("/v1.php/movie");
  },
  getMovieById: (id) => {
    return axiosClient.get(`/v1.php/movie?id_movie=${id}`);
  },
  getMovieLimit: (param) => {
    return axiosClient.get(`/v1.php/movie?limit=${param}`);
  },
  createMovie: (data) => {
    return axiosClient.post("/v1.php/movie", data);
  },
};

export default MovieService;
