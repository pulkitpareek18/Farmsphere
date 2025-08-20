import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  category: string;
  images: string[]; // Changed to array for multiple images
  participants?: number;
  highlights?: string[];
}

// Actual events data from Farmspherica's journey
const eventsData: Event[] = [
  {
    id: 1,
    title: "R.I.S.E. Innovation Challenge 2025",
    date: "June 15, 2025",
    location: "Jalna, Maharashtra",
    description: "Our founder, Akash Gupta, represented Farmspherica at the R.I.S.E. Innovation Challenge hosted by the Rotary Club of Jalna Central in collaboration with the MAGIC Business Incubator SME Accelerator. Out of 45+ national entries, Farmspherica was among the top 12 startups selected to pitch live on stage before a jury of industry experts, academics, and ecosystem leaders.",
    category: "Challenge",
    images: [
        "rise-challenge-1.jpg",
        "rise-challenge-2.jpg",
        "rise-challenge-3.jpg",
        "rise-challenge-4.jpg",
        "rise-challenge-5.jpg",
    ],
    participants: 45,
    highlights: [
      "Selected among top 12 startups from 45+ national entries",
      "Live on-stage presentation before esteemed jury of industry experts",
      "High-impact networking with fellow innovators and mentors",
      "Constructive feedback to sharpen our roadmap",
      "Keynote address by Dr. Usha Zehr on agri-innovation and sustainability",
      "Learning from startups across agriculture, healthcare, and automation sectors"
    ]
  },
  {
    id: 2,
    title: "Startup Mahakumbh 2025",
    date: "April 5, 2025",
    location: "Bharat Mandapam, New Delhi",
    description: "A truly massive event and great congregation of startups, startup enthusiasts, technology enthusiasts, experts and common people. The event concluded beautifully with an atmosphere of excitement and exploration. Our leadership explored a great variety of startups with unique and inspiring ideas across agriculture, agri-tech, clean-tech, artificial intelligence, cybersecurity, gaming, and defense sectors.",
    category: "Exhibition",
    images: [
      "startup-mahakumbh-1.jpg",
      "startup-mahakumbh-2.jpg",
      "startup-mahakumbh-3.jpg",
      "startup-mahakumbh-4.jpg",
      "startup-mahakumbh-5.jpg"
    ],
    participants: 10000,
    highlights: [
      "Massive congregation of startups and technology enthusiasts",
      "Explored startups across agriculture, agri-tech, clean-tech, AI, cybersecurity, gaming, defense",
      "Engaged with like-minded startups in agriculture and agri-tech",
      "Connected with experienced businessmen and startup accelerators",
      "Received motivation and support for upcoming endeavors",
      "Special engagement with Pusa Krishi for agricultural innovation"
    ]
  },
  {
    id: 3,
    title: "MANAGE Cohort 12 RKVY RAFTAAR",
    date: "March 3-7, 2025",
    location: "MANAGE, Hyderabad",
    description: "Farmspherica was part of the MANAGE Cohort 12 RKVY RAFTAAR training program. A comprehensive 5-day program that began with insightful classes from business development to technology. Our founder Akash Gupta participated and interacted with like-minded startup founders, learning from illustrious personalities and industry experts in the agricultural entrepreneurship ecosystem.",
    category: "Program",
    images: [
      "manage-cohort-1.jpg", // Replace with actual event photos
      "manage-cohort-2.jpg", // Photo 2 from the event
      "manage-cohort-3.jpg", // Photo 3 from the event
    ],
    participants: 50,
    highlights: [
      "Inspiring inaugural session by Dr. Saravanan Raj (Director, Agricultural Extension, MANAGE)",
      "Session on 'How to Pitch' - essential storytelling and presentation skills",
      "Engaging talk by Mr. Ranjith Reddy on patents, DPIIT certification, and intellectual property protection",
      "Opportunity to pitch ideas and receive constructive feedback",
      "Mentorship sessions to think bigger, present better, and refine startup ideas",
      "Certificate presentation by Dr. Saravanan Raj marking the program culmination",
      "Networking with like-minded startup founders and industry experts"
    ]
  }
];

const categories = ["All", "Challenge", "Exhibition", "Program"];

const EventsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredEvents = selectedCategory === "All" 
    ? eventsData 
    : eventsData.filter(event => event.category === selectedCategory);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setCurrentImageIndex(0); // Reset to first image when opening modal
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedEvent && currentImageIndex < selectedEvent.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-soft-mint to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
            Our Event Journey
          </h1>
          <p className="text-lg text-graphite max-w-3xl mx-auto leading-relaxed">
            Explore the events we've attended, conferences we've spoken at, and workshops we've conducted. 
            Each event has been a step forward in our mission to revolutionize agriculture.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-forest-green text-white shadow-lg'
                  : 'bg-white text-graphite hover:bg-forest-green hover:text-white border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <AnimatedCard key={event.id} delay={index * 0.1}>
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(event)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.images[0]} // Show first image as thumbnail
                    alt={event.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-forest-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      {event.images.length} photos
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-graphite text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-graphite text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    {event.participants && (
                      <div className="flex items-center text-graphite text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.participants} participants</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-graphite text-sm line-clamp-3 mb-4">
                    {event.description}
                  </p>
                  
                  <button className="text-forest-green font-medium text-sm hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Image Gallery */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={selectedEvent.images[currentImageIndex]} 
                    alt={`${selectedEvent.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {selectedEvent.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        disabled={currentImageIndex === 0}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={currentImageIndex === selectedEvent.images.length - 1}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedEvent.images.length}
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  {/* Category Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-forest-green text-white px-4 py-2 rounded-full text-sm font-medium">
                      {selectedEvent.category}
                    </span>
                  </div>
                </div>
                
                {/* Image Thumbnails */}
                {selectedEvent.images.length > 1 && (
                  <div className="p-4 border-b">
                    <div className="flex gap-2 overflow-x-auto">
                      {selectedEvent.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            index === currentImageIndex 
                              ? 'border-forest-green' 
                              : 'border-gray-200 hover:border-gray-400'
                          }`}
                        >
                          <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-heading font-bold text-charcoal mb-6">
                  {selectedEvent.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center text-graphite">
                    <Calendar className="w-5 h-5 mr-3 text-forest-green" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-sm">{selectedEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-graphite">
                    <MapPin className="w-5 h-5 mr-3 text-forest-green" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm">{selectedEvent.location}</p>
                    </div>
                  </div>
                  {selectedEvent.participants && (
                    <div className="flex items-center text-graphite">
                      <Users className="w-5 h-5 mr-3 text-forest-green" />
                      <div>
                        <p className="font-medium">Participants</p>
                        <p className="text-sm">{selectedEvent.participants} people</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-4">Event Description</h3>
                  <p className="text-graphite leading-relaxed">
                    {selectedEvent.description}
                  </p>
                </div>
                
                {selectedEvent.highlights && (
                  <div className="mb-8">
                    <h3 className="text-xl font-heading font-bold text-charcoal mb-4">Key Highlights</h3>
                    <ul className="space-y-2">
                      {selectedEvent.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-forest-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-graphite">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button
                  onClick={closeModal}
                  className="bg-forest-green text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsGallery;
