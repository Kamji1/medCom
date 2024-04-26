import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { box, headerBox, headerPaper, raleway, subtitle } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = () => {

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);
  return (
    <Paper sx={headerPaper} id="#home">
      {/* Increase the priority of the hero background image */}
      {

      }
      {/* {<Box sx={box} />} */}

      {/* Text above image */}
      <Grid container>
        <Grid item md={6}>
          <Box sx={headerBox} data-aos="fade-up-right">
            <Typography
              component="h1"
              variant="h3"
              color="#11a2d7"
              gutterBottom
              sx={subtitle}
            >
              "We are here for your care..."
            </Typography>
            <Typography variant="h5" color="#FAF9F6" paragraph sx={raleway}>
              You dont know what is wrong with you? You are in the right place
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
