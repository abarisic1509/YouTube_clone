import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  const { thumbnails, channelId, channelTitle, description, title } =
    video?.snippet;
  const { videoId } = video?.id;

  return (
    <Card
      sx={{
        width: { xs: "356px", md: "320px" },
        height: "326px",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${videoId && videoId}`}>
        <CardMedia
          image={thumbnails?.high?.url}
          alt={title}
          sx={{ width: "100%", height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
        <Link to={`/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title?.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${channelId}`}>
          <Typography variant="subtitle2" fontWeight="semibold" color="gray">
            {channelTitle?.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
