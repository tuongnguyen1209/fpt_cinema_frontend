import { EyeTwoTone, LikeTwoTone, StarTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { ListBlogStyle } from './list_blog-style';
import { URL_API } from '../../../config/app.config';
import { Link } from 'react-router-dom';

const axios = require('axios');

function BlogCPN() {

    const [listBlogBl, setListBlogBl] = useState([])
    console.log(listBlogBl)
    useEffect(() => {
        axios({
            method: 'get',
            url: `${URL_API}listBlog`,
          })
          .then(function (response) {
            // handle success
            setListBlogBl(response.data);
          }).catch(
            function (error) {
              console.log('DONT GET DATA MOVIE!')
              return Promise.reject(error)
            }
          )
    }, [])
    
    return (
        <ListBlogStyle>
        
            <div className="row-blog">

                <div className="blog-bl-phim">
                <span className="title-blog">BÌNH LUẬN PHIM</span>
                <div className="line"><div className="line1"></div></div>

                <div className="container-blog">
                    {listBlogBl.map((item, index) => (
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
                    {listBlogBl.map((item, index) => (
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