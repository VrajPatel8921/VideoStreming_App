import React from 'react'
import  {Stack } from '@mui/material'
import {Link }from 'react-router-dom'
import {logo} from "../utils/constants";




const Navbar = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} className='bg-black sticky top-0 justify-between' >
      <Link to='/' className='flex items-center text-4xl text-white font-extrabold '> 
        You<span className="text-red-500"> Tube</span>
        
      </Link>

    </Stack>
  )
}

export default Navbar