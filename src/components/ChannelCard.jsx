// Importing necessary components and libraries from React and Material-UI
import React from 'react'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

// Importing a constant for a demo profile picture from a local file
import { demoProfilePicture } from '../utils/constants'

// ChannelCard Component - Renders a card displaying channel details
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    // Container Box for the channel card
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop: marginTop,
      }}
    >
      {/* Link to the channel's page */}
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        {/* Content within the channel card */}
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          {/* Channel's profile picture */}
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
          {/* Channel's title */}
          <Typography>
            {channelDetail?.snippet?.title}
            {/* Check circle icon */}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {/* Displaying subscriber count */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {/* Makes large numbers readable */}
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

// Exporting ChannelCard as the default component
export default ChannelCard
