// import './component/hero.css'
// import PolpularMovies from './component/api/PolpularMovies.js'
// import styled from 'styled-components';
import { useState, useEffect } from 'react'

import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import{Outlet} from react-rooter-dom; fonction qui est necessaire pour appler ses pages 
import './hero.css';

const Hero = () => {
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchBackgroundImages = async () => {
      const API_URL = 'https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1';
      try {
        const response = await fetch(API_URL, {
          headers: {
            accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGRmMmQ0YWZlMmI4ODQyYTY5MjA5MTU5YWQ0MzM4YiIsIm5iZiI6MTcyMTAzMjU5Ni4zNDc5NzYsInN1YiI6IjY2OGQwMjY5MTA3ODhjYTkxYzE5ODk5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tbLIRSLUtAmVwqeF_C7yCrQs9Ykp_DCPlZ9McChrpms'
          }
        });

        if (!response.ok) {
          throw new Error('Erreur réseau');
        }

        const data = await response.json();
        const images = data.results.slice(0, 20).map(movie => `https://image.tmdb.org/t/p/original${movie.backdrop_path}`);
        setBackgroundImages(images);
      } catch (error) {
        console.error("Erreur lors de la récupération des images:", error);
      }
    };

    fetchBackgroundImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change l'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <div className="hero">
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Hero;
