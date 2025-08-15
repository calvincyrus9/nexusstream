// src/app/about/page.js
'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { GlobeAltIcon, HeartIcon, BoltIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { NextSeo } from 'next-seo';

// A reusable card component for highlighting company values
const ValueCard = ({ icon, title, children }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
    <div className="mx-auto w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/30 mb-4">
      {React.cloneElement(icon, { className: "w-8 h-8 text-blue-400" })}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-300">{children}</p>
  </div>
);

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="About Us"
        description="Learn more about NexusXtream, our mission, and our commitment to providing the best IPTV service."
        canonical="https://nexusxtream.com/about"
        openGraph={{
          url: 'https://nexusxtream.com/about',
          title: 'About Us | NexusXtream',
          description: 'Learn more about NexusXtream, our mission, and our commitment to providing the best IPTV service.',
        }}
      />
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About NexusXtream
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connecting you to a world of entertainment—one stream at a time.
            </motion.p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">Our Story</h2>
              <div className="mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
            <p className="text-lg text-slate-300 leading-relaxed text-center">
              Founded in 2022 by a group of streaming enthusiasts, NexusXtream was born from a simple idea: to provide a reliable, high-quality IPTV service that just works. We we&aposre tired of buffering, low-quality channels, and poor customer support. We knew there had to be a better way. Today, we are proud to serve over 60,000 satisfied customers worldwide... delivering a seamless entertainment experience backed by cutting-edge technology and a passion for customer satisfaction.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-4 bg-slate-950/50">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white">What We Stand For</h2>
                    <p className="text-lg text-slate-400 mt-2">Our core values guide everything we do.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ValueCard icon={<BoltIcon />} title="Unmatched Quality">
                        We invest in top-tier server infrastructure to provide buffer-free streaming in stunning HD and 4K quality.
                    </ValueCard>
                    <ValueCard icon={<GlobeAltIcon />} title="Global Access">
                        Our extensive library offers content from around the world, ensuring you never miss a moment, no matter where you are.
                    </ValueCard>
                    <ValueCard icon={<HeartIcon />} title="Customer First">
                        Your satisfaction is our priority. Our dedicated 24/7 support team is always ready to assist you with any questions.
                    </ValueCard>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
        </>
  );
};

export default AboutPage;
