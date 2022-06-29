import React from "react";
import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <div style={{ marginTop: "50px", marginLeft: "75vh" }}>
        <Search />
      </div>
      <Movie />
    </div>
  );
};

export default Home;
