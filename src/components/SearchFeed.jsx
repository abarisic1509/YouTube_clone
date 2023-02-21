import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";

import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(
      true, //fetching videos
      "search", //url
      null, //id
      false, //fetchingChannelVideos
      true, //userSearching
      searchTerm, //searchTerm
      setVideos //setData
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search results for: <span className="text-red">{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
