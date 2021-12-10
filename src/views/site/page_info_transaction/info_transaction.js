import { Spin } from "antd";
import Title from "antd/lib/skeleton/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PaymentService from "../../../serivces/payment.service";
// import MovieService from "../../../serivces/movie.service";
import TicketService from "../../../serivces/ticket.service";
import { formatPrice } from "../../../ultil/format";

const PageTransactionStyle = styled.div`
  .example {
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    background: transparent;
    border-radius: 4px;
  }
  .container_custom_transaction {
    width: 100%;
    margin-left: -1px;
    a {
      color: blue;
    }
    table {
      width: 100%;
    }
    th {
      background-color: #2c3e50;
      color: white;
      border-left: 0.5px solid rgba(0, 0, 0, 0.4);
      padding: 10px;
      width: auto;
      text-align: center;
    }
    tr {
      height: 60px;
    }
    tr:nth-child(even) {
      background-color: rgba(189, 195, 199, 0.3);
    }
    td {
      font-size: 0.8rem;
      padding: 10px;
      text-align: center;
    }
    .paid {
      font-size: 0.7rem;
      background-color: gray;
      color: white;
      padding: 5px;
      width: 120px;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .unpaid {
      font-size: 0.7rem;
      background-color: red;
      color: white;
      padding: 5px;
      width: 120px;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .unpaid:hover {
      opacity: 0.8;
    }
  }
`;
const PageTransaction = () => {
  const [spin, setSpin] = useState(true);

  // const [listMovie, setListMovie] = useState([]);
  // const [idMovie, setIdMovie] = useState();

  // useEffect(() => {

  //     const fetchMovieList = async () => {
  //         try {
  //           const response = await MovieService.getAllMovie();
  //         //   console.log(response);
  //           setListMovie(response.movie);
  //         }catch (error) {
  //           console.log("Failed to fetch movie list: ",error);
  //         }
  //       }
  //       fetchMovieList();

  // },[])

  // const handleMoveDetail = (nameMovie) => {
  //     for(let i = 0; i <= listMovie.length; i++) {
  //         if(listMovie[i]?.name === nameMovie.text) {
  //             // console.log(listMovie[i]?.name + " === " + nameMovie.text);
  //             // console.log(listMovie[i]?.id_movie)
  //             setIdMovie(listMovie[i]?.id_movie)
  //         }
  //         else {
  //             console.log("KHÁC")
  //         }
  //     }
  // }

  // login
  const idUserReducer = useSelector((state) => state.user);
  const idUser = idUserReducer.user.id_user;

  const [billTicket, setBillTicket] = useState([]);
  const [nameRoom, setNameRoom] = useState([]);
  const [idTicket, setIdTicket] = useState();
  const [linkPayment, setLinkPayment] = useState();

  useEffect(() => {
    const fetchTransactionUser = async () => {
      try {
        const response = await TicketService.getTicketByUser(idUser);
        // console.log(response.data.ticket);
        setBillTicket(response.data.ticket);
        setSpin(false);
      } catch (error) {
        console.log("Failed to fetch id user: ", error);
      }
    };
    fetchTransactionUser();

    const fetchLinkPayment = async () => {
      try {
        const response = await PaymentService.getLinkPayment(idTicket);
        // console.log(response);
        setLinkPayment(response.payment.data);
      } catch (error) {
        console.log("Failed to fetch link payment: ", error);
      }
    };
    fetchLinkPayment();

    axios
      .get("https://cinemafptproject.herokuapp.com/v1.php/room")
      .then(function (response) {
        // console.log(response.data.data.room);
        setNameRoom(response.data.data.room);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [idTicket, idUser]);

  const handleGetIdTicket = (id_ticket) => {
    setIdTicket(id_ticket);
    console.log(id_ticket);
  };

  return (
    <PageTransactionStyle>
      <div className="container_custom_transaction">
        <table>
          <tr>
            <th>Khách Hàng</th>
            <th>Mã Vé</th>
            <th>Phim</th>
            <th>Ngày Chiếu</th>
            <th>Giờ Chiếu</th>
            <th>Phòng Chiếu</th>
            <th>Ghế</th>
            <th>Combo</th>
            <th>Thông Tin Vé</th>
            <th>Trạng Thái</th>
            <th>Tổng Tiền</th>
          </tr>
          {billTicket.map((item, index) => (
            <tr key={index}>
              <td>{item?.full_name}</td>
              <td>{item?.id_ticket}</td>
              <td>{item?.name_mv}</td>
              <td>{item?.date}</td>
              <td>{item?.time_start}</td>
              <td>
                {nameRoom.map((idRoom) => (
                  <span>
                    {idRoom.id_room === item.id_room ? idRoom.name_room : ""}
                  </span>
                ))}
              </td>
              <td>
                {item?.seat.map((seat, index) => (
                  <span>{seat.seat}, </span>
                ))}
              </td>
              <td>
                {item?.combo.map((combo, index) => (
                  <span key={index}>
                    {combo.combo}({combo.quantity}),{" "}
                  </span>
                ))}
              </td>
              <td>{item?.ticket_information}</td>
              <td>
                {item?.status === "1" && (
                  <button className="paid">Đã Thanh Toán</button>
                )}
                {item?.status === "0" && (
                  <button
                    className="unpaid"
                    onClick={() => handleGetIdTicket(item.id_ticket)}
                  >
                    <a href={linkPayment} style={{ color: "white" }}>
                      Chưa Thanh Toán
                    </a>
                  </button>
                )}
                {item?.status === "2" && "đã nhận vé"}
              </td>
              <td>{formatPrice(item?.Total_money)}</td>
            </tr>
          ))}
        </table>
      </div>
      <Title title1={"THÔNG TIN THÀNH VIÊN"} title2={"GIAO DỊCH CỦA TÔI"} />
      <div className="example">
        <Spin spinning={spin} size="large" />
      </div>
      ,
    </PageTransactionStyle>
  );
};

export default PageTransaction;
