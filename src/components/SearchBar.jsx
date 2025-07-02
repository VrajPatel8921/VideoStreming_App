import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


const SearchBar = () => {
    return (
        <Paper
            component="form"
            onSubmit={() => { }}
            className="px-6 pl-3 border-e3e3e3 border-4 shadow-none flex items-center justify-center "
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                mr: { sm: 5 },
            }}
            

        >
            <input
                type='text'
                placeholder='Search'
                value=""
                onChange={() => { }}
            />
            <IconButton
                type='submit'
                sx={{
                    p: '5px',
                    color: 'red',
                }}

            >
                <Search
                
                />

            </IconButton>

        </Paper>
    )
}

export default SearchBar