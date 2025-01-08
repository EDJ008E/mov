import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import moviesData from '../data/movies.json';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const foundMovie = moviesData.find((movie) => movie.id === parseInt(movieId));
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      navigate('/');
    }
  }, [movieId, navigate]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review) {
      setReviews([...reviews, review]);
      setReview('');
    }
  };

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={() => navigate('/')}>Back to Movies</button>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} style={{ width: "200px", borderRadius: "8px" }} />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Description:</strong> {movie.description}</p>

      <div>
        <h3>Reviews</h3>
        <ul>
          {reviews.map((rev, index) => (
            <li key={index}>{rev}</li>
          ))}
        </ul>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Leave a review"
            style={{ width: '100%', height: '100px' }}
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
