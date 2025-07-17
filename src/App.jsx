import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <div className='pt-2'>
          <Outlet />// Use Outlete To Render Children Nodes.
        </div>

      </Box>
    </>
  )
}

export default App
