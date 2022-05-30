import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Avatar, Box, Container, Typography, Grid, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = (props) => {
  const { title, about } = props;

  return (
    <Grid item xs={12} lg={5} md={6}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Avatar
          alt={"Me"}
          src={"/img/me.jpg"}
          sx={{ width: 250, height: 250 }}
        />
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

        <Paper sx={{ p: 2.5 }} elevation={2}>
          <Typography
            component="body1"
            variant="body1"
            color="inherit"
            align="left"
            sx={{ flex: 1 }}
          >
            {about}
          </Typography>
        </Paper>
        
      </Box>
    </Grid>
  );
};

About.PropTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default About;
