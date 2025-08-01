// src/components/Testimonials.js
import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael T.",
      role: "Professional Trader",
      content: "The market trap strategy has completely transformed my trading approach. I've seen a consistent 70%+ win rate since subscribing. The risk management guidance alone is worth the price.",
      avatar: "MT",
      profit: "+$24,500"
    },
    {
      name: "Sarah J.",
      role: "Part-time Investor",
      content: "As someone with a full-time job, I don't have hours to analyze markets. These signals give me clear entry and exit points. I made back my annual subscription in the first month!",
      avatar: "SJ",
      profit: "+$8,200"
    },
    {
      name: "Robert K.",
      role: "Hedge Fund Manager",
      content: "I've tested dozens of signal services, and this is by far the most sophisticated. The tiered analysis approach filters out noise and focuses on high-probability setups. Exceptional work.",
      avatar: "RK",
      profit: "+$42,300"
    },
    {
      name: "Jennifer L.",
      role: "Day Trader",
      content: "The 7-day trial convinced me. I executed 5 trades during the trial period and all were winners. The premium features like advanced trap analysis have taken my trading to the next level.",
      avatar: "JL",
      profit: "+$15,700"
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            What Our Traders Say
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied traders who are already profiting from our signals
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 text-2xl font-bold mb-6 md:mb-0 md:mr-8">
                {testimonials[activeIndex].avatar}
              </div>
              <div className="text-center md:text-left">
                <p className="text-xl italic text-gray-300">&quot;{testimonials[activeIndex].content}&quot;</p>
                <div className="mt-6">
                  <div className="text-lg font-bold text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-cyan-400">{testimonials[activeIndex].role}</div>
                  <div className="mt-2 text-green-400 font-semibold">{testimonials[activeIndex].profit} profit</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-cyan-500' : 'bg-gray-700'
                }`}
              ></button>
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-2 text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400">5,000+</div>
            <div className="text-gray-400 mt-2">Active Traders</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400">72.5%</div>
            <div className="text-gray-400 mt-2">Average Win Rate</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400">2.3</div>
            <div className="text-gray-400 mt-2">Average Profit Factor</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400">97%</div>
            <div className="text-gray-400 mt-2">Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;