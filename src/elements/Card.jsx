import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import dummy from "../assets/dummy/profile.png"

const ProjectCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 400, bgcolor: "#121212", color: "white", borderRadius: 3, boxShadow: 5 }}>
      <CardMedia component="img" height="200" image={dummy} alt={title} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body2" color="gray">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
