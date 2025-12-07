import { useState } from "react";

// Unified Navigation Links
const NAV_ITEMS = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Community", href: "#Community" },
  { name: "Meet the Team", href: "#Team" },
];

// --- Helper Icon Components ---

export const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-white"
  >
    <path d="M4 5h16" />
    <path d="M4 12h16" />
    <path d="M4 19h16" />
  </svg>
);

export const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-black"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// --- Main Navbar Component ---

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ item }) => (
    <a href={item.href} className="relative overflow-hidden h-6 group">
      <span className="block group-hover:-translate-y-full transition-transform duration-300">
        {item.name}
      </span>
      <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-cyan-400">
        {item.name}
      </span>
    </a>
  );

  return (
    <>
      {/* ✅ FIXED STICKY NAVBAR */}
      <nav className="fixed top-0 left-0 z-[999] bg-black/90 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md">
        
        {/* Logo */}
        <a
          href="#"
          className="text-3xl md:text-5xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Dev <span>Cluster</span>
        </a>

        {/* Desktop Navigation */}
        <div className="text-white hidden lg:flex items-center gap-6 ml-7 border border-slate-700 px-9 py-4 rounded-full text-lg">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer">
            Get started
          </button>
          <button className="hover:bg-slate-300/20 transition px-6 py-2 border border-slate-400 rounded-full text-white text-sm cursor-pointer">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden active:scale-90 transition"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex flex-col items-center text-xl gap-10 md:hidden transition-transform duration-300 pt-24 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavLinkClick}
              className="text-white hover:text-cyan-400 transition duration-200 text-2xl font-medium"
            >
              {item.name}
            </a>
          ))}

          <div className="flex flex-col space-y-4 mt-6">
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-medium shadow-md">
              Get started
            </button>
            <button className="border border-slate-400 px-8 py-3 rounded-full text-white text-lg">
              Login
            </button>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 bg-slate-100 hover:bg-slate-200 transition rounded-full p-2"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <XIcon />
          </button>
        </div>
      </nav>

      {/* ✅ Spacer so content does not hide under navbar */}
      <div className="h-[90px]" />
    </>
  );
}
