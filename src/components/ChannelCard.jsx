import React, { useEffect, useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { demoProfilePicture, demoChannelUrl } from '../utils/constants';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelCard = ({ channelDetail }) => {
  const [subCount, setSubCount] = useState(0);

  /* For Reduce Quote For Youtube Api
  let sub = formatNumber(subCount);
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
  
  useEffect(() => {
    const channelId =
    channelDetail?.id?.channelId || channelDetail?.id; // support both structures

    if (!channelId) return;

    fetchFromAPI(`channels?part=statistics&id=${channelId}`).then((data) => {
      if (data?.items?.length > 0) {
        const count = data.items[0].statistics.subscriberCount;
        console.log(`${channelDetail?.snippet?.title} Subscriber Count: ${count}`);
        setSubCount(count);
      } else {
        setSubCount('0');
      }
    });
  }, [channelDetail?.id]);
  */

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        
        display: "flex",
        lexDirection: "column",
        width: { md: "330px", lg: "338px", sm: "320px", xs: "280px" },

      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId || demoChannelUrl}`}>
        <CardContent className='flex flex-col items-center justify-center text-center'>
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
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
          {(subCount !== null) && (
            <Typography variant="body2" color="white">
              {subCount} Subscribers
            </Typography>
          )}

        </CardContent>
      </Link>

    </Box>
  )
}

export default ChannelCard