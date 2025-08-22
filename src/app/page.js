import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import DeviceCompatibility from './components/DeviceCompatibility';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Features from './components/Features';
import FAQ from './components/FAQ';
import ServerNetwork from './components/ServerNetwork';
import Testimonials from './components/Testimonials';
import FloatingCTA from './components/FloatingCTA';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Overview />
          <DeviceCompatibility />
          <Steps />
          <Pricing />
          <Testimonials />
          <Features />
          <ServerNetwork />
          <HeroSection/>
          <FAQ />
        </main>
        <FloatingCTA />
      </div>
  );
}
