import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import DeviceCompatibility from './components/DeviceCompatibility';
import Metrics from './components/Metrics';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Features from './components/Features';
import FAQ from './components/FAQ';
import ServerNetwork from './components/ServerNetwork';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import FloatingCTA from './components/FloatingCTA';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export default function Home() {
  return (
    <>
      <DefaultSeo {...SEO} />
      {/* --- THE FIX: Add overflow-hidden here SEO-IPTV --- */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Overview />
          <DeviceCompatibility />
          <Metrics />
          <Steps />
          <Pricing />
          <Testimonials />
          <Features />
          <ServerNetwork />
          <FAQ />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </>
  );
}
