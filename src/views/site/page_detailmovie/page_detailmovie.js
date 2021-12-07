import React, { useEffect } from "react";
import DetailMovieCPN from "../../../components/molecules/detail_movie/detail_movie";
import { PageDetailMovieStyle } from "./page_detailmovieStyle";


const PageDetailMovie = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageDetailMovieStyle>
            <div className="container_custom">
                <DetailMovieCPN />
            </div>
        </PageDetailMovieStyle>
    )
}

export default PageDetailMovie;