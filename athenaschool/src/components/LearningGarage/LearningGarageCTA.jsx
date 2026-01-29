import React from 'react';

const LearningGarageCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-sky-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start?
          </h2>
          <p className="text-xl mb-8">
            Come experience learning like never before — 12 sessions FREE!
          </p>
          
          <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-colors text-lg">
            Book Free Trial
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Need Help? We're Here for You</h3>
          <p className="text-center mb-8 text-blue-100">
            Contact our support team for any questions or assistance
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">📧</div>
              <h4 className="text-xl font-bold mb-2">Email Support</h4>
              <p className="mb-4">Send us an email and we'll get back to you soon</p>
              <a href="mailto:info@21kschool.com" className="text-yellow-300 hover:text-yellow-200 underline">
                info@21kschool.com
              </a>
            </div>
            
            <div className="bg-white/20 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">💬</div>
              <h4 className="text-xl font-bold mb-2">WhatsApp Support</h4>
              <p className="mb-4">Chat with us instantly for quick assistance</p>
              <a href="tel:+919663213636" className="text-yellow-300 hover:text-yellow-200 underline">
                +91 96632 13636
              </a>
            </div>
          </div>
          
          <p className="text-center mt-6 text-blue-100 text-sm">
            Our support team is available to help you with bookings, questions, and technical assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningGarageCTA;
