import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  // Handle input change
  const handleFilter = (e) => {
    
    setSearchInput(e.target.value);
  };

  // Handle search action and pass the search input back to the parent
  const handleSearch = () => {
    onSearch(searchInput);  // Pass the search input to parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="searchInput"
        value={searchInput}
        onChange={handleFilter}
        placeholder="Search..."
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
