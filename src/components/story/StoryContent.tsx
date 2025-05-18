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
                Farmsphere was founded by Akash Gupta in 2024. As an engineer, Akash was inspired to address the challenges facing modern agriculture and envisioned a future where technology and sustainability go hand in hand.
              </p>
              <p className="text-graphite">
                Driven by a passion for innovation and a commitment to empowering farmers, he set out to create solutions that make farming more efficient, sustainable, and rewarding for everyone involved.
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
                Since its inception, Farmsphere has rapidly evolved from a single visionary's dream into a thriving community of innovators and growers. Our journey has been marked by continuous learning, hands-on experimentation, and a relentless pursuit of better solutions for farmers everywhere.
              </p>
              <p className="text-graphite">
                By collaborating with experts and listening to the needs of real farmers, we have developed systems that are not only technologically advanced but also practical and accessible. Our growth is a testament to the power of shared vision and collective effort.
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
                Today, Farmsphere stands as a beacon of innovation in sustainable agriculture. Our dedicated team works tirelessly to push the boundaries of what is possible in hydroponics and smart farming, always with the goal of making a positive impact on farmers' lives and the environment.
              </p>
              <p className="text-graphite">
                With a growing network of partners and supporters, we continue to expand our reach, bringing modern farming solutions to communities across the globe and inspiring the next generation of agricultural leaders.
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