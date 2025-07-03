import {react,useState} from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const Slidebar = () => {
    const setCetogery='Coding'
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}
        >
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <button
                        key={category.name}
                        style={{
                            background: category.name === setCetogery && "#364153"
                            
                        }}
                        className='category-btn flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-gray-700'
                    >
                        <span
                            
                         style={{
                            color: category.name === setCetogery ? '#F31503' : 'white',
                         }}
                        ><Icon /></span>
                        <span
                        style={{
                            opacity: category.name === setCetogery ? '1' : "0.8",
                        }}
                        >{category.name}</span>
                    </button>
                );
            })}

        </Stack>
    );
}

export default Slidebar;