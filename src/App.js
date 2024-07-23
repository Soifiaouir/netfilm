import React from "react";
import PopularMovies from "./component/api/PolpularMovies";
import "./App.css";
import SearchBar from "./component/search/search";
import { SearchProvider } from "./component/searchcontent/SearchContent.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflim</h1>
        <SearchProvider>
          <div>
            <SearchBar />
            <PopularMovies />
          </div>
        </SearchProvider>
      </header>
    </div>
  );
}

export default App;
