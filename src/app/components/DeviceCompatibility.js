// components/DeviceCompatibility.js
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DeviceCompatibility = () => {
  // Mock device data
  const devices = [
    { name: 'Android', description: 'Phones & Tablets & TVs', logo: '/logos/android.svg' },
    { name: 'Apple', description: 'iPhone & iPad & TVs', logo: '/logos/apple.png' },
    { name: 'Xbox', description: 'All models', logo: '/logos/xbox.svg' },
    { name: 'Windows', description: 'All models', logo: '/logos/windows.svg' },
    { name: 'Fire TV', description: 'Fire Stick', logo: '/logos/firetv.png' },
    { name: 'LG', description: 'Smart TV & Phones', logo: '/logos/lg.svg' },
    { name: 'Chromecast', description: 'Media center', logo: '/logos/chromecast.svg' },
    { name: 'XBMC', description: 'Media center', logo: '/logos/xbmc.png' },
    { name: 'Nvidia', description: 'All models', logo: '/logos/nvidia.svg' },
    { name: 'Samsung', description: 'Smart TV & Phones & Tablets', logo: '/logos/samsung.svg' },
  ];

  return (
    // Changed: Updated background to the slate palette
    <section className="relative overflow-hidden py-20 px-4 bg-slate-900">
      {/* Background elements (kept the cool grid pattern) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,...")`, // Your SVG grid pattern
            backgroundSize: "100px 100px"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Changed: Badge updated to blue theme */}
          <div className="inline-block px-5 py-2.5 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              COMPATIBLE DEVICES
            </span>
          </div>
          
          {/* Changed: Heading gradient updated to blue theme */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
           Watch Anytime, Anywhere
          </h2>
          
          {/* Changed: Subtitle text color for better hierarchy */}
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Access our service on any device you choose.
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

// Device Card Component - UPDATED with the new Blue Theme
const DeviceCard = ({ device }) => {
  return (
    // Changed: Card background, border, and hover effects updated to the new theme
    <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 h-52">
      {/* Device Icon container is still white for max contrast, which is great! */}
      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
        <img
          src={device.logo}
          alt={`${device.name} logo`}
          className="w-10 h-10 object-contain"
        />
      </div>
      
      {/* Changed: Title text changed from cyan to blue */}
      <h3 className="text-xl font-bold text-blue-400 mb-2">
        {device.name}
      </h3>
      {/* Changed: Description text changed from gray to slate for consistency */}
      <p className="text-slate-400">
        {device.description}
      </p>
    </div>
  );
};

export default DeviceCompatibility;



