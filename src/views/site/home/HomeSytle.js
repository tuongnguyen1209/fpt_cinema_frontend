import styled from "styled-components";

export const HomePage = styled.div`
    html {
        font-size: 100%;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        color: white;
    }
    .container {
        position: relative;
        margin: 0px 120px 50px 120px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .carousel-style {
        height: 500px;
        width: 100%;
        color: #fff;
        line-height: 160px;
        text-align: center;
        background: #364d79;
        position: relative;
    }
    .box-buy-ticket {
        background: rgba(0, 0, 0, 0.9);
        height: 360px;
        width: 350px;
        position: absolute;
        bottom: 35%;
        right: 5%;
        display: flex;
        box-shadow: 2px 2px 2px black;
        padding: 50px 15px;
    }
    .box-buy-ticket select {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        background:#7f8c8d;
    }
    .box-buy-ticket .buy-sort{
        width: 100%;
        color: white;

    }
    .box-buy-ticket option{
        width: 100%;
    }
    .tem-box-ticket {
        background: #f26b38;
        padding: 7px 20px;
        position: absolute;
        top: 0;
        left: 0;
        color: white;
    }
    .btn-buy-ticket {
        background: #f26b38;
        padding: 10px 15px;
        position: absolute;
        bottom: 10px;
        right: 15px;
        border: none; 
        cursor: pointer;
        color: white;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #f26b38;
        text-shadow: 0 0 0.25px currentColor;
    }
    .ant-tabs-ink-bar {
        background:  #f26b38;
    }



    
    .row-movie {
        
    }
    .title {
        padding: 50px 0px 50px 0px;
    }
    .title > span {
        padding: 10px;
        margin: 10px 0px;
        background: #dc4c18;
        color: white;
        display: inline-block;
    }
    .title .span2 {
        background: #d6d6d6;
    }
    .span2 > a {
        color: black;
    }
    .meta-title {
        padding: 5px;
        background: #f0f2f5;
    }
    .box-card {
        background: #f0f2f5;
    }
    .row-movie .box-card:hover .img-mask {
        opacity: 1;
    }
    .img-mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        height: 78%;
    }
    .img-mask button {
        display: inline-block;
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #ffffff;
        font-weight: 400;
        border: 1px solid #ffffff;
        padding: 15px 30px;
        text-decoration: none;
        line-height: 1;
        background: transparent;
        transition: all 0.3s;
    }
    .img-mask button:hover {
        background: #f26b38;
        border: 1px solid #f26b38;
        cursor: pointer;
    }
    .view-more {
        float: right;
        margin: 50px 0px 50px 0px;
    }
    .view-more  button{
        display: inline-block;
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #f26b38;
        border: 1px solid #f26b38;
        padding: 15px 20px;
        text-decoration: none;
        line-height: 1;
        transition: all 0.3s;
    }
    .view-more  button:hover {
        background: #f26b38;
        color: white;
        cursor: pointer;
    }



    .row-blog {
        clear: both;
    }

    .blog-bl-phim {
        float: left;
        width: 50%;
        padding-right: 10px;
    }
    .title-blog{
        font-size: 1rem;
        font-weight: bold;
    }
    .container-blog {
        margin-top: 25px;
    }
    .blog-card {
        display: flex;
        margin-top: 20px;
    }
    .content-card {
        font-size: 1rem;
        padding: 2px 25px;
    }
    .content-card h4 {
        font-size: 1em;
    }
    .content-card .description {
        font-size: 0.8em;
        color: #95a5a6;
    }
    .content-card .icon {
        padding: 5px 0px;
        font-size: 0.8em;
    }
    .content-card .icon > span {
        margin-right: 20px;
    }



    .row-promotion {
        margin-top: 150px;
        clear: both;
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

    

    .row-rule {
        margin-top: 50px;
    }
    .content-rule {
        padding: 0px 21px 4px 0px;
    }
    .content-rule > p{
        margin-top: 15px;
        font-size: 0.9rem;
        font-family: Arial, Helvetica, sans-serif;
    }

    
`;

