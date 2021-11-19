import { HistoryOutlined, PlayCircleFilled, StarOutlined } from '@ant-design/icons';
import { Breadcrumb, DatePicker, Input, Modal, Rate, Select } from 'antd';
import moment from 'moment';
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MovieCPN from '../movie_component/list_movie';
import { DetailMovieCPNStyle } from "./detail_movieStyle";



const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

const DetailMovieCPN = () => {

    // bật tắt đánh giá  
    const [toggleStar, setToggleStar] = useState(false);

    const handleToggleStar = () => {
      setToggleStar(toggleStar === false ? true : false );
    }
    // end bật tắt đánh giá

    // đường dẫn từng trang
    const routes = [
        {
          path: '/',
          breadcrumbName: 'Trang Chủ',
        },
        {
          path: 'pagemovie',
          breadcrumbName: 'Phim đang chiếu',
        },
        {
          path: 'detailmovie',
          breadcrumbName: 'THE CONJURING: THE DEVIL MADE ME DO',
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

      // thực hiện open traller
      const iframeRef = useRef();

      const [isModalVisible, setIsModalVisible] = useState(false);
    
      const showModal = () => {
          setIsModalVisible(true);
      };
      
      const handleCancel = () => {
          setIsModalVisible(false);
          iframeRef.current.contentWindow.postMessage('{"event":"command","func":" pauseVideo ","args":""}', '*');
      }
      // thực hiện open traller

    return (
        <DetailMovieCPNStyle>
            <div className="container">
                <div className="main_detail">
                    <Breadcrumb itemRender={itemRender} routes={routes} />
                    <div className="container-detail">
                        <div className="box-detail">
                            
                            <div className="img-traller">
                                <img src="https://www.galaxycine.vn/media/2021/10/29/300_1635497907475.jpg" alt="123"/>
                                <PlayCircleFilled className="btn-play" onClick={showModal}/>
                                <Modal title="abc" width={610} visible={isModalVisible} onCancel={handleCancel} footer={null}>   
                                    <p><iframe ref={iframeRef} title="YTB" width="100%" height="315" src={'https://www.youtube.com/embed/UIHO6QXj0ms?enablejsapi=1&playerapiid=ytplayer'} frameBorder="0"></iframe></p>
                                </Modal> 
                            </div>

                            <div className="content_detail">
                                <h4>THE CONJURING: THE DEVIL MADE ME DO IT</h4>
                                <p>THE CONJURING: MA XUI QUỶ KHIẾN</p>
                                <div className="rate_star">
                                    <span>5/5 <StarOutlined /></span><button className="btn_rate_star" onClick={handleToggleStar}>Đánh giá</button>{ toggleStar ? <Rate allowHalf defaultValue={2.5} /> : ""} 
                                </div>
                                <div className="info_movie">
                                    <p>Time: <span><HistoryOutlined /> 120 phút</span></p>
                                    <p>Nhà sản xuất: <span>New Lane Cinema</span></p>
                                    <p>Quốc gia: <span>Mỹ</span></p>
                                    <p>Đạo diễn: <span>Micheal Chaves</span></p>
                                    <p>Diễn viên: <span>Vera Farmiga, Patrick Wilson</span></p>
                                    <p>Thể loại: <span>Kinh dị</span></p>
                                    <p>Ngày: <span>29/10/2021</span></p>
                                </div>
                            </div>  
                        </div>

                        <div className="content_movie">
                          <h3>Nội dung phim</h3>
                          <div className="line"><span className="line1"></span></div>
                          <p>
                            <b>The Conjuring: The Devil Made Me Do It</b> tiếp tục kể về một vụ án có thật từng làm chấn động thế giới.<br></br> <br></br> 
                            Arne đã sát hại Alan Bono, một quản lý cũi nhốt động vật có mối quan hệ thân thiết với anh ta. 
                            Tuy nhiên, kẻ sát nhân và những người thân khẳng định rằng "chính ma quỷ đã dẫn dắt làm việc này". <br></br><br></br>
                            Phim mới <b>The Conjuring: The Devil Made Me Do It</b> ra mắt tại các rạp chiếu phim từ 05.11.2021.  
                          </p>
                        </div>

                        <div className="show_time_movie">
                          <h3>Lịch chiếu</h3>
                          <div className="line"><span className="line1"></span></div>

                          <div className="select_show_time">

                            <div className="select_box">
                              <Select defaultValue={"cả nước"} size={'large'}>
                        
                                <Option value="cả nước" selected>Cả nước</Option>
                                <Option value="tp.hcm">TP.HCM</Option>
                                <Option value="hà nội">Hà nội</Option>
                                <Option value="đà nẵng">Đà nẵng</Option>
                                <Option value="huế">Huế</Option>
                                <Option value="hải phòng">Hải phòng</Option>
                                <Option value="đắk lắk">Đắk Lắk</Option>
                                
                              </Select>
                            </div>

                            <div className="select_box" size={'large'}>
                              <Input.Group>
                                <DatePicker defaultValue={moment('2021-11-20', dateFormat)} />
                              </Input.Group>
                            </div>
                            
                            <div className="select_box">
                              <Select defaultValue={"tất cả rạp"} className="select_box" size={'large'}>
                                
                                <Option value="tất cả rạp" selected>Tất cả rạp</Option>
                                <Option value="tp.hcm">Galaxy Quang Trung</Option>
                                <Option value="hà nội">Galaxy Vinh</Option>
                                <Option value="đà nẵng">Galaxy Đà nẵng</Option>
                                <Option value="huế">Galaxy Bến tre</Option>
                                
                              </Select>
                            </div> 
                          </div>
                        <div className="select_time">
                            <div  className="select_time_box">
                                <p className="tag_rap">Galaxy Quang Trung</p>
                                <div className="tag_rap_box">
                                  <p>2D - Phụ đề</p>
                                  <div>
                                      <Link to="" >18:30</Link>
                                      <Link to="" >18:30</Link>
                                      <Link to="" >18:30</Link>
                                  </div>
                                </div>
                            </div>

                            <div className="select_time_box">
                                <p className="tag_rap">Galaxy Quang Trung</p>
                                <div className="tag_rap_box">
                                  <p>2D - Phụ đề</p>
                                  <div>
                                      <Link to="" >18:30</Link>
                                      <Link to="" >18:30</Link>
                                      <Link to="" >18:30</Link>
                                  </div>
                                </div>
                            </div>

                            <div className="select_time_box">
                                <p className="tag_rap">Galaxy Quang Trung</p>
                                <div className="tag_rap_box">
                                  <p>2D - Phụ đề</p>
                                  <div>
                                      <Link to="" >18:30</Link>
                                      <Link to="" >18:30</Link>
                                      <Link to="" >18:30</Link>
                                  </div>
                                </div>
                            </div>

                        </div>

                        </div>
                    </div>
                </div>
                <div className="aside_detail">
                    <div className="box-email">
                      <h3>Nhận khuyến mãi</h3>
                      <div className="line"><span className="line1"></span></div>
                      <div className="box">
                        <form>
                          <Input placeholder="Email" name="email" type="email" required/>
                          <button type="submit">ĐĂNG KÝ</button>
                        </form>
                      </div>

                      <MovieCPN />

                    </div>

                </div>
            </div>
        </DetailMovieCPNStyle>
    )
}

export default DetailMovieCPN;