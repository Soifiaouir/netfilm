import React from 'react';
import PopularMovies from './component/api/PolpularMovies';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflim</h1>
      </header>
      <main>
        <PopularMovies />
      </main>
    </div>
  );
}

export default App;