import { Carousel, Tabs } from 'antd';
import React, { useState,useEffect } from "react";
import SlideItem from "../../atoms/slide-item/slide_item";
import { SlideShowStyle } from './slide_show-style';


const { TabPane } = Tabs;

function Slideshow() {


    const [listMovie, setListMovie] = useState([])
    useEffect(() => {
      fetch('https://6189cf9d34b4f400177c425b.mockapi.io/movie')
      .then(response => response.json())
      .then(json => setListMovie(json))
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
              
              <div className="box-buy-ticket">
                <form>
                  <span className="tem-box-ticket">MUA VÉ NHANH</span>
                  <Tabs defaultActiveKey="1">
                      <TabPane className="buy-sort" tab="THEO PHIM" key="1" >
                        <select>
                            <option className="option-buy-ticket" selected>CHỌN PHIM</option>
                            <option className="option-buy-ticket">CHỌN PHIM</option>
                        </select>
                        <select>
                            <option className="option-buy-ticket" selected>CHỌN RẠP</option>
                        </select>
                        <select>
                            <option className="option-buy-ticket" selected>CHỌN NGÀY</option>
                        </select>
                        <select>
                            <option className="option-buy-ticket" selected>CHỌN XUẤT</option>
                        </select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO NGÀY" key="2">
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN NGÀY</option>

                        </select>
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN RẠP</option>

                        </select>
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN PHIM</option>

                        </select>
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN SUẤT</option>

                        </select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO RẠP" key="3">
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN RẠP</option>

                        </select>
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN PHIM</option>

                        </select>
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN NGÀY</option>

                        </select>
                        <select>
                              <option className="option-buy-ticket" selected>CHỌN SUẤT</option>

                        </select>
                      </TabPane>
                  </Tabs>
                  <button class="btn-buy-ticket" type="submit">MUA VÉ</button>
                </form>
              </div>
            </div>
      </SlideShowStyle>
    )
}

export default Slideshow
