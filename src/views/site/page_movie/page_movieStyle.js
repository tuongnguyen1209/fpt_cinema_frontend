import styled from "styled-components";

export const PageMovieStyle = styled.div`
    html {
        font-size: 100%;
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
        .box-card {
            float: left;
        }
        .img_medium{
            height: 432px;
            width: 291px;
            object-fit: cover;
        }
        .img-mask {
            height: 432px;
            width: 290px;
        }
        .meta-title {
            margin-top: -14px;
            margin-left: -20px;
            overflow: hidden;
            width: 280px;
            .ant-card-meta-title {
                text-overflow: ellipsis;
            }
            
        }
        .view-more {
            display: none;
        }
        .distancee {
            margin: 50px;
        }
    }

    @media screen and (max-width: 480px) {
        .container_custom {
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
                    width: 160px;
                    height: 250px;
                    margin: 5px 5px 60px 5px;
                }
                .img_medium{
                    width: 150px;
                    height: 250px;
                    object-fit: fill;
                }
                .img-mask {
                    width: 150px;
                    height: 250px;
                    button {
                        padding: 8px 12px;
                    }
                }
                .meta-title {
                    margin-top: -24px;
                    margin-left: -20px;
                    overflow: hidden;
                    width: 140px;
                    font-size: 0.8rem;
                    .ant-card-meta-title {
                        text-overflow: ellipsis;
                        font-size: 0.8rem;
                    }
                    .ant-card-meta-description {
                        text-overflow: ellipsis;
                        font-size: 0.8rem;
                        margin-top: -10px;
                    }
                }
                
            }
        }
    }
`
