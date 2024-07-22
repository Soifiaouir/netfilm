import React, { useState, useEffect } from 'react';

const FilterButton = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      setIsLoading(true);
      setError(null);
      const API_URL = 'https://api.themoviedb.org/3/genre/movie/list?language=fr-FR';
      
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGRmMmQ0YWZlMmI4ODQyYTY5MjA5MTU5YWQ0MzM4YiIsIm5iZiI6MTcyMTAzMjU5Ni4zNDc5NzYsInN1YiI6IjY2OGQwMjY5MTA3ODhjYTkxYzE5ODk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbLIRSLUtAmVwqeF_C7yCrQs9Ykp_DCPlZ9McChrpms'
        }
      };

      try {
        const response = await fetch(API_URL, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data.genres || !Array.isArray(data.genres)) {
          throw new Error('Invalid data structure received from API');
        }
        setGenres(data.genres);
      } catch (error) {
        console.error("Erreur détaillée lors de la récupération des genres:", error);
        setError(`Erreur: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const applyFilter = () => {
    console.log("Applying filter with genre:", selectedGenre);
    onFilterChange(selectedGenre);
  };

  if (isLoading) return <div>Genres</div>;
  if (error) return <div>Erreur: {error}</div>;

  return (
    <div className="filter-container">
      <select className="filter-button" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Tous les genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
      <button className="apply-button" onClick={applyFilter}>GO</button>
    </div>
  );
};

export default FilterButton;