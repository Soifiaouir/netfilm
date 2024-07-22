import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import PopularMovies from './component/api/PolpularMovies';
function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);

  return (
    <div>
      <header className="App">
        <Navbar onFilterChange={handleFilterChange} />
      </header>
      <main>
        <PopularMovies />
      </main>
    </div>
  );
}

export default App;