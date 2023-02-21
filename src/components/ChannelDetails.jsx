import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [channelVideos, setChannelVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(
      false, //fetching videos
      "channels", //url
      id, //id
      false, //fetchingChannelVideos
      false, //userSearching
      null, //searchTerm
      setChannelDetail //setData
    );
    fetchFromApi(
      true, //fetching videos
      "search", //url
      id, //id
      true, //fetchingChannelVideos
      false, //userSearching
      null, //searchTerm
      setChannelVideos //setData
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        {channelDetail && (
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        )}
      </Box>
      <Box display="flex" p="2">
        <Box
          sx={{
            mx: { sm: "100px" },
          }}
        >
          {channelVideos && <Videos videos={channelVideos} />}
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetails;
