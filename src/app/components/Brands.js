const Brands = () => {
  const brands = ['Netflix', 'Disney+', 'HBO Max', 'Prime Video', 'Hulu'];
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h3 className="text-center text-2xl font-bold mb-12">Compatible with Your Favorite Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
          {brands.map((brand) => (
            <div key={brand} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 w-full max-w-[180px] h-24 flex items-center justify-center transition-all hover:bg-gray-700/50 hover:border-cyan-500/30">
              <span className="text-xl font-bold">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;