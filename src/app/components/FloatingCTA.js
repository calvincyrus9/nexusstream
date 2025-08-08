'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This effect adds a scroll event listener to the window
  // to show/hide the CTA based on scroll position.
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the CTA after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // --- RESPONSIVE CHANGE ---
          // On small screens, it's pinned to the sides. On medium screens and up, it's centered.
          className="fixed bottom-4 left-4 right-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[95%] sm:max-w-4xl z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          {/* --- RESPONSIVE CHANGE ---
          // The layout inside the bar now adjusts for screen size. */}
          <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl shadow-blue-900/50">
            <div className="flex-grow text-left">
              {/* Text size is smaller on mobile and larger on desktop */}
              <h3 className="font-bold text-white text-sm sm:text-base md:text-xl">Ready for Uninterrupted Streaming?</h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base hidden sm:block">Get instant access to thousands of channels.</p>
            </div>
            <a
              href="/trial"
              // Button padding and text size are adjusted for mobile
              className="flex-shrink-0 ml-3 sm:ml-4 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <PlayIcon className="w-5 h-5" />
              <span className="text-sm sm:text-base">Start Trial</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
