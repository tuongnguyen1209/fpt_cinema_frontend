/* eslint-disable react-hooks/exhaustive-deps */
import {
  LeftOutlined,
  MinusCircleFilled,
  PlusCircleFilled,
  RightOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveTicketList } from "../../../redux/action/saveTicket";
import { BookTicketFoodStyle } from "./bookticket_foodStyle";
import TicketService from "../../../serivces/ticket.service";
import sessionService from "../../../serivces/session.service";
import SeatService from "../../../serivces/tk_seat.service";
import ComboService from "../../../serivces/combo.service";
// const axios = require("axios").default;

const BookTicketFood = () => {
  const error = () => {
    message.error("Bạn chưa mua vé!");
  };

  const error2 = () => {
    message.error("Ghế đã có người đặt!");
  };

  const error3 = () => {
    message.error("Đăng nhập để tiếp tục đặt vé!");
  };

  const [checkChangeTotallTicket, setCheckChangeTotallTicket] = useState(false);

  const ticket_adults = [
    {
      category_ticket: "Người lớn",
      category_ticket2: "Vé 2D",
      price_ticket: 65000,
    },
  ];

  // lấy giá

  let price_ticket;
  for (let i = 0; i < ticket_adults.length; i++) {
    price_ticket = ticket_adults[i].price_ticket;
  }

  // Cộng tổng giá tiền
  const [totalPriceTicket, setTotalPriceTicket] = useState(0);

  // Tăng giảm số lượng
  let [counting, setCounting] = useState(0);

  const handleMinus = () => {
    let min = 0;
    if (counting <= min) {
      counting = min;
    } else {
      setCounting(counting - 1);
      // tinh tong
      setTotalPriceTicket(
        (totalPriceTicket) => totalPriceTicket - price_ticket
      );
    }
  };

  const handlePluss = () => {
    let max = 8;
    if (counting >= max) {
      counting = max;
    } else {
      setCounting(counting + 1);
      // tinh tong
      setTotalPriceTicket(
        (totalPriceTicket) => totalPriceTicket + price_ticket
      );
    }
  };

  // ---------------------------------------------------------------------------
  const ticket_member = [
    {
      category_ticket: "Thành viên",
      category_ticket2: "Vé 2D",
      price_ticket: 55000,
    },
  ];

  // lấy giá

  let price_ticket_member;
  for (let i = 0; i < ticket_member.length; i++) {
    price_ticket_member = ticket_member[i].price_ticket;
  }

  // Cộng tổng giá tiền
  const [totalPriceTicket_member, setTotalPriceTicket_member] = useState(0);

  // Tăng giảm số lượng
  let [counting_member, setCounting_member] = useState(0);

  const handleMinus_member = () => {
    let min = 0;
    if (counting_member <= min) {
      counting_member = min;
    } else {
      setCounting_member(counting_member - 1);
      // tinh tong
      setTotalPriceTicket_member(
        (totalPriceTicket_member) =>
          totalPriceTicket_member - price_ticket_member
      );
    }
  };
  const handlePluss_member = () => {
    let max = 8;
    if (counting_member >= max) {
      counting_member = max;
    } else {
      setCounting_member(counting_member + 1);
      // tinh tong
      setTotalPriceTicket_member(
        (totalPriceTicket_member) =>
          totalPriceTicket_member + price_ticket_member
      );
    }
  };

  // tong tien bang mua ve

  const [totalTableTicket, setTotalTableTicket] = useState(0);

  useEffect(() => {
    setTotalTableTicket(totalPriceTicket + totalPriceTicket_member);
    setCheckChangeTotallTicket(checkChangeTotallTicket ? false : true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPriceTicket, totalPriceTicket_member]);

  // ----------------------------------------------------------------------------
  // fetch combo
  const [listCombo, setListCombo] = useState([]);
  console.log(listCombo);
  useEffect(() => {
    const fetchCombo = async () => {
      try {
        const response = await ComboService.getComBoAll();
        console.log(response.data.combo, listCombo);
        setListCombo(response.data.combo);
      } catch (error) {
        console.log("Failed to fetch combo list: ", error);
      }
    };
    fetchCombo();
  }, []);

  const combo_1 = [
    {
      name_combo: "Combo 1 Big",
      img_combo:
        "https://www.galaxycine.vn/media/2021/4/7/combo1_1617790472299.jpg",
      detail_combo: "1 BẮP VÀ 1 NƯỚC COCA",
      price_combo: 65,
    },
  ];

  // lấy giá

  let price_combo1;
  for (let i = 0; i < combo_1.length; i++) {
    price_combo1 = combo_1[i].price_combo;
  }

  // Cộng tổng giá tiền
  const [totalPriceCombo1, setTotalPriceCombo1] = useState(0);

  // Tăng giảm số lượng
  let [counting_combo1, setCounting_combo1] = useState(0);

  const handleMinus_combo1 = () => {
    let min = 0;
    if (counting_combo1 <= min) {
      counting_combo1 = min;
    } else {
      setCounting_combo1(counting_combo1 - 1);
      // tinh tong
      setTotalPriceCombo1(
        (totalPriceCombo1) => totalPriceCombo1 - price_combo1
      );
      setGetCombo1(name_combo1.current.innerHTML);
      if (counting_combo1 === 1) {
        setGetCombo1("");
        SetQuantityCombo1(0);
      } else {
        SetQuantityCombo1((quantityCombo1) => quantityCombo1 - 1);
      }
    }
  };
  const handlePluss_combo1 = () => {
    let max = 50;
    if (counting_combo1 >= max) {
      counting_combo1 = max;
    } else {
      setCounting_combo1(counting_combo1 + 1);
      // tinh tong
      setTotalPriceCombo1(
        (totalPriceCombo1) => totalPriceCombo1 + price_combo1
      );
      setGetCombo1(name_combo1.current.innerHTML);
      SetQuantityCombo1((quantityCombo1) => quantityCombo1 + 1);
    }
  };

  // ------------------------------------------------------------------------------

  const combo_2 = [
    {
      name_combo: "Combo 2 Big",
      img_combo:
        "https://www.galaxycine.vn/media/2021/4/7/combo2_1617790465669.jpg",
      detail_combo: "1 BẮP VÀ 2 NƯỚC COCA",
      price_combo: 75,
    },
  ];

  // lấy giá

  let price_combo2;
  for (let i = 0; i < combo_2.length; i++) {
    price_combo2 = combo_2[i].price_combo;
  }

  // Cộng tổng giá tiền
  const [totalPriceCombo2, setTotalPriceCombo2] = useState(0);

  // Tăng giảm số lượng
  let [counting_combo2, setCounting_combo2] = useState(0);

  const handleMinus_combo2 = () => {
    let min = 0;
    if (counting_combo2 <= min) {
      counting_combo2 = min;
    } else {
      setCounting_combo2(counting_combo2 - 1);
      // tinh tong
      setTotalPriceCombo2(
        (totalPriceCombo2) => totalPriceCombo2 - price_combo2
      );
      setGetCombo2(name_combo2.current.innerHTML);
      if (counting_combo2 === 1) {
        setGetCombo2("");
        SetQuantityCombo2(0);
      } else {
        SetQuantityCombo2((quantityCombo2) => quantityCombo2 - 1);
      }
    }
  };
  const handlePluss_combo2 = () => {
    let max = 50;
    if (counting_combo2 >= max) {
      counting_combo2 = max;
    } else {
      setCounting_combo2(counting_combo2 + 1);
      // tinh tong
      setTotalPriceCombo2(
        (totalPriceCombo2) => totalPriceCombo2 + price_combo2
      );
      setGetCombo2(name_combo2.current.innerHTML);
      SetQuantityCombo2((quantityCombo2) => quantityCombo2 + 1);
    }
  };

  // -------------------------------------------------------------------------------

  const combo_3 = [
    {
      name_combo: "Combo 3 Big",
      img_combo:
        "https://www.galaxycine.vn/media/2021/4/7/combo2_1617790465669.jpg",
      detail_combo: "2 BẮP VÀ 4 NƯỚC COCA",
      price_combo: 150,
    },
  ];

  // lấy giá

  let price_combo3;
  for (let i = 0; i < combo_3.length; i++) {
    price_combo3 = combo_3[i].price_combo;
  }

  // Cộng tổng giá tiền
  const [totalPriceCombo3, setTotalPriceCombo3] = useState(0);

  // Tăng giảm số lượng
  let [counting_combo3, setCounting_combo3] = useState(0);

  const handleMinus_combo3 = () => {
    let min = 0;
    if (counting_combo3 <= min) {
      counting_combo3 = min;
    } else {
      setCounting_combo3(counting_combo3 - 1);
      // tinh tong
      setTotalPriceCombo3(
        (totalPriceCombo3) => totalPriceCombo3 - price_combo3
      );
      setGetCombo3(name_combo3.current.innerHTML);
      if (counting_combo3 === 1) {
        setGetCombo3("");
        SetQuantityCombo3(0);
      } else {
        SetQuantityCombo3((quantityCombo3) => quantityCombo3 - 1);
      }
    }
  };
  const handlePluss_combo3 = () => {
    let max = 50;
    if (counting_combo3 >= max) {
      counting_combo3 = max;
    } else {
      setCounting_combo3(counting_combo3 + 1);
      // tinh tong
      setTotalPriceCombo3(
        (totalPriceCombo3) => totalPriceCombo3 + price_combo3
      );
      setGetCombo3(name_combo3.current.innerHTML);
      SetQuantityCombo3((quantityCombo3) => quantityCombo3 + 1);
    }
  };

  // tong tien bang mua ve

  const [totalTableCombo, setTotalTableCombo] = useState(0);

  useEffect(() => {
    setTotalTableCombo(totalPriceCombo1 + totalPriceCombo2 + totalPriceCombo3);
  }, [totalPriceCombo1, totalPriceCombo2, totalPriceCombo3]);

  // tong tat ca tien (tien ve va tien combo)

  const [totalAll, setTotalAll] = useState(0);

  useEffect(() => {
    setTotalAll(totalTableTicket + totalTableCombo);
  }, [totalTableTicket, totalTableCombo]);

  // lay combo
  const name_combo1 = useRef();
  const [getCombo1, setGetCombo1] = useState("");
  const [quantityCombo1, SetQuantityCombo1] = useState(0);

  const name_combo2 = useRef();
  const [getCombo2, setGetCombo2] = useState("");
  const [quantityCombo2, SetQuantityCombo2] = useState(0);

  const name_combo3 = useRef();
  const [getCombo3, setGetCombo3] = useState("");
  const [quantityCombo3, SetQuantityCombo3] = useState(0);

  // cac state chuyen trang

  const [btnPrevious, setBtnPrevious] = useState("btn_prev"); // an hien cai btn quay lai
  const [btnNext, setBtnNext] = useState("btn_prev_show"); // an hien cai btn tiep tuc (2 cai btn trùng css nên đặt cùng class btn_prev)
  const [TogglePageBookTicket, setTogglePageBookTicket] = useState(
    "main_bookticket_food"
  ); // an hien trang dat ve va do an;
  const [TogglePageSeat, setTogglePageSeat] = useState("hide_page"); // an hien trang chon ghe
  const [TogglePagePayment, setTogglePagePayment] = useState("hide_page"); // an hien trang thanh toan

  // chuyen ve trang chon ve / do an (TRANG 1)
  /*
        + ẩn btn quay lại
        + ẩn trang chọn ghế (TRANG 1)
        + hiện trang chọn ghế (TRANG 2)
    */
  const handleChangePageBookTicket = (e) => {
    e.preventDefault();
    setBtnPrevious("btn_prev");
    setTogglePageBookTicket("main_bookticket_food");
    setTogglePageSeat("hide_page");
  };

  // Chuyen den trang chon ghe (TRANG 2)
  /*   + hiện btn quay lại
        + ẩn trang chọn vé (TRANG 1)
        + hiện trang chọn ghế (TRANG 2)
    */

  // chuyen den trang thanh toan (TRANG 3)
  /*
        + ẩn btn tiếp tục
        + ẩn trang chọn ghế (TRANG 2)
        + hiện trang thanh toán (TRANG 3)
    */

  // totalTableTicket tổng tiền bảng đặt vé phải khác 0 mới cho người dùng qua bước đặt ghế
  const handlebtnNext = (e) => {
    saveInfoTicket(); // luu thong tin
    if (totalTicketBought > 8) {
      alert("Bạn không được mua quá 8 vé!");
      return;
    }
    e.preventDefault();
    if (totalTableTicket !== 0) {
      if (btnPrevious === "btn_prev_show") {
        setTogglePagePayment("main_payment");
        setTogglePageSeat("hide_page");
        setBtnPrevious("btn_prev");
        setBtnNext("btn_prev");
      } else {
        setBtnPrevious("btn_prev_show");
        setTogglePageBookTicket("hide_page");
        setTogglePageSeat("main_seat");
      }
    } else {
      error();
    }
  };

  // chuyển về trang chọn vé (TRANG 1)
  /*
        + ẩn trang thanh toán (TRANG 3)
        + hiện btn tiếp tục
        + hiện trang đặt vé (TRANG 1)
   */
  const handlePrevPageSeat = (e) => {
    e.preventDefault();
    setTogglePagePayment("hide_page");
    setTogglePageBookTicket("main_bookticket_food");
    setBtnNext("btn_prev_show");
  };

  // ghe da co nguoi dat
  const [arraySeatBooked, setArraySeatBooked] = useState([]);
  // useEffect(()=> {
  //   axios.get('https://cinemafptproject.herokuapp.com/v1.php/tk_seat')
  //   .then(function(response) {
  //     // console.log(response.data.data.tk_seat)
  //     setArraySeatBooked(response.data.data.tk_seat);
  //   })
  //   .catch(function(error) {
  //     console.log("Don't get data seat", error);
  //   })

  // },[])
  useEffect(() => {
    const fetchSeatList = async () => {
      try {
        const response = await SeatService.getSeatByIdSession(
          infoTicketList.session
        );
        // console.log(response);
        setArraySeatBooked(response.data.tk_seat);
        console.log(response.data.tk_seat.tk_seat);
      } catch (error) {
        console.log("Failed to fetch seat list: ", error);
      }
    };
    fetchSeatList();
  }, []);

  useEffect(() => {
    for (let id = 0; id < arraySeatBooked.length; id++) {
      let idItem = document.getElementById(arraySeatBooked[id]);
      // console.log(idItem);
      if (idItem) {
        idItem.style.backgroundColor = "red";
        idItem.style.color = "white";
        // console.log(idItem);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arraySeatBooked.length]);

  // tinh tong so ve
  const totalTicketBought = counting + counting_member;

  const [ArraySeat, setArraySeat] = useState([]);
  // chon ghe
  const handleChooseSeat = (e) => {
    for (let id = 0; id < arraySeatBooked.length; id++) {
      let idItem = document.getElementById(arraySeatBooked[id]);
      if (idItem) {
        if (e.target.name === idItem.name) {
          error2();
          return;
        }
      }
    }

    if (ArraySeat.length === totalTicketBought) {
      for (const seat of ArraySeat) {
        if (e.target.name === seat) {
          e.target.style.backgroundColor = "rgba(189,195,199,.4)";
          e.target.style.color = "rgba(0, 0, 0, 0.85)";
          const newArraySeat = ArraySeat.filter((seat, index, array) => {
            return seat !== e.target.name;
          });
          setArraySeat([...newArraySeat]);
          counting++;
        }
      }
    } else {
      setArraySeat([...ArraySeat, e.target.name]);
      e.target.style.backgroundColor = "#2ecc71";
      e.target.style.color = "white";
    }
    for (const seat of ArraySeat) {
      if (e.target.name === seat) {
        e.target.style.backgroundColor = "rgba(189,195,199,.4)";
        e.target.style.color = "rgba(0, 0, 0, 0.85)";
        const newArraySeat = ArraySeat.filter((seat, index, array) => {
          return seat !== e.target.name;
        });
        setArraySeat([...newArraySeat]);
        counting++;
      }
    }
  };
  useEffect(() => {
    for (let id = 0; id < ArraySeat.length; id++) {
      let item = document.getElementById(ArraySeat[id]);
      item.style.backgroundColor = "rgba(189,195,199,.4)";
      item.style.color = "rgba(0, 0, 0, 0.85)";
    }
    setArraySeat([]);
  }, [checkChangeTotallTicket]);

  // redux ------------------------------------------------------
  const infoTicketList = useSelector((state) => state.saveTicket);
  const dispatch = useDispatch();
  // console.table([infoTicketList]);
  const saveInfoTicket = () => {
    // let code_random = Math.trunc(Math.random() * 9000 + 1000);
    let room_random = Math.trunc(Math.random() * 9 + 1);
    const saveSeat = {
      seat: ArraySeat,
       Total_money: totalAll,
      id_combo: [2,3],
 
      ticket_information: `Vé thành viên (${counting_member}), Vé thường (${counting})`,
      full_name: loginReducer.user.full_name,
      id_room: room_random,
      status: "1",
      id_user: loginReducer.user.id_user,
    };

    const action = saveTicketList(saveSeat);
    dispatch(action);
  };
  // redux ------------------------------------------------------

  const [idSession, setIdSession] = useState([]);
  // gọi API lấy ngày, giờ trong session
  useEffect(() => {
    const fetchSessionList = async () => {
      try {
        const response = await sessionService.getAll({
          id_session: infoTicketList.session,
        });
        // console.log(response);
        setIdSession(response.data);
        // console.log(response);
      } catch (error) {
        console.log("Failed to fetch movie list: ", error);
      }
    };
    fetchSessionList();
  }, []);

  // message
  const success = () => {
    message
      .loading("Đang đặt vé...", 2.5)
      .then(() => message.success("Đặt vé thành công!", 2.5));
  };

  // post data lên sever
  const PostDataTicket = async (e) => {
    e.preventDefault();
    saveInfoTicket();

    try {
       const data={

        "id_session": infoTicketList.session,
        "Total_money": infoTicketList.Total_money,
        "id_user":infoTicketList.id_user,
        "id_promotion":"3",
        "time_create":"",
        "status":"1",
        "ticket_information": infoTicketList.ticket_information,
        "id_seat" : infoTicketList.seat,
        "id_combo": infoTicketList.id_combo,
        "quantity": [quantityCombo1,quantityCombo2,quantityCombo3],
        "unit_price":[8000,9000]
      }
      console.log(data);
      const response = await TicketService.createTicket(data)
 
      console.log(response);
      window.open(response.payment.data,"_self");
      success();
    } catch {
      console.log("Error", message);
    }
    // axios.post("https://cinemafptproject.herokuapp.com/v1.php/ticket", {
    //     name_mv: infoTicketList.name_mv,
    //     full_name: infoTicketList.full_name,
    //     date: "30-11-2021",
    //     time_start: "10:30",
    //     combo: infoTicketList.combo,
    //     seat: infoTicketList.seat,
    //     id_room: infoTicketList.id_room,
    //     ticket_information: infoTicketList.ticket_information,
    //     status: infoTicketList.status,
    //     Total_money: infoTicketList.Total_money,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  // check login
  const loginReducer = useSelector((state) => state.user);
  const isLogin = loginReducer.isLogin;
  // console.log(loginReducer)
  useEffect(() => {
    if (isLogin === false) {
      error3();
      return (window.location = "/auth/login");
    }
  }, [isLogin]);
  // mảng ghế

  // const [limitTime, setLimitTime] = useState("16:00");

  // let minute = 16;
  // let second = 59;
  // const countDown = () => {
  //     if(second === 0) {
  //         minute = minute - 1
  //         second = 59
  //     }else {
  //         second = second - 1;
  //     }
  //     if(minute === 0 ){
  //         minute = 16;
  //     }
  //     if(second < 10){
  //         return setLimitTime( minute + ": 0" + second)
  //     }
  //     if(minute < 10) {
  //         return setLimitTime( "0" + minute + ":" + second)
  //     }

  //     return setLimitTime( minute + ":" + second)
  // }
  // useEffect(() => {
  //     setInterval(() => {
  //         countDown()
  //     },1000)
  // },[second])
  return (
    <BookTicketFoodStyle>
      <div className="container_custom">
        <div className={TogglePageBookTicket}>
          <div className="box_bookticket">
            <h3>CHỌN VÉ/THỨC ĂN</h3>
            <div className="table_book">
              <table>
                <tr>
                  <th>Loại vé</th>
                  <th>Số lượng</th>
                  <th>Giá(VNĐ)</th>
                  <th>Tổng(VNĐ)</th>
                </tr>
                {ticket_adults.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span>{item.category_ticket}</span>
                      <br></br>
                      <span>{item.category_ticket2}</span>
                    </td>
                    <td>
                      {" "}
                      <span>
                        <MinusCircleFilled onClick={handleMinus} />
                      </span>{" "}
                      <input disabled value={counting} />{" "}
                      <span>
                        <PlusCircleFilled onClick={handlePluss} />
                      </span>{" "}
                    </td>
                    <td>{item.price_ticket},000</td>
                    <td>{totalPriceTicket},000</td>
                  </tr>
                ))}
                {ticket_member.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <span>{item.category_ticket}</span>
                      <br></br>
                      <span>{item.category_ticket2}</span>
                    </td>
                    <td>
                      {" "}
                      <span>
                        <MinusCircleFilled onClick={handleMinus_member} />
                      </span>{" "}
                      <input disabled value={counting_member} />{" "}
                      <span>
                        <PlusCircleFilled onClick={handlePluss_member} />
                      </span>{" "}
                    </td>
                    <td>{item.price_ticket},000</td>
                    <td>{totalPriceTicket_member},000</td>
                  </tr>
                ))}
                <tr>
                  <td>Tổng</td>
                  <td></td>
                  <td></td>
                  <td>{totalTableTicket},000</td>
                </tr>
              </table>

              {/* table food */}
              <table>
                <tr>
                  <th>Combo</th>
                  <th>Số lượng</th>
                  <th>Giá(VNĐ)</th>
                  <th>Tổng(VNĐ)</th>
                </tr>
                {combo_1.map((item, index) => (
                  <tr key={index}>
                    <td className="td_combo">
                      <img src={item.img_combo} alt="combo" />
                      <p>
                        <span ref={name_combo1}>{item.name_combo}</span>
                        <br></br>
                        <span>{item.detail_combo}</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <span>
                        <MinusCircleFilled onClick={handleMinus_combo1} />
                      </span>{" "}
                      <input disabled value={counting_combo1} />{" "}
                      <span>
                        <PlusCircleFilled onClick={handlePluss_combo1} />
                      </span>{" "}
                    </td>
                    <td>{item.price_combo},000</td>
                    <td>{totalPriceCombo1},000</td>
                  </tr>
                ))}
                {combo_2.map((item, index) => (
                  <tr key={index}>
                    <td className="td_combo">
                      <img src={item.img_combo} alt="combo" />
                      <p>
                        <span ref={name_combo2}>{item.name_combo}</span>
                        <br></br>
                        <span>{item.detail_combo}</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <span>
                        <MinusCircleFilled onClick={handleMinus_combo2} />
                      </span>{" "}
                      <input disabled value={counting_combo2} />{" "}
                      <span>
                        <PlusCircleFilled onClick={handlePluss_combo2} />
                      </span>{" "}
                    </td>
                    <td>{item.price_combo},000</td>
                    <td>{totalPriceCombo2},000</td>
                  </tr>
                ))}
                {combo_3.map((item, index) => (
                  <tr key={index}>
                    <td className="td_combo">
                      <img src={item.img_combo} alt="combo" />
                      <p>
                        <span ref={name_combo3}>{item.name_combo}</span>
                        <br></br>
                        <span>{item.detail_combo}</span>
                      </p>
                    </td>
                    <td>
                      {" "}
                      <span>
                        <MinusCircleFilled onClick={handleMinus_combo3} />
                      </span>{" "}
                      <input disabled value={counting_combo3} />{" "}
                      <span>
                        <PlusCircleFilled onClick={handlePluss_combo3} />
                      </span>{" "}
                    </td>
                    <td>{item.price_combo},000</td>
                    <td>{totalPriceCombo3},000</td>
                  </tr>
                ))}
                <tr>
                  <td>Tổng</td>
                  <td></td>
                  <td></td>
                  <td>{totalTableCombo},000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className={TogglePageSeat}>
          <div className="box_seat">
            <h3>CHỌN GHẾ: {ArraySeat.toString()} </h3>
            <div className="room">
              <div className="row_top">
                <div className="column_left">
                  <button>H</button>
                  <button>G</button>
                  <button>F</button>
                  <button>E</button>
                  <button>D</button>
                  <button>C</button>
                  <button>B</button>
                  <button>A</button>
                </div>
                <div className="column_seats">
                  <div className="row_seats_even">
                    <span>
                      <input
                        id="H12"
                        onClick={handleChooseSeat}
                        type="button"
                        name="H12"
                        value="12"
                      />
                      <input
                        id="H11"
                        onClick={handleChooseSeat}
                        type="button"
                        name="H11"
                        value="11"
                      />
                    </span>
                    <span>
                      <input
                        id="H8"
                        onClick={handleChooseSeat}
                        type="button"
                        name="H8"
                        value="8"
                      />
                      <input
                        id="H7"
                        onClick={handleChooseSeat}
                        type="button"
                        name="H7"
                        value="7"
                      />
                    </span>
                    <span>
                      <input
                        id="H4"
                        onClick={handleChooseSeat}
                        type="button"
                        name="H4"
                        value="4"
                      />
                      <input
                        id="H3"
                        onClick={handleChooseSeat}
                        type="button"
                        name="H3"
                        value="3"
                      />
                    </span>
                  </div>
                  <div className="row_seats_odd">
                    <span>
                      <input
                        id="G14"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G14"
                        value="14"
                      />
                      <input
                        id="G13"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G13"
                        value="13"
                      />
                    </span>
                    <span>
                      <input
                        id="G10"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G10"
                        value="10"
                      />
                      <input
                        id="G9"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G9"
                        value="9"
                      />
                    </span>
                    <span>
                      <input
                        id="G6"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G6"
                        value="6"
                      />
                      <input
                        id="G5"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G5"
                        value="5"
                      />
                    </span>
                    <span>
                      <input
                        id="G2"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G2"
                        value="2"
                      />
                      <input
                        id="G1"
                        onClick={handleChooseSeat}
                        type="button"
                        name="G1"
                        value="1"
                      />
                    </span>
                  </div>
                  <div className="row_seats_even">
                    <span>
                      <input
                        id="F12"
                        onClick={handleChooseSeat}
                        type="button"
                        name="F12"
                        value="12"
                      />
                      <input
                        id="F11"
                        onClick={handleChooseSeat}
                        type="button"
                        name="F11"
                        value="11"
                      />
                    </span>
                    <span>
                      <input
                        id="F8"
                        onClick={handleChooseSeat}
                        type="button"
                        name="F8"
                        value="8"
                      />
                      <input
                        id="F7"
                        onClick={handleChooseSeat}
                        type="button"
                        name="F7"
                        value="7"
                      />
                    </span>
                    <span>
                      <input
                        id="F4"
                        onClick={handleChooseSeat}
                        type="button"
                        name="F4"
                        value="4"
                      />
                      <input
                        id="F3"
                        onClick={handleChooseSeat}
                        type="button"
                        name="F3"
                        value="3"
                      />
                    </span>
                  </div>
                  <div className="row_seats_odd">
                    <span>
                      <input
                        id="E14"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E14"
                        value="14"
                      />
                      <input
                        id="E13"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E13"
                        value="13"
                      />
                    </span>
                    <span>
                      <input
                        id="E10"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E10"
                        value="10"
                      />
                      <input
                        id="E9"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E9"
                        value="9"
                      />
                    </span>
                    <span>
                      <input
                        id="E6"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E6"
                        value="6"
                      />
                      <input
                        id="E5"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E5"
                        value="5"
                      />
                    </span>
                    <span>
                      <input
                        id="E2"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E2"
                        value="2"
                      />
                      <input
                        id="E1"
                        onClick={handleChooseSeat}
                        type="button"
                        name="E1"
                        value="1"
                      />
                    </span>
                  </div>
                  <div className="row_seats_even">
                    <span>
                      <input
                        id="D12"
                        onClick={handleChooseSeat}
                        type="button"
                        name="D12"
                        value="12"
                      />
                      <input
                        id="D11"
                        onClick={handleChooseSeat}
                        type="button"
                        name="D11"
                        value="11"
                      />
                    </span>
                    <span>
                      <input
                        id="D8"
                        onClick={handleChooseSeat}
                        type="button"
                        name="D8"
                        value="8"
                      />
                      <input
                        id="D7"
                        onClick={handleChooseSeat}
                        type="button"
                        name="D7"
                        value="7"
                      />
                    </span>
                    <span>
                      <input
                        id="D4"
                        onClick={handleChooseSeat}
                        type="button"
                        name="D4"
                        value="4"
                      />
                      <input
                        id="D3"
                        onClick={handleChooseSeat}
                        type="button"
                        name="D3"
                        value="3"
                      />
                    </span>
                  </div>
                  <div className="row_seats_odd">
                    <span>
                      <input
                        id="C14"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C14"
                        value="14"
                      />
                      <input
                        id="C13"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C13"
                        value="13"
                      />
                    </span>
                    <span>
                      <input
                        id="C10"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C10"
                        value="10"
                      />
                      <input
                        id="C9"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C9"
                        value="9"
                      />
                    </span>
                    <span>
                      <input
                        id="C6"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C6"
                        value="6"
                      />
                      <input
                        id="C5"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C5"
                        value="5"
                      />
                    </span>
                    <span>
                      <input
                        id="C2"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C2"
                        value="2"
                      />
                      <input
                        id="C1"
                        onClick={handleChooseSeat}
                        type="button"
                        name="C1"
                        value="1"
                      />
                    </span>
                  </div>
                  <div className="row_seats_even">
                    <span>
                      <input
                        id="B12"
                        onClick={handleChooseSeat}
                        type="button"
                        name="B12"
                        value="12"
                      />
                      <input
                        id="B11"
                        onClick={handleChooseSeat}
                        type="button"
                        name="B11"
                        value="11"
                      />
                    </span>
                    <span>
                      <input
                        id="B8"
                        onClick={handleChooseSeat}
                        type="button"
                        name="B8"
                        value="8"
                      />
                      <input
                        id="B7"
                        onClick={handleChooseSeat}
                        type="button"
                        name="B7"
                        value="7"
                      />
                    </span>
                    <span>
                      <input
                        id="B4"
                        onClick={handleChooseSeat}
                        type="button"
                        name="B4"
                        value="4"
                      />
                      <input
                        id="B3"
                        onClick={handleChooseSeat}
                        type="button"
                        name="B3"
                        value="3"
                      />
                    </span>
                  </div>
                  <div className="row_seats_odd">
                    <span>
                      <input
                        id="A14"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A14"
                        value="14"
                      />
                      <input
                        id="A13"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A13"
                        value="13"
                      />
                    </span>
                    <span>
                      <input
                        id="A10"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A10"
                        value="10"
                      />
                      <input
                        id="A9"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A9"
                        value="9"
                      />
                    </span>
                    <span>
                      <input
                        id="A6"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A6"
                        value="6"
                      />
                      <input
                        id="A5"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A5"
                        value="5"
                      />
                    </span>
                    <span>
                      <input
                        id="A2"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A2"
                        value="2"
                      />
                      <input
                        id="A1"
                        onClick={handleChooseSeat}
                        type="button"
                        name="A1"
                        value="1"
                      />
                    </span>
                  </div>
                </div>
                <div className="column_right">
                  <button>H</button>
                  <button>G</button>
                  <button>F</button>
                  <button>E</button>
                  <button>D</button>
                  <button>C</button>
                  <button>B</button>
                  <button>A</button>
                </div>
              </div>

              <div className="row_middle">
                <div className="screen">MÀN HÌNH</div>
              </div>

              <div className="row_bottom">
                <div className="note_seat">
                  <div className="btn_seat_green">
                    <button></button>
                    <span>Ghế đang chọn</span>
                  </div>
                  <div className="btn_seat_red">
                    <button></button>
                    <span>Ghế đã bán</span>
                  </div>
                  <div className="btn_seat_gray">
                    <button></button>
                    <span>Ghế có thể chọn</span>
                  </div>
                  <div className="btn_seat_blue">
                    <button></button>
                    <span>Ghế không thể chọn</span>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={TogglePagePayment}>
          <div className="box_payment">
            <div className="head_box_payment">
              <h3>VUI LÒNG THANH TOÁN</h3>
              <p></p>
            </div>
            <div className="form_payment">
              <form method="post">
                <div className="form-group">
                  <label>Hình thức thanh toán</label>
                  <select>
                    <option selected>Chọn loại thẻ</option>
                    <option>Thanh toán qua tài khoản ngân hàng</option>
                    <option>Ví điện tử Momo</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Họ và tên</label>
                  <input
                    placeholder="Nhập họ và tên..."
                    value={loginReducer.user.full_name}
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ email</label>
                  <input
                    type="email"
                    placeholder="Nhập địa chỉ email..."
                    value={loginReducer.user.email}
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    placeholder="Nhập số điện thoại..."
                    value={loginReducer.user.phone}
                  />
                </div>

                <div className="form-group-btn">
                  <p>
                    (*)Trước khi click vào thanh toán bạn phải có{" "}
                    <b>tài khoản ngân hàng</b> hoặc <b>ví điện tử momo</b>
                  </p>
                  <div>
                    <button onClick={handlePrevPageSeat}>QUAY LẠI</button>{" "}
                    <Link to="/member" onClick={PostDataTicket}>
                      THANH TOÁN
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="aside_bookticket_food">
          <div className="info_ticket">
            <img src={infoTicketList.img} alt="img_movie" />
            <h4>{infoTicketList.name_mv}</h4>
            <p className="note">
              (*) Phim chỉ dành cho khán giả từ 16 tuổi trở lên
            </p>

            <p>
              <b>Rạp:</b> {infoTicketList.rap}
            </p>
            <p>
              <b>Suất chiếu:</b> {idSession.day} || {idSession.time_start}
            </p>
            <p>
              <b>Combo:</b>{" "}
              <span>
                {getCombo1}
                {quantityCombo1 === 0 ? "" : "(" + quantityCombo1 + ")"}
              </span>{" "}
              <span>
                {getCombo2}
                {quantityCombo2 === 0 ? "" : "(" + quantityCombo2 + ")"}
              </span>{" "}
              <span>
                {getCombo3}
                {quantityCombo3 === 0 ? "" : "(" + quantityCombo3 + ")"}
              </span>
            </p>
            <p>
              <b>Ghế:</b> {ArraySeat.toString()}{" "}
            </p>
            <p className="total">
              <b>Tổng:</b>{" "}
              <span style={{ "padding-left": "10px" }}>{totalAll}</span>
            </p>

            <div className="view-more">
              <button
                className={btnPrevious}
                onClick={handleChangePageBookTicket}
              >
                <LeftOutlined /> QUAY LẠI
              </button>

              <button className={btnNext} onClick={handlebtnNext}>
                TIẾP TỤC <RightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>
    </BookTicketFoodStyle>
  );
};

export default BookTicketFood;
