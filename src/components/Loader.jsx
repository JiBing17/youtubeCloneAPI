// Importing necessary components from React and Material-UI
import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

// Loader Component - Displays a loading spinner while content is being loaded
const Loader = () => (
  // Container Box for the loader, set to minimum height of 95vh
  <Box minHeight="95vh">
    {/* Stack layout for centering the CircularProgress component */}
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh'>
      {/* Circular loading indicator */}
      <CircularProgress />
    </Stack>
  </Box>
);

// Exporting Loader as the default component
export default Loader;
