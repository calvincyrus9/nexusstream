'use client';
import React, { useState } from 'react';
import Link from 'next/link'; // Import the Link component

// The PricingCard component is updated to link to the renew page with parameters.
const PricingCard = ({ duration, price, popular, devices }) => {
  // Create the URL for the renewal page with query parameters
  const renewalUrl = `/renew?duration=${encodeURIComponent(duration)}&devices=${devices}`;

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm ${popular ? 'border-2 border-blue-500' : 'border border-slate-700'}`}>
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-2 text-sm font-bold tracking-wider">
          MOST POPULAR
        </div>
      )}
      
      <div className={`p-8 ${popular ? 'pt-16' : ''}`}>
        <h3 className="text-2xl font-bold mb-2 text-white">{duration}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${price.toFixed(2)}</span>
          <span className="text-slate-400">
            {devices > 1 ? ` total for ${devices} devices` : ` / month`}
          </span>
        </div>
        
        <ul className="space-y-3 mb-8 text-slate-300">
          {[
            `${devices} Connected Device${devices > 1 ? 's' : ''}`, 
            'All Channels Access', 
            '4K Streaming',
            '7-Day Catch Up', 
            '24/7 Support'
          ].map((item, index) => (
            <li key={item} className="flex items-center">
              <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${index === 0 ? 'text-blue-400' : 'text-cyan-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className={index === 0 ? 'font-bold text-white' : ''}>{item}</span>
            </li>
          ))}
        </ul>
        
        {/* --- UPDATED: Changed button to Link --- */}
        <Link 
          href={renewalUrl}
          className={`block text-center w-full py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${popular 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-blue-500/30' 
            : 'bg-slate-700 hover:bg-slate-600'}`}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [selectedDevices, setSelectedDevices] = useState(1);

  const plans = [
    { duration: "1 Month", basePrice: 14.99, popular: false },
    { duration: "3 Months", basePrice: 35.99, popular: false },
    { duration: "6 Months", basePrice: 62.99, popular: true },
    { duration: "1 Year", basePrice: 91.99, popular: false },
  ];

  const handleDeviceChange = (devices) => {
    setSelectedDevices(devices);
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            One premium plan with flexible durations and connections.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-16">
            <h3 className="text-xl font-semibold mb-6">How many devices do you need?</h3>
            <div className="flex flex-wrap justify-center items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-full p-2">
                {[1, 2, 3, 4, 5].map(num => (
                    <button 
                        key={num}
                        onClick={() => handleDeviceChange(num)}
                        className={`w-12 h-12 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center border-2 transform hover:scale-110
                          ${selectedDevices === num 
                            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30' 
                            : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-blue-500 hover:text-white'
                          }`
                        }
                    >
                        {num}
                    </button>
                ))}
            </div>
            {selectedDevices > 1 && (
                <p className="mt-6 text-cyan-400 animate-pulse font-medium">
                    A 20% multi-device discount has been applied!
                </p>
            )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {plans.map(plan => {
    const months = plan.duration === "1 Month" ? 1 :
                   plan.duration === "3 Months" ? 3 :
                   plan.duration === "6 Months" ? 6 :
                   12; // 1 Year

    // Total price for all devices and months
    const undiscountedTotal = plan.basePrice * months * selectedDevices;
    const finalTotal = selectedDevices > 1 ? undiscountedTotal * 0.8 : undiscountedTotal;

    // Price per month per account
    const pricePerMonth = finalTotal / months;

    return (
      <PricingCard 
        key={plan.duration}
        duration={plan.duration} 
        price={pricePerMonth}  // <-- now shows per month
        popular={plan.popular} 
        devices={selectedDevices}
      />
    )
  })}
</div>

        
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-slate-400">Secure checkout with PayPal, Credit Cards, and Bitcoin (10% discount for crypto payments)</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
