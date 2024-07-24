import React from 'react';
import { Link } from 'react-router-dom';
import FilterButton from './filter/FilterButton';

import './Navbar.css';
import searchlogo from '../../asset/Search.png';
import logoImage from '../../asset/NETFILM.png';
import profileIcon from '../../asset/Profil.png';

const Navbar = ({ onFilterChange }) => {
  
  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src={logoImage} alt="Logo NetFilm" className="navbar-logo-image" />
      </Link>
      <div className="navbar-center">
        <FilterButton onFilterChange={onFilterChange} />
      </div>
      <div className="navbar-right">
        <Link to="/profile" className="profil-link"> 
          <img src={profileIcon} alt="Profil" className="profil-icon" />
        </Link>
      </div>
      <div className='search-container'>
          <img src={searchlogo} alt="searchlogo" className="searchlogo"/>
      </div>
      
    </div>
  );
};

export default Navbar;