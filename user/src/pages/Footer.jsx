import React from 'react';
// Importing icons from lucide-react for social media and the globe
import { Instagram, Youtube, X, Github, Globe } from 'lucide-react';

const Footer = () => {

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const resources = [
    { name: 'FAQ', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms', href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: X, href: '#', label: 'X (Twitter)' },
    { icon: Github, href: '#', label: 'Github' },
  ];

  // Simple placeholder SVG for the team illustration in the 'Stay Connected' section
  const TeamIllustration = () => (
    <svg viewBox="0 0 400 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="400" height="200" fill="#000000" />
      {/* Background shapes representing figures */}
      <circle cx="50" cy="180" r="30" fill="#2563EB" opacity="0.2"/>
      <rect x="15" y="100" width="70" height="80" rx="10" fill="#2563EB" opacity="0.3"/>

      <circle cx="150" cy="180" r="35" fill="#1D4ED8" opacity="0.25"/>
      <rect x="110" y="80" width="80" height="100" rx="10" fill="#1D44E8" opacity="0.4"/>
      
      <circle cx="250" cy="180" r="30" fill="#3B82F6" opacity="0.3"/>
      <rect x="215" y="100" width="70" height="80" rx="10" fill="#3B82F6" opacity="0.45"/>

      <circle cx="350" cy="180" r="35" fill="#1D4ED8" opacity="0.2"/>
      <rect x="310" y="90" width="80" height="90" rx="10" fill="#1D4ED8" opacity="0.35"/>

      {/* Adding a blue object in the center (like a laptop/document) */}
      <rect x="185" y="140" width="30" height="20" rx="3" fill="#60A5FA" />
      
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#60A5FA" fontSize="16" fontWeight="bold">
        DEV CLUSTER TEAM
      </text>
    </svg>
  );


  return (
    // Outer container with dark background and blue border top
    <footer className="bg-black text-white border-t-4 border-blue-600 font-inter">
      <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16">
        
        {/* Main Content Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-16">

          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="text-3xl md:text-5xl lg:text-2xl text-center font-bold  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">DEV </span>
              <span className="text-3xl md:text-5xl lg:text-2xl text-center font-bold  bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">CLUSTER</span>
            </h2>
            <p className="text-sm text-gray-400">Building the Future, Together.</p>
            
            <div className="mt-4 space-y-2">
                <p className="font-semibold text-gray-300">Find your tribe.</p>
                <p className="font-semibold text-gray-300">Collaborate.</p>
                <p className="font-semibold text-gray-300">Build the future.</p>
            </div>
            {/* Stylized Globe Icon */}
            <div className="pt-2">
                <Globe className="w-12 h-12 text-blue-400 p-2 bg-blue-800/30 rounded-full" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* Added hover:underline */}
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 hover:underline transition duration-150 text-sm capitalize">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Social Icons */}
          <div>
            <h3 className="text-xl font-bold mb-5">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((link) => (
                <li key={link.name}>
                  {/* Added hover:underline */}
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 hover:underline transition duration-150 text-sm capitalize">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Icons (already have a hover effect on the icon itself) */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.label}`}
                  className="text-gray-400 hover:text-blue-400 transition duration-150 p-1 rounded-full hover:bg-gray-800"
                >
                  <item.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>


          {/* Column 4: Stay Connected & Subscription */}
          <div>
            <h3 className="text-xl font-bold mb-5">Stay Connected</h3>

            {/* Input and Button for Phone Number Signup */}
            <div className="flex mb-4 rounded-lg overflow-hidden shadow-lg">
              <input
                type="tel" // Use type="tel" for phone number input
                placeholder="Phone number"
                aria-label="Enter your phone number to join the WhatsApp group"
                className="p-3 w-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
              <button 
                className="bg-blue-600 text-white font-bold text-sm py-3 px-6 hover:bg-blue-700 transition duration-150 shrink-0"
                aria-label="Join WhatsApp Group"
              >
                JOIN
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-8">
              Our WhatsApp group for more information
            </p>
            
            {/* Team Illustration Placeholder */}
            <div className="w-full">
              <TeamIllustration />
            </div>
          </div>
        </div>

        {/* --- Copyright and Policy at the bottom --- */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-2 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} @copyright_policy2025
          </p>
          {/* Added hover:underline */}
          <a href="#" className="hover:text-blue-400 hover:underline transition duration-150">
            @privacy_policy2025
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;