import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

// Videos Component
const Videos = ({ videos, direction }) => {

  // when no videos (still fetching) , render Loader Component
  if(!videos?.length) return <Loader/>;

  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {/* Iterates through each individual video data and renders either VideoCard Component or ChannelCard Component  */}
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;