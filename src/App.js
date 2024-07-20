import React, { useState, useCallback } from 'react';
import Navbar from './component/menu/Navbar';
import PopularMovies from './component/api/PolpularMovies';
import Navbar from './component/menu/Navbar';
import './App.css';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflim</h1>
      </header>
      <main>
        <PopularMovies />
      </main>
    </div>
  );
}

export default App;
