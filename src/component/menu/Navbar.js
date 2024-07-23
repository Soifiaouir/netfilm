import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterButton from './filter/FilterButton';
import SearchBar from '../search/search';
import { useSearch } from '../searchcontent/SearchContent';
import './Navbar.css';
import searchlogo from '../../asset/Search.png';
import logoImage from '../../asset/NETFILM.png';
import profileIcon from '../../asset/Profil.png';

const Navbar = ({ onFilterChange }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { setSearchTerm } = useSearch();

  const toggleSearch = () => {
    setShowSearch(prevState => !prevState);
  };

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={`navbar ${showSearch ? 'search-active' : ''}`}>
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
        <div className='search-container'>
          <div className='search-icon' onClick={toggleSearch}>
            <img src={searchlogo} alt="searchlogo" className="searchlogo"/>
          </div>
          <div className={`navbar-search ${showSearch ? 'show' : ''}`}>
            <SearchBar onSearch={handleNavbarSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;