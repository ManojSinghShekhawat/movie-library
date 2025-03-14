import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./styles/latestMovie.scss";

const Home = ({ movieList }) => {
  // console.log(movieList);
  if (!movieList) {
    return (
      <>
        <p>Loading.....</p>
      </>
    );
  }
  return (
    <>
      <div className="latest-movie">
        {movieList.map((movie, index) => (
          <MovieCard title={movie.Title} image={movie.Poster} key={index} />
        ))}
      </div>
    </>
  );
};

export default Home;
