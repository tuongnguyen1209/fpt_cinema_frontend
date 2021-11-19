import styled from "styled-components";

export const SettingAccountStyle = styled.div`
    .container {
        position: relative;
        margin: 20px 60px 50px 60px;
        .main_setting_account {
            .title {
                padding: 25px 0px 20px 0px;
            }
            .ant-breadcrumb-link > a {
                color: grey;
                padding-right: 2px;
            }
            .line {
                width: 100%;
                height: 1px;
            }
            .form-group {
                padding: 0px 10px 15px 0px;
                line-height: 32px;
                label {
                    font-size: 15px;
                }
                input {
                    padding: 8px 14px;
                    background: #e9edf1;
                    border: 1px solid #ced0da;
                    color: black;
                    font-size: 0.8rem;
                }
            }
            .form-group_row1 {
                display: flex;
                width: 1000px;
                justify-content: space-between;
                align-items: center;
                .form-group:nth-child(1) {
                    width: 50%;
                }
                .form-group:nth-child(2) {
                    width: 22%;
                }
                .form-group:nth-child(3) {
                    width: 22%;
                }
            }
            .form-group_row2 { 
                display: flex;
                width: 1000px;
                justify-content: space-between;
                align-items: center;
                .form-group:nth-child(1) {
                    width: 50%;
                }
                .form-group:nth-child(2) {
                    width: 40%;
                }
                .form-group:nth-child(3) {
                    width: 4%;
                }
            }
            .form-group_checkbox {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                width: 15%;
                margin: 10px 0px;
            }
            .box_change_password {
                margin-top: 20px;
                .form-group {
                    width: 36%;
                    input {
                        background: white;
                        outline: black;
                        border-radius: 2px;
                    }
                }
            }
            .form-group {
                button {
                    margin-top: 20px;
                    padding: 6px 20px;
                    background: #dc4c18;
                    border: #dc4c18;
                    color: white;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.5s;
                }
            }
        }
        .row-movie {
            .img-mask{
                height: 82%;
            }
            .view-more {
                display: none;
            }
            .line {
                width: 25%;
            }
        }
    }

    @media screen and (max-width: 480px) {
        .container {
            margin: 20px 5px;
            .main_setting_account {
                .form-group {
                    padding: 0px 10px 15px 0px;
                    line-height: 32px;
                    label {
                        font-size: 15px;
                    }
                    input {
                        padding: 8px 14px;
                        background: #e9edf1;
                        border: 1px solid #ced0da;
                        color: black;
                        font-size: 0.8rem;
                    }
                }
                .form-group_row1 {
                    display: inline-block;
                    width: 100%;
                    .form-group:nth-child(1) {
                        width: 100%;
                    }
                    .form-group:nth-child(2) {
                        width: 100%;
                    }
                    .form-group:nth-child(3) {
                        width: 100%;
                    }
                }
                .form-group_row2 { 
                    display: inline-block;
                    width: 100%;
                    .form-group:nth-child(1) {
                        width: 100%;
                    }
                    .form-group:nth-child(2) {
                        width: 100%;
                    }
                    .form-group:nth-child(3) {
                        width: 0%;
                    }
                }
                .form-group_checkbox {
                    display: inline-block;
                    width: 100%;
                    margin: 10px 0px;
                }
                .box_change_password {
                    margin-top: 20px;
                    .form-group {
                        width: 100%;
                        input {
                            background: white;
                            outline: black;
                        }
                    }
                }
                .form-group {
                    button {
                        margin-top: 20px;
                        padding: 6px 20px;
                        background: #dc4c18;
                        border: #dc4c18;
                        color: white;
                        font-size: 0.9rem;
                        cursor: pointer;
                        transition: all 0.5s;
                    }
                }
            
            }
            .row-movie {
                display: none;
            }
    
        }
    }
`