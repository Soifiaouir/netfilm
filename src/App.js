import React, { useState, useCallback } from 'react';
import PopularMovies from './component/api/PolpularMovies';
import './App.css';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);

  return (
    <div className="App">
      <PopularMovies genreFilter={genreFilter} />
    </div>
  );
}

export default App;