import React from "react";
import BlogCPN from '../../../components/molecules/list_blog/list_blog';
import MovieCPN from '../../../components/molecules/list_movie/list_movie';
import PromotionCPN from '../../../components/molecules/list_promotion/list_promotion';
import RuleCPN from "../../../components/molecules/list_rule/list_rule";
import Slideshow from "../../../components/molecules/slide_show/slide_show";
import { HomePage } from "./HomeSytle";



const Home = () => {
  return (
    <>
      <HomePage >
        <Slideshow />
        <div className="container">
          <MovieCPN />
          <BlogCPN />
          <PromotionCPN />
          <RuleCPN />
        </div>
      </HomePage>
    </>
  )
    
};

export default Home;
