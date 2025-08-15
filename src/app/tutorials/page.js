// src/app/tutorials/page.js
'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TutorialsContent from '../components/TutorialsContent'; // Import the reusable component
import { NextSeo } from 'next-seo';

const TutorialsPage = () => {
  return (
    <>
      <NextSeo
        title="Setup & Tutorials"
        description="Step-by-step IPTV setup guides and tutorials for NexusXtream users."
        canonical="https://nexusxtream.com/tutorials"
        openGraph={{
          url: 'https://nexusxtream.com/tutorials',
          title: 'Setup & Tutorials | NexusXtream',
          description: 'Step-by-step IPTV setup guides and tutorials for NexusXtream users.',
        }}
      />
    <div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <main className="pt-32 pb-20">
        {/* The component now handles its own layout, so no extra wrappers are needed */}
        <TutorialsContent />
      </main>
      <Footer />
    </div>
     </>
  );
};

export default TutorialsPage;
