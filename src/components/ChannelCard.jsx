import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { demoProfilePicture, demoChannelUrl,demoChannelTitle } from '../utils/constants';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelCard = ({ channelDetail, subCount, mt }) => {

  console.log(subCount);

  function formatNumber(subCount) {
    if (subCount < 1000) {
      return subCount.toString();
    } else if (subCount < 100000) {
      return (subCount / 1000).toFixed(2) + "K";
    } else if (subCount < 1000000) {
      return (subCount / 100000).toFixed(2) + "L";
    } else {
      return (subCount / 1000000).toFixed(2) + "M";
    }
  }

  let sub = subCount ? formatNumber(subCount) : '0';


  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },
        marginTop:mt


      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId || demoChannelUrl}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",

        }} >
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            mb: 2,
            border: "1px solid",
          }}
        />
        <Typography variant="h6" color='white'>
          {channelDetail?.snippet?.title || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
        </Typography>
        {subCount && (
          <Typography variant="body2" color="white">
            {sub} Subscribers
          </Typography>
        )}

      </CardContent>
    </Link>

    </Box >
  )
}

export default ChannelCard