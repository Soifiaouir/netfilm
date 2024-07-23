import React, { useState } from 'react';
import Hero from './component/hero/hero.js';
import { Outlet } from 'react-router-dom';
import SearchBar from "./component/search/search";
import { SearchProvider } from "./component/searchcontent/SearchContent.jsx";
import Navbar from './component/menu/Navbar';
import './App.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleFilterChange = (genreId) => {
    setSelectedGenre(genreId);
  };

  return(
    <div>
      <Hero/>
      <SearchProvider>
        <header className="App">
          <SearchBar />
          <Navbar onFilterChange={handleFilterChange} />
        </header>
        <main>
          <Outlet context={{ selectedGenre }} />
        </main>
      </SearchProvider>
    </div>
  );
}

export default App;