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

const Register = () => {
  return (
    <Grid container spacing={4} id="register">
      {/* REGISTER AS DOCTOR */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1, fontFamily: "Raleway" }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Register as a Doctor
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
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
              image="images/doctor.jpg"
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
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Register as a Patient
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
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
              image="images/patient.jpg"
              alt="Patient"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* ADMIN LOGIN */}
      <Grid item xs={12}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Sign in as an Admin
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Only verified admins of Medicare can login using the email ID
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
              image="images/admin.jpg"
              alt="Admin"
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default Register;
