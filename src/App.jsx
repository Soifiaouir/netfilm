import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./component/search/search.jsx";
import { SearchProvider } from "./component/searchcontent/SearchContent.jsx";
import Navbar from "./component/menu/Navbar.jsx";
import Hero from "./component/hero/hero.jsx";
import "./App.css";

function App() {
  const [genreFilter, setGenreFilter] = useState("");

  const handleFilterChange = (genreId) => {
    setGenreFilter(genreId);
  };

  return (
    <SearchProvider>
      <div>
        <header className="App">
          <Navbar onFilterChange={handleFilterChange} />
        </header>
        <div>
          <div className="hero_container">
            <Hero />
            <div className="search_container">
              <SearchBar />
            </div>
          </div>
          <Outlet context={{ genreFilter }} />
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;