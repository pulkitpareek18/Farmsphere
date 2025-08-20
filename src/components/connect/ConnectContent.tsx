import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-forest-green text-white rounded-xl shadow-md p-8">
      <h2 className="font-heading text-2xl font-semibold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-lime-green mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Address</h3>
            <p className="text-white/80">
              B K Birla Insititute of Engineering & Technology, Pilani<br />
              333031, Jhunjhunu Rajasthan<br />
              India
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-lime-green mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Phone</h3>
            <p className="text-white/80">
              +91 7459805391
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-lime-green mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-white/80">
                            farmsphericainnvoations@gmail.com
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-lime-green mr-3 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Hours</h3>
            <p className="text-white/80">
              Monday - Friday: 9:00 AM - 5:00 PM IST<br />
              Saturday: 10:00 AM - 2:00 PM IST<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="font-medium mb-3">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/Farmspherica-innovations/" target="_blank" rel="noopener noreferrer" className="bg-dark-olive hover:bg-lime-green p-2 rounded-full transition-colors duration-200" aria-label="LinkedIn">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/Farmsphericainnovations/" target="_blank" rel="noopener noreferrer" className="bg-dark-olive hover:bg-lime-green p-2 rounded-full transition-colors duration-200" aria-label="Instagram">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@Farmsphericainnovations" target="_blank" rel="noopener noreferrer" className="bg-dark-olive hover:bg-lime-green p-2 rounded-full transition-colors duration-200" aria-label="YouTube">
            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.153 0 12 0 12s0 3.847.502 5.814a2.994 2.994 0 002.107 2.117C4.575 20.5 12 20.5 12 20.5s7.425 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.847 24 12 24 12s0-3.847-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const ConnectContent: React.FC = () => {
  return (
    <section className="pt-28 pb-20 bg-soft-mint/10">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Let's <span className="text-forest-green">Connect</span>
            </h1>
            <p className="text-graphite text-lg mb-8 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have questions about our hydroponics systems, want to explore partnership opportunities, or need technical support, our team is here to help.
            </p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <AnimatedCard delay={200}>
            <ContactInfo />
          </AnimatedCard>
          <AnimatedCard delay={300}>
            <div className="rounded-xl overflow-hidden shadow-md h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.6651671157315!2d75.58682867456217!3d28.368970996002165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131bd8fa3e1421%3A0xd7928a8c86ca1d5e!2sB%20K%20Birla%20Institute%20of%20Engineering%20%26%20Technology%2C%20Pilani!5e0!3m2!1sen!2sin!4v1747405356676!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Farmspherica location"
              ></iframe>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default ConnectContent;