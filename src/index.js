import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopularMovies from './component/api/PolpularMovies';
import MovieDetails from './page/MovieDetails/MovieDetails';
import ProfilePage from './page/profil/Profilepage';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PopularMovies />} />
          <Route path="popular-movies" element={<PopularMovies />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>

    </Router>
  </React.StrictMode>
);

//permet l'utilisation du routage basé sur l'historique du navigateur.//
//différentes routes de l'application //