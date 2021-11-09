import styled from "styled-components";

export const HeaderCustom = styled.div`
  .header {
    background-color: #fff;
  }
  .wrap-logo {
    padding: 0 100px;
  }
  .text-center {
    text-align: center;
  }
  .searchwrap {
    display: flex;
    align-items: center;
  }
  .wrap-login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-site {
    justify-content: center;
    .menu-item {
      width: 150px;
      text-align: center;
      border-left: 1px solid white;
      display: flex;
      justify-content: center;
      font-size: 18px;
      :hover {
        background-color: #ff6624;
      }
      :first-child {
        border-left: none;
      }
    }
  }
  .btn-login {
    background-color: #29323d;
    border: 1px solid #29323d;
  }
`;
