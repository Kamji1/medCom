import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { box, headerBox, headerPaper, raleway, subtitle } from "./styles";

const Header = () => {
  return (
    <Paper sx={headerPaper}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          src={process.env.PUBLIC_URL + "images/home.jpg"}
          alt="MedCore"
        />
      }
      <Box sx={box} />

      {/* Text above image */}
      <Grid container>
        <Grid item md={6}>
          <Box sx={headerBox}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              sx={subtitle}
            >
              "We are here for your care..."
            </Typography>
            <Typography variant="h5" color="inherit" paragraph sx={raleway}>
              You dont know whats wrong with you, You are in the right place
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;