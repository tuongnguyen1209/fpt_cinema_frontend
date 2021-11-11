import { Collapse } from 'antd';
import React, { useEffect, useState } from "react";
import { ListBuyTicketStyle } from "./list_buy_ticket-style";

const { Panel } = Collapse;


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
      fetch('https://6189cf9d34b4f400177c425b.mockapi.io/movie')
      .then(response => response.json())
      .then(json => setlistMovie(json))
    }, [])

    // event handle showrap
    
    const [rap, setRap] = useState(["Vui lòng chọn rạp"])
    const handleShowrap = () => {
        fetch('https://618ca5c8ded7fb0017bb9657.mockapi.io/rap')
      .then(response => response.json())
      .then(json => setRap(json))
        
    }
    // event handle showtime
    
    
    const [time, setTime] = useState(["Vui lòng chọn suất"])
        const handleShowtime = () => {
            if(rap.length < 2) {
                alert("Bạn phải chọn phim")
            }else {
                fetch('https://618ca5c8ded7fb0017bb9657.mockapi.io/rap')
                .then(response => response.json())
                .then(json => setTime(json))
            }
        }
    
    // login

    const handleLogin = () => {
        alert("HIỆN TRANG LOGIN")
    }

    return (
        <ListBuyTicketStyle>
            <div className="title">
                    <span className={state} ><a href="#.com" onClick={ChangeBtn}>THEO PHIM</a></span>
                    <span className={state2} ><a href="#.com" onClick={ChangeBtn2}>THEO RẠP</a></span>
                    <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    </div>
            </div>

            <div className="row-buyticket">
                <div className="row1"> 
                    <Collapse defaultActiveKey={['1']} >
                        <Panel className="panel"  header="CHỌN PHIM" key="1">
                            {listMovie.map((item,index) => (
                            <div key={index}>
                                <div className="panel-box"  onClick={handleShowrap}>
                                    <img src={item.thumbnail} width="70px" height="50px" alt="img"/>
                                    <div className="content">
                                        <h4> {item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <hr style={{opacity: "0.6"}}></hr>
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
                                    <div className="panel-box" onClick={handleShowtime}>
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
                                    <div className="panel-box" onClick={handleLogin}>
                                        {item.name || time[0] }
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