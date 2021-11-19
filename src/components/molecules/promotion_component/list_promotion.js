import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from "react";
import { ListPromotionStyle } from './list_promotion-style';
import { URL_API } from '../../../config/app.config';
import { Link } from 'react-router-dom';

const axios = require('axios');
// const { Meta } = Card;

function PromotionCPN() {

    const [listPromotion, setlistPromotion] = useState([])
    console.log(listPromotion)
    useEffect(() => {
      axios({
        method: 'get',
        url: `${URL_API}listPromotion`,
      })
      .then(function (response) {
        // handle success
        setlistPromotion(response.data);
      }).catch(
        function (error) {
          console.log('DONT GET DATA MOVIE!')
          return Promise.reject(error)
        }
      )
    }, [])
    
    return (
        <ListPromotionStyle>

          <div className="row-promotion">
                <span className="title-blog">TIN KHUYẾN MÃI</span>
                <div className="line"><div className="line1"></div></div>

                <div className="promotion-card">
                  <Row className="flex-item" >
                    {listPromotion.map((item,index) => (
                      <div key={index}>
                        <Col>
                          <Card className ="box-card"
                            cover={
                                  <div>
                                    <img className="img-promotion" src={item.img} alt="img"/>
                                      <div className="img-mask-promotion_card">
                                        <div className="content-promotion">
                                          <h4>{item.title}</h4>
                                          <p>{item.description}</p>
                                        </div>
                                        <Link href={item.href}>
                                          <button>CHI TIẾT</button>
                                        </Link>
                                      </div>
                                  </div>
                                  }
                                  >
                          </Card>
                        </Col>
                      </div>
                    ))}
                  </Row>
                </div>
            </div>
        </ListPromotionStyle>
    )
}

export default PromotionCPN