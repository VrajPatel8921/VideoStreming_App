import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from "../utils/constants";
import SearchBar from './SearchBar'
import Box from '@mui/material/Box';


const Navbar = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} className='bg-black sticky top-2   justify-between' >
      <Link to='/' className='flex items-center text-4xl  text-white font-extrabold '>
        You<span className="text-red-500"> Tube</span>
      </Link>
      <div className="flex items-center h-auto">
        <SearchBar />
      </div>

    </Stack>
  )
}

export default Navbar