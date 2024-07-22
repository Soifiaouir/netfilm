import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [genreFilter, setGenreFilter] = useState('');

  const handleFilterChange = useCallback((genreId) => {
    console.log("Filter changed to:", genreId);
    setGenreFilter(genreId);
  }, []);

  return (
    <div>
    <header className="App">
      <Navbar/>
    </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
