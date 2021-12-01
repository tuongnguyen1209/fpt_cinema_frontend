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
  updateMovie: (id_movie, data) => {
    return axiosClient.put(`/v1.php/movie?id_movie=${id_movie}`, data);
  },
};

export default MovieService;
