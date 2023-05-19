import '../styles.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value);
  };

  const restForm = ({ value }) => { 
    setSearchQuery("");
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    onSubmit(searchQuery);
    restForm();
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleOnSubmit}>
        <button type="submit" className="SearchForm-button">
          <FiSearch />
        </button>
        <input
          className="SearchForm-input"
          onChange={handleChange}
          value={searchQuery}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
