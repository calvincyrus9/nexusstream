// src/app/contact/page.js
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';


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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = {
      formType: 'Contact Inquiry',
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Server error during submission.');
      
      setSubmitStatus({ success: true, message: 'Your message has been received — our support team will get back to you soon.' });
      e.target.reset();

    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Get in touch with NexusXtream support for any IPTV-related questions or issues."
        canonical="https://nexusxtream.com/contact"
        openGraph={{
          url: 'https://nexusxtream.com/contact',
          title: 'Contact Us | NexusXtream',
          description: 'Get in touch with NexusXtream support for any IPTV-related questions or issues.',
        }}
      />
    <div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300">
              Have questions? Our team is here to help you 24/7.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ContactMethod icon={<EnvelopeIcon />} title="Email Support">
              <p>Send us an email for any inquiries. We typically respond within a few hours.</p>
              <a href="mailto:support@nexusxtream.com" className="text-blue-400 hover:underline mt-2 inline-block">
                support@nexusxtream.com
              </a>
            </ContactMethod>
            <ContactMethod icon={<ChatBubbleLeftRightIcon />} title="Live Chat">
              <p>For instant support, use our live chat feature available on the bottom right of any page during business hours.</p>
            </ContactMethod>
          </div>

          <motion.div 
            className="bg-slate-800/50 p-8 rounded-lg border border-slate-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea id="message" name="message" rows="5" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {submitStatus && (
              <div className={`mt-4 text-center p-3 rounded-md ${submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                {submitStatus.message}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
        </>
  );
};

export default ContactPage;
