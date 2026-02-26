import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// ── Nav Items ─────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Community", href: null, hasDropdown: true },
  { name: "Meet the Team", href: "#Team" },
];

const COMMUNITY_LINKS = [
  {
    name: "Web Development",
    href: "/webdev",
    icon: "🌐",
    sub: "React, Node.js, Full Stack",
    color: "#06B6D4",
  },
  {
    name: "AI / ML",
    href: "/mlai",
    icon: "🤖",
    sub: "Python, TensorFlow, LLMs",
    color: "#a855f7",
  },
  {
    name: "Blockchain",
    href: "/blockchain",
    icon: "⛓️",
    sub: "Solidity, Web3, DeFi",
    color: "#f59e0b",
  },
  {
    name: "DSA",
    href: "/dsa",
    icon: "🧠",
    sub: "Algorithms, Competitive Prog.",
    color: "#22c55e",
  },
];

// ── Inline styles for dropdown animation ─────────────────────────────────────
const dropdownStyles = `
  @keyframes dropIn {
    from { opacity: 0; transform: translateY(-8px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0)   scale(1);    }
  }
  .dropdown-enter { animation: dropIn 0.22s cubic-bezier(0.23,1,0.32,1) forwards; }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-100%); }
    to   { opacity: 1; transform: translateX(0);     }
  }
  .mobile-menu-enter { animation: slideIn 0.3s cubic-bezier(0.23,1,0.32,1) forwards; }
`;

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileComOpen, setMobileComOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);
  const location = useLocation();

  // Inject animation styles once
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = dropdownStyles;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileComOpen(false);
  }, [location]);

  // Dropdown hover handlers with small delay to prevent flicker
  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  const isActive = (href) => href && location.pathname === href;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[999] transition-all duration-400"
        style={{
          background: scrolled ? "rgba(5,5,12,0.92)" : "rgba(5,5,12,0.60)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.45)" : "none",
          height: scrolled ? "60px" : "68px",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex items-center justify-between">
          {/* ── Logo ── */}
          <Link
            to="/"
            className="flex items-center gap-2 group shrink-0"
            style={{ textDecoration: "none" }}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #6366f1, #06B6D4)",
                boxShadow: "0 0 16px rgba(99,102,241,0.35)",
              }}
            >
              DC
            </div>
            <span
              className="text-xl font-black tracking-tight transition-all duration-300 group-hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              DevCluster
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                // Community with dropdown
                <div
                  key={item.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-md font-semibold tracking-wide transition-all duration-200"
                    style={{
                      color: dropdownOpen ? "#fff" : "rgba(255,255,255,0.65)",
                      background: dropdownOpen
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                    }}
                  >
                    {item.name}
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-250"
                      style={{
                        transform: dropdownOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  {dropdownOpen && (
                    <div
                      className="dropdown-enter absolute top-full left-1/2 mt-2 w-64 rounded-2xl overflow-hidden"
                      style={{
                        transform: "translateX(-50%)",
                        background: "rgba(10,10,20,0.96)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow:
                          "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(99,102,241,0.1)",
                        backdropFilter: "blur(24px)",
                      }}
                    >
                      {/* Top glow line */}
                      <div
                        className="h-[1px] w-full"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
                        }}
                      />
                      <div className="p-2">
                        {COMMUNITY_LINKS.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl group/item transition-all duration-200 hover:bg-white/5"
                            style={{ textDecoration: "none" }}
                          >
                            <span className="text-lg w-7 text-center shrink-0">
                              {link.icon}
                            </span>
                            <div className="transition-transform duration-200 group-hover/item:translate-x-0.5">
                              <div
                                className="text-sm font-semibold transition-colors duration-200"
                                style={{
                                  color: isActive(link.href)
                                    ? link.color
                                    : "rgba(255,255,255,0.85)",
                                }}
                              >
                                {link.name}
                              </div>
                              <div className="text-[11px] text-gray-500 mt-0.5 group-hover/item:text-gray-400 transition-colors duration-200">
                                {link.sub}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Regular nav link
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-md font-semibold tracking-wide transition-all duration-200 group"
                  style={{
                    color: "rgba(255,255,255,0.80)",
                    textDecoration: "none",
                  }}
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 origin-left"
                    style={{
                      background: "linear-gradient(90deg, #6366f1, #06B6D4)",
                    }}
                  />
                </a>
              ),
            )}
          </div>

          {/* ── Desktop Buttons ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 hover:bg-white/6"
              style={{
                color: "rgba(255,255,255,0.65)",
                borderColor: "rgba(255,255,255,0.12)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              Login
            </Link>
            <Link
              to="/get-started"
              className="px-5 py-2 text-sm font-semibold rounded-lg text-white transition-all duration-250 hover:scale-[1.04] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #6366f1, #06B6D4)",
                boxShadow: "0 0 20px rgba(99,102,241,0.30)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 32px rgba(99,102,241,0.55)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(99,102,241,0.30)")
              }
            >
              Get Started
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg transition-all duration-200 hover:bg-white/8"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-5 h-[1.5px] bg-white/80 rounded-full" />
            <span className="w-5 h-[1.5px] bg-white/80 rounded-full" />
            <span className="w-3.5 h-[1.5px] bg-white/80 rounded-full self-start ml-[3px]" />
          </button>
        </div>
      </nav>

      {/* Spacer */}
      <div
        style={{
          height: scrolled ? "60px" : "68px",
          transition: "height 0.4s",
        }}
      />

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div
          className="mobile-menu-enter fixed inset-0 z-[1000] flex flex-col"
          style={{
            background: "rgba(4,4,12,0.97)",
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/6">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2"
              style={{ textDecoration: "none" }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #06B6D4)",
                }}
              >
                DC
              </div>
              <span
                className="text-xl font-black tracking-tight"
                style={{
                  background:
                    "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DevCluster
              </span>
            </Link>

            {/* Close */}
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-white/8"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileComOpen((p) => !p)}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-colors duration-200 hover:bg-white/5"
                    style={{
                      color: mobileComOpen ? "#fff" : "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item.name}
                    <svg
                      className="w-4 h-4 transition-transform duration-250"
                      style={{
                        transform: mobileComOpen
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {mobileComOpen && (
                    <div className="mt-1 ml-4 space-y-1 border-l border-white/8 pl-4">
                      {COMMUNITY_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/5"
                          style={{ textDecoration: "none" }}
                        >
                          <span className="text-base">{link.icon}</span>
                          <div>
                            <div className="text-sm font-semibold text-white/85">
                              {link.name}
                            </div>
                            <div className="text-[11px] text-gray-500">
                              {link.sub}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3.5 rounded-xl text-base font-semibold transition-colors duration-200 hover:bg-white/5 hover:text-white"
                  style={{
                    color: "rgba(255,255,255,0.80)",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                </a>
              ),
            )}
          </div>

          {/* Bottom buttons */}
          <div className="px-4 pb-8 space-y-3 border-t border-white/6 pt-5">
            <Link
              to="/get-started"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #6366f1, #06B6D4)",
                boxShadow: "0 0 24px rgba(99,102,241,0.30)",
                textDecoration: "none",
              }}
            >
              Get Started
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-medium border transition-all duration-200 hover:bg-white/5"
              style={{
                color: "rgba(255,255,255,0.65)",
                borderColor: "rgba(255,255,255,0.12)",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
