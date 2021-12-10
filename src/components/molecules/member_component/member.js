import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Title from "../title_component/title";
import { MemberStyle } from "./memberStyle";
import { Image } from "antd";

const Member = () => {
  // đường dẫn từng trang
  const routes = [
    {
      path: "/",
      breadcrumbName: "Trang Chủ",
    },
    {
      path: "member",
      breadcrumbName: "Thành viên",
    },
    {
      path: "chinh-sach",
      breadcrumbName: "Chính sách",
    },
  ];
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join("/")}>{route.breadcrumbName}</Link>
    );
  }
  // end đường dẫn từng trang

  return (
    <MemberStyle>
      <div className="container_custom">
        <div className="main_member">
          <Breadcrumb itemRender={itemRender} routes={routes} />
          <Title title1={"THỂ LỆ"} title2={"QUYỀN LỢI"} />
          <div>
            <div className="div-container top-container">
              <h4>THỂ LỆ</h4>
              <p>
                Chương trình khách hàng thân thiết Galaxy là chương trình ưu đãi
                dựa trên điểm tích lũy của các thành viên gồm Star, G-star,
                X-star. Với mỗi giao dịch tại hệ thống rạp Galaxy, bạn sẽ nhận
                được điểm thưởng tương ứng. Hình thức tích lũy như sau:
              </p>
              <div className="div-img">
                <Image
                  width={600}
                  src="
                                https://www.galaxycine.vn/media/2019/12/18/10-000d1star_1576655356732.jpg"
                />
              </div>
            </div>

            <div className="div-container">
              <h4>Cách làm tròn điểm thưởng: </h4>
              <p>
                Từ 0.1 đến 0.4: làm tròn xuống (Ví dụ: 3.2 sao sẽ được tích vào
                tài khoản 3 sao)<br></br>
                Từ 0.5 đến 0.9: làm tròn lên (Ví dụ: 3.5 sao sẽ được tích vào
                tài khoản 4 sao)
              </p>
            </div>

            <div className="div-container">
              <h4>Cấp độ thành viên</h4>
              <div className="div-img img2">
                <Image
                  width={600}
                  src="
                                https://www.galaxycine.vn/media/2019/12/18/thanh-tinh-diem_1576655615185.jpg"
                />
              </div>
              <p>
                <b>Star</b> là thành viên thân thiết có tổng chi tiêu trong năm
                dưới 2,000,000 đồng tính từ ngày 1/1-31/12. <br></br>
                <b>G-star</b> là thành viên thân thiết có tổng chi tiêu trong
                năm từ 2,000,000 đồng đến 3,999,999 đồng tính từ ngày 1/1-31/12.
                <br></br>
                <b>X-star</b> là thành viên thân thiết có tổng chi tiêu từ
                4,000,000 đồng trở lên tính từ ngày 1/1-31/12
              </p>
            </div>

            <div className="div-container">
              <h4>Chính sách đổi quà</h4>
              <div className="div-img img3">
                <Image
                  width={600}
                  src="
                                https://www.galaxycine.vn/media/2019/12/18/cs-doi-qua_1576655681445.jpg"
                />
              </div>
            </div>

            <div className="div-container">
              <h4>Lưu ý:</h4>
              <ul>
                <li>
                  Thông tin định danh thành viên gồm có email và số điện thoại
                  bắt buộc phải hợp lệ
                </li>
                <li>
                  Email không hợp lệ là email không có thực tại thời điểm Galaxy
                  Cinema rà soát dữ liệu thành viên.
                </li>
                <li>
                  Số điện thoại không hợp lệ là số điện thoại không liên lạc
                  được hoặc số điện thoại không thuộc sở hữu của chủ tài khoản
                  thành viên ở thời điểm Galaxy Cinema rà soát dữ liệu thành
                  viên
                </li>
                <li>
                  Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa
                  tài khoản thành viên mà không cần thông báo trước.
                </li>
                <li>
                  Tài khoản thành viên không có đủ thông tin định danh gồm email
                  và số điện thoại hợp lệ, Galaxy Cinema có quyền xóa tài khoản
                  thành viên mà không cần thông báo trước.
                </li>
                <li>
                  Điểm tích lũy có giá trị áp dụng tại tất cả các rạp Galaxy
                  Cinema trên toàn quốc.
                </li>
                <li>
                  Điểm tích lũy có thời hạn sử dụng là 01 năm (tính từ ngày
                  01/01/2021-31/12/2021).
                </li>
                <li>Điểm tích lũy sẽ bị trừ sau mỗi lần đổi quà.</li>
                <li>Không giới hạn số lượng quà tặng được đổi.</li>
                <li>
                  Bạn có thể dễ dàng kiểm tra điểm tích lũy của mình trên
                  Website Galaxy Cinema hoặc Ứng dụng GLX trên điện thoại
                  (Mobile App).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MemberStyle>
  );
};

export default Member;
