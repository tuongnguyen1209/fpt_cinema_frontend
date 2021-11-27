import React from "react";
import { PageBlogStyle } from "./page_blogStyle";
import BlogCPN from "../../../components/molecules/blog_component/list_blog";
import { SlideShowStyle } from "../../../components/molecules/slide_show_component/slide_show-style";
import BoxBuyTicket from "../../../components/molecules/slide_show_component/box-buy-ticket";
import MovieCPN from "../../../components/molecules/movie_component/list_movie";
import { Pagination } from 'antd';

const PageBlog = () => {
    return (
        <PageBlogStyle>
            <div className="container">

                <div className="main_blog">
                    <BlogCPN />
                    <BlogCPN />

                    <div className="pagination"><Pagination defaultCurrent={1} total={50} /></div>
                </div>

                <div className="aside_blog">
                        <SlideShowStyle >
                            <BoxBuyTicket />
                        </SlideShowStyle >
                        
                        <MovieCPN titleHome={"PHIM ĐANG CHIẾU"}/>
                </div>
                
            </div>
        </PageBlogStyle>
    )
}

export default PageBlog;