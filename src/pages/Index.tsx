
import React from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
