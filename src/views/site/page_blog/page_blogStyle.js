import styled from "styled-components";

export const PageBlogStyle = styled.div`
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
        .title > span {
            padding: 10px 20px;
        }
        .title-blog {
            font-size: 1.1rem;
        }
        .row-blog {
            display: flex;
            flex-direction: column;
        }
        .main_blog {
            margin: 50px 0px;
            flex: 5;
            .header-panel {
                font-size: 0.9rem;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }
            .blog-bl-phim {
                width: 100%;
                margin-bottom: 50px;
            }
            .blog-dien-anh {
                display: none;
            }
            .pagination {
                display: flex;
                justify-content: flex-end;
                margin-top: 100px;
                .ant-pagination-item-active {
                    background: #f26b38;
                    border-color: #f26b38;
                    a{
                        color: white;
                    }
                } 
                a {
                    color: black;
                }
            }
        }
        .aside_blog {
            position: relative;
            flex: 2;
            margin-top: 50px;
            margin-left: 100px;
            .title {
                display: block;
                margin-top: 40px;
            }
            .box-buy-ticket {
                position: relative;
                width: 400px;
                left: 0px;
                top: 0px;
                background: #ff4400e0;
                box-shadow: none;
                select {
                    background: white;
                    color: black;
                }
                .ant-tabs-tab-btn {
                    color: black;
                }
                .tem-box-ticket, .btn-buy-ticket {
                    background: rgba(0,0,0,0.8);
                }
                .ant-tabs-ink-bar {
                    background: rgba(0,0,0,0.8);
                }
            }
            .row-movie .ant-row {
                display: flex;
                flex-direction: column;
            }
        }
        .line {
            width: 280px;
            height: 5px;
            margin-top: 5px;
        }
    }
    @media screen and (max-width: 480px) {
        .container {
            position: relative;
            margin: 10px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            .title > span {
                padding: 10px 20px;
            }
            .title-blog {
                font-size: 1rem;
            }
            .row-blog {
                display: flex;
                flex-direction: column;
            }
            .main_blog {
                margin: 50px 0px;
                flex: 5;
                .header-panel {
                    font-size: 0.9rem;
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                }
                .blog-bl-phim {
                    width: 100%;
                    margin-bottom: 50px;
                }
                .blog-dien-anh {
                    display: none;
                }
                .img-blog {
                    width: 130px;
                    height: 100px;
                }
                .content-card {
                    padding: 2px 10px;
                    .title-content {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        max-width: 100%;
                        font: inherit;
                    }
                    .description {
                        display: none;
                    }
                }
                .pagination {
                    display: flex;
                    justify-content: center;
                    margin-top: 50px;
                }
            }
            .aside_blog {
                display: none;
            }
        }
    }
`