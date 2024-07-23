import React from 'react';
import { Link } from 'react-router-dom';
import FilterButton from './filter/FilterButton';
import './Navbar.css';
import logoImage from '../../asset/NETFILM.png';
import profileIcon from '../../asset/Profil.png';

const Navbar = ({ onFilterChange }) => {
  return (
    <div className="navbar">
      <img src={logoImage} alt="Logo NetFilm" className="navbar-logo-image" />
      <FilterButton onFilterChange={onFilterChange} />
      <Link to="/profile" className="profil-link"> 
        <img src={profileIcon} alt="Profil" className="profil-icon" />
      </Link>
    </div>
  );
};

export default Navbar;