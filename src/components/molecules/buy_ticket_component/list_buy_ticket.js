import { Collapse } from 'antd';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { ListBuyTicketStyle } from "./list_buy_ticket-style";
import MovieService from '../../../serivces/movie.service';

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
        const fetchMovieList = async () => {
            try {
              const response = await MovieService.getAllMovie();
              console.log(response);
              setlistMovie(response.movie);
            }catch (error) {
              console.log("Failed to fetch movie list: ",error);
            }
          }
          fetchMovieList();
    }, [])

    // event handle showrap
    const resetStyleTicket = () => {
        if(!document.getElementById('styleTicket')){
            return;
        }else {
            document.getElementById('styleTicket').style.backgroundColor = "white";
            document.getElementById('styleTicket').removeAttribute('id');
        }
    }
    const [rap, setRap] = useState(["Vui lòng chọn rạp"])
    const handleShowrap = e => {
        resetStyleTicket();
        e.target.parentElement.style.backgroundColor = "rgba(223, 228, 234,1.0)";
        e.target.parentElement.setAttribute("id" , "styleTicket");
 
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

    const resetStyleRap = () => {
        if(!document.getElementById('resetStyleRap')){
            return;
        }else {
            document.getElementById('resetStyleRap').style.backgroundColor = "white";
            document.getElementById('resetStyleRap').removeAttribute('id');
        }
    }

    console.log(rap);
    const [check, setCheck] = useState(false)

    const [time, setTime] = useState(["Vui lòng chọn suất chiếu"])
        const handleShowtime = e => {
            if(rap.length < 2) {
                alert("Bạn phải chọn phim")
            }else {
                resetStyleRap();
                e.target.style.backgroundColor = "rgba(223, 228, 234,1.0)";
                e.target.setAttribute("id" , "resetStyleRap");
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
            handleLogin();
        }
        
        
    // login
    const [linkPage, setLinkPage] = useState() // nếu chưa đăng nhập chuyển đến trang login || chuyển đến trang chọn vé và đồ ăn
    const Login = true;
    const handleLogin = () => {
        if(Login) {
            setLinkPage("bookticket-food");
        }
        else {
            setLinkPage("login");
        }
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
                            <div className="collapse" key={index} onClick={handleShowrap}>
                                <div className="panel-box" >
                                    <img src={item.image} width="70px" height="50px" alt="img"/>                                   
                                    <h4>{item.name}<br></br><span>{item.name_vn}</span></h4>
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
                                    <div className="panel-box-session"> 
                                        { check ?(<div className="session_box">
                                                    <p>{item.days}, {item.Date}</p>
                                                    <p className="row_show_time">{item.category_ticket} 
                                                        <Link to={linkPage}><span className="box_time" onClick={handleLogin}>{item.show_time[0]}</span></Link> 
                                                    </p> 
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