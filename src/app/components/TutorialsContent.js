'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, TvIcon, ComputerDesktopIcon, CubeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
const tutorialsData = {
  "Smart TVs": [
    { 
      title: "Samsung & LG TV Setup", 
      content: [
        "Open your TV's app store (Samsung Smart Hub or LG Content Store).",
        "Search for 'IPTV Smarters Pro' or 'SET IPTV'.",
        "Download and install the app.",
        "Launch the app.",
        "When prompted, enter the M3U link or Xtream Codes subscription details from your welcome email.",
        "Start watching your IPTV channels."
      ] 
    },
    { 
      title: "Sony TV (Android TV)", 
      content: [
        "Go to the Google Play Store on your Sony Android TV.",
        "Search for 'TiviMate' or 'IPTV Smarters'.",
        "Install the app.",
        "Open the app and follow the setup instructions.",
        "Add your IPTV subscription details (M3U URL or Xtream Codes).",
        "Enjoy streaming."
      ] 
    },
  ],
  "Mobile Devices": [
    { 
      title: "iOS (iPhone/iPad) Setup", 
      content: [
        "Download the 'GSE Smart IPTV' app from the App Store.",
        "Open the app and navigate to 'Remote Playlists'.",
        "Tap the '+' icon to add a new playlist.",
        "Add the M3U URL provided in your welcome email."
      ] 
    },
    { 
      title: "Android (Phone/Tablet) Setup", 
      content: [
        "Go to the Google Play Store and install 'IPTV Smarters Pro'.",
        "Open the app and select 'Login with Xtream Codes API'.",
        "Enter your username, password, and the server URL from your email.",
        "Start streaming on the go."
      ] 
    },
  ],
  "Streaming Sticks": [
    { 
      title: "Amazon Firestick Setup", 
      content: [
        "From the main menu, go to Settings > My Fire TV > Developer Options.",
        "Enable 'Apps from Unknown Sources'.",
        "Go back to the home screen and install the 'Downloader' app.",
        "Open Downloader and enter the download link for our custom app.",
        "Install the app and log in with your credentials."
      ] 
    },
    { 
      title: "Chromecast with Google TV", 
      content: [
        "Install 'IPTV Smarters' or 'TiviMate' from the Google Play Store.",
        "Open the application.",
        "Input the subscription credentials that were sent to your email.",
        "Enjoy your channels."
      ] 
    },
  ],
  "Computers": [
    { 
      title: "Windows PC Setup", 
      content: [
        "Download and install the 'VLC Media Player' from the official website.",
        "Open VLC.",
        "Go to Media > Open Network Stream.",
        "Paste your M3U link into the URL field and press Play."
      ] 
    },
    { 
      title: "Mac OS Setup", 
      content: [
        "Download and install 'VLC Media Player'.",
        "Open the application.",
        "Click on File > Open Network.",
        "Paste your M3U playlist URL and click Open."
      ] 
    },
  ],
};

const TutorialCard = ({ title, content, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 font-bold">
            {index + 1}
          </span>
          {title}
        </h3>
        
        <ol className="text-slate-300 space-y-3">
          {content.map((step, stepIndex) => (
            <motion.li 
              key={stepIndex} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + stepIndex * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-blue-400 mr-2 mt-0.5">
                {stepIndex + 1}
              </span>
              <span>{step}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </motion.div>
);

const TutorialsContent = () => {
  const [activeCategory, setActiveCategory] = useState("Smart TVs");
  
  const categoryIcons = {
    "Smart TVs": <TvIcon className="w-6 h-6" />,
    "Mobile Devices": <DevicePhoneMobileIcon className="w-6 h-6" />,
    "Streaming Sticks": <CubeIcon className="w-6 h-6" />,
    "Computers": <ComputerDesktopIcon className="w-6 h-6" />,
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0%M4 0h2v100H4%M8 0h2v100H8%M12 0h2v100h-2%M16 0h2v100h-2%M20 0h2v100h-2%M24 0h2v100h-2%M28 0h2v100H8%M32 0h2v100h-2%M36 0h2v100h-2%M40 0h2v100h-2%M44 0h2v100h-2%M48 0h2v100h-2%M52 0h2v100h-2%M56 0h2v100h-2%M60 0h2v100h-2%M64 0h2v100h-2%M68 0h2v100h-2%M72 0h2v100h-2%M76 0h2v100h-2%M80 0h2v100h-2%M84 0h2v100h-2%M88 0h2v100h-2%M92 0h2v100h-2%M96 0h2v100h-2%M0 0v2h100V0%M0 4v2h100V4%M0 8v2h100V8%M0 12v2h100v-2%M0 16v2h100v-2%M0 20v2h100v-2%M0 24v2h100v-2%M0 28v2h100v-2%M0 32v2h100v-2%M0 36v2h100v-2%M0 40v2h100v-2%M0 44v2h100v-2%M0 48v2h100v-2%M0 52v2h100v-2%M0 56v2h100v-2%M0 60v2h100v-2%M0 64v2h100v-2%M0 68v2h100v-2%M0 72v2h100v-2%M0 76v2h100v-2%M0 80v2h100v-2%M0 84v2h100v-2%M0 88v2h100v-2%M0 92v2h100v-2%M0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[40%] aspect-square rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-blob blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35%] aspect-square rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-blob blur-3xl animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-5 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              SETUP GUIDES
            </span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Device Setup Tutorials
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Follow our simple step-by-step guides to get started on any device.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-wrap justify-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full p-2">
            {Object.keys(tutorialsData).map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/20' 
                    : 'text-slate-300 hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {categoryIcons[category]}
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tutorialsData[activeCategory].map((tutorial, index) => (
            <TutorialCard 
              key={index} 
              title={tutorial.title} 
              content={tutorial.content} 
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Additional Help Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Need More Help?</h3>
            <p className="text-slate-400 mb-4">
              Can&#39;t find your device or having trouble with setup? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all"
              >
                Contact Support
              </a>
              <li><Link href="/#faq" className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700 transition-all hover:border-blue-500/30"
              >
                View FAQs</Link></li>
            </div>
          </div>
        </motion.div>
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
      `}</style>
    </section>
  );
};

export default TutorialsContent;