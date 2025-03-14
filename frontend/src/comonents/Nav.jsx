import React, { useState } from "react";
import "./styles/nav.scss";
const Nav = ({ submitSearch }) => {
  const [search, setSearch] = useState("");
  const funSearch = async (e) => {
    await submitSearch(e, search);
    setSearch("");
  };
  return (
    <nav>
      <h1>MOVIEFLIX</h1>
      <form onSubmit={funSearch}>
        <input
          value={search}
          name="movieName"
          type="text"
          placeholder="Enter Movie Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Nav;
