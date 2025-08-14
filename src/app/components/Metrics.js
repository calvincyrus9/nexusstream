const Metrics = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
      {/* Statistics updated for IPTV service */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400">20,000+</div>
            <div className="text-slate-400 mt-2">Live Channels</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400">80,000+</div>
            <div className="text-slate-400 mt-2">Movies & VOD</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-slate-400 mt-2">Uptime Guarantee</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-slate-400 mt-2">Customer Support</div>
          </div>
        </div>
    </section>
  );
};


export default Metrics;


