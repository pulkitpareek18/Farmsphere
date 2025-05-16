import React, { useState } from 'react';
import Button from '../common/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // In a real application, this would send the data to a server
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="bg-forest-green py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with Farmsphere
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our newsletter for the latest hydroponics innovations, farming tips, and company updates.
          </p>

          {isSubmitted ? (
            <div className="bg-white/10 rounded-lg p-6 text-white animate-fade-in">
              <h3 className="font-heading font-semibold text-xl mb-2">Thank You for Subscribing!</h3>
              <p>You're now on the list to receive our latest updates and news.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-blue ${
                      error ? 'border-2 border-red-500' : ''
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <p className="text-left mt-1 text-red-300 text-sm">{error}</p>}
                </div>
                <Button type="submit" variant="secondary" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-white/60 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;