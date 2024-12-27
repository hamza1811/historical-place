import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/placesSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value)); // Update the search term in Redux store
  };

  useEffect(() => {   
    // remove search term to reset the place slice
    return () => {
      dispatch(setSearchTerm(''));
    }
  }, [])
  
  return (
    <input
      type="text"
      placeholder="Search for a place..."
      onChange={handleSearchChange}
      className='search-box'
    />
  );
};

export default Search;
