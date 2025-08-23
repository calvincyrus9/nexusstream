"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, TvIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DeviceCompatibility = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock device data with categories
  const devices = [
    { name: 'Android', description: 'Phones & Tablets & TVs', logo: '/logos/android.png', category: 'mobile' },
    { name: 'Apple', description: 'iPhone & iPad & TVs', logo: '/logos/apple.png', category: 'mobile' },
    { name: 'Xbox', description: 'All models', logo: '/logos/xbox.svg', category: 'gaming' },
    { name: 'Windows', description: 'All models', logo: '/logos/windows.svg', category: 'computer' },
    { name: 'Fire TV', description: 'Fire Stick', logo: '/logos/firetv.png', category: 'tv' },
    { name: 'LG', description: 'Smart TV & Phones', logo: '/logos/lg.svg', category: 'tv' },
    { name: 'Chromecast', description: 'Media center', logo: '/logos/chromecast.svg', category: 'tv' },
    { name: 'XBMC', description: 'Media center', logo: '/logos/xbmc.png', category: 'computer' },
    { name: 'Nvidia', description: 'All models', logo: '/logos/nvidia.svg', category: 'computer' },
    { name: 'Samsung', description: 'Smart TV & Phones & Tablets', logo: '/logos/samsung.svg', category: 'tv' },
    { name: 'PlayStation', description: 'PlayStation', logo: '/logos/PlayStation.png', category: 'gaming' },
  ];

  // Filter devices based on active category
  const filteredDevices = activeCategory === 'all' 
    ? devices 
    : devices.filter(device => device.category === activeCategory);

  // Categories for filtering - replaced GamepadIcon with TvIcon
  const categories = [
    { id: 'all', name: 'All Devices', icon: DevicePhoneMobileIcon },
    { id: 'mobile', name: 'Mobile', icon: DevicePhoneMobileIcon },
    { id: 'tv', name: 'TV', icon: TvIcon },
    { id: 'computer', name: 'Computer', icon: ComputerDesktopIcon },
    { id: 'gaming', name: 'Gaming', icon: TvIcon }, // Using TvIcon instead of GamepadIcon
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 bg-slate-900">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100H8zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[40%] aspect-square rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-blob blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35%] aspect-square rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-blob blur-3xl animation-delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6"
          >
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              COMPATIBLE DEVICES
            </span>
          </motion.div>
          
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500"
          >
            Access our service on any device you choose. No restrictions, no limitations.
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
           
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </motion.div>
        
        {/* Device Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
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
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            loop={true}
            className="pb-12"
          >
            {filteredDevices.map((device, index) => (
              <SwiperSlide key={index}>
                <DeviceCard device={device} index={index} />
              </SwiperSlide>
            ))}
            
            {/* Custom Navigation */}
            <div className="swiper-button-next text-blue-400 after:text-2xl"></div>
            <div className="swiper-button-prev text-blue-400 after:text-2xl"></div>
            
            {/* Custom Pagination */}
            <div className="swiper-pagination"></div>
          </Swiper>
        </motion.div>
        
        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">No Device? No Problem!</h3>
            <p className="text-slate-400 mb-4">
              Our service works on virtually any device with an internet connection. 
              If you don&#39;t see your device listed, chances are it&#39;s still compatible!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Custom styles */}
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
        
        .swiper-pagination-bullet {
          background-color: rgba(148, 163, 184, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #60a5fa;
        }
      `}</style>
    </section>
  );
};

// Enhanced Device Card Component
const DeviceCard = ({ device, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-52 group relative"
    >
      {/* Device Icon container with glow effect on hover */}
      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-110">
        <img
          src={device.logo}
          alt={`${device.name} logo`}
          className="w-10 h-10 object-contain"
        />
      </div>
      
      {/* Device name with gradient text */}
      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
        {device.name}
      </h3>
      
      {/* Device description */}
      <p className="text-slate-400">
        {device.description}
      </p>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default DeviceCompatibility;