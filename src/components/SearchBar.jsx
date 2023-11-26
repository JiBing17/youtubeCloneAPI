import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

//SearchBar Component
const SearchBar = () => {
  // keeps track of search term
  const [searchTerm, setSearchTerm]  = useState('')

  // used to go to targeted path
  const navigate = useNavigate();

  // function used to handle submission
  const onhandleSubmit = (e) => {

    // prevents website from reloading when submitting
    e.preventDefault();
    
    if (searchTerm) {
      // navigates to targeted path
      navigate(`/search/${searchTerm}`);
      // resets search 
      setSearchTerm('')
    }
  }
    return (
        <Paper
          component='form'
          // calls onHandleSubmit function when submitted
          onSubmit={onhandleSubmit}
          sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5 },
          }}
        >
          <input
            className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            // sets search term to whatever is on input
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Paper>
      );
}

export default SearchBar