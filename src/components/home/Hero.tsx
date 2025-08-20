import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import WaveDivider from '../common/WaveDivider';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-soft-mint to-white pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center">
      {/* Video background for the whole hero section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        style={{ minHeight: '100%', minWidth: '100%' }}
      >
        <source src="/hydroponics-hero.mp4" type="video/mp4" />
      </video>
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/10 via-sky-blue/10 to-white/0 pointer-events-none animate-fade-in z-10" />
      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:pr-12 animate-fade-in">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-charcoal mb-6 leading-tight drop-shadow-xl">
                Growing the Future with <span className="text-forest-green bg-lime-green/20 px-2 rounded-xl">Smart Hydroponics</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-graphite font-semibold mb-4 tracking-wide animate-fade-in">
                AI-powered, sustainable, and beautiful.
              </h2>
              <p className="text-graphite text-lg mb-10 max-w-xl animate-fade-in">
                Maximize yields while minimizing resource consumption. Trusted by innovators worldwide.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
                <Link to="/about">
                  <Button variant="primary" size="lg" className="shadow-lg shadow-forest-green/20 hover:scale-105">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/connect">
                  <Button variant="outline" size="lg" className="hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] animate-slide-up flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <img
                  src="/logo.svg"
                  alt="Farmspherica Logo"
                  className="w-24 h-24 md:w-32 md:h-32 drop-shadow-xl z-20 animate-fade-in mb-2"
                  style={{ pointerEvents: 'none' }}
                />
                <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-extrabold font-heading bg-gradient-to-r from-forest-green via-lime-green to-sky-blue bg-clip-text text-transparent drop-shadow-2xl select-none animate-fade-in tracking-tight">
                  Farmspherica
                </h1>
                <p className="text-lg md:text-xl font-semibold text-forest-green opacity-80 animate-fade-in select-none">
                  Innovations Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider color="text-white" position="bottom" className="z-20" />
    </section>
  );
};

export default Hero;