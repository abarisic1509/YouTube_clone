import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const { channelId, channelTitle, description, title, thumbnails } =
    channelDetail?.snippet;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId ? channelId : channelDetail.id}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={thumbnails?.high?.url}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscibers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
