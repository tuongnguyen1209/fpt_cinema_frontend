import styled from "styled-components";

export const ListBuyTicketStyle = styled.div`
    .title {
        padding: 50px 0px 50px 0px;
    }
    .title > span {
        padding: 10px 25px;
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


    // css buy ticket

    .row-buyticket {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .row1, .row2, .row3 {
            width: 32%;
            position: relative;
            height: 700px;
            top: 0%;
        }
        .panel {
            background: #dc4c18;
            text-align: center;
        }
        .panel-box {
            width: 100%;
            padding: 25px 0px;
            text-align: left;
            display: flex;
            cursor: pointer;
        }
        .ant-collapse > .ant-collapse-item > .ant-collapse-header {
            color: white;
        }
        .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
            display: none;
        }
        .content {
            padding: 0px 10px;
            font-size: 0.8rem;
        }
    }
`;
