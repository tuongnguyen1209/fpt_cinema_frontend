import styled from "styled-components";

export const WrapFooter = styled.div`
  .footer {
    height: 400px;
    width: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ecf0f1;
      box-shadow: 0px -2px 1px rgba(0,0,0,0.1);
      background-color: #1a1a1a;
      height: 100%;
      width: 100%;
      .columns {
        width: 100%;
        flex: 95%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .column {
          color: #a0a3a7;
          cursor: pointer;
          h4 {
            position: relative;
            font-size: 1.3rem;
            color: #a0a3a7;
            text-transform: uppercase;
            &::before {
              background-color: #f26b38;
              content: "";
              height: 22px;
              left: -10px;
              top: 6px;
              position: absolute;
              width: 4px;
            }
          }
          li {
            font-size: 1rem;
            font-family: 'Times New Roman', Times, serif;
            list-style-type: none;
            margin-left: -12px;
            font: inherit;
            vertical-align: baseline;
            text-transform: uppercase;
            line-height: 25px;
            &::before {
              padding-right: 2px;
              content: " ➤ ";
              font-size: .6rem;
            }
          }
          .icon_app { 
            span {
              font-size: 1.5rem;
              margin-right: 5px;
            }
          }
      }
    }
    .foot {
      flex: 5%; 
      width: 100%;
      padding: 20px 100px;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        flex: 20%;
      }
      div {
        flex: 80%;
        color: #a0a3a7;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .footer {
    height: 500px;
    width: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #ecf0f1;
      box-shadow: 0px -2px 1px rgba(0,0,0,0.1);
      background-color: #1a1a1a;
      height: 100%;
      width: 100%;
      padding: 15px;
      .columns {
        width: 100%;
        flex: 95%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        .column {
          color: #a0a3a7;
          cursor: pointer;
          width: 40%;
          margin-bottom: 10px;
          &:first-child {

          }
          h4 {
            position: relative;
            font-size: 1rem;
            color: #a0a3a7;
            text-transform: uppercase;
            &::before {
              background-color: #f26b38;
              content: "";
              height: 22px;
              left: -10px;
              top: 6px;
              position: absolute;
              width: 4px;
            }
          }
          li {
            font-size: 0.7rem;
            font-family: 'Times New Roman', Times, serif;
            list-style-type: none;
            margin-left: -12px;
            vertical-align: baseline;
            text-transform: uppercase;
            line-height: 35px;
            &::before {
              padding-right: 2px;
              content: " ➤ ";
              font-size: .6rem;
            }
          }
          .icon_app { 
            span {
              font-size: 1.1rem;
              margin-right: 5px;
            }
          }
      }
    }
    .foot {
      flex: 10%; 
      width: 100%;
      padding: 10px 0px;
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .logo {
        text-align: center;
      }
      div {
        display: none;
        flex: 0%;
        color: #a0a3a7;
      }
    }
  }
}

}
`;
