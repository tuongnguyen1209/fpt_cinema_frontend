import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../../../serivces/movie.service";
import { ListMovieStyle } from "./list_movie-style";

const { Meta } = Card;

function MovieCPN({
  title,
  title2,
  titleHome,
  titleHome2,
  limit = 6,
  imgSize = false,
  statusMovieMenu,
}) {
  // const Photo = React.lazy(() => import('./features/Phto'));

  const [state, setState] = useState("span");
  const [state2, setState2] = useState("span2");
  const [loading, setLoading] = useState(true);
  const [statusMovie,setStatusMovie] = useState("congchieu");

  const ChangeBtn = (e) => {
    e.preventDefault();
    setState("span");
    setState2("span2");
    setStatusMovie("congchieu");
  };

  const ChangeBtn2 = (e) => {
    e.preventDefault();
    setState2("span");
    setState("span2");
    setStatusMovie("sapchieu");
  };

  const [listMovie, setListMovie] = useState([]);

  useEffect(function movie() {
    const fetchMovieList = async () => {
      try {
        if(statusMovieMenu) {
          const response = await MovieService.getMovieLimit(limit,statusMovieMenu);
          setListMovie(response.data.movie);
          setLoading(false);
          // console.log(response);
        }
        else {
          const response = await MovieService.getMovieLimit(limit,statusMovie);
          setListMovie(response.data.movie);
          setLoading(false);
        }
      } catch (error) {
        console.log("Failed to fetch movie list: ", error);
      }
    };
    fetchMovieList();


  }, [limit,statusMovie,statusMovieMenu]);
  

  return (
    <ListMovieStyle>
      <div className="row-movie">
        <div className="title">
          <span className={state}>
            <Link to="" onClick={ChangeBtn}>
              <Link to="pageMovie">{title || title2}</Link>
              {titleHome || titleHome2}
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
        <Skeleton loading={loading}>
          <Row className="flex-card">
            {listMovie.map((item, index) => (
              <div key={index}>
                <Col>
                  <Card
                    className="box-card"
                    cover={
                      <div className="box-mask">
                        <img
                          className="img_medium"
                          width="400px"
                          src={imgSize ? item.image_large : item.img_medium}
                          alt="img"
                        />
                        <div className="img-mask">
                          <Link to={`/detailmovie/${item.id_movie}`}>
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
        </Skeleton>

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
