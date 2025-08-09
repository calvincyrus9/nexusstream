// src/app/tutorials/page.js
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DevicePhoneMobileIcon, TvIcon, ComputerDesktopIcon, CubeIcon } from '@heroicons/react/24/outline';

// Data for the tutorials
const tutorialsData = {
  "Smart TVs": [
    {
      title: "Samsung & LG TV Setup",
      content:
        "1. Open your TV’s app store (Samsung Smart Hub or LG Content Store). " +
        "2. Search for 'IPTV Smarters Pro' or 'SET IPTV'. " +
        "3. Download and install the app. " +
        "4. Launch the app. " +
        "5. When prompted, enter the M3U link or Xtream Codes subscription details from your welcome email. " +
        "6. Start watching your IPTV channels."
    },
    {
      title: "Sony TV (Android TV)",
      content:
        "1. Go to the Google Play Store on your Sony Android TV. " +
        "2. Search for 'TiviMate' or 'IPTV Smarters'. " +
        "3. Install the app. " +
        "4. Open the app and follow the setup instructions. " +
        "5. Add your IPTV subscription details (M3U URL or Xtream Codes). " +
        "6. Enjoy streaming."
    }
  ],
  "Mobile Devices": [
    {
      title: "iOS (iPhone/iPad) Setup",
      content:
        "1. Open the App Store on your iPhone or iPad. " +
        "2. Search for 'GSE Smart IPTV'. " +
        "3. Download and install the app. " +
        "4. Launch the app and go to 'Remote Playlists'. " +
        "5. Tap '+' to add a new playlist. " +
        "6. Enter the M3U URL from your welcome email. " +
        "7. Save and start streaming."
    },
    {
      title: "Android (Phone/Tablet) Setup",
      content:
        "1. Open the Google Play Store on your Android device. " +
        "2. Search for 'IPTV Smarters Pro'. " +
        "3. Download and install the app. " +
        "4. Open the app and select 'Login with Xtream Codes API'. " +
        "5. Enter your username, password, and server URL from your welcome email. " +
        "6. Confirm and start watching."
    }
  ],
  "Streaming Sticks": [
    {
      title: "Amazon Firestick Setup",
      content:
        "1. Go to Settings > My Fire TV > Developer Options. " +
        "2. Enable 'Apps from Unknown Sources' for Downloader. " +
        "3. From the Firestick home, open the Amazon Appstore and install the 'Downloader' app. " +
        "4. Open Downloader and enter the Short Code to download the IPTV app: " +
        "   Code For IPTV Smarters Pro: 78522 " +
        "   Code For TiviMate: 272483 " +
        "5. Download and install the APP. " +
        "6. Open the installed IPTV app and log in with your subscription credentials. " +
        "7. Start streaming your channels."

    },
    {
      title: "Chromecast with Google TV",
      content:
        "1. Open the Google Play Store on Chromecast. " +
        "2. Search for 'IPTV Smarters' or 'TiviMate'. " +
        "3. Install the app. " +
        "4. Launch it and input your subscription details from your welcome email. " +
        "5. Begin streaming."
    }
  ],
  "Computers": [
    {
      title: "Windows PC Setup",
      content:
        "1. Download and install VLC Media Player from videolan.org. " +
        "2. Open VLC. " +
        "3. Click Media > Open Network Stream. " +
        "4. Paste your M3U playlist URL from your welcome email. " +
        "5. Click Play to start watching."
    },
    {
      title: "Mac OS Setup",
      content:
        "1. Download VLC Media Player from videolan.org. " +
        "2. Install and open VLC. " +
        "3. Click File > Open Network. " +
        "4. Paste the M3U playlist URL from your welcome email. " +
        "5. Press Open to start streaming."
    }
  ]
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
