// /src/app/renew/page.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../../../next-seo.config';
import RenewalClient from './RenewalClient'; // Import the new client component

// Define and export metadata from the server component
export async function generateMetadata() {
  const title = "Renew IPTV Subscription";
  const description = "Renew your IPTV plan with NexusXtream quickly and securely.";
  const url = "/renew";

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

// This is the main page component that Next.js will render for the /renew route
const RenewalPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Header />
      <main className="pt-32 pb-20">
        <RenewalClient />
      </main>
      <Footer />
    </div>
  );
};

export default RenewalPage;