import { Collapse } from 'antd';
import React, { useEffect, useState } from "react";
import { ListBuyTicketStyle } from "./list_buy_ticket-style";
import { URL_API } from '../../../config/app.config';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;
const axios = require('axios');

const BuyTicketCPN  = () =>  {

    // change color btn
    const [state, setState] = useState("span")
    const [state2, setState2] = useState("span2")

    const ChangeBtn = () => {
        setState("span")
        setState2("span2")
    }
    const ChangeBtn2 = () => {
        setState2("span")
        setState("span2")
    }

    // data api movie
    const [listMovie, setlistMovie] = useState([])
  
    useEffect(() => {
        axios({
            method: 'get',
            url: `${URL_API}movie`,
          })
          .then(function (response) {
            // handle success
            setlistMovie(response.data);
          }).catch(
            function (error) {
              console.log('DONT GET DATA MOVIE!')
              return Promise.reject(error)
            }
          )
    }, [])

    // event handle showrap
    
    const [rap, setRap] = useState(["Vui lòng chọn rạp"])
    const handleShowrap = e => {
        e.target.parentNode.style.backgroundColor = "rgba(223, 228, 234,1.0)";
        e.target.parentNode.style.color = "#ff6348";
        axios({
            method: 'get',
            url: 'https://618ca5c8ded7fb0017bb9657.mockapi.io/rap',
        })
        .then(function (response) {
            // handle success
            setRap(response.data);
        }).catch(
            function (error) {
            console.log('DONT GET DATA MOVIE!')
            return Promise.reject(error)
            }
        )
        
    }
    // event handle showtime
    console.log(rap);
    const [check, setCheck] = useState(false)

    const [time, setTime] = useState(["Vui lòng chọn suất chiếu"])
        const handleShowtime = e => {
            if(rap.length < 2) {
                alert("Bạn phải chọn phim")
            }else {
                e.target.style.backgroundColor = "rgba(223, 228, 234,1.0)";
                e.target.style.color = "#ff6348";
                axios({
                    method: 'get',
                    url: 'https://618ca5c8ded7fb0017bb9657.mockapi.io/session',
                  })
                  .then(function (response) {
                    // handle success
                    setTime(response.data);
                    setCheck(true);
                  }).catch(
                    function (error) {
                      console.log('DONT GET DATA MOVIE!')
                      return Promise.reject(error)
                    }
                  )
            }
        }
        
        
    // login

    const handleLogin = () => {
        alert("HIỆN TRANG LOGIN")
    }

    return (
        <ListBuyTicketStyle>
            <div className="title">
                    <span className={state} ><Link to="#.com" onClick={ChangeBtn}>THEO PHIM</Link></span>
                    <span className={state2} ><Link to="#.com" onClick={ChangeBtn2}>THEO RẠP</Link></span>
                    <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    </div>
            </div>

            <div className="row-buyticket">
                <div className="row1"> 
                    <Collapse defaultActiveKey={['1']} accordion={true}>
                        <Panel className="panel"  header="CHỌN PHIM" key="1">
                            {listMovie.map((item,index) => (
                            <div className="collapse" key={index}>
                                <div className="panel-box"  onClick={handleShowrap}>
                                    <img src={item.thumbnail} width="70px" height="50px" alt="img"/>
                                    <div className="content">
                                        <h4> {item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </Panel>
                    </Collapse>
                </div>

                <div className="row2"> 
                    <Collapse  defaultActiveKey={['1']}>
                        <Panel className="panel" header="CHỌN RẠP" key="1">
                            {rap.map((item,index) => (
                                <div key={index}>
                                    <div className="panel-box-rap" onClick={handleShowtime}>
                                        {item.name || rap[0] }
                                    </div>                                  
                                </div>
                            ))}
                        </Panel>
                    </Collapse>
                </div>

                <div className="row3"> 
                    <Collapse defaultActiveKey={['1']}>
                        <Panel className="panel" header="CHỌN SUẤT" key="1">
                            {time.map((item,index) => (
                                <div key={index}>
                                    <div className="panel-box-rap" onClick={handleLogin}> 
                                        { check ?(<div className="session_box">
                                                    <p>{item.days}, {item.Date}</p>
                                                    <p className="row_show_time">{item.category_ticket} <span>{item.show_time[0]}</span> <span>{item.show_time[1]}</span> <span>{item.show_time[2]}</span> </p> 
                                        </div>) : "Vui lòng chọn suất chiếu"}                                    

                                    </div>
                                    
                                </div>
                            ))}
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </ListBuyTicketStyle>
    )
}

export default BuyTicketCPN