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
        .ant-collapse-content > .ant-collapse-content-box {
            padding: 0;
        }
        .panel {
            background: #dc4c18;
            text-align: center;
            border-bottom: none;
        }
        .panel-box {
            width: 100%;
            padding: 25px 10px;
            text-align: left;
            display: flex;
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,0.1);

        }
        /* .ant-collapse > .ant-collapse-item {
            border-bottom: none;
        } */
        .panel-box-rap{
            width: 100%;
            padding: 15px 10px;
            text-align: left;
            display: flex;
            cursor: pointer;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            font-size: 0.86rem;
        }
        .session_box {
            font-size: 0.9rem;
            .row_show_time {
                display: flex;
                justify-content: space-around;
                align-items: center;
                span {
                    margin-left: 20px;
                    border: 1px solid rgba(0,0,0,0.3);
                    font-size: 0.9rem;
                    padding: 3px 12px;
                }
            }    
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
