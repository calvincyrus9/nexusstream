'use client';

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  StarIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathIcon,
  PlayIcon,
  DevicePhoneMobileIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
const Hero = () => {
  const [users, setUsers] = useState(0);
  const [rating, setRating] = useState(0);
  const [countries, setCountries] = useState(0);
  const [support, setSupport] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef(null);
  const features = [
    {
      title: "4K Ultra HD",
      description: "Crystal clear picture quality with HDR support",
      icon: ArrowsPointingOutIcon
    },
    {
      title: "Multi-Device",
      description: "Stream on TV, mobile, desktop and tablet",
      icon: DevicePhoneMobileIcon
    },
    {
      title: "Secure Streaming",
      description: "Bank-level encryption for your privacy",
      icon: ShieldCheckIcon
    }
  ];
  useEffect(() => {
    const animateValue = (setter, end, duration) => {
      let start = 0;
      const increment = end / (duration / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setter(Math.floor(start));
      }, 50);
    };
    
    animateValue(setUsers, 25000, 2000);
    animateValue(setRating, 45, 2000);
    animateValue(setCountries, 120, 2000);
    animateValue(setSupport, 24, 2000);
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(featureInterval);
  }, []);
  return (
    <section
      id="home"
      ref={heroRef}
      className="relative overflow-hidden w-full flex items-center justify-center min-h-[85vh] pt-16 sm:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/98 via-gray-900/95 to-gray-900/98"></div>
        
        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100H8zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        ></div>
        
        {/* Animated Blobs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[40%] aspect-square rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-blob blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-[35%] aspect-square rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-blob blur-3xl animation-delay-2000"></div>
          <div className="absolute top-1/3 left-[15%] w-[15%] aspect-square rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-blob blur-2xl animation-delay-4000"></div>
        </div>
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/30 animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animationDuration: `${Math.random() * 8 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block px-5 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30">
              <span className="text-cyan-400 font-medium tracking-wider text-sm flex items-center gap-2">
                <span className="flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                PREMIUM STREAMING SERVICE
              </span>
            </div>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Stream Anything,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Anytime, Anywhere
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Watch live sports, premium channels, and 4K movies with zero buffering.
            Enjoy seamless streaming on all your devices.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href="/trial"
              className="group relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                < PlayIcon className="w-5 h-5" /> Start Free Trial
              </span>
              <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
            </a>
            <a
              href="/renew"
              className="group relative bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-bold text-lg border border-gray-700 transition-all hover:border-cyan-500/30 hover:scale-105 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ArrowPathIcon className="w-5 h-5" /> Renew Subscription
              </span>
              <span className="absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
            </a>
          </motion.div>
          
          {/* Stats with Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { value: `${users.toLocaleString()}+`, label: "Happy Users", icon: UserGroupIcon },
              { value: `${(rating / 10).toFixed(1)}/5`, label: "Star Rating", icon: StarIcon },
              { value: `${countries}+`, label: "Countries", icon: GlobeAltIcon },
              { value: `${support}/7`, label: "Support", icon: ChatBubbleLeftRightIcon },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gray-800/30 backdrop-blur-sm p-3 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all flex items-center gap-2"
                >
                  <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .animate-particle {
          animation: particle linear infinite;
        }
      `}</style>
    </section>
  );
};
export default Hero;