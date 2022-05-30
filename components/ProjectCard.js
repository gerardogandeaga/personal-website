import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Chip,
  ListItem,
  styled,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const openProjectSite = (url) => {
  console.log(url);
  window.open(url);
};

const ProjectCard = (props) => {
  const { name, description, link, tags, cover_image } = props;

  return (
    <Grid item xs={6}>
      {/* <CardActionArea component="a"> */}
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={2}
      >
        <CardMedia
          component={"img"}
          sx={{ height: 120 }}
          image={`/img/project-covers/${cover_image}`}
          alt={"Placeholder"} />

        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              // component="h4"
              variant="subtitle1"
              color="inherit"
              align="left"
              noWrap
              sx={{ flex: 1 }}
            >
              {name}
            </Typography>
            <Typography
              // component="h4"
              variant="body2"
              color="inherit"
              align="left"
            >
              {description}
            </Typography>
          </Box>
          <Grid container spacing={0.5} mt={1}>
            {tags.map((tag, i) => (
              <Grid item key={i}>
                <Chip label={tag} size={"small"} />
              </Grid>
            ))}
          </Grid>
          <Button 
            variant={"outlined"} endIcon={<GitHubIcon />} sx={{ mt: 2, height: 0.13, width: 1 }}
            onClick={() => openProjectSite(link)}>
            View Code
          </Button>
        </CardContent>
      </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
};

ProjectCard.PropTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
