import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './component/menu/Navbar';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
