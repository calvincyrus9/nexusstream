'use client';
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const Hero = () => {
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4%M8 0h2v100H8%M12 0h2v100h-2%M16 0h2v100h-2%M20 0h2v100h-2%M24 0h2v100h-2%M28 0h2v100%H8%M32 0h2v100h-2%M36 0h2v100h-2%M40 0h2v100h-2%M44 0h2v100h-2%M48 0h2v100h-2%M52 0h2v100h-2%M56 0h2v100h-2%M60 0h2v100h-2%M64 0h2v100h-2%M68 0h2v100h-2%M72 0h2v100h-2%M76 0h2v100h-2%M80 0h2v100h-2%M84 0h2v100h-2%M88 0h2v100h-2%M92 0h2v100h-2%M96 0h2v100h-2%M0 0v2h100V0%M0 4v2h100V4%M0 8v2h100V8%M0 12v2h100v-2%M0 16v2h100v-2%M0 20v2h100v-2%M0 24v2h100v-2%M0 28v2h100v-2%M0 32v2h100v-2%M0 36v2h100v-2%M0 40v2h100v-2%M0 44v2h100v-2%M0 48v2h100v-2%M0 52v2h100v-2%M0 56v2h100v-2%M0 60v2h100v-2%M0 64v2h100v-2%M0 68v2h100v-2%M0 72v2h100v-2%M0 76v2h100v-2%M0 80v2h100v-2%M0 84v2h100v-2%M0 88v2h100v-2%M0 92v2h100v-2%M0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
                <PlayIcon className="w-5 h-5" /> Start Free Trial
              </span>
              <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
            </a>
            <a
              href="/demo"
              className="group relative bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-bold text-lg border border-gray-700 transition-all hover:border-cyan-500/30 hover:scale-105 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ArrowPathIcon className="w-5 h-5" /> Renew Subscription
              </span>
              <span className="absolute inset-0 bg-cyan-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></span>
            </a>
          </motion.div>
          
          {/* Tagline Section */}
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className="mt-16"
>
  <div className="space-y-4">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.5, delay: 0.6 }}
      className="h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-4"
    />
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400"
    >
      <span className="inline-block">Built</span>
      <span className="inline-block mx-2 text-white">To Be</span>
      <span className="inline-block text-cyan-300">Fast.</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
    >
      <span className="inline-block">Made</span>
      <span className="inline-block mx-2 text-white">To Be</span>
      <span className="inline-block text-blue-300">Trusted.</span>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
    >
      <span className="inline-block">Designed</span>
      <span className="inline-block mx-2 text-white">To Be</span>
      <span className="inline-block text-purple-300">Simplified.</span>
    </motion.div>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 1.5, delay: 1.4 }}
      className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-4"
    />
  </div>
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