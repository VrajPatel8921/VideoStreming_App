import React from 'react'
import { Box, Stack } from '@mui/material'
import { VideoCard, ChannelCard } from './index'

const Videos = ({videos}) => {
  
  return (
    <Stack direction="row" className="flex-wrap justify-start  gap-2">
     {videos.map((video,idx)=>(
      //  <Box key={idx}  sx={{  width: '300px', height: 'auto', backgroundColor: '#000',marginBottom: '5px', borderRadius: '10px', overflow: 'hidden'  }}>
       <Box key={idx} >
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelCard channelDetail={video}/>}
      </Box>
      
     ))}
    </Stack>
  )
}

export default Videos