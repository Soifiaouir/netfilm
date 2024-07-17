import React from 'react';
import FilterButton from './filter/FilterButton';
import './Navbar.css';

const Navbar = ({ onFilterChange }) => {
    console.log("Navbar received onFilterChange:", onFilterChange);
    return (
      <nav className="navbar">
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <FilterButton onFilterChange={onFilterChange} />
      </nav>
    );
  };
  
  export default Navbar;