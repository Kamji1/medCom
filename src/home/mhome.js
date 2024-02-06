// Home.js
import React from 'react';
import { Container } from '@mui/material';
import Navbar from './navbar';
import Header from './header';
import Register from './register';
import About from './about';
import Testimonials from './testimonials';
import Footer from './footer';
import DisplayPostsPage from './article';


const sections = [
  { title: 'Home', url: '#home' },
  { title: 'About', url: '#about' },
  { title: 'Register', url: '#register' },
  { title: 'Testimony', url: '#test' },
  { title: 'Contact', url: '#contact' },
];

const Home = () => {


  return (
    <>
      <div style={{
        width: "100%",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundposition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundImage: `url('images/bac1.jpg')`,
      }}>
        <img
          style={{ display: "none" }}
          src={process.env.PUBLIC_URL + "images/home.jpg"}
          alt="MedCore"
        />
        {/* NAVBAR COMPONENT - links to various sections */}
        <Navbar sections={sections} />
        {/* HEADER COMPONENT - image with tagline */}
        <Header />
      </div>
      <Container maxWidth="lg" >


        <main>

          {/* REGISTER COMPONENT - signup/signin for doctor/patient */}
          <Register />
          <br />
          <br />
          {/* ABOUT COMPONENT - about doctors */}
          <About />
          <DisplayPostsPage />
          {/* TESTIMONIALS COMPONENT - patient testimonials */}
          <Testimonials />
          {/* BLOG POST COMPONENT - admin can add articles */}



        </main>
      </Container>
      {/* FOOTER COMPONENT - contacts */}
      <Footer />
    </>
  );

};

export default Home;
