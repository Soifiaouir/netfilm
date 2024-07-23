import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PopularMovies from './component/api/PolpularMovies';
import MovieDetails from './page/MovieDetails/MovieDetails';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PopularMovies />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);