import React, { useState, useCallback } from 'react';
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
    <div>
    <header className="App">
      <Navbar/>
    </header>
      <main>
        <PopularMovies />
      </main>
    </div>
  );
}

export default App;
