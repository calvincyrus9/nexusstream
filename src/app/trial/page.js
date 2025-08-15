// src/app/trial/page.js
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import TutorialsContent from '../components/TutorialsContent';
import { motion } from 'framer-motion';
import { SparklesIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import SEO from '../../../next-seo.config';

export async function generateMetadata() {
  const title = "Free IPTV Trial";
  const description = "Sign up for a free trial of NexusXtream and experience our high-quality IPTV service.";
  const url = "/trial";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...SEO.openGraph,
      title: `${title} | NexusXtream`,
      description,
      url,
    },
  };
}

const TrialPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const formData = {
      formType: 'ZP Trial Request',
      email: e.target.email.value,
      device: e.target.device.value,
      country: e.target.country.value,
      language: e.target.language.value,
      adultContent: e.target.adult.value,
    };
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Server error');
      setSubmitStatus({ success: true, message: 'Thank you for requesting a free trial. Your request is being processed and should be completed within a few minutes. We’ll be in touch soon.' });
      e.target.reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus({ success: false, message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
     <>
     
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Start Your Free 24-Hour Trial
            </h1>
            <p className="text-xl text-slate-300">
              Explore the full NexusXtream experience, completely free.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                  <input type="email" id="email" name="email" required placeholder="you@example.com" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="device" className="block text-sm font-medium text-slate-300 mb-2">Primary Device</label>
                  <input type="text" id="device" name="device" required placeholder="e.g., Firestick, Smart TV" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-slate-300 mb-2">Country</label>
                  <input type="text" id="country" name="country" required placeholder="Your current country" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-slate-300 mb-2">Language Preference</label>
                  <input type="text" id="language" name="language" placeholder="e.g., English, Spanish" className="w-full bg-slate-700 border border-slate-600 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Include Adult Content?</label>
                  <div className="flex gap-4">
                    <label className="flex items-center"><input type="radio" name="adult" value="yes" className="mr-2" /> Yes</label>
                    <label className="flex items-center"><input type="radio" name="adult" value="no" className="mr-2" defaultChecked /> No</label>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform disabled:opacity-50">
                    {isSubmitting ? 'Sending...' : 'Start My Free Trial'}
                  </button>
                </div>
              </form>
              {submitStatus && (
                <div className={`mt-4 text-center p-3 rounded-md ${submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <SparklesIcon className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">What You Get</h3>
                <ul className="mt-4 space-y-2 text-slate-300 list-disc list-inside">
                  <li>Full access to 20,000+ channels</li>
                  <li>80,000+ Movies & VOD titles</li>
                  <li>HD & 4K streaming quality</li>
                  <li>No credit card required</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <CheckBadgeIcon className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white">Instant Activation</h3>
                <p className="mt-4 text-slate-300">
                  Your trial will be sent to your email within minutes. Follow our simple setup guides and start watching instantly!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-24">
          <TutorialsContent />
        </div>
        <div className="mt-24">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
        </>

  );
};

export default TrialPage;
