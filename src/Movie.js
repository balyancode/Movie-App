import React from "react";
import { UseContextApp } from "./context";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import "./App.css";
const { Meta } = Card;

const Movie = () => {
  // const hoverable =()=>{
  //   setHoverable(true)
  // }
  const { isLoading, movie } = UseContextApp();
  // console.log(movie)
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {isLoading ? (
        <LoadingOutlined
          style={{ marginLeft: "90vh", marginTop: "50px", fontSize: "35px" }}
        />
      ) : (
        movie.map((curMovie,index) => {
          const { Title, Poster, imdbID } = curMovie;
          const titleLength = Title.substring(0, 20);
          return (
            <NavLink to={`movie/${imdbID}`}  key={index}>
              <div
               
                style={{ marginLeft: "17vh", marginTop: "15vh" }}
              >
                <Card
              className="card"
                  hoverable
                  style={{
                    height: "30vh",
                    width: "30vh",
                    marginLeft: "25%",
                  }}
                  cover={
                    <img
                      style={{ height: "35vh", width: "30vh" }}
                      alt={Title}
                      src={Poster}
                    />
                  }
                ></Card>
                <Meta
                  style={{
                    marginLeft: "25%",
                    marginTop: "6vh",
                    fontFamily: "monospace",
                    color: "black",
                    textDecoration: "none",
                    fontSize:"17px"
                  }}
                 title={titleLength} />
              </div>
            </NavLink>
          );
        })
      )}
    </div>
  );
};

export default Movie;
