'use client';

import { 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon, 
  PlayIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Step = ({ icon, title, description, isLast, index }) => {
  // This component's code remains the same
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      {!isLast && (
        <motion.div 
          className="hidden md:block absolute top-12 left-3/4 w-1/2 h-0.5 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 z-0"
        />
      )}
      
      <div className="relative flex items-center justify-center">
        <div className="relative z-10">
          <motion.div 
            className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-slate-700 group-hover:border-cyan-400 transition-all duration-500 shadow-xl shadow-blue-900/30"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 0, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-md group-hover:opacity-50 opacity-0 transition-opacity duration-500" />
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:from-blue-900/40 group-hover:to-cyan-900/20 transition-all duration-500 backdrop-blur-sm border border-slate-700/50">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="mt-10 p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl border border-slate-700/50 backdrop-blur-lg shadow-xl shadow-blue-900/10 group-hover:shadow-cyan-500/20 transition-all duration-500"
        whileHover={{ 
          y: -5,
          borderColor: "rgba(56, 189, 248, 0.3)"
        }}
      >
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-slate-300/90">{description}</p>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

const Steps = () => {
  const stepsData = [
    {
      icon: <PlayIcon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />,
      title: "Request Free Trial",
      description: "Sign up for our risk-free trial to test our premium service with no commitments."
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />,
      title: "Choose Device/App",
      description: "Sign up for our risk-free trial to test our premium service with no commitments."
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />,
      title: "Activate & Watch",
      description: "Follow our simple activation process and start streaming instantly with HD quality."
    },
    {
      icon: <ArrowPathIcon className="w-8 h-8 text-blue-400 group-hover:text-cyan-300 transition-colors" />,
      title: "Renew Anytime",
      description: "Flexible subscription options with easy renewal and cancellation at any time."
    }
  ];

  return (
    // --- THE FIX: Added `relative` class to the section ---
    <section id="how-it-works" className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get Streaming in 4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience premium content in minutes with our effortless setup process
          </p>
          
          <motion.div 
            className="mx-auto mt-8 w-32 h-1 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {stepsData.map((step, index) => (
            <motion.div 
              key={index} 
              className="group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Step
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === stepsData.length - 1}
                index={index}
              />
            </motion.div>
          ))}
        </div>
        
        {/* These animated background elements are now properly contained */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl -z-10"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-cyan-900/10 blur-3xl -z-10"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Steps;
