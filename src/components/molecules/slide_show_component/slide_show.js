import { Carousel } from 'antd';
import React, { useEffect, useState } from "react";
// import MovieService from '../../../serivces/movie.service';
import SlideItem from "../../atoms/slide-item/slide_item";
import BoxBuyTicket from './box-buy-ticket';
import { SlideShowStyle } from './slide_show-style';
// import { URL_API } from '../../../config/app.config';

const axios = require('axios');

function Slideshow() {

    const [listMovie, setListMovie] = useState([])
    useEffect(() => {
      // const fetchMovieList = async () => {
      //   try {
      //     const response = await MovieService.getMovieLimit(6);
      //     // console.log(response);
      //     setListMovie(response.movie);
      //   } catch (error) {
      //     console.log("Failed to fetch movie list: ", error);
      //   }
      // };
      // fetchMovieList();

      axios({
        method: 'get',
        url: `https://6189cf9d34b4f400177c425b.mockapi.io/movie`,
      })
      .then(function (response) {
        // handle success
        setListMovie(response.data);
      }).catch(
        function (error) {
          console.log('DONT GET DATA MOVIE!')
          return Promise.reject(error)
        }
      )
    }, [])
        
    return (
      <SlideShowStyle>

        <div className="carousel-div">
              <Carousel effect='fade' autoplay>
                {listMovie.map((item,index) => (
                    <div key={index}>
                        <SlideItem key={index} props={item}/>
                    </div>
                ))}
              </Carousel>
        <BoxBuyTicket />
              
        </div>
      </SlideShowStyle>
    )
}

export default Slideshow
