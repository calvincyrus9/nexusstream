// src/app/legal/page.js
import React from 'react';
import { ShieldCheckIcon, DocumentTextIcon, ExclamationTriangleIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header'; // Re-using your existing header
import Footer from '../components/Footer'; // Re-using your existing footer

// This is a reusable component for each section of the legal page
const PolicySection = ({ id, title, subtitle, icon, children }) => (
  <section id={id} className="mb-16">
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border-2 border-blue-500/30">
        {React.cloneElement(icon, { className: "w-8 h-8 text-blue-400" })}
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-slate-400">{subtitle}</p>
      </div>
    </div>
    <div className="prose prose-invert prose-lg max-w-none text-slate-300">
      {children}
    </div>
  </section>
);

const LegalPage = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Legal Documentation
            </h1>
            <p className="text-xl text-slate-300">
              Our policies on privacy, terms of use, and refunds.
            </p>
          </div>

          <PolicySection
            id="privacy"
            title="Privacy Policy"
            subtitle="Last updated: August 8, 2025"
            icon={<ShieldCheckIcon />}
          >
            <p>Your privacy is important to us. It is NexusXtream policy to respect your privacy regarding any information we may collect from you across our website and other sites we own and operate.</p>
            <h3>Information We Collect</h3>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <ul>
              <li><strong>Log data:</strong> When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.</li>
              <li><strong>Personal information:</strong> We may ask for personal information, such as your name and email address, for account registration and support.</li>
            </ul>
            <h3>Use of Information</h3>
            <p>We use collected information to provide and improve our services, process transactions, and communicate with you. We do not share your personal information with third-parties, except where required by law.</p>
          </PolicySection>

          <PolicySection
            id="terms"
            title="Terms of Service"
            subtitle="Effective from: August 8, 2025"
            icon={<DocumentTextIcon />}
          >
            <p>By accessing the website at nexusXtream, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
            <h3>Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials on NexusXtream website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
            <h3>Disclaimer</h3>
            <p>The materials on NexusXtream website are provided on an as is basis. NexusXtream makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </PolicySection>
          
          <PolicySection
            id="refund"
            title="Refund Policy"
            subtitle="Our commitment to customer satisfaction"
            icon={<ArrowUturnLeftIcon />}
          >
            <p>We offer a refund policy for our subscription services. If you are not satisfied with our service, you may request a refund under the following conditions:</p>
            <ul>
              <li>A refund request must be made within 7 days of the initial purchase date.</li>
              <li>Refunds are only applicable to new customers. Renewals are non-refundable.</li>
              <li>If you have violated our Terms of Service, you will not be eligible for a refund.</li>
              <li>To request a refund, please contact our support team with your account details and the reason for your request.</li>
            </ul>
          </PolicySection>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
