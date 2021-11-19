import styled from "styled-components";

export const PageMemberStyle = styled.div`
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
        margin: 10px 60px 50px 60px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .main_member {
            flex: 4;
            .line {
                width: 150%;
                height: 1px;
                .line1 {
                    width: 12%;
                }
            }
            .title {
                padding: 25px 0px 50px 0px;
            }
            .title > span {
                width: 110px;
                padding: 10px;
                margin: 10px 0px;
                background: #dc4c18;
                color: white;
                display: inline-block;
                text-align: center;
                a {
                    color: white;
                }
            }
            
            .title .span2 {
                background: #d6d6d6;
                a {
                    color: black;
                }
            }
            .ant-breadcrumb-link > a {
                color: grey;
                padding-right: 2px;
            }
        }
        .aside_member {
            flex: 2;
            margin-top: 50px;
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
            .row-movie {
                .img-mask {
                    height: 82%;
                }
            }
        }
    }
    
    @media screen and (max-width: 480px) {
        .container {
            display: block;
            margin: 0px;
            padding: 15px 5px 0px 5px;
            .main_member {
                .title {
                padding: 25px 0px 50px 0px;
                }
                .title > span {
                    width: 90px;
                    padding: 10px;
                    margin: 10px 0px;
                    background: #dc4c18;
                    color: white;
                    display: inline-block;
                    text-align: center;
                    a {
                        color: white;
                        font-size: 0.8rem;
                    }
                }
                .title .span2 {
                    background: #d6d6d6;
                    a {
                        color: black;
                    }
                }
                .ant-breadcrumb-link > a {
                    color: grey;
                    padding-right: 2px;
                    font-size: .8rem;
                }
                .line {
                    width: 150%;
                    height: 2px;
                }
                .top-container {
                    margin-top: -20px;
                }
                .div-container {
                    padding: 5px 0px;
                    p {
                        line-height: 25px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }
                    h4 {
                        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                        font-weight: bold;
                    }
                    .div-img {
                        padding: 10px 0px;
                        width: 370px;
                        .ant-image-img {
                            height: 100px;
                            width: 95%;
                        }
                    }
                    .img2 {
                        .ant-image-img {
                            height: 130px;
                            width: 100%;
                        }
                    }
                    .img3 {
                        .ant-image-img {
                            height: 200px;
                            width: 100%;
                        }
                    }
                    ul {
                        line-height: 30px;
                        li {
                        margin-left: 25px;
                        list-style-type: square;
                    }
            }
                }
            }
            .aside_member {
                display: none;
            }
        }
    }
`