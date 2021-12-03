import styled from "styled-components";

export const SlideShowStyle = styled.div`
    .carousel-style {
        height: 500px;
        width: 100%;
        color: #fff;
        line-height: 160px;
        text-align: center;
        background: #364d79;
    }
    .carousel-div {
        height: 500px;
        width: 100%;
        position: relative;
    }
    .box-buy-ticket {
        background: rgba(0, 0, 0, 0.9);
        height: 360px;
        width: 350px;
        position: absolute;
        bottom: 80px;
        right: 70px;
        display: flex;
        box-shadow: 2px 2px 2px black;
        padding: 50px 15px;
    }
    .box-buy-ticket .select {
        width: 100%;
        padding: 5px;
        margin-top: 10px;
    }
    .box-buy-ticket .buy-sort{
        width: 100%;
        color: white;
    }
    .option-buy-ticket{
        margin: 10px;
        background: black;
        color: black;
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background-color: rgba(255,255,255,0.3);
        color: white;
    }
    span.ant-select-arrow {
        color: white;
        margin: -5px 0px;
    }
    .ant-select-selector::after {
        color: white;
        background-color: white;
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
        img {
            /* object-fit: cover; */
        }
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

    @media screen and (max-width: 480px) {
        .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background-color: rgba(255,255,255,0.3);
        color: black;
    }
    }

`