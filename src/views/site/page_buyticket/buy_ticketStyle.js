import styled from "styled-components";

export const BuyTicketStyle = styled.div`
    html {
        font-size: 100%;
    }
    a {
        color: white;
    }
    .container {
        position: relative;
        margin: 0px 120px 50px 120px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .line {
        height: 3px;
        width: 100%;
        display: flex;
    }

    @media screen and (min-width: 2000px) {
    
    }

    @media screen and (max-width: 480px) {
        .container {
            padding: 0px 10px;
            margin: 0 auto;
            .row-buyticket {
                display: flex;
                flex-direction: column;
            }
            .row1 {
                width: 100%;
                position: relative;
                top: 0%;
                height: 250px;
                overflow-x: scroll;
            }
            .row2,.row3 {
                width: 100%;
                position: relative;
                top: 0%;
                height: 200px;
                overflow-x: scroll;
            }
        }
    }

`;
