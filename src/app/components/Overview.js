"use client";

import { motion } from "framer-motion";
import { DevicePhoneMobileIcon, BoltIcon, FilmIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Overview() {
  return (
    <section id="overview" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Title & description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-cyan-400">NexusStream</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform is built for simplicity, performance, and flexibility. 
            Whether you want live TV, sports, or on-demand content, we’ve got you covered with the smoothest streaming experience.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { icon: DevicePhoneMobileIcon, title: "Seamless Experience", desc: "Stream on any device without setup hassle." },
            { icon: BoltIcon, title: "Cutting-Edge Tech", desc: "Enjoy 4K, anti-freeze servers & instant channel zapping." },
            { icon: FilmIcon, title: "Endless Entertainment", desc: "Thousands of live channels & VOD updated daily." },
            { icon: ArrowPathIcon, title: "Flexibility & Control", desc: "Cancel anytime, renew with ease, switch devices freely." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/30 transition-all shadow-lg"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-cyan-500/10 rounded-full">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
