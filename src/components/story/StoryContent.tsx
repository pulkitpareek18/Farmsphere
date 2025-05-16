import React from 'react';
import AnimatedCard from '../common/AnimatedCard';
import WaveDivider from '../common/WaveDivider';

const StoryContent: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-soft-mint/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedCard>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6 text-center">
              Our <span className="text-forest-green">Story</span>
            </h1>
            <p className="text-graphite text-center text-lg mb-12">
              From a simple idea to revolutionize farming to a leader in hydroponics technology
            </p>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedCard delay={100}>
              <img
                src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Early hydroponics experiment"
                className="rounded-xl shadow-md w-full h-auto"
              />
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4">The Beginning</h2>
              <p className="text-graphite mb-4">
                Farmsphere Innovations began in 2018 when our founders, Dr. James Chen and Maria Rodriguez, recognized the growing challenges facing traditional agriculture: water scarcity, climate change, and the need to feed a growing global population.
              </p>
              <p className="text-graphite">
                With backgrounds in agricultural science and engineering, they set out to develop sustainable farming solutions that could produce more food with fewer resources.
              </p>
            </AnimatedCard>
          </div>

          <AnimatedCard delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-md mb-16">
              <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4">Our Mission</h2>
              <p className="text-graphite italic text-lg border-l-4 border-lime-green pl-4">
                "To revolutionize agriculture through innovative hydroponics technology, making sustainable farming accessible and profitable for growers of all sizes while contributing to global food security."
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedCard delay={400} className="order-2 md:order-1">
              <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4">Evolution & Growth</h2>
              <p className="text-graphite mb-4">
                From our first prototype developed in a small warehouse, Farmsphere has grown into a leader in hydroponics technology. Our first commercial system, launched in 2019, helped urban farmers grow leafy greens with 90% less water than traditional methods.
              </p>
              <p className="text-graphite">
                By 2021, we expanded into vertical farming solutions for larger operations, and today, our systems are used by farmers, restaurants, and educational institutions across North America and Europe.
              </p>
            </AnimatedCard>
            <AnimatedCard delay={500} className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern hydroponics facility"
                className="rounded-xl shadow-md w-full h-auto"
              />
            </AnimatedCard>
          </div>

          <AnimatedCard delay={600}>
            <div className="text-center mb-16">
              <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4">Where We Are Today</h2>
              <p className="text-graphite mb-4">
                Farmsphere now employs a team of 50 agricultural scientists, engineers, and sustainability experts dedicated to advancing hydroponics technology. Our headquarters in Green Valley, California includes a research facility and demonstration farm where we test new innovations and host educational tours.
              </p>
              <p className="text-graphite">
                We've been recognized with multiple awards for innovation in sustainable agriculture, including the 2023 Green Tech Award and the Future of Farming Innovation Prize.
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={700} className="mb-8">
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 text-center">Looking to the Future</h2>
            <p className="text-graphite text-center">
              As we continue to grow, our focus remains on making hydroponics more accessible, efficient, and sustainable. We're currently developing new AI-powered systems that optimize nutrient delivery and energy usage, as well as smaller-scale solutions for home growers and educational settings.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default StoryContent;