import React from 'react';
import { Droplets, Leaf, Recycle, Award, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AnimatedCard from '../common/AnimatedCard';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col items-center text-center">
        <div className="bg-soft-mint p-3 rounded-full mb-4 transform hover:rotate-12 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-xl mb-3 text-charcoal">{title}</h3>
        <p className="text-graphite">{description}</p>
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Droplets className="h-8 w-8 text-forest-green" />,
      title: "Water Efficiency",
      description: "Our systems use up to 95% less water than traditional farming methods, conserving this precious resource.",
      delay: 1
    },
    {
      icon: <Leaf className="h-8 w-8 text-forest-green" />,
      title: "Pesticide-Free",
      description: "Grow healthier produce without pesticides or chemicals in a controlled environment.",
      delay: 2
    },
    {
      icon: <Recycle className="h-8 w-8 text-forest-green" />,
      title: "Sustainable Farming",
      description: "Reduce environmental impact with eco-friendly growing methods and reduced carbon footprint.",
      delay: 3
    },
    {
      icon: <Award className="h-8 w-8 text-forest-green" />,
      title: "Premium Quality",
      description: "Harvest nutrient-rich, flavorful produce year-round, regardless of season or climate.",
      delay: 4
    },
    {
      icon: <Zap className="h-8 w-8 text-forest-green" />,
      title: "Energy Efficient",
      description: "Optimized systems that minimize energy consumption while maximizing plant growth.",
      delay: 5
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-forest-green" />,
      title: "Food Security",
      description: "Create reliable food production systems that operate in any environment or climate.",
      delay: 6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Revolutionary Hydroponics <span className="text-forest-green">Features</span>
            </h2>
            <p className="text-graphite max-w-3xl mx-auto">
              Our innovative approach to hydroponics combines cutting-edge technology with sustainable practices to create the most efficient growing systems available.
            </p>
          </div>
        </AnimatedCard>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>

        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              }
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <Feature
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={feature.delay}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;