import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DisableDevTools from './components/DisableDevTools';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `NexusXtream | Premium IPTV Service for Live TV & VOD`,
  description: `Experience the best IPTV service with NexusXtream. Get thousands of live channels, movies, and VOD content in 4K/HD quality. Start your free trial today!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* --- THE FINAL FIX: Added overflow-x-hidden to the body --- */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
                <DisableDevTools />
                <Script 
          id="chatway" 
          src="https://cdn.chatway.app/widget.js?id=xnkinBOk4fIe" 
          strategy="lazyOnload" 
          async 
        />
      </body>
    </html>
  );
}
