import React, { useState } from 'react';

const PricingCard = ({ duration, price, popular, devices }) => (
  <div className={`relative rounded-2xl overflow-hidden ${popular ? 'border-2 border-cyan-500/50' : 'border border-gray-700'}`}>
    {popular && (
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-center py-2 text-sm font-bold">
        MOST POPULAR
      </div>
    )}
    
    <div className={`p-8 ${popular ? 'pt-16' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{duration}</h3>
      <div className="mb-6">
        {/* Display price with 2 decimal places */}
        <span className="text-4xl font-bold">${price.toFixed(2)}</span>
        <span className="text-gray-400">/ {duration.split(' ')[0]}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {/* Added selected devices to the feature list */}
        {[
          `${devices} Connected Device${devices > 1 ? 's' : ''}`, 
          'All Channels Access', 
          '4K Streaming',
          '7-Day Catch Up', 
          '24/7 Support'
        ].map((item, index) => (
          <li key={item} className="flex items-center">
            <svg className={`w-5 h-5 mr-2 ${index === 0 ? 'text-blue-500' : 'text-cyan-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className={index === 0 ? 'font-bold' : ''}>{item}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-xl font-bold transition-all ${popular 
        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500' 
        : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'}`}>
        Get Started
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const [selectedDevices, setSelectedDevices] = useState(1);

  const plans = [
    { duration: "1 Month", basePrice: 14.99, popular: false },
    { duration: "3 Months", basePrice: 37.99, popular: false },
    { duration: "6 Months", basePrice: 59.99, popular: true },
    { duration: "1 Year", basePrice: 89.99, popular: false },
  ];

  const handleDeviceChange = (devices) => {
    setSelectedDevices(devices);
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">One premium plan with flexible durations and connections.</p>
        </div>
        
        {/* Device Selector */}
        <div className="flex flex-col items-center justify-center mb-12">
            <h3 className="text-xl font-semibold mb-4">How many devices do you need?</h3>
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-xl p-1">
                {[1, 2, 3].map(num => (
                    <button 
                        key={num}
                        onClick={() => handleDeviceChange(num)}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-colors duration-300 ${selectedDevices === num ? 'bg-gradient-to-r from-cyan-600 to-blue-600' : 'hover:bg-gray-700'}`}
                    >
                        {num} Device{num > 1 ? 's' : ''}
                    </button>
                ))}
            </div>
            {selectedDevices > 1 && (
                <p className="mt-4 text-cyan-400 animate-pulse">
                    A 20% multi-device discount has been applied!
                </p>
            )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {plans.map(plan => {
            // Apply 20% discount if more than one device is selected
            const finalPrice = selectedDevices > 1 ? plan.basePrice * 0.8 : plan.basePrice;
            
            return (
              <PricingCard 
                key={plan.duration}
                duration={plan.duration} 
                price={finalPrice} 
                popular={plan.popular} 
                devices={selectedDevices}
              />
            )
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">Secure checkout with PayPal, Credit Cards, and Bitcoin (10% discount for crypto payments)</p>
          <div className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">Want to try before committing?</h3>
              </div>
              <button className="mt-6 md:mt-0 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300">
                Start Your Free 24H Trial Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
