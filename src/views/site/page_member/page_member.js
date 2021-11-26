import React from "react";
import { PageMemberStyle } from "./page_memberStyle";
import Member from "../../../components/molecules/member_component/member";
import MovieCPN from "../../../components/molecules/movie_component/list_movie";
import BoxBuyTicket from "../../../components/molecules/slide_show_component/box-buy-ticket";
import { SlideShowStyle } from "../../../components/molecules/slide_show_component/slide_show-style";

const PageMember = () => {
    return (
        <PageMemberStyle>
            <div className="container">
                <div className="main_member">
                    <Member /> 
                </div>
                <div className="aside_member">
                    <SlideShowStyle >
                        <BoxBuyTicket />
                    </SlideShowStyle >
                    <MovieCPN titleHome={"PHIM ĐANG CHIẾU"}/>
                </div>
            </div>
        </PageMemberStyle>
    )
}

export default PageMember;