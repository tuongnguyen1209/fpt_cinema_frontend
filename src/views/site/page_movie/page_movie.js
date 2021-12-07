import React, { useEffect } from "react";
import MovieCPN from "../../../components/molecules/movie_component/list_movie";
import RuleCPN from "../../../components/molecules/rule_component/list_rule";
import { PageMovieStyle } from "./page_movieStyle";

 
 const PageMovie  = () =>  {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageMovieStyle>
            <div className="container_custom">
                <MovieCPN titleHome={"PHIM ĐANG CHIẾU"} imgSize={true} limit={100}/>
                <div className="distancee"></div>
                <RuleCPN />
            </div>
        </PageMovieStyle>
    )
}

 
export default PageMovie;
 