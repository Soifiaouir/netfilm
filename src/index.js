import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import PopularMovies from './component/api/PolpularMovies';
import ProfilePage from './page/profil/Profilepage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PopularMovies />} />
          <Route path="popular-movies" element={<PopularMovies />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);