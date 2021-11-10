import { Carousel, Tabs } from 'antd';
import React, { useState } from "react";
import SlideItem from "../../atoms/slide-item/slide_item";

const { TabPane } = Tabs;

function Slideshow() {

    const [listSlide, setLitsSlide] = useState([
        {img: "https://www.galaxycine.vn/media/2021/10/29/2048-chuan_1635498521914.jpg"},
        {img: "https://www.galaxycine.vn/media/2021/11/5/2048x682_1636102542250.jpg"},
        {img: "https://www.galaxycine.vn/media/2021/11/4/2048x682_1636015413733.jpg"},
        {img: "https://www.galaxycine.vn/media/2021/10/25/2048x682_1635136817820.jpg"}]);
        

    return (
        <div className="carousel-div">
              <Carousel effect='fade' autoplay>
                {listSlide.map((item,index) => (
                    <SlideItem key={index} props={item.img}/>
                ))}
              </Carousel>
              
              <div className="box-buy-ticket">
                <form>
                  <span className="tem-box-ticket">MUA VÉ NHANH</span>
                  <Tabs defaultActiveKey="1">
                      <TabPane className="buy-sort" tab="THEO PHIM" key="1" >
                        <select>
                            <option selected>CHỌN PHIM</option>
                            <option value="phim1">PHIM 1</option>
                            <option value="phim2">PHIM 2</option>
                            <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                            <option selected>CHỌN RẠP</option>
                            <option value="phim1">PHIM 1</option>
                            <option value="phim2">PHIM 2</option>
                            <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                            <option selected>CHỌN NGÀY</option>
                            <option value="phim1">PHIM 1</option>
                            <option value="phim2">PHIM 2</option>
                            <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                            <option selected>CHỌN XUẤT</option>
                            <option value="phim1">PHIM 1</option>
                            <option value="phim2">PHIM 2</option>
                            <option value="phim3">PHIM 3</option>
                        </select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO NGÀY" key="2">
                        <select>
                              <option selected>CHỌN NGÀY</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                              <option selected>CHỌN RẠP</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                              <option selected>CHỌN PHIM</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                              <option selected>CHỌN SUẤT</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO RẠP" key="3">
                        <select>
                              <option selected>CHỌN RẠP</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                              <option selected>CHỌN PHIM</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                              <option selected>CHỌN NGÀY</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                        <select>
                              <option selected>CHỌN SUẤT</option>
                              <option value="phim1">PHIM 1</option>
                              <option value="phim2">PHIM 2</option>
                              <option value="phim3">PHIM 3</option>
                        </select>
                      </TabPane>
                  </Tabs>
                  <button class="btn-buy-ticket">MUA VÉ</button>
                </form>
              </div>
            </div>
    )
}

export default Slideshow
