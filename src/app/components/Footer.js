import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Image component

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-4 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 text-left">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
                {/* --- THIS IS THE UPDATED LOGO --- */}
                {/* 2. Replace the div with this Image component */}
                <Image
                    src="/logo.jpeg" // Use the same logo file
                    alt="NexusXtream Logo"
                    width={100}
                    height={100}
                />
                {/* -------------------------------- */}
            </div>
            <p className="text-slate-400 pr-4">
              Premium IPTV service delivering global content with exceptional quality and reliability.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/#faq" className="text-slate-400 hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link href="/#features" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
            <li><Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            <li><Link href="/tutorials" className="text-slate-400 hover:text-cyan-400 transition-colors">Tutorials</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/legal#terms" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal#privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal#refund" className="text-slate-400 hover:text-cyan-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500">© 2025 NexusXtream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
