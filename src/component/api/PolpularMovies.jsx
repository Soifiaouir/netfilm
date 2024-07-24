import React, { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import './PolpularMovies.css';
import { useSearch } from '../searchcontent/SearchContent.jsx';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useSearch();
  const { selectedGenre } = useOutletContext();

  useEffect(() => {
    const fetchMovies = async () => {
      const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1';
      
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
          throw new Error('Erreur réseau');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre_ids.includes(parseInt(selectedGenre)) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="popular-movies">
      <h2>Films Populaires</h2>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;