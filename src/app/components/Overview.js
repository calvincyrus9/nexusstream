const Overview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <div className="inline-block px-6 py-2 bg-gray-800 rounded-full mb-6">
          <span className="text-cyan-400 font-medium">OUR STORY</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          From Humble Beginnings to Global Streaming
        </h2>
        <p className="text-xl text-gray-300">
          What started as a simple idea has transformed into a premier IPTV service, delivering exceptional entertainment to over <span className="text-cyan-400 font-bold">60,000 users</span> worldwide. We&apos;re constantly evolving to bring you the best streaming experience possible.
        </p>
      </div>
    </section>
  );
};

export default Overview;