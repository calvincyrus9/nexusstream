'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Direct Google Drive link
  const videoUrl =
    "https://drive.google.com/uc?export=download&id=1oeQhQkXaBS_DI-fRv1ggMO1CETFW-LCr";

  useEffect(() => {
    // Check if video exists
    const video = document.createElement("video");
    video.src = videoUrl;

    video.onloadeddata = () => {
      setVideoLoaded(true);
    };

    video.onerror = () => {
      setVideoError(true);
      console.error("Video failed to load");
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Video with Fallback */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        /* Fallback background image if video fails to load */
        <div
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          style={{
            backgroundImage: `url('/hero-bg-fallback.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <motion.div
        className="px-4 z-10"
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
          Time To ...
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Time To ... <span className="text-blue-400">NexusXtream</span>
        </motion.h1>

        <motion.button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white transition transform hover:scale-105 shadow-lg shadow-blue-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Free Trial
        </motion.button>
      </motion.div>

      {/* Loading indicator */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video error message */}
      {videoError && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-red-400">
          Video failed to load. Using fallback background.
        </div>
      )}
    </section>
  );
};

export default HeroSection;
