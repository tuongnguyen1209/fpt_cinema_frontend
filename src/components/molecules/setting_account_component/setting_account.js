import { Breadcrumb, Checkbox, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageTransaction from "../../../views/site/page_info_transaction/info_transaction";
import MovieCPN from "../movie_component/list_movie";
import Title from "../title_component/title";
import { SettingAccountStyle } from "./setting_acountStyle";

const SettingAccount = () => {     
    
    // đường dẫn từng trang
    const [path,setPath] = useState("Cập nhật tài khoản")
    const routes = [
        {
            path: '/',
            breadcrumbName: 'Trang Chủ',
        },
        {
            path: 'member',
            breadcrumbName: 'Thành viên',
        },
        {
            path: 'cap-nhat-tai-khoan',
            breadcrumbName: path,
        },
    ];

    function itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        );
    }
    // end đường dẫn từng trang

      
    const [openFormChangPass, setopenFormChangPass] = useState(false);

    // checkbox
    function onChange(e) {
        // console.log(`checked = ${e.target.checked}`);
        setopenFormChangPass(openFormChangPass === true ? false : true);
    }

    // state check page 
    const [checkpage, setCheckPage] = useState(true);

    // call api user 

    useEffect(()=> {
        if(checkpage) {
            setPath("Cập nhật tài khoản");
        }
        else {
            setPath("Lịch sử giao dịch");
        }
    },[checkpage])

    
    // lấy thông tin user trên redux
    const userReducer = useSelector((state) => state.user);  
    // console.log(userReducer.user);
    const userCurrent = userReducer.user; 



    // kiểm tra pass 
    const [oldPass, setOldPass] = useState(""); 
    const [newPass, setNewPass] = useState(""); 
    const [newPass2, setNewPass2] = useState(""); 
    const success = () => {
        message.success('Đổi mật khẩu thành công!');
    };

    const error = () => {
        message.error('Mật khẩu hiện tại không đúng!');
    };

    const error1 = () => {
        message.error('Bạn chưa điền đủ thông tin!');
    }
    const error2 = () => {
        message.error('Mật khẩu xác nhận khác nhau!');
    };

    const error3 = () => {
        message.error('Mật khẩu phải lớn hơn 8 ký tự!');
    };

    const checkOldPass = e => {
        console.log(e.target.value);
        setOldPass(e.target.value);
    }

    const checkNewPass = e => {
        console.log(e.target.value);
        setNewPass(e.target.value);
    }

    const checkAgainNewPass = e => {
        console.log(e.target.value);
        setNewPass2(e.target.value);
    }

    const handleChangePass =  (e) => {
        e.preventDefault();
        if(oldPass && newPass === "") {
            error1();
        }
        else {
            if(oldPass === userCurrent.password) {
                if(newPass === newPass2) {
                    if(newPass.length > 8){
                        success();
                    }
                    else {
                        error3();
                    }
                }
                else {
                    error2();
                }
            }
            else {
                error();
            }
        }
    }
    return (
        <SettingAccountStyle>
            <div className="container_custom">
                <div className="main_setting_account">
                    <Breadcrumb itemRender={itemRender} routes={routes} />
                    <Title title1={"THÔNG TIN THÀNH VIÊN"} title2={"GIAO DỊCH CỦA TÔI"} setCheckPage={setCheckPage}/>
                    
                    {checkpage ? <div className="box_setting">
                        <form>
                            <div className="form-group_row1">
                                <div className="form-group">
                                    <label>Họ & tên</label>
                                    <Input size={'large'} type="text" value={userCurrent?.full_name} disabled/>
                                </div>
                                
                                <div className="form-group">
                                    <label>Điểm hiện tại</label>
                                    <Input size={'large'} type="text" value={userCurrent?.star || "Chưa có số sao"} disabled/>
                                </div>

                                <div className="form-group">
                                    <label>Tổng chi tiêu</label>
                                    <Input size={'large'} type="text" value={userCurrent?.total || "Chưa có tổng chi tiêu"} disabled/>
                                </div>
                            </div>
                            <div className="form-group_row2">
                                <div className="form-group">
                                    <label>Email</label>
                                    <Input size={'large'} type="text" value={userCurrent.email} disabled/>
                                </div>

                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <Input size={'large'} type="text" value={userCurrent.phone} disabled/>
                                </div>

                                <div className="form-group">
                                </div>
                            </div>

                            <div className="form-group_checkbox">
                            <Checkbox onChange={onChange}>Đổi mật khẩu</Checkbox>
                            </div>
                            
                            {openFormChangPass ? <div className="box_change_password">
                                <div className="form-group">
                                        <Input 
                                            size={'large'} 
                                            type="password" 
                                            placeholder="Mật khẩu hiện tại" 
                                            onChange={checkOldPass}
                                            required
                                            value={oldPass}
                                        />
                                </div>
                                
                                <div className="form-group">
                                    <Input 
                                        size={'large'} 
                                        type="password" 
                                        placeholder="Mật khẩu mới" 
                                        onChange={checkNewPass}
                                        required
                                        value={newPass}
                                    />
                                </div>

                                <div className="form-group">
                                    <Input 
                                        size={'large'} 
                                        type="password" 
                                        placeholder="Xác nhận mật khẩu mới"
                                        onChange={checkAgainNewPass}
                                        required
                                        value={newPass2}
                                    />
                                </div>
                            </div> : ""}

                            <div className="form-group">
                                <button onClick={handleChangePass}>LƯU LẠI</button>
                            </div>
                        </form>
                    </div> : <PageTransaction />}
                    <MovieCPN titleHome={"PHIM ĐANG CHIẾU"}/>
                </div>
            </div>
        </SettingAccountStyle>
    )
}

export default SettingAccount;