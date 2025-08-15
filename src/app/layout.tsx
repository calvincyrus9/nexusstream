// src/app/layout.js
import Script from 'next/script';
import SEO from '../../next-seo.config'; // Adjust path if necessary
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import './globals.css'; // Assuming you have global styles
import { ReactNode } from 'react';

export const metadata = {
  metadataBase: new URL('https://nexusxtream.com'), // Important for resolving relative image paths
  title: {
    default: SEO.defaultTitle,
    template: SEO.titleTemplate,
  },
  description: SEO.description,
  openGraph: SEO.openGraph,
  twitter: SEO.twitter,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          <Header />
          <main>{children}</main>
               <Script 
          id="chatway" 
          src="https://cdn.chatway.app/widget.js?id=xnkinBOk4fIe" 
          strategy="lazyOnload" 
          async 
        />
          <Footer />
          <FloatingCTA />
        </div>
      </body>
    </html>
  );
}