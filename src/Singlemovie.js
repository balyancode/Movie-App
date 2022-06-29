import { LoadingOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useParams, NavLink } from "react-router-dom";
import useFetch from "./useFetch";
import "./App.css";

const Singlemovie = () => {
  const { id } = useParams();

  const { isLoading, movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return (
      <LoadingOutlined
        style={{ fontSize: "30px", marginLeft: "90vh", marginTop: "30vh" }}
      />
    );
  } else {
    return (
      <div
        style={{
          border: "1px solid black",
          marginLeft: "60vh",
          marginTop: "15vh",
          width: "90vh",
          backgroundColor: "grey",
          height:"66vh",
          display:"flex"
        }}
      >
        <Card
          hoverable
          style={{
            width: 240,
            display: "flex",
          }}
          cover={<img style={{width:"40vh",height:"66vh"}} alt="example" src={movie.Poster} />}
        >
          
        </Card>
        <div style={{marginLeft:"7vh",marginTop:"3vh"}}>
        <p style={{ marginLeft: "25px", fontSize: "25px" }}>{movie.Title}</p>
          <p style={{ marginLeft: "25px", fontSize: "18px" }}>
            {movie.Released}
          </p>
          <p style={{ marginLeft: "25px", fontSize: "18px" }}>{movie.Genre}</p>
          <p style={{ marginLeft: "25px", fontSize: "18px" }}>
            {movie.imdbRating} / 10
          </p>
          <p style={{ marginLeft: "25px", fontSize: "18 px" }}>
            {movie.Country}
          </p>
          
          <Button
            style={{
              width: "25vh",
              height: "30px",
              fontSize: "15px",
              backgroundColor: "#e9bcb7",
              marginLeft: "40px",
              marginTop: "60px",
            }}
          >
            <NavLink to="/">Go Back</NavLink>
          </Button>
          </div>
      </div>
    );
  }
};

export default Singlemovie;

// {
/* <div>
        <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
    </div> */
// }
