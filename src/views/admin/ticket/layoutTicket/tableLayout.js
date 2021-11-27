import React from "react";
import PropTypes from "prop-types";

const TableLayout = ({
  movieData,
  currentMovie,
  handleClickMovie,
  children,
}) => {
  const columns = [
    {
      title: "Hình",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
  ];

  return <div></div>;
};

TableLayout.propTypes = {
  movieData: PropTypes.array,
  handleClickMovie: PropTypes.func,
  currentMovie: PropTypes.number,
};

export default TableLayout;
