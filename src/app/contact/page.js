// /src/app/contact/page.js
import React from 'react';
import SEO from '../../../next-seo.config';
import ContactClient from './ContactClient'; // Import the new client component

// Define and export metadata from the server component
export async function generateMetadata() {
  const title = "Contact Us";
  const description = "Get in touch with NexusXtream support for any IPTV-related questions or issues.";
  const url = "/contact";

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

// This is the main page component that Next.js will render for the /contact route
const ContactPage = () => {
  return (
    <>
      <div className="bg-slate-900 min-h-screen text-white">
        <main className="pt-32 pb-20">
          <ContactClient />
        </main>
      </div>
    </>
  );
};

export default ContactPage;