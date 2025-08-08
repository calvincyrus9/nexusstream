// src/app/tutorials/page.js
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DevicePhoneMobileIcon, TvIcon, ComputerDesktopIcon, CubeIcon } from '@heroicons/react/24/outline';

// Data for the tutorials
const tutorialsData = {
  "Smart TVs": [
    { title: "Samsung & LG TV Setup", content: "Install the 'IPTV Smarters Pro' or 'SET IPTV' app from your TV's app store. Open the app and enter the M3U link or Xtream Codes we provided in your welcome email." },
    { title: "Sony TV (Android TV)", content: "Navigate to the Google Play Store on your Sony TV. Search for and install the 'TiviMate' or 'IPTV Smarters' app. Follow the in-app instructions to add your subscription details." },
  ],
  "Mobile Devices": [
    { title: "iOS (iPhone/iPad) Setup", content: "Download the 'GSE Smart IPTV' app from the App Store. Open the app, go to 'Remote Playlists', tap the '+' icon, and add the M3U URL from your email." },
    { title: "Android (Phone/Tablet) Setup", content: "From the Google Play Store, install 'IPTV Smarters Pro'. Open the app, select 'Login with Xtream Codes API', and enter your username, password, and server URL." },
  ],
  "Streaming Sticks": [
    { title: "Amazon Firestick Setup", content: "Enable 'Apps from Unknown Sources' in your Firestick settings. Install the 'Downloader' app and use it to enter the download link for our custom IPTV app. Install and log in." },
    { title: "Chromecast with Google TV", content: "Install 'IPTV Smarters' or 'TiviMate' from the Google Play Store. Open the application and input the subscription credentials sent to your email." },
  ],
  "Computers": [
    { title: "Windows PC Setup", content: "Download and install the 'VLC Media Player'. Open VLC, go to Media > Open Network Stream, and paste your M3U link. Press Play to start watching." },
    { title: "Mac OS Setup", content: "Install 'VLC Media Player' from the official website. Open the application, click on File > Open Network, and paste your M3U playlist URL." },
  ],
};

const TutorialCard = ({ title, content }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors">
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-300">{content}</p>
  </div>
);

const TutorialsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Smart TVs");

  const categoryIcons = {
    "Smart TVs": <TvIcon className="w-6 h-6" />,
    "Mobile Devices": <DevicePhoneMobileIcon className="w-6 h-6" />,
    "Streaming Sticks": <CubeIcon className="w-6 h-6" />,
    "Computers": <ComputerDesktopIcon className="w-6 h-6" />,
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Setup Tutorials
            </h1>
            <p className="text-xl text-slate-300">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TutorialsPage;
