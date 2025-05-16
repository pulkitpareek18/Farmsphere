import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company }) => {
  return (
    <AnimatedCard className="bg-white rounded-xl shadow-md p-8 flex flex-col h-full">
      <Quote className="h-10 w-10 text-forest-green opacity-20 mb-4" />
      <p className="text-graphite italic mb-6 flex-grow">{quote}</p>
      <div>
        <p className="font-heading font-semibold text-charcoal">{author}</p>
        <p className="text-graphite text-sm">
          {position}, {company}
        </p>
      </div>
    </AnimatedCard>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Farmsphere's hydroponics system has completely transformed our small urban farm. We're now producing twice as much with less than half the resources.",
      author: "Sarah Johnson",
      position: "Founder",
      company: "Urban Greens Co-op"
    },
    {
      quote: "As a restaurant owner committed to farm-to-table dining, Farmsphere has allowed us to grow our own produce year-round with exceptional quality and taste.",
      author: "Michael Chen",
      position: "Executive Chef",
      company: "Harvest Table Restaurant"
    },
    {
      quote: "The technical support from Farmsphere has been outstanding. Their team helped us scale our operation from a small pilot to a commercial-size facility.",
      author: "David Rodriguez",
      position: "Operations Manager",
      company: "Vertical Farms Inc."
    },
    {
      quote: "We've reduced our water usage by 90% while increasing yields by 40% since implementing Farmsphere's hydroponics technology. The ROI has been impressive.",
      author: "Lisa Thompson",
      position: "Sustainability Director",
      company: "Green Future Farms"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + testimonialsPerPage >= testimonials.length ? 0 : prevIndex + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - testimonialsPerPage < 0 
        ? testimonials.length - (testimonials.length % testimonialsPerPage || testimonialsPerPage) 
        : prevIndex - testimonialsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(
    currentIndex,
    Math.min(currentIndex + testimonialsPerPage, testimonials.length)
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What Our <span className="text-forest-green">Clients Say</span>
          </h2>
          <p className="text-graphite max-w-2xl mx-auto">
            Discover how our hydroponics technology is transforming agriculture for businesses and communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevTestimonials}
              className="p-2 rounded-full bg-cool-gray/30 text-charcoal hover:bg-forest-green hover:text-white transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextTestimonials}
              className="p-2 rounded-full bg-cool-gray/30 text-charcoal hover:bg-forest-green hover:text-white transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;