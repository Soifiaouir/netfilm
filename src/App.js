import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from "./component/search/search";
import { SearchProvider } from "./component/searchcontent/SearchContent.jsx";
import Navbar from './component/menu/Navbar';
import './App.css';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = (genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  };

  return (
    <div>
      <SearchProvider>
        <header className="App">
          <SearchBar />
          <Navbar onFilterChange={handleFilterChange} />
        </header>
        <main>
          <Outlet context={{ genreFilter }} />
        </main>
      </SearchProvider>
    </div>
  );
}

export default App;