'use client';
import { motion } from "framer-motion";
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const Overview = () => {
  // Milestone data
  const milestones = [
    { year: "2018", title: "Our Foundation", description: "Started with a vision to revolutionize streaming" },
    { year: "2020", title: "Global Expansion", description: "Reached 50+ countries with our service" },
    { year: "2022", title: "Technology Leap", description: "Introduced 4K streaming with zero buffering" },
    { year: "2024", title: "Industry Leader", description: "Serving 60K+ users with 4.9/5 rating" }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-[60%] aspect-square bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-0 right-1/4 w-[40%] aspect-square bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-1000"></div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full mb-6 border border-cyan-500/20">
            <span className="text-cyan-400 font-medium tracking-wider text-sm flex items-center gap-2">
              <RocketLaunchIcon className="w-4 h-4" />
              OUR EVOLUTION
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Pioneering the Future of Streaming
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-xl text-gray-300 space-y-4">
              <p className="leading-relaxed">
                Founded in 2018, our journey began with a vision to make premium entertainment accessible to everyone. 
                Today, we proudly serve over <span className="text-cyan-400 font-bold">60,000 satisfied users</span> across 
                <span className="text-cyan-400 font-bold"> 120+ countries</span>, delivering unparalleled streaming quality.
              </p>
              <p className="leading-relaxed">
                Our commitment to innovation drives us to continuously enhance our platform. With 
                <span className="text-cyan-400 font-semibold"> 24/7 customer support</span> and a 
                <span className="text-cyan-400 font-semibold"> 4.9/5 star rating</span>, we&#39;re dedicated to providing the best viewing experience possible.
              </p>
            </div>
            
            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: ChartBarIcon, title: "99.9% Uptime", desc: "Reliable streaming" },
                { icon: ShieldCheckIcon, title: "Secure Platform", desc: "Bank-level encryption" },
                { icon: LightBulbIcon, title: "Innovation First", desc: "Cutting-edge technology" },
                { icon: UserGroupIcon, title: "Expert Team", desc: "Industry professionals" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/about"
                className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                Discover Our Journey
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
            
            <div className="space-y-10 pl-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="bg-gray-800/40 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
                    <div className="text-cyan-400 font-bold text-lg mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "60K+", label: "Active Users", icon: UserGroupIcon },
            { value: "120+", label: "Countries", icon: GlobeAltIcon },
            { value: "4.9/5", label: "User Rating", icon: ChartBarIcon },
            { value: "24/7", label: "Support", icon: ShieldCheckIcon }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-cyan-500/10 rounded-full">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Custom animation styles */}
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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
      `}</style>
    </section>
  );
};

export default Overview;