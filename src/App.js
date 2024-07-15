import React from 'react';
import PopularMovies from './component/api/PolpularMovies.js';
import Hero from './component/hero/hero.js';
import './App.css';

function App() {
  return (
    <div className="App">
    <Hero />
    <PopularMovies />
  </div>

);
}
  

export default App;