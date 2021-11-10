import { EyeTwoTone, LikeTwoTone, StarTwoTone } from '@ant-design/icons';
import { Image } from 'antd';
import React, { useEffect, useState } from "react";
import { ListBlogStyle } from './list_blog-style';

function BlogCPN() {

    const [listBlogBl, setListBlogBl] = useState([])
    console.log(listBlogBl)
    useEffect(() => {
      fetch('https://6189cf9d34b4f400177c425b.mockapi.io/listBlog')
      .then(response => response.json())
      .then(json => setListBlogBl(json))
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
                        <a href={item.href}>
                            <Image width={220} height={150} src={item.img} preview={false} alt={String}/>
                        </a>
                        <div className="content-card">
                        <h4>{item.title}</h4>
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
                        <a href={item.href}>
                            <Image width={220} height={150} src={item.img} preview={false} alt={String}/>
                        </a>
                        <div className="content-card">
                        <h4>{item.title}</h4>
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