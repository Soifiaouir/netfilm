import React, { useState, useEffect } from 'react';

const FilterButton = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
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
        setGenres(data.genres);
      } catch (error) {
        console.error("Erreur lors de la récupération des genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (e) => {
    const genreId = e.target.value;
    setSelectedGenre(genreId);
    onFilterChange(genreId);
  };

  return (
    <div className="filter-container">
      <select className="filter-button" value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Tous les genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterButton;