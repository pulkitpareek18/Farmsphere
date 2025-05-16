import React from 'react';

const Terms: React.FC = () => {
  return (
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none text-graphite">
            <p className="text-lg mb-6">Last Updated: May 15, 2025</p>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">1. Acceptance of Terms</h2>
            <p>By accessing or using Farmsphere Innovations' website, products, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">2. Description of Services</h2>
            <p>Farmsphere Innovations provides hydroponics technology, products, and related services for sustainable farming. Our services may include:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Sale of hydroponics systems and equipment</li>
              <li>Installation and maintenance services</li>
              <li>Consulting and training</li>
              <li>Online resources and support</li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">3. User Accounts</h2>
            <p>Some features of our services may require you to create an account. You are responsible for:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Providing accurate account information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">4. Ordering and Payment</h2>
            <p>When placing an order through our website:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>All prices are in US dollars unless otherwise stated</li>
              <li>We accept major credit cards and other payment methods specified at checkout</li>
              <li>Orders are subject to acceptance and availability</li>
              <li>We reserve the right to refuse any order</li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">5. Shipping and Delivery</h2>
            <p>For physical products:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Shipping costs and methods vary by location and are calculated at checkout</li>
              <li>Risk of loss and title for items purchased pass to you upon delivery</li>
            </ul>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">6. Warranties and Returns</h2>
            <p>Our products come with a limited warranty as specified in our product documentation. For returns and warranty claims, please contact our customer service department.</p>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">7. Intellectual Property</h2>
            <p>All content on our website, including text, graphics, logos, images, and software, is the property of Farmsphere Innovations and protected by intellectual property laws. You may not use, reproduce, or distribute our content without our permission.</p>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Farmsphere Innovations shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or products.</p>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">9. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on this page and updating the "Last Updated" date.</p>
            
            <h2 className="font-heading text-2xl font-semibold text-forest-green mb-4 mt-8">10. Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p>Farmsphere Innovations<br />
            123 Eco Way<br />
            Green Valley, CA 94123<br />
            Email: legal@farmsphere.com<br />
            Phone: (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;