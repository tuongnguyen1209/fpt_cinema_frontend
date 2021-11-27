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
        <div>
          {movieData.map((el) => (
            <Card
              title={el.name}
              key={el.id}
              hoverable
              style={{
                border: currentMovie === el.id ? "1px solid #7f8c8d" : "none",
              }}
              onClick={() => handleClickMovie(el.id)}
            >
              <Meta
                avatar={<Image src={el.image} width={70} />}
                title={el.dateStart}
                description={el.category}
              />
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
