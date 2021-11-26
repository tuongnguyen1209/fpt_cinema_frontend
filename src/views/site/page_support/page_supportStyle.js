import styled from "styled-components";

export const PageSupportStyle = styled.div`
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
    }
    .title > span {
        padding: 10px 20px;
    }

    .row-question {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .main {
        flex: 4;
        .header-panel {
            font-size: 0.9rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
    }
    .aside {
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
        width: 100%;
        height: 3px;
    }

    @media screen and (max-width: 480px) {
        .container {
            position: relative;
            margin: 0px 10px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            flex-direction: column;
            
            .row-question {
                margin-bottom: 80px;
                .main {
                    .header-panel {
                        font-size: 0.7rem;
                    }
                }
                .aside {
                    display: none;
                }
            }
        }
        
    }
`
