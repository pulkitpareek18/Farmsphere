import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import YoutubeGallery from '../components/home/YoutubeGallery';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      {/* <Testimonials /> */}
      <YoutubeGallery />
      {/* <Newsletter /> */}
    </div>
  );
};

export default Home;