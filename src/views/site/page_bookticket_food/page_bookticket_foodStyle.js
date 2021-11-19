import styled from "styled-components";

export const PageBookTicketFoodStyle = styled.div`
    html {
        font-size: 100%;
    }
    a {
        color: white;
    }
    .container {
        position: relative;
        margin: 20px 130px 50px 130px;
        overflow: hidden;
    }

    @media screen and (max-width: 480px) {
        .container {
        position: relative;
        margin: 10px;
        overflow: hidden;
    }
    }
`