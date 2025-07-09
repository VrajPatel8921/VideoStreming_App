import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [subCount, setSubCount] = useState(0);
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    // const channelId =
    // channelDetail?.id?.channelId || channelDetail?.id; // support both structures

    // if (!channelId) return;

    fetchFromAPI(`channels?part=statistics&id=${id}`).then((data) => {

      if (data?.items?.length > 0) {

        const count = parseInt(data.items[0].statistics.subscriberCount);
        const channelData = data.items[0]
        setChannelDetail(channelData);
        setSubCount(count);
        // if (channelDetail) {
        //   console.log("Channel Data Updated:", channelDetail);
        // }
      } else {
        setSubCount(0);
        setChannelDetail(null);
      }
    });

    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date&maxResults=20`).then((data) => {
      setVideos(data.items);
    })

  }, [id, channelDetail, subCount]);
  return (
    <Box minHeight="90vh"
      flexDirection="column"
      sx={{ backgroundColor: "black", display: "flex", alignItems: "center" }} margin="10px 0px"
    >
      <Box>
        <div
          style={{
            background: ` radial-gradient(circle,rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)`,
            width: "100vw",
            height: "200px",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

      </Box>
      <ChannelCard channelDetail={channelDetail} subCount={subCount} mt={"-93px"} />
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />

      </Box>

    </Box>

  )
}

export default ChannelDetail