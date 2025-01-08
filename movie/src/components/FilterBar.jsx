import React from 'react';

const FilterBar = ({ genres, ratings, selectedGenre, selectedRating, onGenreChange, onRatingChange }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <select value={selectedGenre} onChange={onGenreChange}>
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select value={selectedRating} onChange={onRatingChange}>
        <option value="">All Ratings</option>
        {ratings.map((rating, index) => (
          <option key={index} value={rating}>
            {rating}+
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
