'use client';
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="px-4">
        <h3 className="text-lg md:text-xl font-light mb-4">
          Time To ...
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Time To ... <span className="text-blue-400">NexusXtream</span>
        </h1>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white transition">
          Free Trial
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
