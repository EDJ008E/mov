import React, { useState, useEffect } from 'react';
import moviesData from '../data/movies.json';
import FilterBar from '../components/FilterBar';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState(moviesData);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const genres = [...new Set(moviesData.map((movie) => movie.genre))];
  const ratings = [5, 6, 7, 8, 9];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (selectedGenre === '' || movie.genre === selectedGenre) &&
      (selectedRating === '' || movie.rating >= parseFloat(selectedRating))
    );
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Movie Review Website</h1>
      <FilterBar
        genres={genres}
        ratings={ratings}
        selectedGenre={selectedGenre}
        selectedRating={selectedRating}
        onGenreChange={handleGenreChange}
        onRatingChange={handleRatingChange}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
