import React from 'react';
import FilterButton from './filter/FilterButton';
import './Navbar.css';
import logoImage from '../../asset/NETFILM.png';
import profileIcon from '../../asset/profil.png';

const Navbar = ({ onFilterChange }) => {
    console.log("Navbar received onFilterChange:", onFilterChange);
    return (
      <div className="navbar">
        <img src={logoImage} alt="Logo NetFilm" className="navbar-logo-image" />
        <FilterButton onFilterChange={onFilterChange} />
        <Link to="/profil" className="profil-link">
            <img src={profileIcon} alt="Profil" className="profil-icon" />
        </Link>
      </div>
    );
  };
  
  export default Navbar;