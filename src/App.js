import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/menu/Navbar';
import PopularMovies from './component/api/PolpularMovies';
import ProfilePage from './page/profil/Profilepage'; // Chemin inchangé, mais assurez-vous qu'il est correct
import './App.css';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar onFilterChange={handleFilterChange} />
        <Routes>
          <Route path="/" element={<PopularMovies genreFilter={genreFilter} />} />
          <Route path="/profile" element={<ProfilePage />} /> {/* Changé en minuscules */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;