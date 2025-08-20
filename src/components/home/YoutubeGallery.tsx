import React from 'react';
import AnimatedCard from '../common/AnimatedCard';

// Add your YouTube video IDs here
const youtubeVideos = [
  {
    id: 'ZqS9tJ9u0rM', // Example video, replace with your real IDs
    title: 'Hydroponics System Overview'
  },
  {
    id: 'MuAVsKKkFZo',
    title: 'Growing Capsicum in Hydroponics'
  },
  {
    id: 'yihM1WKKGjo',
    title: 'Hydroponics in 1 Minute'
  }
];

const YoutubeGallery: React.FC = () => {
  return (
    <section className="py-20 bg-soft-mint/20">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Explore Our <span className="text-forest-green">YouTube Videos</span>
            </h2>
            <p className="text-graphite max-w-2xl mx-auto">
              Watch our latest hydroponics tutorials, product demos, and customer stories.
            </p>
          </div>
        </AnimatedCard>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {youtubeVideos.map((video, idx) => (
            <AnimatedCard key={video.id} delay={100 * idx} className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full rounded-xl shadow-lg overflow-hidden mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 md:h-56 lg:h-56 border-none rounded-xl"
                  loading="lazy"
                ></iframe>
              </div>
              <h3 className="font-heading font-semibold text-lg text-charcoal text-center mb-2">{video.title}</h3>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeGallery;
