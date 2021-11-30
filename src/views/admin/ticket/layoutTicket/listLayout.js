import { Card, Col, Image, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

const { Meta } = Card;

const ListLayout = ({
  movieData,
  currentMovie,
  handleClickMovie,
  children,
}) => {
  return (
    <Row>
      <Col
        span={8}
        style={{ borderRight: "1px solid #95a5a6", padding: "5px 10px" }}
      >
        <div style={{ height: "60vh", overflowY: "auto" }}>
          {movieData.map((el) => (
            <Card
              key={el.id_session}
              hoverable
              style={{
                border: currentMovie === el.id ? "1px solid #7f8c8d" : "none",
              }}
              onClick={() => handleClickMovie(el.id_session)}
            >
              <Meta
                avatar={<Image src={el.image_lage} width={70} />}
                title={el.name_mv}
                // children={` ${el.date_start}-${el.date_end}`}
                description={`Ngày ${el.day}. Từ ${el.date_start} đến ${el.date_end}`}
              ></Meta>
            </Card>
          ))}
        </div>
      </Col>
      <Col span={16}>{children}</Col>
    </Row>
  );
};

ListLayout.propTypes = {
  movieData: PropTypes.array,
  handleClickMovie: PropTypes.func,
  currentMovie: PropTypes.number,
};

export default ListLayout;
