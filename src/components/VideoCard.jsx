import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'


const VideoCard = ({ video }) => {
  const videoId = video.id.videoId;
  const videoDetails = video.snippet;
  const channelId = video.snippet.channelId;
  
  // console.log(videoId);

  return (
    <Card
      sx={{
        width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
        boxShadow: 'none',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* <Link> */}
        <CardMedia
          image={videoDetails?.thumbnails?.high?.url || demoThumbnailUrl }
          alt={demoThumbnailUrl}
          sx={{width: '358px' , height: 180}}
          // sx={{ width: { xs: '280px', sm: '358px', md: '320px' }, height: 180 }}

        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: "106px" }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          {/* <Link > */}
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            fontSize={14}
            color="#fff"
          >
            {videoDetails.title.slice(0, 54) || demoVideoTitle.slice(0, 54)}
          </Typography>
        </Link>
        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
          >
            {videoDetails.channelTitle || demoChannelTitle}
            
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>

      </CardContent>
    </Card>
  )
}

export default VideoCard