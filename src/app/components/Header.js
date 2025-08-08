"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center flex-wrap">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            NexusStream
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {["Home", "Free Trial", "Renew", "Features", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(" ", "-")}`}
              className="font-medium hover:text-cyan-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/#free-trial"
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
        >
          Start Trial
        </Link>
      </nav>
    </header>
  );
};

export default Header;
