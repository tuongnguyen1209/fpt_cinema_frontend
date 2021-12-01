import styled from "styled-components";

export const HomePage = styled.div`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a {
        color: white;
    }
    .container_custom {
        position: relative;
        margin: 0px 120px 50px 120px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .img-mask {
            height: 270px;
        }
        .meta-title {
            background: #f0f2f5;
            color: black;
        }
    }
    @media screen and (min-width: 2200px) { 
        .carousel-style {
            height: 100vh;
        }
        .container_custom {
            display: none;
        }
    }
    
    @media screen and (max-width: 480px) {
        html {
            font-size: 150%;
        }
        .carousel-style {
            height: 130px;
        }
        .btn-play {
            font-size: 50px;
            &:hover {
                font-size: 58px;
            }
        }
        .box-buy-ticket {
            position: relative;
            width: auto;
            background: transparent;
            box-shadow: none;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin-top: 50px;
            height: 350px;
            .buy-sort {
            }
            select {
                background: #fff;
                color: black;
                padding: 10px;
            }
            .tem-box-ticket {
                background: transparent;
                color: black;
                border-bottom: 3px solid #f26b38;
                font-weight: bold;
                padding: 0;
                margin-left: 15px;
            }
            .ant-tabs-tab  {
               padding: 5px 7px;
               width: 90px;
               text-align: center;
               margin: 0px 0px 0px 4px;
               background: #333;
            }
            .btn-buy-ticket {
                width: 97%;
                margin: 15px 0px 10px 20px;
                position: relative;
            }
        }
        .container_custom {
            padding: 0px 10px;
            margin: 0 auto;
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
                    height: 120px;
                    margin: 5px;
                    .ant-card-meta-description {
                        font-size: 0.7rem;
                        margin-top: -10px;
                    }
                }
                img {
                    width: 150px;
                    height: 100px;

                }
                .img-mask {
                    height: 100%;
                    button {
                        padding: 8px 12px;
                    }
                }
                
            }
            .view-more {
                padding: 0px;
                button {
                    padding: 10px 15px
                }
            }

            .row-blog {
                display: flex;
                flex-direction: column;
                .blog-dien-anh {
                    margin-top: 60px;
                }
                .blog-bl-phim {
                    clear: both;
                    width: 100%;
                    padding-right: 10px;
                }
                .blog-card{
                    
                    .img-blog {
                        width: 120px;
                        height: 90px;
                    }
                    .content-card {
                        font-size: 0.8rem;
                        padding: 2px 0px 0px 10px;
                    }
                    .title-content {
                        white-space: wrap;
                        text-overflow: ellipsis;
                    }
                    .description {
                        display: none;
                    }
                }
               
            }

            .row-promotion {
                margin-top: 50px;
                display: flex;
                flex-direction: column;

                .flex-item {
                    .box-card {
                        width: 165px;
                        margin: 10px 0px;
                    }
                    .img-promotion {
                        max-width: 165px;
                    }
                    .img-mask-promotion_card {
                        display: none;
                    }
                }

            }
            .content-rule {
                text-align: justify;
                padding: 0px 3px 0px 4px;
            }
            
        }

    }
    
`;

