// components/DeviceCompatibility.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import DeviceCard from './DeviceCard';

const devices = [
  {
    name: 'Android',
    description: 'Phones & Tablets & TVs',
    logo: '/logos/android.png',
  },
  {
    name: 'Apple',
    description: 'iPhone & iPad & TVs',
    logo: '/logos/apple.png',
  },
  {
    name: 'Xbox',
    description: 'Select a model',
    logo: '/logos/xbox.png',
  },
  {
    name: 'Windows',
    description: 'Select a version',
    logo: '/logos/windows.png',
  },
  {
    name: 'Fire TV',
    description: 'Fire Stick',
    logo: '/logos/firetv.png',
  },
];

const DeviceCompatibility = () => {
  return (
    <div style={{ padding: '2rem 0' }}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {devices.map((device, index) => (
          <SwiperSlide key={index}>
            <DeviceCard device={device} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DeviceCompatibility;
