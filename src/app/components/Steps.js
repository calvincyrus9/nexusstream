'use client';
import { 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon, 
  PlayIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Step = ({ icon, title, description, isLast, index }) => {
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
      {/* Connecting line between steps */}
      {!isLast && (
        <motion.div 
          className="hidden md:block absolute top-12 left-3/4 w-1/2 h-0.5 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
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
      description: "Select your preferred device or download our app from the app store for seamless streaming."
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
    <section id="how-it-works" className="relative py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0%M4 0h2v100H4%M8 0h2v100H8%M12 0h2v100h-2%M16 0h2v100h-2%M20 0h2v100h-2%M24 0h2v100h-2%M28 0h2v100H8%M32 0h2v100h-2%M36 0h2v100h-2%M40 0h2v100h-2%M44 0h2v100h-2%M48 0h2v100h-2%M52 0h2v100h-2%M56 0h2v100h-2%M60 0h2v100h-2%M64 0h2v100h-2%M68 0h2v100h-2%M72 0h2v100h-2%M76 0h2v100h-2%M80 0h2v100h-2%M84 0h2v100h-2%M88 0h2v100h-2%M92 0h2v100h-2%M96 0h2v100h-2%M0 0v2h100V0%M0 4v2h100V4%M0 8v2h100V8%M0 12v2h100v-2%M0 16v2h100v-2%M0 20v2h100v-2%M0 24v2h100v-2%M0 28v2h100v-2%M0 32v2h100v-2%M0 36v2h100v-2%M0 40v2h100v-2%M0 44v2h100v-2%M0 48v2h100v-2%M0 52v2h100v-2%M0 56v2h100v-2%M0 60v2h100v-2%M0 64v2h100v-2%M0 68v2h100v-2%M0 72v2h100v-2%M0 76v2h100v-2%M0 80v2h100v-2%M0 84v2h100v-2%M0 88v2h100v-2%M0 92v2h100v-2%M0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        
        {/* Animated Blobs */}
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"
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
          className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-cyan-900/10 blur-3xl"
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
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-5 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              HOW IT WORKS
            </span>
          </div>
          
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
      </div>
    </section>
  );
};

export default Steps;