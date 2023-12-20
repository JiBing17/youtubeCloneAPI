// Importing necessary components from React and Material-UI
import React, { useState, useEffect } from 'react'
import { Typography, Box } from '@mui/material'
import Videos from './Videos'

// Importing useParams and fetchFromAPI utility function from React Router and local file
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

// SearchFeed Component - Displays videos based on the search term
const SearchFeed = () => {
  // State to keep track of fetched videos from search
  const [videos, setVideos] = useState(null);
  
  // Accessing the search term from the route parameters
  const { searchTerm } = useParams();

  // Fetches data whenever the search term changes 
  useEffect(() => {
    // Fetching data based on the search term
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    // Container Box with padding and minimum height
    <Box p={2} minHeight="95vh">
      {/* Heading displaying the search term */}
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      {/* Displaying videos in a Box */}
      <Box display="flex">
        {/* Spacer Box */}
        <Box sx={{ mr: { sm: '100px' } }}/>
        {/* Rendering Videos component with fetched videos */}
        {<Videos videos={videos} />}
      </Box>
    </Box>
  )
}

// Exporting SearchFeed as the default component
export default SearchFeed;
