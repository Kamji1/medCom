import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { card, message, testimonialsTitle } from "./styles";

const theme = createTheme();

const Testimonials = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h3" sx={testimonialsTitle}>
            Our Patient Testimonials...
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={card}>
                <CardMedia
                  component="img"
                  image="images/testimonial1.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={message}
                  >
                    "I would like to let you know how much we appreciate the
                    special attention our daughter was given by the doctors"
                  </Typography>
                  <Typography variant="h6">- Norman</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={card}>
                <CardMedia
                  component="img"
                  image="images/testimonial2.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={message}
                  >
                    "The waiting time for getting an appointment approved is too
                    less and that's why I like MedCom!"
                  </Typography>
                  <Typography variant="h6">- Nyisha</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={card}>
                <CardMedia
                  component="img"
                  image="images/testimonial3.jpg"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={message}
                  >
                    " I recommend it helps us who don't have
                    much time to wait at a hospital or visit a doctor
                    physically."
                  </Typography>
                  <Typography variant="h6">- Frank</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Testimonials;
