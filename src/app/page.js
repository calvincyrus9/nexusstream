import Head from 'next/head';
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

export default function Home() {
  return (
    // --- THE FIX: Add overflow-hidden here SEO-IPTV---
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Head>
        <title>ZappStream | Premium IPTV Service</title>
        <meta name="description" content="Experience the future of streaming with ZappStream - Global channels, 4K quality, no buffering" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Overview />
        <DeviceCompatibility/>
        <Metrics />
        <Steps />
        <Pricing />
        <Testimonials />
        <Features />
        <ServerNetwork />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA/>
    </div>
  );
}
