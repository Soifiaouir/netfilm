



import SearchBar from "./component/search/search";
import { SearchProvider } from "./component/searchcontent/SearchContent.jsx";
import PopularMovies from "./component/api/PolpularMovies";
import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
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
        <SearchProvider>
          <div>
            <SearchBar />
            <PopularMovies />
          </div>
        </SearchProvider>
        <Navbar onFilterChange={handleFilterChange} />
      </header>
      <main>
        <Outlet context={{ genreFilter }} />
      </main>
    </div>
  );
}

export default App;
