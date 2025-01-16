// src/GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="genre-filter">
      <label htmlFor="genre-select">Filter by Genre: </label>
      <select
        id="genre-select"
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
      >
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
