// src/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie.title)}>
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  );
};

export default MovieCard;
