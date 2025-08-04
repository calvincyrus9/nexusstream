// components/DeviceCompatibility.js
"use client";

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DeviceCompatibility = () => {
  // Mock device data - replace with your actual icons
const devices = [
  { name: 'Android', description: 'Phones & Tablets & TVs', logo: '/logos/android.svg' },
  { name: 'Apple', description: 'iPhone & iPad & TVs', logo: '/logos/apple.png' },
  { name: 'Xbox', logo: '/logos/xbox.svg' },
  { name: 'Windows', logo: '/logos/windows.svg' },
  { name: 'Fire TV', description: 'Fire Stick', logo: '/logos/firetv.png' },
  { name: 'LG', description: 'Smart TV & Phones', logo: '/logos/lg.svg' },
  { name: 'Chromecast', description: 'Media center', logo: '/logos/chromecast.svg' },
  { name: 'XBMC', description: 'Media center', logo: '/logos/xbmc.png' },
  { name: 'Nvidia', logo: '/logos/nvidia.svg' },
  { name: 'Samsung', description: 'Smart TV & Phones & Tablets', logo: '/logos/samsung.svg' },
];


  return (
    <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100h-2zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-cyan-900/30 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-medium tracking-wider text-sm">
              COMPATIBLE DEVICES
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Our IPTV Works Everywhere
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            *OUR IPTV CAN BE ACCESSED THROUGH ALL DEVICES!
          </p>
        </div>
        
        {/* Device Slider */}
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            {devices.map((device, index) => (
              <SwiperSlide key={index}>
                <DeviceCard device={device} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

// Device Card Component
const DeviceCard = ({ device }) => {
  return (
<div className={`w-16 h-16 rounded-lg ${device.bgColor} flex items-center justify-center mb-4`}>
  <img
    src={device.logo}
    alt={`${device.name} logo`}
    className="w-10 h-10 object-contain"
  />
</div>
      {/* Device Icon - Replace with actual icons */}
      <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
      </div>
      
      <h3 className="text-xl font-bold text-cyan-400 mb-2">
        {device.name}
      </h3>
      <p className="text-gray-300">
        {device.description}
      </p>
    </div>
  );
};

export default DeviceCompatibility;



