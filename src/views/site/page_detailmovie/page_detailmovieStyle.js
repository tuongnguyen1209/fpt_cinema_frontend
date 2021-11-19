import styled from "styled-components";

export const PageDetailMovieStyle = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        color: white;
    }
    .container {
        position: relative;
        margin: 0px 60px 50px 60px;
        overflow: hidden;
    }

    @media screen and (max-width: 480px) {
        .container {
            position: relative;
            margin: 5px;
            overflow: hidden;
        }
    }
`