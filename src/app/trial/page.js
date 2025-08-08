// src/app/trial/page.js
'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ'; // Re-using your FAQ component
import { motion } from 'framer-motion';
import { SparklesIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

const TrialPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your trial request! Please check your email for setup instructions.');
    e.target.reset();
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Start Your Free 24-Hour Trial
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Experience the full power of NexusStream with no commitment.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <motion.div 
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Request Your Trial</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" id="email" required placeholder="you@example.com" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-slate-300 mb-2">What device will you be using?</label>
                  <input type="text" id="device" required placeholder="e.g., Firestick, Smart TV, Android Box" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                  <input type="text" id="country" required placeholder="Your current country" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-slate-300 mb-2">Language Preference</label>
                  <input type="text" id="language" placeholder="e.g., English, Spanish" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Include Adult Content?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center"><input type="radio" name="adult" value="yes" className="mr-2" /> Yes</label>
                    <label className="flex items-center"><input type="radio" name="adult" value="no" className="mr-2" defaultChecked /> No</label>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                    Get My Free Trial
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Benefits Section */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <SparklesIcon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">What&aposs Included?</h3>
                <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                  <li>Full access to 20,000+ channels</li>
                  <li>80,000+ Movies & VOD titles</li>
                  <li>HD & 4K streaming quality</li>
                  <li>24/7 customer support</li>
                  <li>No credit card required</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <CheckBadgeIcon className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">Instant Activation</h3>
                <p className="mt-4 text-slate-300">
                  Your trial details will be sent to your email address within minutes of your request. Follow the simple setup guide for your device and start streaming instantly!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Re-use the FAQ component */}
        <div className="mt-24">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrialPage;
