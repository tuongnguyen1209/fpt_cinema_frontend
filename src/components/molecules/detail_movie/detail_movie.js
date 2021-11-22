import { HistoryOutlined, PlayCircleFilled, StarOutlined } from '@ant-design/icons';
import { Breadcrumb, DatePicker, Input, Modal, Rate, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MovieCPN from '../movie_component/list_movie';
import { DetailMovieCPNStyle } from "./detail_movieStyle";
import MovieService from '../../../serivces/movie.service';


const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';


const DetailMovieCPN = () => {

    const [listMovie, setListMovie] = useState([]);
    
    useEffect(() => {
      const fetchMovieList = async () => {
        try {
          const response = await MovieService.getAllMovie();
          console.log(response);
          setListMovie(response.movie);
        }catch (error) {
          console.log("Failed to fetch movie list: ",error);
        }
      }
      fetchMovieList();

    },[])

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
                                <img src={listMovie[0].image} alt="123"/>
                                <PlayCircleFilled className="btn-play" onClick={showModal}/>
                                <Modal title="abc" width={610} visible={isModalVisible} onCancel={handleCancel} footer={null}>   
                                    <p><iframe ref={iframeRef} title="YTB" width="100%" height="315" src={listMovie[0].traller} frameBorder="0"></iframe></p>
                                </Modal> 
                            </div>

                            <div className="content_detail">
                                <h4>{listMovie[0].name}</h4>
                                <p>{listMovie[0].image}</p>
                                <div className="rate_star">
                                    <span>5/5 <StarOutlined /></span><button className="btn_rate_star" onClick={handleToggleStar}>Đánh giá</button>{ toggleStar ? <Rate allowHalf defaultValue={2.5} /> : ""} 
                                </div>
                                <div className="info_movie">
                                    <p>Time: <span><HistoryOutlined /> {listMovie[0].time} phút</span></p>
                                    <p>Nhà sản xuất: <span>New Lane Cinema</span></p>
                                    <p>Quốc gia: <span>{listMovie[0].country}</span></p>
                                    <p>Đạo diễn: <span>{listMovie[0].dirctor}</span></p>
                                    <p>Diễn viên: <span>{listMovie[0].actor}</span></p>
                                    <p>Thể loại: <span>{listMovie[0].category}</span></p>
                                    <p>Ngày: <span>{listMovie[0].datestart}</span></p>
                                </div>
                            </div>  
                        </div>

                        <div className="content_movie">
                          <h3>Nội dung phim</h3>
                          <div className="line"><span className="line1"></span></div>
                          <p>
                            {listMovie[0].content} 
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