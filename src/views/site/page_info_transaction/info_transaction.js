import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from 'antd';
import Title from "antd/lib/skeleton/Title";
import axios from "axios";

const PageTransactionStyle = styled.div`
    .container {
        width: 100%;
        margin-left: 0px;
        td {
            font-size: 0.8rem;
        }
        a {
            color: blue;
        }
        th {
            background-color: #2c3e50;
            color: white;
            border-left: 1px solid rgba(0,0,0,.4);
        }
        tr:nth-child(even) {
            background-color: rgba(189, 195, 199,0.3);
        }
    }
`
const PageTransaction = () => {

    const [billTicket,setBillTicket] = useState("");
    useEffect(() => {

        axios.get('https://619dd250131c6000170890f9.mockapi.io/ticket')
        .then(function (response) {
          // handle success
          console.log(response);
          setBillTicket(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })  

    },[])

    const columns = [
        {
          title: 'Tên Khách Hàng',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Mã Vé',
          dataIndex: 'ticket_code',
          key: 'ticket_code',
        },
        {
          title: 'Tên Phim',
          dataIndex: 'movie',
          key: 'movie',
          render: text => <a href="/pagedetail">{text}</a>,
        },
        {
            title: 'Suất Chiếu',
            dataIndex: 'session',
            key: 'session',
        },
        {
            title: 'Combo',
            dataIndex: 'combo',
            key: 'combo',
        },
        {
            title: 'Số Ghế',
            dataIndex: 'seat',
            key: 'seat',
        },
        {
            title: 'Rạp',
            dataIndex: 'rap',
            key: 'rap',
        },
        {
            title: 'Phòng Chiếu',
            dataIndex: 'room',
            key: 'room',
        },
        {
            title: 'Thông Tin Vé',
            dataIndex: 'info_ticket',
            key: 'info_ticket',
        },
        {
          title: 'Trạng Thái',
          key: 'status',
          dataIndex: 'status',
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'total',
            key: 'total',
        },
      ];

      // const data = [
      //   {
      //     key: billTicket[0].id,
      //     name: billTicket[0].name,
      //     id_ticket: billTicket[0].id,
      //     name_mv: billTicket[0].movie,
      //     session: billTicket[0].session,
      //     combo: billTicket[0].combo,
      //     seat: billTicket[0].seat,
      //     rap: billTicket[0].rap,
      //     room: billTicket[0].room,
      //     info_ticket: billTicket[0].info_ticket,
      //     status: billTicket[0].status,
      //     total: billTicket[0].total,
      //   },
      // ];
    return (  
        <PageTransactionStyle>
            <div className="container">
                <Table columns={columns} dataSource={billTicket}/>
            </div>
            <Title title1={"THÔNG TIN THÀNH VIÊN"} title2={"GIAO DỊCH CỦA TÔI"} />
        </PageTransactionStyle>
    );
}

export default PageTransaction;