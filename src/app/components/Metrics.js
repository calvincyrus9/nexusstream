const MetricCard = ({ value, label }) => (
  <div className="text-center bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all">
    <div className="text-5xl font-bold text-cyan-400 mb-3">{value}</div>
    <div className="text-xl font-medium">{label}</div>
  </div>
);

const Metrics = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard value="60,000+" label="Accounts Delivered" />
          <MetricCard value="120+" label="Countries Served" />
          <MetricCard value="4.9/5" label="Client Ratings" />
        </div>
      </div>
    </section>
  );
};

export default Metrics;