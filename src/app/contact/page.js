// src/app/contact/page.js
'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EnvelopeIcon, ChatBubbleLeftRightIcon, TicketIcon } from '@heroicons/react/24/outline';

const ContactMethod = ({ icon, title, children }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/30">
        {React.cloneElement(icon, { className: "w-6 h-6 text-blue-400" })}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <div className="text-slate-300">{children}</div>
  </div>
);

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    e.target.reset();
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300">
              Have questions? Our team is here to help you 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContactMethod icon={<EnvelopeIcon />} title="Email Support">
              <p>Send us an email for any inquiries. We typically respond within a few hours.</p>
              <a href="mailto:support@nexusstream.com" className="text-blue-400 hover:underline mt-2 inline-block">
                support@nexusstream.com
              </a>
            </ContactMethod>
            <ContactMethod icon={<ChatBubbleLeftRightIcon />} title="Live Chat">
              <p>For instant support, use our live chat feature available on the bottom right of any page during business hours.</p>
            </ContactMethod>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input type="text" id="name" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" id="email" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea id="message" rows="5" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
