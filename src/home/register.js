import * as React from "react";
import { Link } from 'react-router-dom';
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { boldRaleway, button, cardMedia, raleway } from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Register = () => {

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);

  return (
    <Grid container style={{ marginTop: "3%", marginBottom: "5%", justifyContent: "center" }} spacing={4} id="register" data-aos="fade-up">
      {/* REGISTER AS DOCTOR */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1, fontFamily: "Raleway" }}>
              <Typography component="h1" variant="h4" color="grey" sx={boldRaleway}>
                Register as a Doctor
              </Typography>
              <Typography variant="h6" paragraph color="rgb(190, 190, 190)" sx={raleway}>
                Sign Up to provide consultations to patients
              </Typography>


              <Button sx={button} component={Link} to="/ProfessionalSignUp">
                Sign Up
              </Button>

              <Button sx={button} component={Link} to="ProfessionalSignIn">
                Sign In
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/doct.jpg"
              alt="Doctor"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* REGISTER AS PATIENT */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" color="grey" sx={boldRaleway}>
                Register as a Patient
              </Typography>
              <Typography variant="h6" paragraph color="rgb(190, 190, 190)" sx={raleway}>
                Sign Up to book appointments with doctors
              </Typography>
              <Button sx={button} component={Link} to="/PatientSignUp">
                Sign Up
              </Button>

              <Button sx={button} component={Link} to="/PatientSignIn">
                Sign In
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/sick.jpg"
              alt="Patient"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* ADMIN LOGIN */}
      <Grid item xs={12} md={10} data-aos="fade-in">
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex", boxShadow: "red" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" color="grey" sx={boldRaleway}>
                Sign in as an Admin
              </Typography>
              <Typography variant="h6" paragraph color="rgb(190, 190, 190)" sx={raleway}>
                Only verified admins of MedCom can login using the email ID
                provided to them
              </Typography>

              <Button sx={button} component={Link} to="/AdminSignIn">
                Sign In
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/admin.png"
              alt="Admin"
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default Register;
