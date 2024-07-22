import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_URL = `https://api.themoviedb.org/3/movie/${id}?language=fr-FR`;
      
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
        setMovie(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails du film:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Chargement...</div>;

  return (
    <div className="movie-details">
      <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p><strong>Date de sortie:</strong> {movie.release_date}</p>
        <p><strong>Note moyenne:</strong> {movie.vote_average}/10</p>
        <p><strong>Synopsis:</strong> {movie.overview}</p>
        <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetails;