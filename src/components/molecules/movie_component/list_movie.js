import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListMovieStyle } from "./list_movie-style";
import { URL_API } from "../../../config/app.config";

const { Meta } = Card;
const axios = require('axios');

function MovieCPN() {
  const [listMovie, setListMovie] = useState([]);

  const [state, setState] = useState("span");
  const [state2, setState2] = useState("span2");

  const ChangeBtn = (e) => {
    e.preventDefault();
    setState("span");
    setState2("span2");

    axios({
      method: 'get',
      url: `${URL_API}movie`,
    })
    .then(function (response) {
      // handle success
      setListMovie(response.data);
    }).catch(
      function (error) {
        console.log('DONT GET DATA MOVIE!')
        return Promise.reject(error)
      }
    )
  };

  const ChangeBtn2 = (e) => {
    e.preventDefault();
    setState2("span");
    setState("span2");

    axios({
      method: 'get',
      url: 'https://61966cdbaf46280017e7e07c.mockapi.io/movie_2',
    })
    .then(function (response) {
      // handle success
      setListMovie(response.data);
    }).catch(
      function (error) {
        console.log('DONT GET DATA MOVIE!')
        return Promise.reject(error)
      }
    )

  };

  useEffect(()=> {
    axios({
      method: 'get',
      url: `${URL_API}movie`,
    })
    .then(function (response) {
      // handle success
      setListMovie(response.data);
    }).catch(
      function (error) {
        console.log('DONT GET DATA MOVIE!')
        return Promise.reject(error)
      }
    )
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
                          <img src={item.thumbnail} width="400px" alt="img" />
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
                        title={item.title}
                        description={item.description}
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
