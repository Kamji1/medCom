import * as React from "react";
import { Box, Grid, Paper, Typography, Container, Divider } from "@mui/material";
import { BarChartOutlined, LocalHospitalOutlined } from '@mui/icons-material';
import {
  box,
  aboutPaper,
  subtitle,
  raleway,
  headerBox,
} from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const roundIconStyle = {
  backgroundColor: '#11a2d7',
  borderRadius: '50%',
  padding: '10px',
};

const RoundedIcon = ({ children }) => (
  <span style={roundIconStyle}>
    {children}
  </span>
);

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
      once: false,
    });
  }, []);
  return (
    <div  >
      {/* <Typography
        component="h1"
        variant="h5"
        color="inherit"
        align="center"
        gutterBottom
        sx={description}
      >
        MedCom is for those people who don't want to wait in long queues to
        book an appointment with one of the best doctors nearby and also for
        those doctors who wish to consult their patients at their own
        convenience.
        <br />
        <i>
          <b> Let's together bring a change in the medical industry!</b>
        </i>
      </Typography> */}

      <Container maxWidth="lg">
        {/* Medical Historical Report */}
        <Typography variant="h4" align="center" color="grey" gutterBottom>
          Medical Historical Report
        </Typography>
        <Divider sx={{ bgcolor: 'grey.500', height: 2, width: '100%', marginBottom: 4 }} />

        {/* Medical Saying */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" align="start">
              "Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity." - World Health Organization
              Deadliest Disease and Year It Emerged:
              The Spanish flu pandemic of 1918-1919 is often regarded as one of the deadliest disease outbreaks in history, claiming millions of lives worldwide. This influenza pandemic caused by the H1N1 virus had a profound impact on global health and public health practices.
              Child with Fused Body:
              One notable case is that of the "Two-Headed Boy of Bengal," a rare medical condition known as Craniopagus parasiticus. This case involved a child born with two heads partially fused together, and it gained international attention in 2008 when surgeons successfully separated the parasitic head from the main body in a complex surgical procedure.
              Most Difficult Successful Surgery and Surgeon:
              One of the most challenging and successful surgical procedures in medical history is the separation of conjoined twins. Dr. Ben Carson, a renowned pediatric neurosurgeon, gained fame for his role in successfully separating the Binder twins in 1987, who were joined at the back of the head. This groundbreaking surgery paved the way for advancements in the field of pediatric neurosurgery.

            </Typography>
          </Grid>
        </Grid>

        {/* Images */}
        <Grid container spacing={2} marginTop={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Medical Pinpoints
            </Typography>

            <Typography style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <RoundedIcon>
                <LocalHospitalOutlined style={{ color: '#fff' }} />
              </RoundedIcon>
              <p style={{ marginLeft: '10px' }}>The International Council of Nurses (ICN) estimates that there are around 27 million nurses worldwide. However, this number can fluctuate</p>
            </Typography>
            <Typography style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <RoundedIcon>
                <BarChartOutlined style={{ color: '#fff' }} />
              </RoundedIcon>
              <p style={{ marginLeft: '10px' }}>According to the World Health Organization (WHO), there are approximately 56 million deaths globally each year. However, this number can vary</p>
            </Typography>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>

            {/* Image 2 */}
            <img
              src="images/who.png"
              alt="avatar"
              style={{ width: "100%", height: "auto" }}
            />

          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {/* Image 1 */}
            <img
              src="images/logo.png"
              alt="avatar"
              style={{ width: "100%", height: "auto" }}
            />

          </Grid>



          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              <b>In Honour</b>
            </Typography>
            <ul>
              <li>Hippocrates of Kos, Father of modern medicine (c. 460 - c. 370 BCE)</li>
              <li>Friedrich Serturner, Invented first pharmaceutical medicine in 1804</li>
              <li>Sushruta, Founding father of surgery (c. 600 BCE)</li>
              <li>Elizabeth Blackwell, First woman to earn medical degree (1821 - 1910)</li>
            </ul>
          </Grid>
        </Grid>

        {/* Medical Pinpoints */}
        <Grid container spacing={2}>

        </Grid>
      </Container>

      <Paper sx={aboutPaper} data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={process.env.PUBLIC_URL + "images/ban.jpg"}
            alt="Doctors"
          />
        }
        <Box sx={box} />

        {/* Text above image */}
        <Grid container marginTop={10}>
          <Grid item md={6}>
            <Box sx={headerBox}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                sx={subtitle}
              >
                "<span style={{ color: "#11a2d7" }}>Trusted</span> Professionals"
              </Typography>
              <Typography variant="h5" color="inherit" paragraph sx={raleway}>
                Consult one of the best doctors just by a click!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default About;
