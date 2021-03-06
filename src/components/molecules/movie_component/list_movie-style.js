import styled from "styled-components";

export const ListMovieStyle = styled.div`
    .row-movie {
        transition: all 0.5s;
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
        padding: 0px;
        background: #f0f2f5;
        color: black;
    }
    .box-card {
        background: #f0f2f5;
        width: 400;
        height: 343.5; 
        position: relative;
    }
    .ant-col {
        margin-bottom: 20px;
    }
    .flex-card {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .row-movie .box-card:hover .img-mask {
        opacity: 1;
    }
    .img_medium {
        width: 400px;
        height: 270px;
        object-fit: cover;
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
        height: 270px;
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
  

` 