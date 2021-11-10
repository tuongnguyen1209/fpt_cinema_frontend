import { RightOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from "react";
import { ListMovieStyle } from './list_movie-style';

const { Meta } = Card;

function MovieCPN() {
    const [listMovie, setListMovie] = useState([])
    
    console.log(listMovie)
    useEffect(() => {
      fetch('https://6189cf9d34b4f400177c425b.mockapi.io/movie')
      .then(response => response.json())
      .then(json => setListMovie(json))
    }, [])
    return (
        <ListMovieStyle >

            <div className="row-movie">

                <div className="title">
                    <span><a href="www.facebook.com">PHIM ĐANG CHIẾU</a></span>
                    <span className="span2"><a href="www.facebook.com">PHIM SẮP CHIẾU</a></span>
                    <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    </div>
                </div>

                <Row gutter={[48, 8]}>
                {listMovie.map((item,index) => (
                    <Col span={8}>
                    <Card className="box-card"  key={index}
                        style={{ width: 400, height: 343.5}}
                        cover={<div><img src={item.thumbnail} width="400px" alt="img"/> <div className="img-mask"><a href={item.href}><button>Mua Vé</button></a></div></div>}
                        >
                        <Meta className="meta-title" title={item.title} description={item.description} />
                    </Card>
                    </Col>
                ))}
                </Row>
                
                <div className="view-more">
                    <a href="www.abc.com"><button>Xem Thêm <RightOutlined /></button></a>
                </div>
            </div>
        </ListMovieStyle>
    )
}

export default MovieCPN