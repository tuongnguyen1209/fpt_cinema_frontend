import styled from "styled-components";

export const MemberStyle = styled.div`
    .container {
        .div-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 10px 0px;
            h4 {
                font-size: 1rem;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            p {
                font: inherit;
                line-height: 35px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            ul {
                line-height: 30px;
                li {
                    margin-left: 50px;
                    list-style-type: square;
                }
            }
            .div-img {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
            }
        }
    }
`