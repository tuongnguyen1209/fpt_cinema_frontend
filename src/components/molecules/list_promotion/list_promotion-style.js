import styled from "styled-components";

export const ListPromotionStyle = styled.div`
    .row-promotion {
        margin-top: 150px;
        clear: both;
    }
    .title-blog {
        font-size: 1rem;
        font-weight: bold;
    }
    .promotion-card {
        margin-top: 25px;
    }
    .box-card {
        position: relative;
    }
    .img-mask-promotion_card {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
  
    }
    .box-card:hover .img-mask-promotion_card {
        opacity: 1;
    }
    .img-mask-promotion_card button{
        display: inline-block;
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
        border: 1px solid #fff;
        padding: 15px 20px;
        text-decoration: none;
        line-height: 1;
        transition: all 0.3s;
        background: rgba(0, 0, 0, 0.4);
    }
    .img-mask-promotion_card button:hover {
        border: 1px solid #f26b38;
        background: #f26b38;
    }
    .content-promotion h4 {
        color: white;
        font-size: 1.2rem;
        padding-bottom: 10px;
    }
`