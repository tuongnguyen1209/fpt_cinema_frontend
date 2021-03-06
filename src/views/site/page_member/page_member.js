import React, { useEffect } from "react";
import { PageMemberStyle } from "./page_memberStyle";
import Member from "../../../components/molecules/member_component/member";
import MovieCPN from "../../../components/molecules/movie_component/list_movie";
import BoxBuyTicket from "../../../components/molecules/slide_show_component/box-buy-ticket";
import { SlideShowStyle } from "../../../components/molecules/slide_show_component/slide_show-style";

const PageMember = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageMemberStyle>
            <div className="container_custom">
                <div className="main_member">
                    <Member /> 
                </div>
                <div className="aside_member">
                    <SlideShowStyle >
                        <BoxBuyTicket />
                    </SlideShowStyle >
                    <MovieCPN titleHome={"PHIM ĐANG CHIẾU"} limit={6}/>
                </div>
            </div>
        </PageMemberStyle>
    )
}

export default PageMember;