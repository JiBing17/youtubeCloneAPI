// Importing necessary components from React and Material-UI
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// SearchBar Component - Displays a search input and allows navigation based on search term
const SearchBar = () => {
  // State to keep track of the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Hook to navigate to different paths in the application
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevents the website from reloading when submitting
    e.preventDefault();
    
    if (searchTerm) {
      // Navigates to the targeted search path
      navigate(`/search/${searchTerm}`);
      // Resets the search term
      setSearchTerm('');
    }
  }

  return (
    // Paper component acting as a form for search functionality
    <Paper
      component='form'
      // Calls handleSubmit function when submitted
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      {/* Input field for search term */}
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        // Updates the search term as the user types
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* IconButton for submitting the search */}
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

// Exporting SearchBar as the default component
export default Search
