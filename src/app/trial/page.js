// /src/app/trial/page.js
import React from 'react';
import SEO from '../../../next-seo.config';
import TrialClient from './TrialClient'; // Import the new client component

// Define and export metadata from the server component
export async function generateMetadata() {
  const title = "Free IPTV Trial";
  const description = "Sign up for a free trial of NexusXtream and experience our high-quality IPTV service.";
  const url = "/trial";

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

// This is the main page component that Next.js will render for the /trial route
const TrialPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <main className="pt-32 pb-20">
        <TrialClient />
      </main>
    </div>
  );
};

export default TrialPage;