import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Slidebar,Videos } from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos,setVideos] = useState([]);


  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  },[selectedCategory])


  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      className='bg-black'
    >
      <Box
        sx={{
          height: { xs: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { xs: 0, md: 2 },
          color: "white",
        }}
        
      >
        <Slidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
        color: 'white',
      }}
      >
        <Typography
          variant='h4'
          fontWeight='bold'
          mb={2}
          sx={{ color: 'white', padding: '10px' }}
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed