// src/components/Testimonials.js
"use client";
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mark S.",
      role: "Sports Fanatic",
      content: "I can watch any game, from any league, anywhere in the world. The stream quality is incredible, even for fast-paced sports. No more blackouts or expensive packages. This is a game-changer!",
      avatar: "MS",
      // We will remove the 'profit' field and instead use a feature highlight
      feature: "Access to All Sports Packages"
    },
    {
      name: "Elena P.",
      role: "Movie & Series Binger",
      content: "The Video-on-Demand library is massive and updated constantly. I've found so many new shows and movies. It's like having every streaming service combined into one, but for a fraction of the price.",
      avatar: "EP",
      feature: "Extensive VOD Library"
    },
    {
      name: "David L.",
      role: "Family Household",
      content: "This service has something for everyone in my family. The kids have their cartoon channels, my wife has her reality shows, and I have my news and documentaries. The setup on all our devices was surprisingly easy.",
      avatar: "DL",
      feature: "Multi-Device Compatibility"
    },
    {
      name: "Jennifer Chen",
      role: "Long-time Customer",
      content: "I've been a subscriber for over two years, and the service has been incredibly reliable. On the one occasion I needed help, the customer support was fast, friendly, and solved my issue in minutes.",
      avatar: "JC",
      feature: "Reliable 24/7 Support"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            What Our Viewers Say
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium entertainment
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 text-2xl font-bold mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                {testimonials[activeIndex].avatar}
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl italic text-slate-300">&quot;{testimonials[activeIndex].content}&quot;</p>
                <div className="mt-6">
                  <div className="text-lg font-bold text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-blue-400">{testimonials[activeIndex].role}</div>
                  {/* Changed from profit to a highlighted feature */}
                  <div className="mt-2 text-green-400 font-semibold">{testimonials[activeIndex].feature}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-slate-700 hover:bg-slate-600'
                }`}
              ></button>
            ))}
          </div>

          {/* Navigation Buttons using the blue theme */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-slate-800 rounded-full p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-slate-800 rounded-full p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



