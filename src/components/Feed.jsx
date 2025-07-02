import { React, useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'


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
        Slidebar

        <Typography>
          
        </Typography>

      </Box>
    </Stack>
  )
}

export default Feed