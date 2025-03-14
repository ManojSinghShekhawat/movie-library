import React, { useState, useEffect } from "react";
import Home from "./comonents/Home";
import Nav from "./comonents/Nav";

const url = "https://omdbapi.com/?i=tt3896198&apikey=a52b5a5a&s=ironman";

function App() {
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    async function fetchMovieList(url) {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await resp.json();
        setMovieList(data.Search);
        // console.log(data.Search);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieList(url);
    // console.log(movieList);
  }, []);

  //search Function

  const submitSearch = async (e, search) => {
    e.preventDefault();

    try {
      const resp = await fetch(
        `https://omdbapi.com/?i=tt3896198&apikey=a52b5a5a&s=${search}`
      );
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await resp.json();
      setMovieList(data.Search);
      console.log(data.Search);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Nav submitSearch={submitSearch} />
      <Home movieList={movieList} />
    </>
  );
}

export default App;
