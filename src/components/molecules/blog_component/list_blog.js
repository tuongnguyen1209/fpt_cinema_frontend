import { EyeTwoTone, LikeTwoTone, StarTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { ListBlogStyle } from './list_blog-style';
import { Link } from 'react-router-dom';
// import BlockService from "../../../serivces/blog.service";
import axios from 'axios';


function BlogCPN() {

    const [listBlog, setListBlog] = useState([])
    useEffect(() => {
        // const fetchBlog = async () => {
        //   try {
        //     const response = await BlockService.getAllBlog();
        //     console.log(response);
        //     setListBlog(response.data);
        //   }catch (error) {
        //     console.log("Failed to fetch block list: ",error);
        //   }
        // }
        // fetchBlog();

        async function getUser() {
          try {
            const response = await axios.get('https://6189cf9d34b4f400177c425b.mockapi.io/listBlog');
            // console.log(response);
            setListBlog(response.data);
          } catch (error) {
            console.error(error);
          }
        }
        getUser();
      },[])
    
    return (
        <ListBlogStyle>
        
            <div className="row-blog">

                <div className="blog-bl-phim">
                <span className="title-blog">BÌNH LUẬN PHIM</span>
                <div className="line"><div className="line1"></div></div>

                <div className="container-blog">
                    {listBlog.map((item, index) => (
                        <div className="blog-card" key={index}>
                            <Link to={item.href}>
                                <img className="img-blog" src={item.img} alt="img"/>
                            </Link>
                        <div className="content-card">
                            <h4 className="title-content">{item.title}</h4>
                        <p className="icon">
                            <span><LikeTwoTone /> {item.like_count}</span>
                            <span><EyeTwoTone /> {item.view_count}</span>
                            <span><StarTwoTone /> {item.star_count}/10</span>
                        </p>
                        <p className="description">{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                <div className="blog-dien-anh">
                <span className="title-blog">BLOG ĐIỆN ẢNH</span>
                <div className="line"><div className="line1"></div></div>

                <div className="container-blog">
                    {listBlog.map((item, index) => (
                        <div className="blog-card" key={index}>
                            <Link to={item.href}>
                                <img className="img-blog" src={item.img} alt="img"/>
                            </Link>
                        <div className="content-card">
                        <h4 className="title-content">{item.title}</h4>
                        <p className="icon">
                            <span><LikeTwoTone /> {item.like_count}</span>
                            <span><EyeTwoTone /> {item.view_count}</span>
                            <span><StarTwoTone /> {item.star_count}/10</span>
                        </p>
                        <p className="description">{item.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

            </div>

        </ListBlogStyle>
    )
}

export default BlogCPN