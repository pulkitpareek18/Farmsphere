import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import WaveDivider from '../common/WaveDivider';

const About: React.FC = () => {
  return (
    <section className="relative py-20 bg-soft-mint/30">
      <WaveDivider position="top" color="text-white" />
      
      <div className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-sky-blue rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-lime-green rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <img
              src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Indoor hydroponics farm"
              className="rounded-2xl shadow-lg w-full h-auto object-cover lg:max-w-md mx-auto relative z-10"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Transforming Agriculture for a <span className="text-forest-green">Sustainable Future</span>
            </h2>
            <p className="text-graphite mb-4">
              At Farmsphere Innovations, we're committed to reimagining how food is grown. Our advanced hydroponics systems deliver consistent, high-quality yields while using a fraction of the resources required by traditional farming.
            </p>
            <p className="text-graphite mb-6">
              Founded by agricultural and technology experts, we combine scientific research with practical farming knowledge to create solutions that work for farmers of all sizes.
            </p>
            <Link to="/about">
              <Button variant="primary">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <WaveDivider position="bottom" color="text-white" />
    </section>
  );
};

export default About;