import React from "react";

const MovieCard = ({ title, image }) => {
  const defaultImg =
    "https://m.media-amazon.com/images/M/MV5BYzA3YjNjZDAtYWU2MC00YmIyLTkzMjEtOGE5YmIyZmYxODIzXkEyXkFqcGc@._V1_SX300.jpg";
  const imgURL = image === "N/A" ? defaultImg : image;
  //   console.log(imgURL);
  return (
    <div className="movie-card relative w-60 h-80 rounded-lg overflow-hidden shadow-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgURL})`,
          filter: "brightness(0.6)",
        }}
      ></div>
      {/* <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">Description</p>
      </div> */}
    </div>
  );
};

export default MovieCard;
