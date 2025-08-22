'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [videoError, setVideoError] = useState(false);
  const videoUrl =
    "https://res.cloudinary.com/dq3s29vn2/video/upload/v1724265300/4109220-uhd_4096_2160_25fps_y1hgxe.mp4";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      
      {/* Video Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full absolute top-0 left-0 object-cover"
            onError={() => setVideoError(true)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/logog.jpg')" }}
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        className="px-4 z-20 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-lg md:text-xl font-light mb-4 text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Reliable Streaming, Every Time.
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Enjoy Seamless Entertainment with{" "}
          <span className="text-blue-400">NexusXtream</span>
        </motion.h1>

        <motion.button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white transition transform hover:scale-105 shadow-lg shadow-blue-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Start Free Trial
        </motion.button>
      </motion.div>

      {/* Mobile CSS Fix */}
      <style jsx global>{`
        /* Force video to cover screen on mobile */
        video {
          min-width: 100%;
          min-height: 100%;
        }

        @media (max-width: 768px) {
          video {
            height: 100vh;
            width: 100vw;
            object-fit: cover;
            position: fixed; /* Keeps it stable when scrolling */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
