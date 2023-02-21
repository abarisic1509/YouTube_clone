import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { Videos } from "./";
import VideoBox from "./VideoBox";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  //console.log(id);

  useEffect(() => {
    fetchFromApi(
      false, //fetching videos
      "videos", //url
      id, //id
      false, //fetchingChannelVideos
      false, //userSearching
      null, //searchTerm
      setVideoDetail //setData
    );
    fetchFromApi(
      true, //fetching videos
      "search", //url
      id, //id
      false, //fetchingChannelVideos
      false, //userSearching
      null, //searchTerm
      setVideos //setData
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", lg: "row" }}>
        <Box flex={2} marginLeft={2}>
          {videoDetail && <VideoBox videoDetail={videoDetail} id={id} />}
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          {videos && <Videos videos={videos} direction="column" />}
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetails;
