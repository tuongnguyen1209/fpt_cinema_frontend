import { EyeTwoTone, LikeTwoTone, RightOutlined, StarTwoTone } from '@ant-design/icons';
import { Card, Col, Image, Row, Tabs } from 'antd';
import React, { useEffect, useState } from "react";
import Slideshow from "../../../components/molecules/slideshow/slideshow";
import { HomePage } from "./HomeSytle";

const { Meta } = Card;
const { TabPane } = Tabs;

const Home = () => {
  
  // list movie
  const [listMovie, setListMovie] = useState([])

  console.log(listMovie)
  useEffect(() => {
    fetch('https://6189cf9d34b4f400177c425b.mockapi.io/movie')
    .then(response => response.json())
    .then(json => setListMovie(json))
  }, [])

  // list blog binh luan phim
  const [listBlogBl, setListBlogBl] = useState([])
  console.log(listBlogBl)
  useEffect(() => {
    fetch('https://6189cf9d34b4f400177c425b.mockapi.io/listBlog')
    .then(response => response.json())
    .then(json => setListBlogBl(json))
  }, [])
  
  // list promotion
  const [listPromotion, setlistPromotion] = useState([])
  console.log(listPromotion)
  useEffect(() => {
    fetch('https://6189cf9d34b4f400177c425b.mockapi.io/listPromotion')
    .then(response => response.json())
    .then(json => setlistPromotion(json))
  }, [])

  return (
    <>
      <HomePage >
        <Slideshow />

        <div className="container">


            <div className="row-movie">

              <div className="title">
                  <span><a href="www.facebook.com">PHIM ĐANG CHIẾU</a></span>
                  <span className="span2"><a href="www.facebook.com">PHIM SẮP CHIẾU</a></span>
                  <div className="line">
                    <div className="line1"></div>
                    <div className="line2"></div>
                  </div>
              </div>

              <Row gutter={[48, 8]}>
                {listMovie.map((item,index) => (
                  <Col span={8}>
                    <Card className="box-card"  key={index}
                      style={{ width: 400, height: 343.5}}
                      cover={<div><img src={item.thumbnail} width="400px" alt="img"/> <div className="img-mask"><a href={item.href}><button>Mua Vé</button></a></div></div>}
                    >
                      <Meta className="meta-title" title={item.title} description={item.description} />
                    </Card>
                  </Col>
                ))}
              </Row>
              
              <div className="view-more">
                <a href="www.abc.com"><button>Xem Thêm <RightOutlined /></button></a>
              </div>
            </div>

            <div className="row-blog">

              <div className="blog-bl-phim">
                <span className="title-blog">BÌNH LUẬN PHIM</span>
                <div className="line"><div className="line1"></div></div>

                <div className="container-blog">
                  {listBlogBl.map((item, index) => (
                    <div className="blog-card" key={index}>
                      <a href={item.href}>
                        <Image width={220} height={150} src={item.img} preview={false} alt={String}/>
                      </a>
                      <div className="content-card">
                        <h4>{item.title}</h4>
                        <p className="icon">
                          <span><LikeTwoTone /> {item.like_count}</span>
                          <span><EyeTwoTone /> {item.view_count}</span>
                          <span><StarTwoTone /> {item.star_count}/10</span>
                        </p>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="blog-dien-anh">
                <span className="title-blog">BLOG ĐIỆN ẢNH</span>
                <div className="line"><div className="line1"></div></div>

                <div className="container-blog">
                  {listBlogBl.map((item, index) => (
                    <div className="blog-card" key={index}>
                      <a href={item.href}>
                        <Image width={220} height={150} src={item.img} preview={false} alt={String}/>
                      </a>
                      <div className="content-card">
                        <h4>{item.title}</h4>
                        <p className="icon">
                          <span><LikeTwoTone /> {item.like_count}</span>
                          <span><EyeTwoTone /> {item.view_count}</span>
                          <span><StarTwoTone /> {item.star_count}/10</span>
                        </p>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>


            <div className="row-promotion">
                <span className="title-blog">TIN KHUYẾN MÃI</span>
                <div className="line"><div className="line1"></div></div>

                <div className="promotion-card">
                  <Row gutter={[8, 8]}>
                    {listPromotion.map((item,index) => (
                      <Col span={6}>
                        <Card className ="box-card"
                          key={index}
                          style={{ width: 280}}
                          cover={
                                <div>
                                  <img src={item.img} width="280px" alt="img"/>
                                    <div className="img-mask-promotion_card">
                                      <div className="content-promotion">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                      </div>
                                      <a href={item.href}>
                                        <button>CHI TIẾT</button>
                                      </a>
                                    </div>
                                </div>
                                }
                        >
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>


                <div className="row-rule">
                  <span className="title-blog">CINEMA</span>
                  <div className="line"><div className="line1"></div></div>

                  <div className="content-rule">
                      <p><b>CINEMA POLY</b> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003,
                          đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. 
                          Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem, <b>CINEMA POLY</b> còn 
                          hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.</p>
                          <p> Đến website galaxycine.vn,
                          quý khách sẽ được cập nhật nhanh chóng các phim hay nhất phim mới nhất đang chiếu hoặc sắp chiếu.
                          Lịch chiếu tại mọi hệ thống rạp chiếu phim của <b>CINEMA POLY</b> cũng được cập nhật đầy đủ hàng ngày
                          hàng giờ trên trang chủ.</p>
                          <p>Đặt vé tại <b>CINEMA POLY</b> dễ dàng chỉ sau vài thao tác vô cùng đơn giản.
                          Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày tùy
                          cách nào tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé theo các bước hướng dẫn.
                          Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của <b>CINEMA POLY</b>.
                          Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của <b>CINEMA POLY</b> hoặc quét mã QR để một bước vào rạp mà
                          không cần tốn thêm bất kỳ công đoạn nào nữa.</p>
                          <p>Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng
                          box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của <b>CINEMA POLY</b> sẽ gửi ngay
                          vào điện thoại và hộp mail của bạn.</p>
                          <p>Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong
                          mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh
                          để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, quý khách hãy đặt vé bằng box Mua Vé
                          Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.</p>
                          <p><b>CINEMA POLY</b> luôn có những chương
                          trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo,
                          tặng quà phim…  dành cho quý khách.</p>
                          <p>Trang web galaxycine.vn còn có mục Góc Điện Ảnh - sở hữu lượng dữ liệu
                          về phim, diễn viên và đạo diễn, giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng cao kiến thức
                          về điện ảnh của bản thân. Ngoài ra, vào mỗi tháng, <b>CINEMA POLY</b> cũng giới thiệu các phim sắp chiếu hot nhất
                          trong mục Phim Hay Tháng để quý khách sớm có sự tính toán.</p>
                          <p>Hiện nay, <b>CINEMA POLY</b> đang ngày càng phát triển
                          hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của
                          thế giới và Việt Nam nhanh chóng và sớm nhất.</p>
                  </div>
                </div>
            </div>



        </div>
      </HomePage>
    </>
  )
    
};

export default Home;
