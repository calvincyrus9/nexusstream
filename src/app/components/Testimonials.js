"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, UserGroupIcon, DevicePhoneMobileIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const testimonials = [
    {
      name: "Mark S.",
      role: "Sports Fanatic",
      content: "I can watch any game, from any league, anywhere in the world. The stream quality is incredible, even for fast-paced sports. No more blackouts or expensive packages. This is a game-changer!",
      avatar: "MS",
      feature: "Access to All Sports Packages",
      rating: 5
    },
    {
      name: "Elena P.",
      role: "Movie & Series Binger",
      content: "The Video-on-Demand library is massive and updated constantly. I've found so many new shows and movies. It's like having every streaming service combined into one, but for a fraction of the price.",
      avatar: "EP",
      feature: "Extensive VOD Library",
      rating: 5
    },
    {
      name: "David L.",
      role: "Family Household",
      content: "This service has something for everyone in my family. The kids have their cartoon channels, my wife has her reality shows, and I have my news and documentaries. The setup on all our devices was surprisingly easy.",
      avatar: "DL",
      feature: "Multi-Device Compatibility",
      rating: 4
    },
    {
      name: "Jennifer Chen",
      role: "Long-time Customer",
      content: "I've been a subscriber for over two years, and the service has been incredibly reliable. On the one occasion I needed help, the customer support was fast, friendly, and solved my issue in minutes.",
      avatar: "JC",
      feature: "Reliable 24/7 Support",
      rating: 5
    },
    {
      name: "Robert T.",
      role: "Tech Enthusiast",
      content: "The 4K streaming quality is phenomenal. I've tried many services before, but nothing compares to the buffer-free experience I get here. The interface is intuitive and the EPG is accurate.",
      avatar: "RT",
      feature: "4K Ultra HD Streaming",
      rating: 5
    },
    {
      name: "Maria G.",
      role: "International Student",
      content: "Being away from home, I missed my local channels. This service gives me access to all my favorite shows from back home. The connection is stable even during peak hours. Highly recommended!",
      avatar: "MG",
      feature: "International Channels",
      rating: 5
    },
    {
      name: "James K.",
      role: "Business Traveler",
      content: "I travel frequently for work, and this service has been a lifesaver. I can watch my shows on my laptop, tablet, or phone from anywhere in the world. The mobile app is exceptionally well-designed.",
      avatar: "JK",
      feature: "Global Access",
      rating: 4
    },
    {
      name: "Sarah W.",
      role: "Parent",
      content: "As a parent, I appreciate the parental controls and the variety of kids' content. The service is affordable, reliable, and the customer support team is always helpful when I have questions.",
      avatar: "SW",
      feature: "Family-Friendly Options",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoPlay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setAutoPlay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setAutoPlay(false);
    setActiveIndex(index);
  };

  // Render star rating
  const renderRating = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0%M4 0h2v100H4%M8 0h2v100H8%M12 0h2v100h-2%M16 0h2v100h-2%M20 0h2v100h-2%M24 0h2v100h-2%M28 0h2v100%H8%M32 0h2v100h-2%M36 0h2v100h-2%M40 0h2v100h-2%M44 0h2v100h-2%M48 0h2v100h-2%M52 0h2v100h-2%M56 0h2v100h-2%M60 0h2v100h-2%M64 0h2v100h-2%M68 0h2v100h-2%M72 0h2v100h-2%M76 0h2v100h-2%M80 0h2v100h-2%M84 0h2v100h-2%M88 0h2v100h-2%M92 0h2v100h-2%M96 0h2v100h-2%M0 0v2h100V0%M0 4v2h100V4%M0 8v2h100V8%M0 12v2h100v-2%M0 16v2h100v-2%M0 20v2h100v-2%M0 24v2h100v-2%M0 28v2h100v-2%M0 32v2h100v-2%M0 36v2h100v-2%M0 40v2h100v-2%M0 44v2h100v-2%M0 48v2h100v-2%M0 52v2h100v-2%M0 56v2h100v-2%M0 60v2h100v-2%M0 64v2h100v-2%M0 68v2h100v-2%M0 72v2h100v-2%M0 76v2h100v-2%M0 80v2h100v-2%M0 84v2h100v-2%M0 88v2h100v-2%M0 92v2h100v-2%M0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[40%] aspect-square rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-blob blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[35%] aspect-square rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 animate-blob blur-3xl animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-5 py-2 bg-blue-900/30 border border-blue-500/ backdrop-blur-sm rounded-full30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              CUSTOMER REVIEWS
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            What Our Viewers Say
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying premium entertainment
          </p>
        </motion.div>
        
        <div className="mt-16 relative">
          <motion.div 
            className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-lg shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center text-blue-400 text-2xl font-bold mb-6 md:mb-0 md:mr-8 flex-shrink-0 border border-blue-500/30">
                {testimonials[activeIndex].avatar}
              </div>
              <div className="text-center md:text-left flex-grow">
                <div className="mb-4">
                  {renderRating(testimonials[activeIndex].rating)}
                </div>
                <p className="text-xl italic text-slate-300">&quot;{testimonials[activeIndex].content}&quot;</p>
                <div className="mt-6">
                  <div className="text-lg font-bold text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-blue-400">{testimonials[activeIndex].role}</div>
                  <div className="mt-2 text-green-400 font-semibold flex items-center gap-1 justify-center md:justify-start">
                    <StarIcon className="w-4 h-4" />
                    {testimonials[activeIndex].feature}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-500 scale-125' : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm rounded-full p-3 text-slate-400 hover:text-white hover:bg-blue-600/50 transition-all duration-300 focus:outline-none z-20"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 backdrop-blur-sm rounded-full p-3 text-slate-400 hover:text-white hover:bg-blue-600/50 transition-all duration-300 focus:outline-none z-20"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { value: "98%", label: "Customer Satisfaction", icon: UserGroupIcon },
            { value: "60K+", label: "Happy Users", icon: UserGroupIcon },
            { value: "4.9/5", label: "Average Rating", icon: StarIcon },
            { value: "24/7", label: "Customer Support", icon: ChatBubbleLeftRightIcon }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700 text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-blue-900/20 rounded-full">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Custom styles for animations */}
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
      `}</style>
    </section>
  );
};

export default Testimonials;