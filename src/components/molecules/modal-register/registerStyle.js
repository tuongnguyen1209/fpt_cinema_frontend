import styled from "styled-components";

export const RegisterStyle = styled.div`

    .container {

        .modal {
            display: block; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            display: flex;
            justify-content: center;
            align-items: center;
            .box-register {
                height: 680px;
                width: 500px;
                background: white;
                position: absolute;
                top: 50px;
                
                .box-content {
                    padding: 0px 50px;
                    font-size: 1.1rem;
                    .line {
                        height: 4px;
                    }
                    .title {
                        span {
                            width: 140px;
                            padding: 0px 15px;
                            text-align: center;
                            background: #d6d6d6;
                            a {
                                font-size: 1rem;
                                color: black;
                            }
                        }
                        .span2 {
                           background: #dc4c18;
                           a {
                               color: white;
                           }
                        }
                        
                    }                
                    .ant-btn-primary {
                        width: 100%;
                        background: #dc4c18;
                        border: none;
                        height: 40px;
                        font-size: 1.1rem;
                    }
                    .ant-input {
                        padding: 7px;
                    }
                    #components-form-demo-normal-login .login-form {
                        max-width: 300px;
                    }
                    #components-form-demo-normal-login .login-form-forgot {
                        float: right;
                    }
                    #components-form-demo-normal-login .ant-col-rtl .login-form-forgot {
                        float: left;
                    }
                    #components-form-demo-normal-login .login-form-button {
                        width: 100%;
                    }
                }
                .close-modal {
                    position: absolute;
                    top: 0px;
                    right: 20px;
                    font-size: 1.9rem;
                    color: grey;
                    opacity: 0.7;
                    cursor: pointer;
                }
            }
        }
    }
    @media screen and (max-width: 480px) {
        .container {

            .modal {
                display: block; /* Hidden by default */
                position: fixed; /* Stay in place */
                z-index: 99; /* Sit on top */
                padding-top: 100px; /* Location of the box */
                left: 0;
                top: 0;
                width: 100%; /* Full width */
                height: 100%; /* Full height */
                overflow: auto; /* Enable scroll if needed */
                background-color: rgb(0,0,0); /* Fallback color */
                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
                display: flex;
                justify-content: center;
                align-items: center;
                .box-register {
                    height: 780px;
                    width: 350px;
                    background: white;
                    position: absolute;
                    top: 10px;
                    .box-content {
                        padding: 10px;
                        .line {
                            width: 100%;
                        }
                        .title {
                            span {
                                width: 140px;
                                padding: 0px 15px;
                                text-align: center;
                                background: #d6d6d6;
                                a {
                                    font-size: 1rem;
                                    color: black;
                                }
                            }
                            .span2 {
                                background: #dc4c18;
                                a {
                                    color: white;
                                }
                            }
                        
                        }
                        .ant-btn-primary {
                            height: 40px;
                            font-size: 1rem;
                        }
                        .ant-input {
                            padding: 5px;
                        }
                    }
                    .close-modal {
                        top: 10px;
                        right: 15px;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }

`;