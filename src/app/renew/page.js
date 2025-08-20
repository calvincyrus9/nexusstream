import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import RenewalClient from './RenewalClient'; // Import the client component

// A component to render inside Suspense while the page loads
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full p-8 bg-slate-800/50 rounded-2xl">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
    <p className="ml-4 text-lg">Loading your plan details...</p>
  </div>
);

// This is the main page component that Next.js will render for the /renew route
const RenewalPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Renew Your Access
            </h1>
            <p className="text-xl text-slate-300">
              Continue your journey through a universe of entertainment.
            </p>
          </div>
          {/* Suspense is required for components that use useSearchParams */}
          <Suspense fallback={<LoadingSpinner />}>
            <RenewalClient />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default RenewalPage;
