const PricingCard = ({ duration, price, popular }) => (
  <div className={`relative rounded-2xl overflow-hidden ${popular ? 'border-2 border-cyan-500/50' : 'border border-gray-700'}`}>
    {popular && (
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-600 to-blue-600 text-center py-2 text-sm font-bold">
        MOST POPULAR
      </div>
    )}
    
    <div className={`p-8 ${popular ? 'pt-16' : ''}`}>
      <h3 className="text-2xl font-bold mb-2">{duration}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-400">/ {duration.split(' ')[0]}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {['All Channels Access', '4K Streaming', '2 Devices', '7-Day Catch Up', '24/7 Support'].map((item) => (
          <li key={item} className="flex items-center">
            <svg className="w-5 h-5 text-cyan-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {item}
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
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">One premium plan with flexible durations to suit your needs</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <PricingCard duration="1 Month" price={16.99} popular={false} />
          <PricingCard duration="3 Months" price={45.99} popular={true} />
          <PricingCard duration="6 Months" price={79.99} popular={false} />
          <PricingCard duration="1 Year" price={109.99} popular={false} />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400">Secure checkout with PayPal, Credit Cards, and Bitcoin (10% discount for crypto payments)</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;