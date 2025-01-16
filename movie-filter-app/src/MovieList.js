// src/MovieList.js
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import GenreFilter from './GenreFilter';
import './MovieList.css';

const MovieList = () => {
  const [movies] = useState([
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
    { title: "Forrest Gump", genre: "Drama", releaseYear: 1994 },
  ]);

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const handleMovieClick = (title) => {
    alert(title);
  };

  const filteredMovies = selectedGenre === "All Genres"
    ? movies
    : movies.filter(movie => movie.genre === selectedGenre);

  const genres = ["All Genres", ...new Set(movies.map(movie => movie.genre))];

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <GenreFilter genres={genres} selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
      <div className="movie-grid">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
