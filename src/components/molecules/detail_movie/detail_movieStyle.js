import styled from "styled-components";

export const DetailMovieCPNStyle = styled.div`
    .container_custom {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        padding-top: 40px;
        .main_detail {
            flex: 1;
            width: 65%;
            padding-right: 30px;
            .breadcrumb {
            }

            .ant-breadcrumb-link > a {
                color: grey;
                padding-right: 2px;
            }
            .box-detail {
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
                .img-traller {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                        width: 280px;
                        height: 95%;
                    }
                    .btn-play {
                        position: absolute;
                        font-size: 65px;
                        cursor: pointer;
                        transition: all 0.1s;
                        color: thistle;
                        opacity: 0.8;
                        &:hover {
                            font-size: 70px;
                            opacity: 1;
                        }
                    }
                }
                .content_detail {
                    flex: 2;
                    height: 100%;
                    padding: 0px 25px;
                    h4 {
                        font-size: 1.4rem;
                        color: rgba(0,0,0,0.7);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        text-transform: uppercase;
                    }
                    p {
                        font-size: 1.3rem;
                        color: #7f8c8d;
                        text-overflow: ellipsis;
                    }
                    .rate_star {
                        padding: 10px;
                        display: flex;
                        .btn_rate_star {
                            color: #ffffff;
                            background-color: #f26b38;
                            border-color: #f26b38;
                            text-transform: uppercase;
                            padding: 3px 8px;
                            margin: 5px 10px;
                            font-size: 0.8rem;
                        }
                        p{
                            font-size: 1.2rem;
                            color: #ff9f1a;
                            font-family: cursive;
                        }

                    }
                    .info_movie {
                        p {
                            font-size: 1rem;
                            padding: 5px 0px;
                            font-family: inherit;
                            text-transform: capitalize;
                            span {
                                color: black;
                            }
                        }
                    }
                }
            }
            .content_movie {
                margin-top: 30px;
                h3 {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .line {
                    height: 5px;
                    width: 300px;
                }
                p {
                    line-height: 30px;
                    padding: 15px 0px;
                    font-size: 1rem;
                    font-family: 'Roboto', sans-serif;
                }
            }

            .show_time_movie {
                margin-top: 30px;
                h3 {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .line {
                    height: 5px;
                    width: 220px;
                }
                .select_show_time {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .select_box {
                        padding: 15px 0px;
                        .ant-select-selector {
                            width: 250px;
                            align-items: center;
                        }
                        .ant-picker-input {
                            width: 250px;
                            padding: 8px 15px;
                        }
                    }
                }
                .select_time {
                    .select_time_box {
                        margin: 25px 0px; 
                        width: 100%;
                        .tag_rap {
                            width: 30%;
                            background: #f26b38;
                            border-left: 10px solid black;
                            padding: 10px;
                            color: white;
                        }
                        .tag_rap_box {
                            width: 100%;
                            height: 110px;
                            border: 1px solid rgba(0,0,0,0.5);
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            p {
                                flex: 1.2;
                                text-align: left;
                                padding-left: 20px;
                            }
                            div {
                                flex: 4;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                a {
                                    padding: 3px 12px;
                                    margin-right: 10px;
                                    color: black;
                                    border: 1px solid rgba(0,0,0,0.3);
                                }
                            }
                        }
                    }
                }
            }
        }
        .aside_detail {
            width: 30%;
            padding-top: 40px;
            .box-email {
                h3 {
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .line {
                    height: 5px;
                    width: 380px;
                }
                .box {
                    border: 1px solid black;
                    padding: 17px 13px;
                    margin-top: 40px;
                    input,button {
                        width: 100%;
                        padding: 10px 12px;
                    }
                    button {
                        margin-top: 10px;
                        background: #f26b38;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 480px) {
        .container_custom {
            display: flex;
            flex-direction: column;
            padding-top: 20px;
            .main_detail {
                width: 100%;
                padding-right: 0px;
            .breadcrumb {
            }

            .ant-breadcrumb-link > a {
                color: grey;
                padding-right: 2px;
            }
            .box-detail {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 15px;
                .img-traller {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 15px 0px;
                    img {
                        width: 190px;
                        height: 95%;
                    }
                    .btn-play {
                        position: absolute;
                        font-size: 65px;
                        cursor: pointer;
                        transition: all 0.1s;
                        color: thistle;
                        opacity: 0.8;
                        &:hover {
                            font-size: 70px;
                            opacity: 1;
                        }
                    }
                }
                .content_detail {
                    height: 100%;
                    display: flex;
                    flex-direction: column;

                    padding: 0px 10px 0px 60px;
                    h4 {
                        font-size: 1.2rem;
                        color: rgba(0,0,0,0.7);
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        text-transform: uppercase;
                    }
                    p {
                        font-size: 1.2rem;
                        color: #7f8c8d;
                        text-overflow: ellipsis;
                    }
                    .rate_star {
                        padding: 10px;
                        display: flex;
                        width: 100%;
                        align-items: flex-start;
                        .btn_rate_star {
                            color: #ffffff;
                            background-color: #f26b38;
                            border-color: #f26b38;
                            text-transform: uppercase;
                            padding: 3px 8px;
                            margin: 5px 10px;
                            font-size: 0.8rem;
                        }
                        span {
                            font-size: 1.2rem;
                            color: #ff9f1a;
                            font-family: cursive;
                        }

                    }
                    .info_movie {
                        p {
                            font-size: 1rem;
                            padding: 5px 0px;
                            font-family: Arial, Helvetica, sans-serif;
                            span {
                                color: black;
                            }
                        }
                    }
                }
            }
            .content_movie {
                margin-top: 30px;
                h3 {
                    font-size: 1rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .line {
                    height: 5px;
                    width: 200px;
                }
                p {
                    line-height: 20px;
                    padding: 15px 0px;
                    font-size: 0.9rem;
                    font-family: 'Roboto', sans-serif;
                }
            }

            .show_time_movie {
                margin-top: 20px;
                h3 {
                    font-size: 1rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .line {
                    height: 5px;
                    width: 150px;
                }
                .select_show_time {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 10px;
                    .select_box {
                        padding: 5px 0px;
                        .ant-select-selector {
                            width: 350px;
                            align-items: center;
                        }
                        .ant-picker-input {
                            width: 350px;
                            padding: 8px 15px;
                        }
                    }
                }
                .select_time {
                    .select_time_box {
                        margin: 25px 0px; 
                        width: 100%;
                        .tag_rap {
                            width: 70%;
                            background: #f26b38;
                            border-left: 10px solid black;
                            padding: 10px;
                            color: white;
                        }
                        .tag_rap_box {
                            width: 100%;
                            height: 80px;
                            border: 1px solid rgba(0,0,0,0.5);
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            p {
                                flex: 1.4;
                                text-align: left;
                                margin: 0px 10px;
                            }
                            div {
                                flex: 4;
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                a {
                                    padding: 3px 12px;
                                    margin-right: 10px;
                                    color: black;
                                    border: 1px solid rgba(0,0,0,0.3);
                                }
                            }
                        }
                    }
                }
            }
        }
        .aside_detail {
            display: none;
        }
    }
}
    
`