
import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/menu/Navbar';
import './App.css';
import Navbar from './component/menu/Navbar';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);


    <div>
      <header className="App">
        <Navbar onFilterChange={handleFilterChange} />
      </header>
      <main>
        <Outlet context={{ genreFilter }} />
      </main>
    </div>
  );
}

export default App;