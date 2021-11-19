import styled from "styled-components";

export const PageMovieStyle = styled.div`
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
        .img-mask {
            height: 74%;
        }
        .view-more {
            display: none;
        }
        .distancee {
            margin: 50px;
        }
    }

    @media screen and (max-width: 480px) {
        .container {
            margin: 0px 10px;
            .line {
                display: flex;
                width: 100%;
                height: 4px;
            }
            .flex-card {
                .ant-card-cover {
                    position: relative;
                }
                .box-card {
                    width: 150px;
                    height: 150px;
                    margin: 5px;
                }
                img {
                    width: 150px;

                }
                .img-mask {
                    height: 100%;
                    button {
                        padding: 8px 12px;
                    }
                }
                
            }
        }
    }
`
