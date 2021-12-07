import { Collapse, message, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveTicketList } from "../../../redux/action/saveTicket";
import MovieService from "../../../serivces/movie.service";
import { ListBuyTicketStyle } from "./list_buy_ticket-style";
import sessionService from "../../../serivces/session.service";
const { Panel } = Collapse;
const axios = require("axios");

const BuyTicketCPN = () => {
  // change color btn
  const [time, setTime] = useState(["Vui lòng chọn suất chiếu"]);
  const [arraySession, setArraySession] = useState([
    "Vui lòng chọn suất chiếu",
  ]);
  const [check, setCheck] = useState(false);
  const [listMovie2, setlistMovie2] = useState([]);
  const [rap, setRap] = useState(["Vui lòng chọn rạp"]);
  const [state, setState] = useState("span");
  const [state2, setState2] = useState("span2");
  const [loading, setLoading] = useState(true);

  const ChangeBtn = () => {
    setState("span");
    setState2("span2");
  };
  const ChangeBtn2 = () => {
    setState("span2");
    setState2("span");
  };
  // redux ---------------------------------------------------------------------
  const infoTicketList = useSelector((state) => state.saveTicket);
  const dispatch = useDispatch();

  console.table([infoTicketList]);
  // redux ----------------------------------------------------------------------
  // event handle show rap
  const handleShowrap = (e, idMovie) => {
    // console.log(idMovie, time);

    // lấy thông tin (tên phim, hình ảnh) lưu vào redux
    const saveNameMovie = {
      name_mv: e.target.parentElement.innerText,
      img: e.target.parentElement.children[0].src,
    };
    const action = saveTicketList(saveNameMovie);
    dispatch(action);

    // thay đổi style khi click
    resetStyleTicket();
    e.target.parentElement.style.backgroundColor = "rgba(223, 228, 234,1.0)";
    e.target.parentElement.setAttribute("id", "styleTicket");

    // lấy dữ liệu từ api rap
    try {
      axios
        .get("https://618ca5c8ded7fb0017bb9657.mockapi.io/rap")
        .then(function (response) {
          setRap(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch {
      console.log("ERRO", message);
    }

    // lấy dữ liệu từ api session
    const fetchSessionList = async () => {
      try {
        const response = await sessionService.getAll({ id_movie: idMovie });
        // console.log(response.data.session);
        setArraySession(response.data.session);
        setTime(response.data.session);
      } catch (error) {
        console.log("Failed to fetch session list: ", error);
      }
    };
    fetchSessionList();

    setCheck(true);
  };
  // thay đổi style
  const resetStyleRap = () => {
    console.log(time);
    if (!document.getElementById("resetStyleRap")) {
      return;
    } else {
      document.getElementById("resetStyleRap").style.backgroundColor = "white";
      document.getElementById("resetStyleRap").removeAttribute("id");
    }
  };

  // data api movie
  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const response = await MovieService.getMovieLimit(100);
        // console.log(response);
        setlistMovie2(response.data.movie);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch movie list: ", error);
      }
    };
    fetchMovieList();
  }, []);
  // function reset style
  const resetStyleTicket = () => {
    if (!document.getElementById("styleTicket")) {
      return;
    } else {
      document.getElementById("styleTicket").style.backgroundColor = "white";
      document.getElementById("styleTicket").removeAttribute("id");
    }
  };

  const error = () => {
    message.error("Bạn phải chọn phim!");
  };

  // event handle showtime
  const handleShowtime = (e) => {
    if (rap.length < 2) {
      error();
    } else {
      // redux --------------------------------------------------
      const saveRap = {
        rap: e.target.parentElement.innerText,
      };

      const action = saveTicketList(saveRap);
      dispatch(action);
      // redux --------------------------------------------------
      resetStyleRap();
      e.target.style.backgroundColor = "rgba(223, 228, 234,1.0)";
      e.target.setAttribute("id", "resetStyleRap");
    }
  };

  // login
  const loginReducer = useSelector((state) => state.user);
  const isLogin = loginReducer.isLogin;

  const handleLogin = (id_session, room_number) => {
    // redux --------------------------------------------------
    const saveShowtime = {
      session: id_session,
      room: room_number,
    };

    const action = saveTicketList(saveShowtime);
    // console.log(action);
    dispatch(action);
    // redux --------------------------------------------------
  };

  return (
    <ListBuyTicketStyle>
      <div className="title">
        <span className={state}>
          <Link to="#.com" onClick={ChangeBtn}>
            THEO PHIM
          </Link>
        </span>
        <span className={state2}>
          <Link to="#.com" onClick={ChangeBtn2}>
            THEO RẠP
          </Link>
        </span>
        <div className="line">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <Skeleton loading={loading}>
        <div className="row-buyticket">
          <div className="row1">
            <Collapse
              defaultActiveKey={["1"]}
              collapsible={true}
              accordion={true}
            >
              <Panel className="panel" header="CHỌN PHIM" key="1">
                {listMovie2.map((item, index) => (
                  <div
                    className="collapse1"
                    key={index}
                    onClick={(e) => handleShowrap(e, item.id_movie)}
                  >
                    <div className="panel-box">
                      <img
                        src={item.img_medium}
                        width="70px"
                        height="50px"
                        alt="img"
                      />
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
          </div>

          <div className="row2">
            <Collapse defaultActiveKey={["1"]}>
              <Panel className="panel" header="CHỌN RẠP" key="1">
                {rap.map((item, index) => (
                  <div key={index}>
                    <div className="panel-box-rap" onClick={handleShowtime}>
                      {item.name || rap[0]}
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
          </div>

          <div className="row3">
            <Collapse defaultActiveKey={["1"]}>
              <Panel className="panel" header="CHỌN SUẤT" key="1">
                {arraySession.map((item, index) => (
                  <div key={index}>
                    <div className="panel-box-session">
                      {check ? (
                        <div className="session_box">
                          <p>{item.day}</p>
                          <p className="row_show_time">
                            Vé {item.type}
                            <Link
                              to={isLogin ? "bookticket-food" : "auth/login"}
                            >
                              <span
                                className="box_time"
                                onClick={() =>
                                  handleLogin(item.id_session, item.room_number)
                                }
                              >
                                {item.time_start}
                              </span>
                            </Link>
                          </p>
                        </div>
                      ) : (
                        "Vui lòng chọn suất chiếu"
                      )}
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
          </div>
        </div>
      </Skeleton>
    </ListBuyTicketStyle>
  );
};

export default BuyTicketCPN;
