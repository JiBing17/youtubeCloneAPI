// Importing necessary components and libraries from React and Material-UI
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

// Importing components and utility functions from local files
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// Channel Detail Component - Renders details of a specific channel
const ChannelDetail = () => {
  // State to store the targeted channel detail info
  const [channelDetail, setChannelDetail] = useState();
  // State to store the targeted channel videos
  const [videos, setVideos] = useState(null);
  // Accessing the dynamic route parameter
  const { id } = useParams();

  useEffect(() => {
    // Function to fetch and store targeted channel detail data
    const fetchResults = async () => {
      // Fetches and sets targeted channel detail data
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      
      // Fetches and sets targeted channel videos 
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    // Calling the fetchResults function when the 'id' changes
    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* Channel header with background */}
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        {/* Rendering ChannelCard component with channel details */}
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      {/* Box for displaying videos */}
      <Box p={2} display="flex">
        {/* Spacer box */}
        <Box sx={{ mr: { sm: '100px' } }}/>
        {/* Rendering Videos component with fetched videos */}
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

// Exporting ChannelDetail as the default component
export default ChannelDetail;
