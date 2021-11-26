import React from "react";
import BlogCPN from '../../../components/molecules/blog_component/list_blog';
import MovieCPN from '../../../components/molecules/movie_component/list_movie';
import PromotionCPN from '../../../components/molecules/promotion_component/list_promotion';
import RuleCPN from "../../../components/molecules/rule_component/list_rule";
import Slideshow from "../../../components/molecules/slide_show_component/slide_show";
import { HomePage } from "./HomeSytle";



const Home = () => {
  return (
    <>
      <HomePage >
        <Slideshow />
        <div className="container">
          <MovieCPN titleHome={"PHIM SẮP CHIẾU"} titleHome2={"PHIM ĐANG CHIẾU"}/>
          <BlogCPN />
          <PromotionCPN />
          <RuleCPN />
        </div>
      </HomePage>
    </>
  )
    
};

export default Home;
