"use client";
import { motion } from "framer-motion";
import { 
  CheckCircleIcon, 
  FilmIcon, 
  CalendarIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon 
} from "@heroicons/react/24/outline";

const FeatureCard = ({ title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all h-full overflow-hidden">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
            {icon}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { 
      title: "Unlimited Entertainment", 
      description: "Access thousands of channels and on-demand content from around the world",
      icon: <FilmIcon className="w-7 h-7 text-white" />
    },
    { 
      title: "HD/4K Quality", 
      description: "Crystal clear picture quality with minimal buffering for an immersive experience",
      icon: <CheckCircleIcon className="w-7 h-7 text-white" />
    },
    { 
      title: "TV Guide (EPG)", 
      description: "Comprehensive electronic program guide to plan your viewing schedule",
      icon: <CalendarIcon className="w-7 h-7 text-white" />
    },
    { 
      title: "Catch-Up Feature", 
      description: "Never miss your favorite shows with 7-day catch-up functionality",
      icon: <ClockIcon className="w-7 h-7 text-white" />
    },
    { 
      title: "Anti-Freeze Technology", 
      description: "Stable streaming with our proprietary anti-freeze technology",
      icon: <ShieldCheckIcon className="w-7 h-7 text-white" />
    },
    { 
      title: "24/7 Support", 
      description: "Dedicated support team always ready to help with any issues",
      icon: <ChatBubbleLeftRightIcon className="w-7 h-7 text-white" />
    },
  ];
  
  return (
    <section id="features" className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
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
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-5 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              PREMIUM FEATURES
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Premium Features for the Ultimate Streaming Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need for a seamless entertainment experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
        
        {/* Additional CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-lg p-8 rounded-2xl border border-slate-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience Premium Streaming?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying our premium features. Start your free trial today and see the difference for yourself.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/trial"
                className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all hover:border-cyan-500/30"
              >
                Learn More
              </a>
            </div>
          </div>
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

export default Features;