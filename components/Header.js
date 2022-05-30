import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Button, IconButton, Typography, Link } from "@mui/material";

const Header = () => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}>
          Gerardo Gandeaga
        </Typography>
      </Toolbar>
    </>
  );
}

export default Header;