import React from "react";
import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={2}
      sx={{ justifyContent: { xs: "center", md: "start" } }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.playlistId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
