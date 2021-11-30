import axiosClient from "./axios.client";

const MovieService = {
  getAllMovie: (params) => {
    return axiosClient.get("/v1.php/movie", { params });
  },
  getMovieById: (id) => {
    return axiosClient.get(`/v1.php/movie`, { params: { id_movie: id } });
  },
  createMovie: (data) => {
    return axiosClient.post("/v1.php/movie", data);
  },
};

export default MovieService;
