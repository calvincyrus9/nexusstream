// src/app/components/TutorialsContent.js
'use client';
import React, { useState } from 'react';
import { DevicePhoneMobileIcon, TvIcon, ComputerDesktopIcon, CubeIcon } from '@heroicons/react/24/outline';

// --- UPDATED: Content is now an array of steps for proper formatting ---
const tutorialsData = {
  "Smart TVs": [
    { 
      title: "Samsung & LG TV Setup", 
      content: [
        "Open your TV’s app store (Samsung Smart Hub or LG Content Store).",
        "Search for ‘IPTV Smarters Pro’ or ‘SET IPTV’.",
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
        "Search for ‘TiviMate’ or ‘IPTV Smarters’.",
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
        "Download the ‘GSE Smart IPTV’ app from the App Store.",
        "Open the app and navigate to ‘Remote Playlists’.",
        "Tap the ‘+’ icon to add a new playlist.",
        "Add the M3U URL provided in your welcome email."
      ] 
    },
    { 
      title: "Android (Phone/Tablet) Setup", 
      content: [
        "Go to the Google Play Store and install ‘IPTV Smarters Pro’.",
        "Open the app and select ‘Login with Xtream Codes API’.",
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
        "Enable ‘Apps from Unknown Sources’.",
        "Go back to the home screen and install the ‘Downloader’ app.",
        "Open Downloader and enter the download link for our custom app.",
        "Install the app and log in with your credentials."
      ] 
    },
    { 
      title: "Chromecast with Google TV", 
      content: [
        "Install ‘IPTV Smarters’ or ‘TiviMate’ from the Google Play Store.",
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
        "Download and install the ‘VLC Media Player’ from the official website.",
        "Open VLC.",
        "Go to Media > Open Network Stream.",
        "Paste your M3U link into the URL field and press Play."
      ] 
    },
    { 
      title: "Mac OS Setup", 
      content: [
        "Download and install ‘VLC Media Player’.",
        "Open the application.",
        "Click on File > Open Network.",
        "Paste your M3U playlist URL and click Open."
      ] 
    },
  ],
};

// --- UPDATED: This card now renders a numbered list ---
const TutorialCard = ({ title, content }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors flex flex-col h-full">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <ol className="text-slate-300 space-y-2 list-decimal list-inside flex-grow">
      {content.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  </div>
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
    // --- UPDATED: Added container and max-width classes for consistent layout ---
    <section className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Setup Guides
            </h2>
            <p className="text-lg text-slate-300">
              Follow our simple guides to get started on any device.
            </p>
        </div>

        <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full p-2">
              {Object.keys(tutorialsData).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-bold transition-colors duration-300 flex items-center gap-2 ${
                    activeCategory === category 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {categoryIcons[category]}
                  {category}
                </button>
              ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tutorialsData[activeCategory].map((tutorial, index) => (
              <TutorialCard key={index} title={tutorial.title} content={tutorial.content} />
            ))}
        </div>
    </section>
  );
};

export default TutorialsContent;
