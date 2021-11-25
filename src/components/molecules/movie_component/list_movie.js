import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../../serivces/movie.service";
import { ListMovieStyle } from "./list_movie-style";

const { Meta } = Card;

function MovieCPN() {
  // const Photo = React.lazy(() => import('./features/Phto'));
  
  const [state, setState] = useState("span");
  const [state2, setState2] = useState("span2");
  
  const ChangeBtn = (e) => {
    e.preventDefault();
    setState("span");
    setState2("span2");
    
  };
  
  const ChangeBtn2 = (e) => {
    e.preventDefault();
    setState2("span");
    setState("span2");
    
  };
  
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

  
  return (
    <ListMovieStyle>
      <div className="row-movie">
        <div className="title">
          <span className={state}>
            <Link to="" onClick={ChangeBtn}>
              PHIM ĐANG CHIẾU
            </Link>
          </span>
          <span className={state2}>
            <Link to="" onClick={ChangeBtn2}>
              PHIM SẮP CHIẾU
            </Link>
          </span>
          <div className="line">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </div>

        <Row className="flex-card">
          {listMovie.map((item, index) => (
              <div key={index}>
                <Col >
                    <Card
                      className="box-card"
                      cover={
                        <div className="box-mask">
                          <img src={item.image} width="400px" alt="img" />
                          <div className="img-mask">
                            <Link to={item.href}>
                              <button>Mua Vé</button>
                            </Link>
                          </div>
                        </div>
                      }
                      >
                      <Meta
                        className="meta-title"
                        title={item.name}
                        description={item.name_vn}
                        />
                    </Card>
                </Col>
              </div>
          ))}
        </Row>

        <div className="view-more">
          <Link to="/pagemovie">
            <button>
              Xem Thêm <RightOutlined />
            </button>
          </Link>
        </div>
      </div>
    </ListMovieStyle>
  );
}

export default MovieCPN;
