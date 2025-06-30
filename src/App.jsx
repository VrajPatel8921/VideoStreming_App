import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Outlet />
        <h1 style={{ color: '#fff' }}>Welcome to the YouTube Clone.</h1>
      </Box>
    </>
  )
}

export default App
