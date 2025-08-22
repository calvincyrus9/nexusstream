"use client";

import { useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [selectedDevices, setSelectedDevices] = useState(1);

  const plans = [
    {
      duration: "1 Month",
      basePrice: 14.99,
      popular: false,
      features: [
        "All Channels Access",
        "4K Streaming",
        "7-Day Catch Up",
        "24/7 Support",
      ],
    },
    {
      duration: "3 Months",
      basePrice: 35.99,
      popular: false,
      features: [
        "Premium IPTV Player Included",
        "All Channels Access",
        "4K Streaming",
        "7-Day Catch Up",
        "24/7 Support",
      ],
    },
    {
      duration: "6 Months",
      basePrice: 62.99,
      popular: true,
      features: [
        "Premium IPTV Player Included",
        "All Channels Access",
        "4K Streaming",
        "7-Day Catch Up",
        "24/7 Support",
      ],
    },
    {
      duration: "12 Months",
      basePrice: 91.99,
      popular: false,
      features: [
        "Premium IPTV Player Included",
        "All Channels Access",
        "4K Streaming",
        "7-Day Catch Up",
        "24/7 Support",
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Flexible IPTV Plans
        </h2>
        <p className="text-slate-400 mb-12">
          Choose the right plan for your devices. Enjoy exclusive features with
          our multi-month subscriptions.
        </p>

        {/* Device Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {[1, 2, 3].map((device) => (
            <button
              key={device}
              onClick={() => setSelectedDevices(device)}
              className={`px-6 py-2 rounded-lg font-medium ${
                selectedDevices === device
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {device} Device{device > 1 ? "s" : ""}
            </button>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const undiscountedTotal = plan.basePrice * selectedDevices;
            const finalPrice =
              selectedDevices > 1 ? undiscountedTotal * 0.8 : undiscountedTotal;

            return (
              <PricingCard
                key={plan.duration}
                duration={plan.duration}
                price={finalPrice}
                popular={plan.popular}
                devices={selectedDevices}
                features={plan.features}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
