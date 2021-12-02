import styled from "styled-components";

export const LoginStyle = styled.div`
  width: 100%;
  .container_custom {
    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/08edf155-45a9-45a1-9ffa-e44ae04029a8/VN-vi-20211115-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    width: 100% !important;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      position: absolute;
      top: 15px;
      left: 20px;
      font-size: 1.8rem;
      text-shadow: 2px 2px 2px black;
      a {
        color: red;
      }
    }
    .logo:hover {
      transform: scale(1.1), translate(0, 0);
      cursor: pointer;
    }
    .container_background {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 0.4);
      .form_cotainer {
        margin-top: 70px;
        background-color: rgba(0, 0, 0, 0.8);
        width: 50%;
        padding: 50px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        .title {
          color: white;
          font-size: 1.5rem;
          padding: 10px 0px;
          font-family: "Montserrat";
          align-self: center;
        }
        .ant-input {
          padding: 10px 15px;
          background-color: #333;
          color: white;
          &:focus {
            background-color: #333;
          }
          &:valid {
            background-color: #333;
          }
        }
        span {
          color: white;
        }
        .input_element {
          border-radius: 9px;
          background-color: #333;
          margin: 7px 0px;
        }
        .login-form-button {
          padding: 10px 15px;
          background-color: #e50914;
          color: white;
          width: 100%;
          height: 50px;
          border-radius: 9px;
          margin-bottom: -16px;
        }
        .login-form-forgot {
          color: white;
        }
        .login_facebook {
          /* span {
            color: #1e3799;
            padding: 0px 4px;
          }
          a {
            color: #1e3799;
          } */
        }
        .text_register {
          span {
            padding: 0px 4px;
            font-size: 0.9rem;
            color: rgba(190, 195, 195, 0.7);
          }
        }
      }
    }
  }
  .btn-google {
    span {
      color: black !important;
    }
  }
  @media screen and (max-width: 768px) {
    .container_custom {
      background-image: unset;
      height: 100vh;
      position: relative;
      display: block;
      justify-content: center;
      align-items: center;
      background-color: black;
      .logo {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 1.2rem;
        text-shadow: 2px 2px 2px black;
        a {
          color: red;
        }
      }
      .logo:hover {
        transform: scale(1), translate(0, 0);
        cursor: pointer;
      }
      .container_background {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-color: black;
        .form_cotainer {
          margin-top: 70px;
          background-color: rgba(0, 0, 0, 0.8);
          width: 100%;
          padding: 10px 10px 50px 10px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
