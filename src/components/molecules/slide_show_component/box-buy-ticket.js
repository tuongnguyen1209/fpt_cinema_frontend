import { Tabs } from 'antd';
import React,{ useEffect, useState} from "react";
import axios from 'axios';
import { Select } from 'antd';
import MovieService from '../../../serivces/movie.service';
import sessionService from "../../../serivces/session.service";

const { TabPane } = Tabs;
const { Option } = Select;


const BoxBuyTicket = () => {

      function handleChange(value) {
            console.log(`selected ${value}`);
      }

      const [listMovie, setListMovie] = useState([]);
      const [listDay, setListDay] = useState([]);
      const [listTime, setListTime] = useState([]);
      const [listRap, setListRap] = useState([]);
      const [idMovie,setIdMovie] = useState("");

      useEffect(() => {
            const fetchMovieList = async () => {
                  try {
                        const response = await MovieService.getMovieLimit(6);
                        // console.log("data Movie",response);
                        setListMovie(response.data.movie);
                  }catch (error) {
                        console.log("Failed to fetch movie list: ",error);
                  }
            }
            fetchMovieList();
      },[])

      const handleShowRap = () => {
            
            const fetchSessionList = async () => {
                  console.log(idMovie);
                  try {
                  const response = await sessionService.getAll({id_movie : idMovie}); // pendingggggggggggggggggggg
                        console.log("data sessionDay",response.data.session);
                        setListDay(response.data.session);
                  }catch (error) {
                        console.log("Failed to fetch session list: ",error);
                  }
            }
            fetchSessionList();

            const fetchRapList = () => {

                  // fetch list rap
                  axios.get('https://618ca5c8ded7fb0017bb9657.mockapi.io/rap')
                  .then(function (response) {
                        // console.log("data Rap",response.data)
                        setListRap(response.data);
                  })
                  .catch(function (error) {
                        console.log(error);
                  });
            }
            fetchRapList();
      }


      const handleShowTime = () => {
            setListTime([]);
      }
      

    return(
        <div className="box-buy-ticket">
                <form>
                  <span className="tem-box-ticket">MUA VÉ NHANH</span>
                  <Tabs defaultActiveKey="1">
                      <TabPane className="buy-sort" tab="THEO PHIM" key="1" >
                        <Select defaultValue="CHỌN PHIM" style={{ width: "100%" }} onChange={handleShowRap} className="select">
                              {listMovie?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN RẠP" style={{ width: "100%" }} className="select">
                              {listRap?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN NGÀY" style={{ width: "100%" }} onChange={handleShowTime} className="select">
                              {listDay?.map((item,index) => (
                                    <Option key={index} onClick={handleShowTime} value={item.name}>{item.day}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN GIỜ" style={{ width: "100%" }} onChange={handleChange} className="select">
                              {listTime?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.show_time}</Option>
                              ))}
                        </Select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO NGÀY" key="2">
                      <Select defaultValue="CHỌN PHIM" style={{ width: "100%" }} onChange={handleShowRap} className="select">
                              {listMovie?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN RẠP" style={{ width: "100%" }} className="select">
                              {listRap?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN NGÀY" style={{ width: "100%" }} onChange={handleShowTime}className="select">
                              {listDay?.map((item,index) => (
                                    <Option key={index} onClick={handleShowTime} value={item.name}>{item.Date}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN GIỜ" style={{ width: "100%" }} onChange={handleChange} className="select">
                              {listTime?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.show_time}</Option>
                              ))}
                        </Select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO RẠP" key="3">
                      <Select defaultValue="CHỌN PHIM" style={{ width: "100%" }} onChange={handleShowRap} className="select">
                              {listMovie?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN RẠP" style={{ width: "100%" }} className="select">
                              {listRap?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN NGÀY" style={{ width: "100%" }} onChange={handleShowTime}className="select">
                              {listDay?.map((item,index) => (
                                    <Option key={index} onClick={handleShowTime} value={item.name}>{item.Date}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN GIỜ" style={{ width: "100%" }} onChange={handleChange} className="select">
                              {listTime?.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.show_time}</Option>
                              ))}
                        </Select>
                      </TabPane>
                  </Tabs>
                  <button className="btn-buy-ticket" type="submit">MUA VÉ</button>
                </form>
        </div>
    )
}

export default BoxBuyTicket