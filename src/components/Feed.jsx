// Importing necessary components and libraries from React and Material-UI
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

// Importing utility function and local components
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, SideBar } from "./";

// Feed Component - Displays videos based on selected category
const Feed = () => {
  // State to keep track of selected category (default: "New")
  const [selectedCategory, setSelectedCategory] = useState("New");
  // State to store video data fetched from the API
  const [videos, setVideos] = useState(null);

  // Fetches data from API and updates 'videos' state (runs at start and whenever selected category changes)
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    // Stack layout for responsiveness, arranging components in a row/column depending on screen size
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Sidebar section */}
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        {/* Rendering SideBar component with selected category and a copyright notice */}
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      {/* Video display section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        {/* Title indicating selected category */}
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        {/* Rendering Videos component with fetched videos */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

// Exporting Feed as the default component
export default Feed;
