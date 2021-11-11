import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from "react";
import { ListPromotionStyle } from './list_promotion-style';

// const { Meta } = Card;

function PromotionCPN() {

    const [listPromotion, setlistPromotion] = useState([])
    console.log(listPromotion)
    useEffect(() => {
        fetch('https://6189cf9d34b4f400177c425b.mockapi.io/listPromotion')
        .then(response => response.json())
        .then(json => setlistPromotion(json))
    }, [])
    
    return (
        <ListPromotionStyle>

          <div className="row-promotion">
                <span className="title-blog">TIN KHUYẾN MÃI</span>
                <div className="line"><div className="line1"></div></div>

                <div className="promotion-card">
                  <Row gutter={[8, 8]}>
                    {listPromotion.map((item,index) => (
                      <Col span={6}>
                        <Card className ="box-card"
                          key={index}
                          style={{ width: 280}}
                          cover={
                            <div>
                                  <img src={item.img} width="280px" alt="img"/>
                                    <div className="img-mask-promotion_card">
                                      <div className="content-promotion">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                      </div>
                                      <a href={item.href}>
                                        <button>CHI TIẾT</button>
                                      </a>
                                    </div>
                                </div>
                                }
                                >
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
            </div>
        </ListPromotionStyle>
    )
}

export default PromotionCPN