import styled from "styled-components";

export const ListBuyTicketStyle = styled.div`
  .example {
    margin: 20px 0;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
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
  #styleTicket {
    h4 {
      color: red;
    }
  }
  #resetStyleRap {
      color: red;
  }
  .row-buyticket {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    .row1,
    .row2,
    .row3 {
      width: 32%;
      position: relative;
      top: 0%;
    }
    .ant-collapse-content > .ant-collapse-content-box {
      padding: 0;
    }
    .panel {
      background: #dc4c18;
      border-bottom: none;
      text-align: center;
    }
    .panel-box {
      width: 100%;
      padding: 25px 10px;
      text-align: left;
      display: flex;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      flex-wrap: wrap;
      &:hover {
        background: rgba(189, 195, 199,0.3);
      }
      h4 {
        width: 75%;
        padding: 5px;
        font-size: 1rem;
        span {
          color: rgba(0, 0, 0, 0.7);
        }
      }
    }
    /* .ant-collapse > .ant-collapse-item {
            border-bottom: none;
        } */
    .panel-box-rap {
      width: 100%;
      padding: 15px 10px;
      text-align: left;
      display: flex;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 0.86rem;
      &:hover {
        background: rgba(189, 195, 199,0.3);
      }
    }
    .panel-box-session {
      width: 100%;
      padding: 15px 10px;
      text-align: left;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-size: 0.86rem;
    }
    .session_box {
      font-size: 0.9rem;
      .row_show_time {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        p{
          padding: 3px 12px 0px 0px;
        }
        .box_time {
          margin-left: 20px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          font-size: 0.9rem;
          padding: 3px 12px;  
          cursor: pointer;
          color: black;
          display: flex;
          &:hover {
            background-color: #dc4c18;
            color: white;
            border-color: #dc4c18;
          }
        }
      }
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      color: white;
    }
    .ant-collapse
      > .ant-collapse-item
      > .ant-collapse-header
      .ant-collapse-arrow {
      /* display: none; */
    }
  }
`;
