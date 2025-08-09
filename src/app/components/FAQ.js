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
    question: "Which devices are supported?",
    answer: "Our IPTV service is compatible with a wide range of devices including Android TV, Amazon Firestick & Fire TV, iOS devices (iPhone/iPad), Android smartphones and tablets, all major Smart TVs (Samsung, LG, Sony), MAG boxes, Roku, and more. If your device supports IPTV apps like IPTV Smarters, TiviMate, or VLC, you’re good to go!"
  },
  {
    question: "How does the free trial work?",
    answer: "We offer a 24-hour free trial with full access to our entire channel lineup — no credit card or payment info required. This trial lets you test the service risk-free to ensure it fits your needs before committing."
  },
  {
    question: "How many devices can I use simultaneously?",
    answer: "Our standard subscription supports 1 device streaming at a time. Need more? We provide multi-device packages with up to 5 simultaneous connections, each eligible for a 20% discount. Contact us for custom plans tailored to your household or business."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a variety of secure payment methods including PayPal, all major credit and debit cards, and popular cryptocurrencies such as Bitcoin (BTC), Ethereum (ETH), and Tether (USDT). Payments are processed securely to protect your information."
  },
  {
    question: "How can I get support if I need help?",
    answer: "Our dedicated support team is available 24/7 via live chat on our website, email, and a ticketing system. Whether you have setup questions, billing inquiries, or technical issues, we’re here to assist you promptly."
  },
  {
    question: "Is the IPTV service legal?",
    answer: "We provide IPTV services through legitimate sources and comply with all applicable laws. Our subscription offers access to legally licensed content. We encourage users to ensure they comply with their local regulations when using IPTV services."
  },
  {
    question: "Can I upgrade or cancel my subscription anytime?",
    answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time without penalties. Changes will take effect immediately or at the end of your current billing cycle, depending on your request."
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