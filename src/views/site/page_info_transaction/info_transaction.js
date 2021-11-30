import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from 'antd';
import Title from "antd/lib/skeleton/Title";
import axios from "axios";
import MovieService from "../../../serivces/movie.service";

const PageTransactionStyle = styled.div`
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
            border-left: 0.5px solid rgba(0,0,0,.4);
            padding: 10px;
            width: auto;
            text-align: center;
        }
        tr {
            height: 60px;
        }
        tr:nth-child(even) {
            background-color: rgba(189, 195, 199,0.3);
        }
        td {
            font-size: 0.8rem;
            padding: 10px;
            text-align: center;
        }
    }
`
const PageTransaction = () => {

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


    const [billTicket,setBillTicket] = useState([]);
    const [nameRoom,setNameRoom] = useState([]);
    useEffect(() => {

        axios.get('https://cinemafptproject.herokuapp.com/v1.php/ticket')
        .then(function (response) {
          // handle success
          console.log(response.data.data.ticket);
          setBillTicket(response.data.data.ticket);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
        axios.get('https://cinemafptproject.herokuapp.com/v1.php/room')
        .then(function (response) {
          // handle success
          console.log(response.data.data.room);
          setNameRoom(response.data.data.room);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })  

    },[])

    
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
                {billTicket.map((item,index) => (
                    <tr key={index}>
                        <td>{item?.full_name}</td>
                        <td>{item?.id_ticket}</td>
                        <td>{item?.name_mv}</td>
                        <td>{item?.date}</td>
                        <td>{item?.time_start}</td>
                        <td>
                            {nameRoom.map(idRoom => (
                                <span>{idRoom.id_room === item.id_room ? idRoom.name_room : ""}</span>    
                            ))}
                        </td>
                        <td>
                            {item?.seat.map((seat,index) => (
                                <span>{seat.seat}, </span>
                            ))}
                        </td>
                        <td>
                            {item?.combo.map((combo,index) => (
                                <span key={index}>{combo.combo}({combo.quantity}), </span>
                            ))}
                        </td>
                        <td>{item?.ticket_information}</td>
                        <td>{item?.status === '1' ? "Sắp chiếu" : "Đã chiếu"}</td>
                        <td>{item?.Total_money} VNĐ</td>
                    </tr>
                ))}
                </table>
            </div>
            <Title title1={"THÔNG TIN THÀNH VIÊN"} title2={"GIAO DỊCH CỦA TÔI"} />
        </PageTransactionStyle>
    );
}

export default PageTransaction;