// src/app/renew/page.js
'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CreditCardIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const RenewalPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your renewal request! We will process it shortly and send a confirmation to your email.');
    e.target.reset();
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Renew Your Subscription
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Continue enjoying uninterrupted access to premium entertainment.
            </motion.p>
          </div>

          <motion.div 
            className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Renewal Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" id="email" required placeholder="Your account email" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">Your Xtream Username</label>
                  <input type="text" id="username" required placeholder="e.g., user123" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-slate-300 mb-2">Duration</label>
                  <select id="duration" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition">
                    <option>1 Month</option>
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>1 Year</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="devices" className="block text-sm font-medium text-slate-300 mb-2">How many devices?</label>
                  <input type="number" id="devices" required min="1" defaultValue="1" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
              </div>

              <div>
                <label htmlFor="payment" className="block text-sm font-medium text-slate-300 mb-2">Payment Method</label>
                <select id="payment" required className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition">
                  <option>PayPal</option>
                  <option>Credit / Debit Card</option>
                  <option>Crypto (-10% Discount)</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                <input type="text" id="country" required placeholder="Your billing country" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 transition" />
              </div>
              
              <div className="pt-4">
                <label className="flex items-center text-slate-300">
                  <input type="checkbox" required className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  I confirm that I have set up my account and everything is working properly. I want to renew.
                </label>
              </div>

              <div className="text-center pt-4">
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform">
                  Submit Renewal Request
                </button>
              </div>
            </form>
            <div className="mt-8 flex items-center justify-center text-slate-400">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-500" />
                <span>All transactions are secure and encrypted.</span>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RenewalPage;
