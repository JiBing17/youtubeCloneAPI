import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

// Video Detail Component 
const VideoDetail = () => {

  // stores targeted video data 
  const [videoDetail, setVideoDetail] = useState(null);

  // stores related video data
  const [videos, setVideos] = useState(null);

  // id used for dynamic route access
  const { id } = useParams();

  useEffect(()=>{
    // fetching data from targeted video and storing it in state
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    // fetching data from related videos and storing it in state
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))

  },[id])

  if(!videoDetail?.snippet) return <Loader/>;

  // destructuring for easier access 
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  return (
    <Box minHeight = "95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx = {{width: "100%", position: "sticky", top: "86px"}}>
            {/* Video Player*/}
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            {/* Video Title */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to = {`/channel/${channelId}`}>
                {/* Channel Title */}
                <Typography variant = {{sm: "subtitle1", md: "h6"}}
                color = "#fff">
                  {channelTitle}
                  <CheckCircleIcon sx = {{ fontSize: "12px", color: "gray", ml: "5px" }}/>
                </Typography>
              </Link>
              <Stack direction = "row" gap = "20px" alignItems = "center">
                <Typography>
                  {/* makes number readable */}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography>
                  {/* makes number readable */}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          {/* related videos */}
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail