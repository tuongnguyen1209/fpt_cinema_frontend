import {
  AndroidOutlined,
  AppleOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import React from "react";
import { WrapFooter } from "./footer.style";

const FooterSite = () => {
  return (
    <WrapFooter>
      <div className="footer">
        <div className= "content">
          <div className="columns">

            <div className="column">
              <h4>Giới thiệu</h4>
              <li>Về chúng tôi</li>
              <li>Thỏa thuận sử dụng</li>
              <li>Quy chế hoạt động</li>
              <li>Chính sách bảo mật</li>
            </div>

            <div className="column">
              <h4>Góc điện ảnh</h4>
              <li>Thể loại phim</li>
              <li>Bình luận phim</li>
              <li>Blog điện ảnh</li>
              <li>Phim hay tháng</li>
            </div>

            <div className="column">
              <h4>Hỗ trợ</h4>
              <li>Góp ý</li>
              <li>Sale & Services</li>
              <li>Rạp / Giá vé</li>
              <li>Tuyển dụng</li>
            </div>

            <div className="column">            
              <div>
                <h4>Kết nối với Poly Cinema</h4>
                <p className="icon_app">
                  <FacebookFilled/>
                  <InstagramFilled/>
                  <TwitterCircleFilled/>
                </p>
              </div>
              <div>
                <h4>DOWNLOAD APP</h4>
                <p className="icon_app">
                  <AppleOutlined />
                  <AndroidOutlined />
                </p>
              </div>
            </div>

          </div>
          <div className="foot">
            <h2 className="logo">POLY CINEMA</h2>
            <div>© Copyright by Group 5</div>
          </div>
        </div>
      </div>
    </WrapFooter>
  );
};

export default FooterSite;
