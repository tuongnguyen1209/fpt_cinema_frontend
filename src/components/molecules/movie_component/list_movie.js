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
}) {
  // const Photo = React.lazy(() => import('./features/Phto'));

  const [state, setState] = useState("span");
  const [state2, setState2] = useState("span2");
  const [loading, setLoading] = useState(true);

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
        const response = await MovieService.getMovieLimit(limit);
        // console.log(response);
        setListMovie(response.data.movie);
        setLoading(false);
      } catch (error) {
        console.log("Failed to fetch movie list: ", error);
      }
    };
    fetchMovieList();

    // try {
    //   axios.get('https://61966cdbaf46280017e7e07c.mockapi.io/movie_2')
    //   .then(function (response) {
    //     setListMovie(response.data);
    //     setLoading(false);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //     setLoading(false);
    //   });
    // }
    // catch {
    //   console.log("ERRO", message)
    // }

    // return;
  }, [limit]);

  // redux -------------------------------------------------------

  // const idMovie = useSelector(state => state.findIdMovie);
  // const dispatch = useDispatch();

  // console.log(idMovie);

  // const handleGetId = e => {

  //   console.log(e.target.value);
  //   const saveIdMovie = {
  //     id: e.target.value,
  //   }

  //   const action = findDetailMovie(saveIdMovie);
  //   console.log(action)
  //   dispatch(action)
  // }

  // redux -------------------------------------------------------
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
