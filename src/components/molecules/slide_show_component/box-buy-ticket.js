import { Tabs } from 'antd';
import React,{ useEffect, useState} from "react";
import axios from 'axios';
import { Select } from 'antd';

const { TabPane } = Tabs;
const { Option } = Select;


const BoxBuyTicket = () => {

      function handleChange(value) {
            console.log(`selected ${value}`);
      }

      const [nameMovie, setNameMovie] = useState([]);

      useEffect(() => {

            axios.get('https://6189cf9d34b4f400177c425b.mockapi.io/movie')
            .then(function (response) {
            // handle success
            setNameMovie(response.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });

      },[])

      const [nameRap, setNameRap] = useState([]);

      const handleShowRap = () => {

            axios.get('https://618ca5c8ded7fb0017bb9657.mockapi.io/rap')
            .then(function (response) {
            // handle success
            setNameRap(response.data);
            console.log(response.data)
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });
      }
      

      const [nameDay, setNameDay] = useState([]);

      const handleShowDay = () => {

            axios.get('https://618ca5c8ded7fb0017bb9657.mockapi.io/session')
            .then(function (response) {
            // handle success
            setNameDay(response.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });
      }

      const [nameTime, setNameTime] = useState([]);
      const handleShowTime = () => {

            axios.get('https://618ca5c8ded7fb0017bb9657.mockapi.io/session')
            .then(function (response) {
            // handle success
            setNameTime(response.data);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });
      }


    return(
        <div className="box-buy-ticket">
                <form>
                  <span className="tem-box-ticket">MUA VÉ NHANH</span>
                  <Tabs defaultActiveKey="1">
                      <TabPane className="buy-sort" tab="THEO PHIM" key="1" >
                        <Select defaultValue="CHỌN PHIM" style={{ width: "100%" }} onChange={handleShowRap} className="select">
                              {nameMovie.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN RẠP" style={{ width: "100%" }} onChange={handleShowDay} className="select">
                              {nameRap.map((item,index) => (
                                    <Option key={index} onClick={handleShowDay} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN NGÀY" style={{ width: "100%" }} onChange={handleShowTime}className="select">
                              {nameDay.map((item,index) => (
                                    <Option key={index} onClick={handleShowTime} value={item.name}>{item.Date}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN GIỜ" style={{ width: "100%" }} onChange={handleChange} className="select">
                              {nameTime.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.show_time}</Option>
                              ))}
                        </Select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO NGÀY" key="2">
                      <Select defaultValue="CHỌN PHIM" style={{ width: "100%" }} onChange={handleShowRap} className="select">
                              {nameMovie.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN RẠP" style={{ width: "100%" }} onChange={handleShowDay} className="select">
                              {nameRap.map((item,index) => (
                                    <Option key={index} onClick={handleShowDay} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN NGÀY" style={{ width: "100%" }} onChange={handleShowTime}className="select">
                              {nameDay.map((item,index) => (
                                    <Option key={index} onClick={handleShowTime} value={item.name}>{item.Date}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN GIỜ" style={{ width: "100%" }} onChange={handleChange} className="select">
                              {nameTime.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.show_time}</Option>
                              ))}
                        </Select>
                      </TabPane>
                      <TabPane className="buy-sort" tab="THEO RẠP" key="3">
                      <Select defaultValue="CHỌN PHIM" style={{ width: "100%" }} onChange={handleShowRap} className="select">
                              {nameMovie.map((item,index) => (
                                    <Option key={index} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN RẠP" style={{ width: "100%" }} onChange={handleShowDay} className="select">
                              {nameRap.map((item,index) => (
                                    <Option key={index} onClick={handleShowDay} value={item.name}>{item.name}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN NGÀY" style={{ width: "100%" }} onChange={handleShowTime}className="select">
                              {nameDay.map((item,index) => (
                                    <Option key={index} onClick={handleShowTime} value={item.name}>{item.Date}</Option>
                              ))}
                        </Select>
                        <Select defaultValue="CHỌN GIỜ" style={{ width: "100%" }} onChange={handleChange} className="select">
                              {nameTime.map((item,index) => (
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