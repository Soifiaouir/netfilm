import React from 'react';
import { useSearch } from '../searchcontent/SearchContent';
import './search.css';

const SearchBar = () => {
  const { setSearchTerm } = useSearch();

  function handleChange(e) {
        setSearchTerm(e.target.value);
    }

  return (
    <div class='search'>
    <input class='input'
      type="text"
      placeholder="Rechercher un film..."
      onChange={handleChange}
    />
    </div>
  )
};

export default SearchBar;