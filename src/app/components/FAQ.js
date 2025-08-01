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
      answer: "Our service works on all major devices including Android TV, Firestick, iOS, Android, Smart TVs, MAG boxes, and more."
    },
    {
      question: "How does the free trial work?",
      answer: "Our free trial gives you full access to our service for 24 hours with no payment required. No credit card needed."
    },
    {
      question: "How many devices can I use simultaneously?",
      answer: "Our standard plan allows for 2 simultaneous connections. We offer options for more connections if needed."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept PayPal, all major credit cards, and cryptocurrencies (Bitcoin, Ethereum, USDT)."
    },
    {
      question: "How can I get support if I need help?",
      answer: "Our 24/7 support team is available via live chat on our website and through our dedicated support ticket system."
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