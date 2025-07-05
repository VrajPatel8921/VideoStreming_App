import React from 'react'
import {Link} from 'react-router-dom' 
import {Card, CardContent, Typography, CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl} from '../utils/constants'


const VideoCard = ({video:{id:{videoId},snippet}}) => {
    console.log(snippet)
    
  return (
    <Card>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={demoThumbnailUrl}
            // sx={{width: '358px' , height: 180}}
            sx={{width: {xs: '280px', sm: '358px', md: '320px'}, height: 180}}
            
            />
        </Link>
        <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: "106px"  }}
        />
         <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant="subtital2"
              fontWeight="bold"
              color="#fff"
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
         </Link>
    </Card>
  )
}

export default VideoCard