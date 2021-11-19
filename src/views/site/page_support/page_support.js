import { QuestionCircleOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import React from "react";
import MovieCPN from "../../../components/molecules/movie_component/list_movie";
import BoxBuyTicket from "../../../components/molecules/slide_show_component/box-buy-ticket";
import { SlideShowStyle } from "../../../components/molecules/slide_show_component/slide_show-style";
import Title from "../../../components/molecules/title_component/title";
import { PageSupportStyle } from "./page_supportStyle";

const { Panel } = Collapse;

const PageSupport  = () =>  {



    function callback(key) {
        
    }
    const text = [
        "Tôi có thể dùng tài khoản thành viên của mình để mua vé nhóm được không?", 
        "Làm sao để đặt vé online?",
        "Làm sao để khiếu nại hoặc góp ý với Galaxy?",
        "Thanh toán online đã bị trừ tiền nhưng không nhận được mã đặt vé?",
        "Tôi có thể hủy hoặc thay đổi thông tin của vé đã mua online được không?",
        "Vé liệt kê trên Website áp dụng cho đối tượng nào?",
        "Khi mua vé online tôi có được tích điểm hay không?",
        "Trường hợp tôi có nhiều tài khoản thành viên, tôi có thể tích các Star vào 1 tài khoản không?",
        "Trường hợp để kiểm tra số lượng Stars trong tài khoản, tôi phải liên hệ ai?" ,
        "Làm thế nào để sử dụng số Stars trong tài khoản để đổi quà?",
        "Làm thế nào để tích lũy Stars?",
        "Thẻ thành viên Star/G-Star/X-Star có gì khác nhau?",
        "Công dụng của thẻ thành viên Star/G-Star/X-Star?",
        "Làm thế nào để duy trì hạn mức G-Star/X-Star?",
        "Thông Tin Liên Hệ Thẻ thành viên Star/G-Star/X-Star có hết hạn sử dụng không?",
    ]
    ;


    return (
        <PageSupportStyle>
            <div className="container">

                <div className="row-question">
                    <div className="main">
                        <Title title1={"GIẢI ĐÁP"} title2={"TUYỂN DỤNG"}/>
                        <Collapse expandIcon={() => (<QuestionCircleOutlined />)} onChange={callback}>
                            {text.map((item,index) => (
                                <Panel className="header-panel" header={item} key={index}>
                                    <p>{text}</p>
                                </Panel>
                            ))}
                        </Collapse>
                    </div>

                    <div className="aside">
                        <SlideShowStyle >
                            <BoxBuyTicket />
                        </SlideShowStyle >
                        
                        <MovieCPN />
                    </div>

                </div>
            </div>
        </PageSupportStyle>
    )
}

export default PageSupport