const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { 
      title: "Unlimited Entertainment", 
      description: "Access thousands of channels and on-demand content" 
    },
    { 
      title: "HD/4K Quality", 
      description: "Crystal clear picture quality with minimal buffering" 
    },
    { 
      title: "TV Guide (EPG)", 
      description: "Comprehensive electronic program guide" 
    },
    { 
      title: "Catch-Up Feature", 
      description: "Never miss your favorite shows with 7-day catch-up" 
    },
    { 
      title: "Anti-Freeze Technology", 
      description: "Stable streaming with our proprietary technology" 
    },
    { 
      title: "24/7 Support", 
      description: "Dedicated support team always ready to help" 
    },
  ];
  
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Features for the Ultimate Streaming Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Everything you need for a seamless entertainment experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;