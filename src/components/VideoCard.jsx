// Importing necessary components from React and Material-UI
import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material' 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Importing demo data from a local file for fallback/demo purposes
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

// VideoCard Component - Displays information about a video in a card format
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  // Destructuring video data for easier access
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px" }, boxShadow: "none", borderRadius: 0 }}>
      {/* Link to the individual video page */}
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        {/* Video thumbnail */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        {/* Link to the individual video page */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          {/* Video title */}
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        {/* Link to the channel page */}
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          {/* Channel title with a checkmark icon */}
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

// Exporting VideoCard as the default component
export default VideoCard;
