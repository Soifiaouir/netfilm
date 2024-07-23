import Hero from "./component/hero/hero.js";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./component/search/search";
import { SearchProvider } from "./component/searchcontent/SearchContent.jsx";
import Navbar from "./component/menu/Navbar";
import "./App.css";

function App() {

  const [genreFilter, setGenreFilter] = useState("");


  const handleFilterChange = (genreId) => {
    setGenreFilter(genreId);
  };

  return (
    <div>

      <header className="App">
        <Navbar onFilterChange={handleFilterChange} />
      </header>
      <main>
        <SearchProvider>
          <div className="hero_container">
            <Hero />
            <div className="search_container">
              <SearchBar />
            </div>
          </div>
          <Outlet context={{ genreFilter }} />
        </SearchProvider>
      </main>
    </div>
  );
}

export default App;
