import React, { useState, useEffect } from "react";
import Home from "./comonents/Home";
import Nav from "./comonents/Nav";
import Pagination from "./comonents/Pagination";

const baseUrl = "https://omdbapi.com/?i=tt3896198&apikey=a52b5a5a&s=";

function App() {
  const [movieList, setMovieList] = useState([]);
  let [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("ironman");

  //fetch movies
  useEffect(() => {
    async function fetchMovieList() {
      try {
        setMovieList([]);
        const resp = await fetch(`${baseUrl}${searchTerm}&page=${page}`);
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
    }
    fetchMovieList();
    // console.log(movieList);
  }, [page, searchTerm]);

  //search Function

  const submitSearch = async (e, search) => {
    e.preventDefault();
    setSearchTerm(search);
  };

  const decreasePage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const increasePage = () => setPage((prevPage) => prevPage + 1);

  return (
    <>
      <Nav submitSearch={submitSearch} />
      <Home movieList={movieList} />
      <Pagination
        page={page}
        decreasePage={decreasePage}
        increasePage={increasePage}
      />
    </>
  );
}

export default App;
