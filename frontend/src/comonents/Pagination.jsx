import React, { useState } from "react";
import "./styles/pagination.scss";

const Pagination = ({ page, increasePage, decreasePage }) => {
  // console.log(page);
  return (
    <div className="pagination">
      <button onClick={decreasePage}>-</button>
      <p>{page}</p>
      <button onClick={increasePage}>+</button>
    </div>
  );
};

export default Pagination;
