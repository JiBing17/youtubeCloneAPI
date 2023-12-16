// Imports necessary components from respective libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

// Imports specific components from a local file
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';

// App Component - defines the structure of the app
const App = () => (
  // Sets up routing for the app using BrowserRouter
  <BrowserRouter>
    {/* Provides a Box component with a black background */}
    <Box sx={{ backgroundColor: '#000' }}>
      {/* Renders the Navbar component */}
      <Navbar />
      {/* Sets up routes for different paths */}
      <Routes>
        {/* Renders Feed component when exact path '/' is matched */}
        <Route exact path='/' element={<Feed />} />
        {/* Renders VideoDetail component when path matches '/video/:id' */}
        <Route path='/video/:id' element={<VideoDetail />} />
        {/* Renders ChannelDetail component when path matches '/channel/:id' */}
        <Route path='/channel/:id' element={<ChannelDetail />} />
        {/* Renders SearchFeed component when path matches '/search/:searchTerm' */}
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

// Export the App component as the default export
export default App;
