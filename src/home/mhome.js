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
  { title: 'Home', url: '#' },
  { title: 'About', url: '#about' },
  { title: 'Register', url: '#register' },
  { title: 'Contact', url: '#contact' },
];

const Home = () => {


  return (
    <Container maxWidth="lg" sx={{ backgroundColor: '#d7e8f4' }}>
      {/* NAVBAR COMPONENT - links to various sections */}
      <Navbar sections={sections} />

      <main>
        {/* HEADER COMPONENT - image with tagline */}
        <Header />
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


        {/* FOOTER COMPONENT - contacts */}
        <Footer />
      </main>
    </Container>
  );

};

export default Home;
