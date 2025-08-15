// src/app/tutorials/page.js
import React from 'react';

import TutorialsContent from '../components/TutorialsContent'; // Import the reusable component
import SEO from '../../../next-seo.config';

export async function generateMetadata() {
  const title = "Setup & Tutorials";
  const description = "Step-by-step IPTV setup guides and tutorials for NexusXtream users.";
  const url = "/tutorials";

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

const TutorialsPage = () => {
  return (
    <>
    
    <div className="bg-slate-900 min-h-screen text-white">
      <main className="pt-32 pb-20">
        {/* The component now handles its own layout, so no extra wrappers are needed */}
        <TutorialsContent />
      </main>
    </div>
     </>
  );
};

export default TutorialsPage;
