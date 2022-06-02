import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Container, Typography, Grid, Paper, Link } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const SOCIAL_MEDIA_ICON_PADDING = 16;

const SocialMediaIcons = ({ social_links }) => {
  return (
    <Box sx={{ flexDirection: "column", pt: 2 }}>
        {social_links.map((link, i) => {
          const icon_margin = i > 0 ? SOCIAL_MEDIA_ICON_PADDING : 0;
          return <SocialIcon url={link} key={i} style={{ marginLeft: icon_margin }}/>
        })}
      </Box>
  );
}

const About = ({ title, about, social_links }) => {

  return (
    <Grid item xs={12} lg={5} md={6}>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt={"Me"}
          src={"/img/me.jpg"}
          sx={{ width: 250, height: 250 }}
        />
        <Typography
          variant={"h4"}
          color={"inherit"}
          align={"center"}
          // fontWeight={400}
          noWrap
          sx={{ flex: 1, m: 2 }}
        >
          {title}
        </Typography>

        <Paper sx={{ p: 2.5 }} elevation={2}>
          <Typography
            variant={"body1"}
            color={"inherit"}
            align={"left"}
            sx={{ flex: 1 }}
          >
            {about}
          </Typography>
        </Paper>

        <SocialMediaIcons social_links={social_links} />
      
      </Box>
    </Grid>
  );
};

About.PropTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  github_link: PropTypes.string.isRequired,
  linkedin_link: PropTypes.string.isRequired,
};

export default About;
