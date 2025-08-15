'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Free Trial', href: '/trial' },
    { name: 'Renew', href: '/renew' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 
          ${isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`
        }
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 z-50">
            {/* --- THIS IS THE UPDATED LOGO --- */}
            {/* 2. Replace the div with this Image component */}
            <Image 
              src="/logo.jpeg" // Make sure your logo is named logo.png in the /public folder
              alt="NexusXtream Logo"
              width={100}
              height={100}
            />
            {/* -------------------------------- */}
          
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="font-medium text-slate-200 hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Link 
            href="/trial"
            className="hidden md:inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Start Trial
          </Link>

          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {isMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navLinks.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-2xl font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;