import React from 'react';
import { useSearch } from '../searchcontent/SearchContent';
import './search.css';

const SearchBar = ({ onSearch }) => {
  const { setSearchTerm } = useSearch();

  function handleChange(e) {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  }

  return (
    <div className='search'>
      <input 
        className='input'
        type="text"
        placeholder="Rechercher un film..."
        onChange={handleChange}
      />
    </div>
  )
};

export default SearchBar;