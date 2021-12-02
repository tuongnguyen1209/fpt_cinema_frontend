import styled from "styled-components";
import background from "../../../assets/images/background.jpg";

export const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .wrap-logo {
    z-index: 3;
    .logo {
      font-size: 4rem;
    }
  }
  .wrap-spin {
    z-index: 3;
  }
  .wrap_backdrop {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;
