// Importing necessary components from React and Material-UI
import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

// Importing a constant for the logo from a local file and SearchBar component
import { logo } from '../utils/constants';
import { SearchBar } from "./";

// Navbar Component - Displays a navigation bar with a logo and search functionality
const Navbar = () => {
  return (
    // Stack layout for arranging elements in a row with specific styling
    <Stack direction='row' alignItems='center' p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
      {/* Link to the home page with the logo */}
      <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
        {/* Displaying the logo */}
        <img src={logo} alt="logo" height={45} />
      </Link>
      {/* Rendering the SearchBar component */}
      <SearchBar />
    </Stack>
  )
}

// Exporting Navbar as the default component
export default Navbar;
