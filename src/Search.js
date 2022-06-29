import { Input } from "antd";
import React from "react";
import { UseContextApp } from "./context";

const Search = () => {
  const { query, setQuery, isError } = UseContextApp();

  return (
    <div>
      <form action="#" onSubmit={(e) => e.PreventDefault()}>
        <div
          style={{ marginBottom: "5px", fontSize: "20px", marginLeft: "18vh" }}
        >
          Search a Movie
        </div>
        <Input
          placeholder="SEARCH A MOVIE"
          style={{ width: "35vh", height: "30px", fontSize: "15px",marginLeft:"18vh" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div>
        <p style={{ color: "red" }}>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
};

export default Search;
