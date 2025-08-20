import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-olive text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Farmspherica Logo" className="h-12 w-12" />
              <span className="ml-2 font-heading font-bold text-xl">Farmspherica Innovations Pvt. Ltd.</span>
            </div>
            <p className="text-cool-gray mb-4">
              Revolutionizing agriculture through innovative hydroponics technology for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/Farmsphericainnovations/" className="text-cool-gray hover:text-sky-blue transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/Farmspherica-innovations/" className="text-cool-gray hover:text-sky-blue transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@Farmsphericainnovations" className="text-cool-gray hover:text-sky-blue transition-colors duration-200" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                {/* YouTube icon as SVG */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.153 0 12 0 12s0 3.847.502 5.814a2.994 2.994 0 002.107 2.117C4.575 20.5 12 20.5 12 20.5s7.425 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.847 24 12 24 12s0-3.847-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-lime-green">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Let's Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-lime-green">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-cool-gray hover:text-lime-green transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-lime-green">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-lime-green mr-2 mt-0.5" />
                <span className="text-cool-gray">B K Birla Insititute of Engineering & Technology, Pilani, 333031, Jhunjhunu Rajasthan, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-lime-green mr-2" />
                <span className="text-cool-gray">+91 7459805391</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-lime-green mr-2" />
                <span className="text-cool-gray">farmsphericainnovations@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lime-green/30 mt-12 pt-8 text-center text-cool-gray">
          <p>&copy; {new Date().getFullYear()} Farmspherica Innovations Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;