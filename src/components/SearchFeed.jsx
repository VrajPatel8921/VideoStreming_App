import { useState, useEffect } from 'react'
import { Box,  Typography } from '@mui/material'
import { Videos } from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'



const SearchFeed = () => {
  const [videos,setVideos] = useState([]);
  const {searchTerm}=useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}&maxResults=50`).then((data)=>setVideos(data.items || []));
  },[searchTerm])


  return (
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
          Search Results For <span style={{ color: '#F31503' }}>{searchTerm}</span> Video
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed