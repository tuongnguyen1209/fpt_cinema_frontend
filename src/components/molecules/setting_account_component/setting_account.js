import { Breadcrumb } from "antd";
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../title_component/title";
import { SettingAccountStyle } from "./setting_acountStyle";
import { Input } from "antd";
import { Checkbox } from 'antd';
import MovieCPN from "../movie_component/list_movie";
import PageTransaction from "../../../views/site/page_info_transaction/info_transaction";

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

    

    return (
        <SettingAccountStyle>
            <div className="container">
                <div className="main_setting_account">
                    <Breadcrumb itemRender={itemRender} routes={routes} />
                    <Title title1={"THÔNG TIN THÀNH VIÊN"} title2={"GIAO DỊCH CỦA TÔI"} setCheckPage={setCheckPage}/>
                    
                    {checkpage ? <div className="box_setting">
                        <form>
                            <div className="form-group_row1">
                                <div className="form-group">
                                    <label>Họ & tên</label>
                                    <Input size={'large'} type="text" value="NGUYỄN VĂN A" disabled/>
                                </div>
                                
                                <div className="form-group">
                                    <label>Điểm hiện tại</label>
                                    <Input size={'large'} type="text" value="100" disabled/>
                                </div>

                                <div className="form-group">
                                    <label>Tổng chi tiêu</label>
                                    <Input size={'large'} type="text" value="200.000 (VND)" disabled/>
                                </div>
                            </div>
                            <div className="form-group_row2">
                                <div className="form-group">
                                    <label>Email</label>
                                    <Input size={'large'} type="text" value="nguyenvana@gmail.com" disabled/>
                                </div>

                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <Input size={'large'} type="text" value="0123456789" disabled/>
                                </div>

                                <div className="form-group">
                                </div>
                            </div>

                            <div className="form-group_checkbox">
                            <Checkbox onChange={onChange}>Đổi mật khẩu</Checkbox>
                            </div>
                            
                            {openFormChangPass ? <div  className="box_change_password">
                                <div className="form-group">
                                    <Input size={'large'} type="text" placeholder="Mật khẩu hiện tại"/>
                                </div>
                                
                                <div className="form-group">
                                    <Input size={'large'} type="text" placeholder="Mật khẩu mới"/>
                                </div>

                                <div className="form-group">
                                    <Input size={'large'} type="text" placeholder="Xác nhận mật khẩu mới"/>
                                </div>
                            </div> : ""}

                            <div className="form-group">
                                <button type="submit">LƯU LẠI</button>
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