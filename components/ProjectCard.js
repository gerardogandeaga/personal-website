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
  Tooltip,
  Paper,
  Chip,
  ListItem,
  styled,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const UNAVAILABLE_MSG = "Source not publicly available due to copyright."

const projectCardTheme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 18,
      fontWeight: 500
    }
  }
})

const openProjectSite = (url) => {
  console.log(url);
  window.open(url);
};

const ViewCodeButton = ({ link }) => {
  
  // if the link is null then I probably can't release the code publically 
  if (link === null) {
    return (
       <Tooltip title={UNAVAILABLE_MSG}>
        <Button
          variant={"outlined"}
          color={"error"}
          sx={{ mt: 2 }}
          // onClick={() => openProjectSite(link)}
        >
          Unavailable 
        </Button>
      </Tooltip>
    );
  }
  else {
    return (
      // <></>
      <Tooltip title={link}>
        <Button
          variant={"outlined"}
          endIcon={<GitHubIcon />}
          sx={{  mt: 2 }}

          onClick={() => openProjectSite(link)}
        >
          View Code
        </Button>
      </Tooltip>
    );
  }
}

const ProjectCard = ({ name, description, link, tags, cover_image }) => {
  return (
    <Grid item xs={12} sm={6} lg={6}>
      <ThemeProvider theme={projectCardTheme}>
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
          sx={{ height: 150 }}
          src={`/img/project-covers/${cover_image}`}
          alt={"Placeholder"}
        />

        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              color="inherit"
              align="left"
              noWrap
              sx={{ flex: 1 }}
            >
              {name}
            </Typography>
            <Typography
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
          <ViewCodeButton link={link} /> 
        </CardContent>
      </Card>

      </ThemeProvider>
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
