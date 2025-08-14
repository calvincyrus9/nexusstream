"use client";
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
      <button 
        className="w-full p-6 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <svg 
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className="px-6 pb-6 text-gray-400">{answer}</div>
      </div>
    </div>
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
    answer: "We provide a fully featured 24-hour trial period with no payment information required. Simply complete the trial request on our website, and you’ll get temporary access to all channels and features, allowing you to evaluate our service risk-free."
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
    answer: "Our support team is ready around the clock through live chat on our website and a dedicated ticketing system. Whether it’s setup assistance, billing questions, or technical troubles, we’re here to help promptly."
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
    <section id="faq" className="py-20 px-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get answers to common questions about our service</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;