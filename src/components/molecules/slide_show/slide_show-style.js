import styled from "styled-components";

export const SlideShowStyle = styled.div`
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
        padding: 5px;
        margin-top: 14px;
        background:#7f8c8d;
    }
    .box-buy-ticket .buy-sort{
        width: 100%;
        color: white;

    }
    .option-buy-ticket{
        margin: 10px;
        background: white;
        color: black;
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

    .img-slideshow {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn-play {
        position: absolute;
        font-size: 85px;
        cursor: pointer;
        transition: all 0.1s;
        color: thistle;
        opacity: 0.8;
        &:hover {
            font-size: 87px;
            opacity: 1;
        }
    }
`