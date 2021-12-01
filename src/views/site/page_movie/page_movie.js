import React from "react";
import MovieCPN from "../../../components/molecules/movie_component/list_movie";
import RuleCPN from "../../../components/molecules/rule_component/list_rule";
import { PageMovieStyle } from "./page_movieStyle";

const PageMovie = () => {
  return (
    <PageMovieStyle>
      <div className="container">
        <MovieCPN />
        <div className="distancee"></div>
        <RuleCPN />
      </div>
    </PageMovieStyle>
  );
};

<<<<<<< HEAD
export default PageMovie;
=======
const PageMovie  = () =>  {
    return (
        <PageMovieStyle>
            <div className="container">
                <MovieCPN titleHome={"PHIM ĐANG CHIẾU"} imgSize={true}/>
                <div className="distancee"></div>
                <RuleCPN />
            </div>
        </PageMovieStyle>
    )
}

export default PageMovie
>>>>>>> a176b4e597ccc4b1552725ff66ccef8991585b90
