import React from "react";
import MovieCPN from "../../../../molecules/movie_component/list_movie";
import styled from "styled-components";

const DropMenuStyle = styled.div`
  .container_custom {
    position: absolute;
    top: -14px;
    left: -47px;
    width: 980px;
    height: 545px;
    padding-bottom: 10px;
    background-color: black;
    overflow: hidden;
  }
  .row-movie {
    height: 260px;
    overflow: hidden;
    padding: 0px 10px;
    .line {
      width: 24%;
      padding-left: 20px;
      .line2 {
        background-color: black;
      }
    }
      .title {
        padding: 10px 0px 10px 0px;
        font-weight: bold;
        a {
          color: white;
        }
      }
      .title > span {
        padding: 10px 20px;
        margin: 10px 0px;
        background: black;
        color: white;
        display: inline-block;
      }
      .title .span2 {
        display: none;
        background: black;
      }
      .span2 > a {
        color: white;
      }
      .meta-title {
        margin-left: -20px;
        margin-top: -15px;
        background: black;
        .ant-card-meta-title {
          color: white;
          font-size: 0.7rem;
        }
        .ant-card-meta-description {
          color: white;
          font-size: 0.7rem;
          margin-top: -5px;
        }
      }
      .box-card {
        background: #f0f2f5;
        width: 220px;
        height: 146px;
        position: relative;
        /* border: 2px solid white; */
        left: 0;
        margin-left: 18px;
        margin-right: 5px;
        img {
          width: 220px;
          height: 150px;
        }
        .img-mask {
          height: 150px;
        }
      }
      .ant-col {
        margin-bottom: 10px;
      }
      .flex-card {
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
      }
      .row-movie .box-card:hover .img-mask {
        opacity: 1;
      }
      .img-mask button {
        display: inline-block;
        font-size: 13px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #ffffff;
        font-weight: 400;
        border: 1px solid #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        line-height: 1;
        background: transparent;
        transition: all 0.3s;
      }
      .img-mask button:hover {
        background: #f26b38;
        border: 1px solid #f26b38;
        cursor: pointer;
      }
      .view-more {
        float: right;
        margin: 50px 0px 50px 0px;
        display: none;
      }
    }
    .title > span {
      padding: 10px 20px;
      margin: 10px 0px;
      background: black;
      color: white;
      display: inline-block;
    }
    .title .span2 {
      display: none;
      background: black;
    }
    .span2 > a {
      color: white;
    }
    .meta-title {
      margin-left: -20px;
      margin-top: -15px;
      background: black;
      .ant-card-meta-title {
        color: white;
        font-size: 0.7rem;
      }
      .ant-card-meta-description {
        color: white;
        font-size: 0.7rem;
        margin-top: -5px;
      }
    }
    .box-card {
      background: #f0f2f5;
      width: 220px;
      height: 146px;
      position: relative;
      /* border: 2px solid white; */
      left: 0;
      margin-left: 18px;
      margin-right: 5px;
      img {
        max-width: 100%;
      }
    }
    .ant-col {
      margin-bottom: 10px;
    }
    .flex-card {
      display: flex;
      justify-content: space-around;
      flex-wrap: nowrap;
    }
    .row-movie .box-card:hover .img-mask {
      opacity: 1;
    }
    .img-mask button {
      display: inline-block;
      font-size: 13px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #ffffff;
      font-weight: 400;
      border: 1px solid #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      line-height: 1;
      background: transparent;
      transition: all 0.3s;
    }
    .img-mask button:hover {
      background: #f26b38;
      border: 1px solid #f26b38;
      cursor: pointer;
    }
    .view-more {
      float: right;
      margin: 50px 0px 50px 0px;
      display: none;
    }
  
`;

const DropMenu = () => {

  return (
    <DropMenuStyle>
      <div class="container_custom">
        <MovieCPN title={"PHIM ĐANG CHIẾU"} limit={4} statusMovieMenu={"congchieu"}/>
        <MovieCPN title2={"PHIM SẮP CHIẾU"} limit={4} statusMovieMenu={"sapchieu"} />
      </div>
    </DropMenuStyle>
  );
};

export default DropMenu;
