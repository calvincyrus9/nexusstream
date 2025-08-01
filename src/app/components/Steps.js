const StepCard = ({ number, title, description }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:-translate-y-2">
    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
      {number}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Steps = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in 4 Simple Steps</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience premium streaming in minutes, not hours</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <StepCard 
            number={1} 
            title="Request Free Trial" 
            description="Sign up for our risk-free trial to test our service"
          />
          <StepCard 
            number={2} 
            title="Choose Device/App" 
            description="Select your preferred streaming device or application"
          />
          <StepCard 
            number={3} 
            title="Activate & Watch" 
            description="Follow simple setup instructions and start streaming"
          />
          <StepCard 
            number={4} 
            title="Renew Anytime" 
            description="Continue your subscription with flexible renewal options"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;