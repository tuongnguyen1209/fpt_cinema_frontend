import styled from "styled-components";

export const BookTicketFoodStyle = styled.div`
  // css spin
  .example {
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .container_custom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .main_bookticket_food {
      flex: 3;
      padding-right: 30px;
      .box_bookticket {
        border: 14px solid #f26b38;
        h3 {
          font-size: 1.4rem;
          background: #f26b38;
          height: 60px;
          margin-right: -1px;
          color: white;
        }
        .table_book {
          margin-right: -1px;
          table {
            width: 100%;
            margin-top: -12px;
            margin-bottom: 12px;
            tr:nth-child(even) {
              background: rgba(189, 195, 199, 0.1);
            }
            tr:last-child {
              td {
                padding: 7px 12px;
                color: red;
              }
            }
            th {
              background: #47251c;
              color: white;
              padding: 8px 5px;
              text-align: center;
            }
            td {
              text-align: center;
              padding: 12px;
              vertical-align: middle;
              font-family: Arial, Helvetica, sans-serif;
              input {
                width: 60px;
                padding: 4px;
                border: 1px solid (189, 195, 199, 0.4);
                text-align: center;
                background: (189, 195, 199, 0.1);
                outline: none;
                font-size: 0.9rem;
              }
            }
            th:nth-child(1) {
              padding-left: 10px;
              text-align: left;
              width: 40%;
            }
            td:nth-child(1) {
              padding-left: 10px;
              text-align: left;
            }
            td:nth-child(2) {
              span {
                touch-action: cross-slide-x;
              }
              font-size: 1.2rem;
            }
            th:nth-child(4) {
              text-align: right;
              width: 10%;
            }
            td:nth-child(4) {
              text-align: right;
            }
            .td_combo {
              display: flex;
              img {
                max-width: 80px;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }

    // css table seat ---------------------------------------------------
    .main_seat {
      flex: 3;
      padding-right: 30px;
      .box_seat {
        border: 14px solid #f26b38;
        height: 500px;
        h3 {
          font-size: 1.4rem;
          background: #f26b38;
          height: 60px;
          margin-right: -1px;
          color: white;
        }
        .room {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          margin-top: 25px;
          .row_top {
            height: 50%;
            width: 60%;
            margin-bottom: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            .column_left {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-end;
              button {
                font-size: 0.75rem;
                height: 22px;
                width: 22px;
                margin: 1px;
              }
            }
            .column_seats {
              flex: 7;
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-wrap: wrap;
              .row_seats_odd {
              }
              .row_seats_even {
              }
              span {
                padding: 1px 20px;
                input {
                  font-size: 0.75rem;
                  margin: 1px;
                  height: 20px;
                  width: 20px;
                  background-color: rgba(189, 195, 199, 0.4);
                  outline: none;
                  border: none;
                  cursor: pointer;
                }
              }
            }
            .column_right {
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: flex-start;
              button {
                font-size: 0.75rem;
                height: 22px;
                width: 22px;
                margin: 1px;
              }
            }
          }
          .row_middle {
            border-bottom: 3px solid gray;
            height: 7%;
            width: 35%;
            .screen {
              text-align: center;
            }
          }
          .row_bottom {
            margin-top: 20px;
            height: 10%;
            width: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            .note_seat {
              width: 90%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-left: 5%;
              button {
                height: 10px;
                width: 10px;
                margin: 5px;
              }
              .btn_seat_green {
                button {
                  background: green;
                  border: none;
                }
              }
              .btn_seat_red {
                button {
                  background: red;
                  border: none;
                }
              }
              .btn_seat_gray {
                button {
                  background: gray;
                  border: none;
                }
              }
              .btn_seat_blue {
                button {
                  background: blue;
                  border: none;
                }
              }
            }
          }
        }
      }
    }

    // css main thanh toan
    .main_payment {
      flex: 3;
      padding-right: 30px;
      .box_payment {
        border: 14px solid #f26b38;
        .head_box_payment {
          display: flex;
          justify-content: space-between;
          background: #f26b38;
          margin-right: -3px;
          height: 50px;
          h3 {
            font-size: 1.4rem;
            color: white;
          }
          p {
            font-size: 1.4rem;
            color: white;
          }
        }
        .form_payment {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 50px;
          form {
            width: 100%;
            .form-group {
              width: 70%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px;
              label {
                font-size: 1.1rem;
                font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
                  serif;
              }
              input,
              select {
                padding: 7px 10px;
                width: 300px;
                border: 1px solid rgba(0, 0, 0, 0.4);
                background-color: white;
              }
            }
            .form-group-btn {
              width: 70%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-end;
              p {
                font-size: 0.7rem;
                width: 55%;
                color: rgba(0, 0, 0, 0.7);
              }
              div {
                width: 55%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-right: 10px;
                button,
                a {
                  text-align: center;
                  width: 140px;
                  display: inline-block;
                  font-size: 14px;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                  color: white;
                  border: 1px solid #f26b38;
                  padding: 12px 2px;
                  text-decoration: none;
                  line-height: 1;
                  transition: all 0.3s;
                  background: #f26b38;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    // css aside
    .aside_bookticket_food {
      flex: 1;
      background: rgba(189, 195, 199, 0.2);
      .info_ticket {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          max-width: 180px;
        }
        h4 {
          padding: 5px 0px;
          font-size: 1rem;
        }
        p {
          width: 100%;
          align-self: flex-start;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding-bottom: 10px;
          font-size: 0.9rem;
          vertical-align: middle;
          font-family: Arial, Helvetica, sans-serif;
        }
        .total {
          span {
            font-size: 1.1rem;
            color: tomato;
          }
        }
        .note {
          font-size: 0.8rem;
          color: #e74c3c;
        }
        .view-more {
          float: none;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .btn_prev {
            display: none;
          }
          .btn_prev_show {
            display: block;
            width: 130px;
            padding: 12px 2px;
          }
          button {
            margin: 0px 10px;
            cursor: pointer;
          }
        }
        .view-more button {
          display: inline-block;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: white;
          border: 1px solid #f26b38;
          padding: 12px 17px;
          text-decoration: none;
          line-height: 1;
          transition: all 0.3s;
          background: #f26b38;
        }
        .view-more button:hover {
          cursor: pointer;
        }
      }
    }
    .hide_page {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    .container_custom {
      display: block;
      .main_bookticket_food {
        padding-right: 0px;
        .box_bookticket {
          border: 10px solid #f26b38;

          h3 {
            font-size: 1.1rem;
            background: #f26b38;
            height: 40px;
            margin-right: -1px;
            color: white;
            margin-top: -1px;
            margin-left: -1px;
          }
          .table_book {
            margin-right: -1px;
            table {
              width: 100%;
              margin-top: -12px;
              margin-bottom: 12px;
              tr:nth-child(even) {
                background: rgba(189, 195, 199, 0.1);
              }
              tr:last-child {
                display: none;
                td {
                  padding: 7px 12px;
                  color: red;
                }
              }
              th {
                background: #47251c;
                color: white;
                padding: 8px 5px;
              }
              td {
                text-align: center;
                padding: 12px;
                vertical-align: middle;
                font-family: Arial, Helvetica, sans-serif;
                input {
                  width: 60px;
                  padding: 4px;
                  border: 1px solid (189, 195, 199, 0.4);
                  text-align: center;
                  background: (189, 195, 199, 0.1);
                  outline: none;
                  font-size: 0.9rem;
                }
              }
              th:nth-child(1) {
                padding-left: 10px;
                text-align: left;
                width: 30%;
              }
              td:nth-child(1) {
                padding-left: 10px;
                text-align: left;
              }
              td:nth-child(2) {
                span {
                  touch-action: cross-slide-x;
                }
                font-size: 1.2rem;
              }
              th:nth-child(4) {
                text-align: right;
                width: 10%;
                display: none;
              }
              td:nth-child(4) {
                text-align: right;
                display: none;
              }
              .td_combo {
                display: flex;
                flex-direction: column;
                font-size: 0.7rem;
                img {
                  max-width: 80px;
                  height: 50px;
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
      .main_seat {
        flex: 3;
        padding-right: 0px;
        .box_seat {
          border: 10px solid #f26b38;
          height: 500px;
          h3 {
            font-size: 1rem;
            background: #f26b38;
            height: 40px;
            margin: -1px;
            color: white;
          }
          .room {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 25px;
            .row_top {
              height: 50%;
              width: 100%;
              margin-bottom: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              .column_left {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                button {
                  font-size: 0.75rem;
                  height: 22px;
                  width: 22px;
                  margin: 1px;
                }
              }
              .column_seats {
                flex: 10;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-wrap: wrap;
                .row_seats_odd {
                }
                .row_seats_even {
                }
                span {
                  padding: 1px 10px;
                  input {
                    font-size: 0.75rem;
                    margin: 1px;
                    height: 20px;
                    width: 20px;
                    background-color: rgba(189, 195, 199, 0.4);
                    outline: none;
                    border: none;
                    cursor: pointer;
                  }
                }
              }
              .column_right {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                button {
                  font-size: 0.75rem;
                  height: 22px;
                  width: 22px;
                  margin: 1px;
                }
              }
            }
            .row_middle {
              border-bottom: 3px solid gray;
              height: 7%;
              width: 70%;
              .screen {
                text-align: center;
              }
            }
            .row_bottom {
              margin-top: 40px;
              height: 10%;
              width: 110%;
              display: flex;
              justify-content: center;
              align-items: center;
              .note_seat {
                width: 90%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 5%;
                button {
                  height: 10px;
                  width: 10px;
                  margin: 5px;
                }
                .btn_seat_green {
                  button {
                    background: green;
                    border: none;
                  }
                }
                .btn_seat_red {
                  button {
                    background: red;
                    border: none;
                  }
                }
                .btn_seat_gray {
                  button {
                    background: gray;
                    border: none;
                  }
                }
                .btn_seat_blue {
                  button {
                    background: blue;
                    border: none;
                  }
                }
              }
            }
          }
        }
      }

      // css main thanh toan
      .main_payment {
        flex: 3;
        padding-right: 0px;
        .box_payment {
          border: 10px solid #f26b38;
          padding-bottom: 50px;
          .head_box_payment {
            display: block;
            justify-content: space-between;
            background: #f26b38;
            margin-right: -3px;
            height: 40px;
            h3 {
              font-size: 1rem;
              background: #f26b38;
              height: 40px;
              margin: -1px;
              color: white;
            }
            p {
              font-size: 1.4rem;
              color: white;
            }
          }
          .form_payment {
            display: block;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0px;
            padding-top: 10px;
            form {
              width: 100%;
              .form-group {
                width: 100%;
                display: block;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0px 5px 10px;
                label {
                  font-size: 0.9rem;
                  font-family: Cambria, Cochin, Georgia, Times,
                    "Times New Roman", serif;
                }
                input,
                select {
                  padding: 7px 10px;
                  width: 300px;
                  border: 1px solid rgba(0, 0, 0, 0.4);
                  background-color: white;
                }
              }
              .form-group-btn {
                width: 100%;
                display: block;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-end;
                padding: 5px 0px 5px 10px;
                p {
                  font-size: 0.7rem;
                  width: 100%;
                  color: rgba(0, 0, 0, 0.7);
                }
                div {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  button {
                    width: 140px;
                    display: inline-block;
                    font-size: 14px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: white;
                    border: 1px solid #f26b38;
                    padding: 12px 17px;
                    text-decoration: none;
                    line-height: 1;
                    transition: all 0.3s;
                    background: #f26b38;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }
      .aside_bookticket_food {
        margin: 10px 0px;
        .info_ticket {
          img {
            max-width: 100%;
          }
          p {
          }
          .total {
            span {
            }
          }
          .note {
          }
          .view-more {
          }
          .view-more button {
          }
          .view-more button:hover {
          }
        }
      }
    }
  }
`;
