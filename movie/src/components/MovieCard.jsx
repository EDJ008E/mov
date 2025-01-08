import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", width: "200px" }}>
      <img src={movie.poster} alt={movie.title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
