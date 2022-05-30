import React from "react";
import { Container, Typography, Grid } from "@mui/material";

import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const { title, projects } = props;

  return (
    <Grid item xs={12} lg={7} md={6}>
      <Typography
        // component="h4"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        sx={{ flex: 1, m: 2 }}
      >
        {title}
      </Typography>

      <Grid 
        container 
        sx={2} 
        spacing={2}
        direction={"row"}
        justifyContent={"left"}
        alignItems="stretch">
        {projects.map((project, i) => (
          <ProjectCard
            {...project}
            key={i}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
