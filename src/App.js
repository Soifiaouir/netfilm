import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PopularMovies from './component/api/PolpularMovies';
import MovieDetails from './page/MovieDetails/MovieDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Netflim</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;