import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Slidebar,Videos } from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const Feed = () => {
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
        <Slidebar/>
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
          New <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        
        <Videos/>
      </Box>
    </Stack>
  )
}

export default Feed