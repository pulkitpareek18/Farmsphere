import React from 'react';
import { Leaf, Droplets, Settings, LightbulbIcon, Users, HeartHandshake } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

interface ValueCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedCard delay={delay} className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-start">
        <div className="bg-soft-mint p-3 rounded-full mr-4">{icon}</div>
        <div>
          <h3 className="font-heading font-semibold text-xl mb-2 text-charcoal">{title}</h3>
          <p className="text-graphite">{description}</p>
        </div>
      </div>
    </AnimatedCard>
  );
};

const AboutContent: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="h-6 w-6 text-forest-green" />,
      title: "Sustainability",
      description: "We're committed to developing farming solutions that minimize environmental impact and preserve natural resources.",
      delay: 200
    },
    {
      icon: <Settings className="h-6 w-6 text-forest-green" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in hydroponics technology through research and development.",
      delay: 300
    },
    {
      icon: <LightbulbIcon className="h-6 w-6 text-forest-green" />,
      title: "Knowledge Sharing",
      description: "We believe in educating growers and communities about sustainable agriculture practices.",
      delay: 400
    },
    {
      icon: <Users className="h-6 w-6 text-forest-green" />,
      title: "Community",
      description: "We support local food systems and work to strengthen connections between farmers and consumers.",
      delay: 500
    },
    {
      icon: <Droplets className="h-6 w-6 text-forest-green" />,
      title: "Resource Efficiency",
      description: "We design systems that maximize yields while minimizing water, energy, and space requirements.",
      delay: 600
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-forest-green" />,
      title: "Integrity",
      description: "We operate with transparency and honesty in all our business practices and relationships.",
      delay: 700
    }
  ];

  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
              About <span className="text-forest-green">Farmspherica</span>
            </h1>
            <p className="text-graphite text-lg mb-8 max-w-3xl mx-auto">
              We're on a mission to revolutionize agriculture through innovative hydroponics technology that makes sustainable farming accessible and profitable.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <AnimatedCard delay={100}>
            <img
              src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Indoor vertical farm"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </AnimatedCard>
          <div>
            <AnimatedCard delay={200}>
              <h2 className="font-heading text-3xl font-semibold text-forest-green mb-4">What We Do</h2>
              <p className="text-graphite mb-4">
                Farmspherica Innovations designs and manufactures advanced hydroponics systems for farmers, restaurants, educational institutions, and home growers. Our solutions range from compact countertop units to large-scale commercial operations.
              </p>
              <p className="text-graphite mb-4">
                Our systems integrate cutting-edge technology to optimize growing conditions, nutrient delivery, and resource usage, resulting in higher yields, better quality produce, and reduced environmental impact.
              </p>
              <p className="text-graphite">
                Beyond equipment, we provide training, support, and a community platform for knowledge sharing among growers. Our goal is to equip our customers with everything they need to succeed in hydroponics farming.
              </p>
            </AnimatedCard>
          </div>
        </div>

        <AnimatedCard delay={300}>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-semibold text-forest-green mb-6">
              Our Core Values
            </h2>
            <p className="text-graphite mb-8 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={value.delay}
            />
          ))}
        </div>

        <AnimatedCard delay={700}>
          <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto mb-20">
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 text-center">
              Message from our Director
            </h2>
            <p className="text-graphite text-lg italic mb-4 text-center">
              "I want to be part of a transformation where farming is not just a means of survival, but a source of pride."
            </p>
            <p className="text-graphite text-lg mb-4 text-center">
              The words of Dr. A.P.J. Abdul Kalam taught me to dream - and Farmspherica was born from that dream.
            </p>
            <p className="text-graphite text-lg mb-4 text-center">
              I truly believe that real progress is incomplete until we improve the lives of our farmers. Every plant we grow is not just food, but a seed of hope. Every step at Farmspherica is dedicated to turning that hope into reality - building a future where both farming and wellness are treated with the respect they deserve.
            </p>
            <p className="text-charcoal font-semibold text-right mt-6">— Akash Gupta, Director</p>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={800}>
          <div className="bg-soft-mint/30 p-8 rounded-xl">
            <h2 className="font-heading text-3xl font-semibold text-forest-green mb-6 text-center">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-4">
                <h3 className="font-heading font-semibold text-xl mb-3 text-charcoal">Research</h3>
                <p className="text-graphite">
                  We continuously study plant biology, nutrition, and environmental factors to optimize growth conditions.
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-heading font-semibold text-xl mb-3 text-charcoal">Innovate</h3>
                <p className="text-graphite">
                  We develop technologies that make hydroponics more efficient, affordable, and user-friendly.
                </p>
              </div>
              <div className="text-center p-4">
                <h3 className="font-heading font-semibold text-xl mb-3 text-charcoal">Educate</h3>
                <p className="text-graphite">
                  We empower growers with knowledge and support to succeed with hydroponics farming.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default AboutContent;