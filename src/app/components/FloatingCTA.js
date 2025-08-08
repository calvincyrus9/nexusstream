'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This effect will run once when the component mounts.
  // It adds a scroll event listener to the window.
  useEffect(() => {
    const toggleVisibility = () => {
      // If the user scrolls down more than 300 pixels, show the CTA.
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add the event listener
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove the listener when the component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <div className="flex items-center justify-between p-4 bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl shadow-blue-900/50">
            <div className="flex-grow text-left">
              <h3 className="font-bold text-white text-base md:text-xl">Ready for Uninterrupted Streaming?</h3>
              <p className="text-slate-300 text-sm md:text-base hidden sm:block">Get instant access to thousands of channels and movies.</p>
            </div>
            <a
              href="#pricing"
              className="flex-shrink-0 ml-4 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <PlayIcon className="w-5 h-5" />
              <span className="text-sm sm:text-base">Start Free Trial</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
