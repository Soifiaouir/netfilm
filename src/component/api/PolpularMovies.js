import React, { useState, useEffect } from 'react';
import './PolpularMovies.css'
import { useSearch } from '../searchcontent/SearchContent.jsx';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useSearch();

  useEffect(() => {
    const fetchMovies = async () => {
      const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1';
      
      try {
        const response = await fetch(API_URL, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGRmMmQ0YWZlMmI4ODQyYTY5MjA5MTU5YWQ0MzM4YiIsIm5iZiI6MTcyMTAzMjU5Ni4zNDc5NzYsInN1YiI6IjY2OGQwMjY5MTA3ODhjYTkxYzE5ODk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbLIRSLUtAmVwqeF_C7yCrQs9Ykp_DCPlZ9McChrpms',
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Erreur réseau');
        }

        const data = await response.json();
        setMovies(data.results.slice(0, 20));
      } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="popular-movies">
      <h2>Films Populaires</h2>
      <div className="movie-grid">
      {filteredMovies.map((movie => (
          <div className="movie-card" key={movie.id}>{movie.title}{'>'}
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        )))}
      </div>
    </div>
  );
};

export default PopularMovies;