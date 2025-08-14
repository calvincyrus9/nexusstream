const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden w-full flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
        
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0h2v100H0zM4 0h2v100H4zM8 0h2v100H8zM12 0h2v100h-2zM16 0h2v100h-2zM20 0h2v100h-2zM24 0h2v100h-2zM28 0h2v100h-2zM32 0h2v100h-2zM36 0h2v100h-2zM40 0h2v100h-2zM44 0h2v100h-2zM48 0h2v100h-2zM52 0h2v100h-2zM56 0h2v100h-2zM60 0h2v100h-2zM64 0h2v100h-2zM68 0h2v100h-2zM72 0h2v100h-2zM76 0h2v100h-2zM80 0h2v100h-2zM84 0h2v100h-2zM88 0h2v100h-2zM92 0h2v100h-2zM96 0h2v100h-2zM0 0v2h100V0zM0 4v2h100V4zM0 8v2h100V8zM0 12v2h100v-2zM0 16v2h100v-2zM0 20v2h100v-2zM0 24v2h100v-2zM0 28v2h100v-2zM0 32v2h100v-2zM0 36v2h100v-2zM0 40v2h100v-2zM0 44v2h100v-2zM0 48v2h100v-2zM0 52v2h100v-2zM0 56v2h100v-2zM0 60v2h100v-2zM0 64v2h100v-2zM0 68v2h100v-2zM0 72v2h100v-2zM0 76v2h100v-2zM0 80v2h100v-2zM0 84v2h100v-2zM0 88v2h100v-2zM0 92v2h100v-2zM0 96v2h100v-2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        ></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[40%] aspect-square rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-blob animation-delay-2000 blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-[35%] aspect-square rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-blob animation-delay-4000 blur-3xl"></div>
          <div className="absolute top-1/3 left-[15%] w-[15%] aspect-square rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 animate-blob animation-delay-7000 blur-2xl"></div>
        </div>
        
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-400/20 animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center py-32 px-4">
        <div className="max-w-3xl text-center">
          <div className="mb-8">
            <div className="inline-block px-5 py-2.5 bg-cyan-900/30 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 font-medium tracking-wider text-sm">PREMIUM STREAMING SERVICE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                The Future of Streaming
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Experience global live sports, premium channels, and 4K entertainment—all without buffering. Stream seamlessly across every device.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/trial"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 flex items-center"
          >
            Start Free Trial
          </a>
          <a
            href="/renew"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg border border-gray-700 transition-all hover:border-cyan-500/30 flex items-center"
          >
            Renew Subscription
          </a>
        </div>

          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl font-bold text-cyan-400">60K+</div>
              <div className="text-gray-400">Users</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl font-bold text-cyan-400">4.9/5</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl font-bold text-cyan-400">120+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all">
              <div className="text-3xl font-bold text-cyan-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
