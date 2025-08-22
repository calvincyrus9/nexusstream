"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <button 
        className="w-full p-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-blue-900/20 rounded-lg mt-0.5">
            <QuestionMarkCircleIcon className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-lg font-medium text-white">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </button>
      
      <motion.div 
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 pb-6 text-slate-300 ml-11">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Which devices can I use with the service?",
      answer: "Our IPTV service supports a broad array of devices, including Android TV, Amazon Firestick, iOS and Android smartphones and tablets, Smart TVs from Samsung, LG, Sony, MAG boxes, Roku, Apple TV, Windows and Mac computers, Enigma2 receivers, Nvidia Shield, and more. If your device can run popular IPTV apps like TiviMate, IPTV Smarters, or VLC, you're all set."
    },
    {
      question: "What does the free trial include and how do I access it?",
      answer: "We provide a fully featured 24-hour trial period with no payment information required. Simply complete the trial request on our website, and you'll get temporary access to all channels and features, allowing you to evaluate our service risk-free."
    },
    {
      question: "How many devices can I stream on at the same time?",
      answer: "The standard subscription covers streaming on one device at any given time. Should you require simultaneous access on multiple devices, additional connections are available at a discounted rate. You can also log out from one device and log in on another if needed."
    },
    {
      question: "Which payment options do you support?",
      answer: "We accept a variety of payment methods to suit your preferences, including PayPal, major credit cards (Visa, Mastercard, Amex, and more), and cryptocurrencies such as Bitcoin, Ethereum, and Tether. All transactions are securely processed."
    },
    {
      question: "What support channels are available if I need help?",
      answer: "Our support team is ready around the clock through live chat on our website and a dedicated ticketing system. Whether it's setup assistance, billing questions, or technical troubles, we're here to help promptly."
    },
    {
      question: "Can I watch both live TV and on-demand content?",
      answer: "Yes, our service provides an extensive selection of live channels as well as a vast library of on-demand movies and TV shows, ensuring entertainment options for all preferences."
    },
    {
      question: "Do I need to use a VPN with this IPTV service?",
      answer: "Using a VPN is optional. While not required, a VPN can enhance your privacy and help bypass geo-restrictions in certain regions, improving your streaming experience."
    },
    {
      question: "Is it possible to access my IPTV subscription while traveling abroad?",
      answer: "Absolutely! You can enjoy your IPTV subscription globally wherever you have a reliable internet connection, so your entertainment travels with you."
    },
    {
      question: "How often is the channel lineup and on-demand library updated?",
      answer: "We regularly refresh our channel list and on-demand content to keep you up to date with the latest entertainment, ensuring fresh and relevant programming."
    },
    {
      question: "What should I do if I experience technical difficulties or other issues?",
      answer: "If you encounter any problems, please contact our 24/7 support team via live chat or the ticketing system. Our experts will work with you to resolve issues quickly and efficiently."
    },
    {
      question: "Can I upgrade, downgrade, or cancel my subscription at any time?",
      answer: "Yes, you have full control over your subscription plan. You can upgrade, downgrade, or cancel anytime without penalties. Changes will take effect immediately or at the end of your billing cycle, depending on your preference."
    }
  ];
  
  return (
    <section id="faq" className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
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
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-5 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-400 font-medium tracking-wider text-sm">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Have Questions? We Have Answers
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get answers to common questions about our service
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              index={index}
            />
          ))}
        </div>
        
        {/* Additional Help Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
            <p className="text-slate-400 mb-6">
              Can&#39;t find the answer you&#39;re looking for? Our support team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                Contact Support
              </a>
              <a
                href="/trial"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg border border-slate-700 transition-all hover:border-blue-500/30"
              >
                Start Free Trial
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

export default FAQ;