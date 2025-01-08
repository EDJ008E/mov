import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Homepage component
import MovieDetailsPage from './pages/MovieDetailsPage'; // Movie details page component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
