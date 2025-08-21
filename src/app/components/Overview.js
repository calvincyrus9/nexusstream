const Overview = () => {
  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Optional background blob */}
      <div className="absolute top-0 left-1/4 w-[60%] aspect-square bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-3000"></div>

      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <div className="inline-block px-6 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full mb-6">
          <span className="text-cyan-400 font-medium tracking-wider text-sm">OUR STORY</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          From Humble Beginnings to Global Streaming
        </h2>

        <div className="text-xl text-gray-300 space-y-4">
          <p>
            What started as a simple idea has transformed into a premier IPTV service,
            delivering exceptional entertainment to over <span className="text-cyan-400 font-bold">60,000 users</span> worldwide.
          </p>
          <p>
            We&apos;re constantly evolving to bring you the best streaming experience possible,
            ensuring <span className="text-cyan-400 font-semibold">high-quality streams</span> across all devices.
          </p>
        </div>

        {/* Optional CTA */}
        <div className="mt-10">
          <a
            href="/about"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Overview;
