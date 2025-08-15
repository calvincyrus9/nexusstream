// /src/app/about/page.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../../../next-seo.config';
import AboutClient from './AboutClient'; // Import the new client component

// Define and export metadata from the server component
export async function generateMetadata() {
  const title = "About Us";
  const description = "Learn more about NexusXtream, our mission, and our commitment to providing the best IPTV service.";
  const url = "/about";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...SEO.openGraph,
      title: `${title} | NexusXtream`,
      description,
      url,
    },
  };
}

// This is the main page component that Next.js will render for the /about route
const AboutPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Header />
      <main className="pt-24 pb-20">
        <AboutClient />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;