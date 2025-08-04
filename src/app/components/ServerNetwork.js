// components/ServerNetwork.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ServerNetwork = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  
  // Server data for the scrolling list
  const servers = [
    { name: 'USA', code: 'us', latency: '12ms' },
    { name: 'UK', code: 'gb', latency: '18ms' },
    { name: 'Germany', code: 'de', latency: '15ms' },
    { name: 'France', code: 'fr', latency: '20ms' },
    { name: 'Japan', code: 'jp', latency: '45ms' },
    { name: 'Singapore', code: 'sg', latency: '38ms' },
    { name: 'Australia', code: 'au', latency: '52ms' },
    { name: 'Brazil', code: 'br', latency: '68ms' },
  ];
  
  // Country data for the map markers
  const countryIcons = [
    { name: 'USA', code: 'us', position: { top: '39%', left: '15%' } },
    { name: 'Canada', code: 'ca', position: { top: '21%', left: '20%' } },
    { name: 'UK', code: 'gb', position: { top: '36%', left: '46%' } },
    { name: 'Brazil', code: 'br', position: { top: '67%', left: '29%' } },
    { name: 'Japan', code: 'jp', position: { top: '62%', left: '78%' } },
    { name: 'Australia', code: 'au', position: { top: '80%', left: '85%' } },
    { name: 'Sweden', code: 'se', position: { top: '16%', left: '47%' } },
    { name: 'South Africa', code: 'za', position: { top: '78%', left: '49%' } },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-b border-cyan-500/20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100h-2zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2.5 bg-cyan-900/30 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-medium tracking-wider text-sm">
              GLOBAL SERVER NETWORK
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Experience Smooth, High-Quality Streaming
            </span>
          </h2>
          
          <p className="text-xl text-gray-300">
            Backed by a worldwide network of 25+ ultra-fast servers
          </p>
        </div>
        
        {/* Server List - Scrolling Marquee */}
        <div className="relative overflow-hidden py-4 mb-16 mask-fade">
          <div className="flex animate-scroll">
            {[...servers, ...servers].map((server, index) => (
              <ServerItem key={index} server={server} />
            ))}
          </div>
        </div>
        
        {/* Map Container */}
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gray-800/30 backdrop-blur-sm border border-gray-700 shadow-xl">
          {/* Map Image */}
          <div className="relative aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 to-blue-900/10"></div>
            <Image
              src="/world-map.png" // Replace with your map image path
              alt="Global Server Network"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
            
            {/* Country Markers */}
            <div className="absolute inset-0">
              {countryIcons.map((country, index) => (
                <div
                  key={index}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                    activeCountry === index ? 'z-10' : 'z-0'
                  }`}
                  style={{ 
                    top: country.position.top, 
                    left: country.position.left 
                  }}
                  onMouseEnter={() => setActiveCountry(index)}
                  onMouseLeave={() => setActiveCountry(null)}
                >
                  <div className="relative">
                    {/* Flag Marker */}
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      bg-gray-900/80 backdrop-blur-sm border border-cyan-500/50
                      transition-all duration-300
                      ${activeCountry === index ? 'scale-125 shadow-lg shadow-cyan-500/30' : 'scale-100'}
                    `}>
                      <img
                        src={`https://flagcdn.com/24x18/${country.code}.png`}
                        alt={country.name}
                        className="w-6 h-4"
                      />
                    </div>
                    
                    {/* Tooltip */}
                    <div className={`
                      absolute -top-12 left-1/2 -translate-x-1/2 opacity-0
                      transition-all duration-300
                      ${activeCountry === index ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-2'}
                    `}>
                      <div className="bg-cyan-600 text-white px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
                        {country.name}
                      </div>
                      <div className="w-0.5 h-4 bg-cyan-500 mx-auto mt-1"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s;
          }
        }
      `}</style>
    </section>
  );
};

// Server Item Component
const ServerItem = ({ server }) => {
  return (
    <div className="flex items-center mx-4 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
      <div className="w-8 h-8 rounded-full bg-gray-900/80 border border-cyan-500/30 flex items-center justify-center mr-3">
        <img
          src={`https://flagcdn.com/24x18/${server.code}.png`}
          alt={server.name}
          className="w-4 h-3"
        />
      </div>
      
      <div className="mr-6">
        <h3 className="text-cyan-400 font-bold">{server.name}</h3>
      </div>
      
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2 relative">
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping"></div>
        </div>
        <span className="text-gray-300 font-mono">{server.latency}</span>
      </div>
    </div>
  );
};

export default ServerNetwork;
