import { HistoryOutlined, PlayCircleFilled, StarOutlined } from '@ant-design/icons';
import { Breadcrumb, DatePicker, Input, message, Modal, Rate, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieService from '../../../serivces/movie.service';
import MovieCPN from '../movie_component/list_movie';
import { DetailMovieCPNStyle } from "./detail_movieStyle";
import sessionService from "../../../serivces/session.service";
import {useDispatch,useSelector } from "react-redux";
import { saveTicketList } from "../../../redux/action/saveTicket";
import { Skeleton } from 'antd';

const { Option } = Select;
const dateFormat = 'YYYY-MM-DD';

const key = 'updatable';

const openMessage = () => {

  
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Cảm ơn bạn đã đánh giá!', key, duration: 2 });
  }, 1000);
};
const DetailMovieCPN = () => {
    // lấy id phim
    const idMovie = useParams().id;
    
    const [listMovie, setListMovie] = useState([]);
    const [listSession, setListSession] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
      const fetchMovieList = async () => {
        try {
          const response = await MovieService.getMovieById(idMovie);
          // console.log(response);
          setListMovie(response.data);
        }catch (error) {
          console.log("Failed to fetch movie list: ",error);
        }
      }
      fetchMovieList();
      
      const fetchSessionList = async () => {
        try {
          const response = await sessionService.getAll({id_movie : idMovie});
          // console.log(response.data.session);
          setListSession(response.data.session);
          setLoading(false);
        }catch (error) {
          console.log("Failed to fetch movie list: ",error);
        }
      }
      fetchSessionList();
      
      
    },[idMovie])
    // console.log(listMovie);
    
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
          breadcrumbName: `${listMovie?.name_movie}`,
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

      // login
      const loginReducer = useSelector((state) => state.user);
      const isLogin = loginReducer.isLogin;

      // redux -------------------------------------------
      const infoTicketList = useSelector((state) => state.saveTicket);
      const dispatch = useDispatch();
      console.table([infoTicketList]);
      

      const handleSaveTicket = e => {
          // console.log(e);
          const saveNameMovie = {
            name_mv: listMovie?.name_movie,
            img: listMovie?.img_medium,
            rap: "GALAXY QUANG TRUNG",
            session: e,
          };
      const action = saveTicketList(saveNameMovie);
      dispatch(action);
      // redux -------------------------------------------
    }
    
    useEffect(handleSaveTicket,[listMovie?.name_movie,listMovie?.img_medium,dispatch])

      return (
        <DetailMovieCPNStyle>
            <div className="container_custom">
                <div className="main_detail">
                  <Skeleton avatar paragraph={{ rows: 2 }} style={{padding: 20}} loading={loading}>
                    <Breadcrumb itemRender={itemRender} routes={routes} />
                    <div className="container-detail">
                        <div className="box-detail">
                            
                            <div className="img-traller">
                                <img src={listMovie?.img_large} alt="123"/>
                                <PlayCircleFilled className="btn-play" onClick={showModal}/>
                                <Modal title={listMovie?.name_movie} width={610} visible={isModalVisible} onCancel={handleCancel} footer={null}>   
                                    <p><iframe ref={iframeRef} title="YTB" width="100%" height="315" src={listMovie?.traller} frameBorder="0"></iframe></p>
                                </Modal> 
                            </div>

                            <div className="content_detail">
                                <h4>{listMovie?.name_movie}</h4>
                                <p>{listMovie?.name_vn}</p>
                                <div className="rate_star">
                                    <p>{listMovie?.rate}/5<StarOutlined /></p><button className="btn_rate_star" onClick={handleToggleStar}>Đánh giá</button>{ toggleStar ? <Rate onChange={openMessage} allowHalf defaultValue={4} /> : ""} 
                                </div>
                                <div className="info_movie">
                                    <p>Thời gian: <span><HistoryOutlined /> {listMovie?.time_mv} phút</span></p>
                                    <p>Nhà sản xuất: <span> {listMovie?.production}</span></p>
                                    <p>Quốc gia: <span> {listMovie?.country}</span></p>
                                    <p>Đạo diễn: <span> {listMovie?.director}</span></p>
                                    <p>Diễn viên: <span> {listMovie?.actor}</span></p>
                                    <p>Thể loại: <span> {listMovie?.cate}</span></p>
                                    <p>Ngày: <span> {listMovie?.day}</span></p>
                                </div>
                            </div>  
                        </div>

                        <div className="content_movie">
                          <h3>Nội dung phim</h3>
                          <div className="line"><span className="line1"></span></div>
                          <p>
                            {listMovie?.detail} 
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
                                <p className="tag_rap">{listMovie?.rap || "GALAXY QUANG TRUNG"}</p>
                                <div className="tag_rap_box">
                                  <p>2D - Phụ đề</p>
                                  <div>
                                      {listSession.map((item,index) => (
                                        <Link className="btn_time"
                                          key={index} 
                                          to={isLogin ? "/bookticket-food" : "auth/login"}
                                          >
                                            <span onClick={(e) => handleSaveTicket(item?.id_session)}>{item?.time_start}</span>
                                          </Link>
                                      ))}
                                  </div>
                                </div>
                            </div>

                        </div>

                        </div>
                    </div>
                  </Skeleton>
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

                      <MovieCPN titleHome={"PHIM ĐANG CHIẾU"} limit={4}/>

                    </div>

                </div>
            </div>
        </DetailMovieCPNStyle>
    )
}

export default DetailMovieCPN;