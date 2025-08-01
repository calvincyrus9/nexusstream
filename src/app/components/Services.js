const ServiceCard = ({ title, description }) => (
  <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all">
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
    <button className="mt-6 text-purple-400 hover:text-purple-300 font-medium flex items-center">
      Learn more
    </button>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Increase engagement and reach on all major platforms"
    },
    {
      title: "Email Marketing",
      description: "Convert leads with targeted email campaigns"
    },
    {
      title: "Link Generation",
      description: "Drive traffic with strategic backlink strategies"
    },
    {
      title: "Online Presence Analysis",
      description: "Comprehensive analysis and optimization recommendations"
    }
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Boost your online presence with our expert marketing solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;