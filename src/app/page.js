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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>NexusStream | Premium IPTV Service</title>
        <meta name="description" content="Experience the future of streaming with NexusStream - Global channels, 4K quality, no buffering" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
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
      <Footer />


    </div>
  );
}
