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
  
  // Country data for the map markers with fine-tuned positions
  const countryIcons = [
    { name: 'USA', code: 'us', position: { top: '39%', left: '15%' } },
    { name: 'Canada', code: 'ca', position: { top: '25%', left: '20%' } },
    { name: 'UK', code: 'gb', position: { top: '28%', left: '46%' } },
    { name: 'Brazil', code: 'br', position: { top: '67%', left: '29%' } },
    { name: 'Japan', code: 'jp', position: { top: '38%', left: '85%' } },
    { name: 'Australia', code: 'au', position: { top: '78%', left: '85%' } },
    { name: 'Sweden', code: 'se', position: { top: '18%', left: '53%' } },
    { name: 'South Africa', code: 'za', position: { top: '80%', left: '55%' } },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-slate-900 border-t border-b border-blue-500/20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100h-2zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2.5 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              GLOBAL SERVER NETWORK
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
              Backed by next-gen servers worldwide 
            </span>
          </h2>
          <p className="text-xl text-slate-300">
            we deliver seamless, high-quality streaming 24/7
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
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-slate-700 shadow-xl">
          <div className="relative aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-slate-900/5"></div>
            <Image
              src="/world-map.png"
              alt="Global Server Network"
              layout="fill"
              objectFit="cover"
              className="opacity-100"
            />
            
            <div className="absolute inset-0">
              {countryIcons.map((country, index) => (
                <div
                  key={index}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: country.position.top, left: country.position.left }}
                  onMouseEnter={() => setActiveCountry(index)}
                  onMouseLeave={() => setActiveCountry(null)}
                >
                  {/* Radar Ping Animation */}
                  <div className="absolute inset-0 -z-10">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/60 to-teal-800/40 animate-ping-radar [animation-delay:0.5s] shadow-[0_0_25px_rgba(16,185,129,0.7)]">
                    </div></div>

                  <div 
                    className="relative transition-all duration-300"
                    style={{
                      transform: activeCountry === index ? 'scale(1.25)' : 'scale(1)',
                      zIndex: activeCountry === index ? 10 : 0
                    }}
                  >
                    <div  className="rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-sm border border-[#50e3c2]/50"
  style={{
    width: 'clamp(32px, 3.5vw, 48px)',
    height: 'clamp(32px, 3.5vw, 48px)',
    boxShadow: activeCountry === index 
      ? '0 0 15px rgba(80, 227, 194, 0.4)' // converted hex to rgba
      : 'none',
  }}
>
                      <img
                        src={`https://flagcdn.com/24x18/${country.code}.png`}
                        alt={country.name}
                        style={{ width: 'clamp(16px, 2.2vw, 24px)' }}
                      />
                    </div>
                    
                    {/* Tooltip */}
                    <div 
                      className="absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none"
                      style={{
                        opacity: activeCountry === index ? 1 : 0,
                        transform: activeCountry === index ? 'translateY(0)' : 'translateY(-8px)',
                      }}
                    >
                      <div className="bg-blue-600 text-white px-3 py-1.5 rounded-full font-medium whitespace-nowrap"
                        style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}
                      >
                        {country.name}
                      </div>
                      <div className="w-0.5 h-4 bg-blue-500 mx-auto mt-1"></div>
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

        @keyframes ping-radar {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .animate-ping-radar {
          animation: ping-radar 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
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

const ServerItem = ({ server }) => {
  return (
    <div className="flex items-center mx-4 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
      <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-blue-500/30 flex items-center justify-center mr-3">
        <img src={`https://flagcdn.com/24x18/${server.code}.png`} alt={server.name} className="w-4 h-3"/>
      </div>
      <div className="mr-6">
        <h3 className="text-blue-400 font-bold">{server.name}</h3>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 rounded-full bg-green-500 mr-2 relative">
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping"></div>
        </div>
        <span className="text-slate-300 font-mono">{server.latency}</span>
      </div>
    </div>
  );
};

export default ServerNetwork;
