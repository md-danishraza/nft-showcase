import React, { useState, useEffect } from "react";
import logo from "../assets/Union-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-brand-bg/95 backdrop-blur-xl py-3 shadow-lg shadow-highlight/5 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <a href="/">
              <img
                src={logo}
                alt="Unio Logo"
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["About us", "Store", "Games"].map((item, idx) => (
              <a
                key={item}
                href={item.split(" ")[0]}
                className="font-clash font-medium text-white/80 hover:text-white transition-all duration-300 relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-grad-start to-grad-end transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="relative px-6 py-2.5 rounded-full font-poppins font-semibold text-sm overflow-hidden group bg-white/5 backdrop-blur-sm border border-white/20 hover:border-highlight/50 transition-all duration-300">
              <span className="relative z-10 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Connect Wallet
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-grad-start/20 to-grad-end/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 focus:outline-none transition-all duration-300 hover:border-highlight/50"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ease-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ease-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-white transition-all duration-300 ease-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 py-4 border-t border-white/10">
            {["About us", "Store", "Games"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-poppins font-medium text-white/80 hover:text-white transition-colors duration-300 px-2 py-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-2 w-full px-6 py-3 rounded-full font-poppins font-semibold text-sm bg-gradient-to-r from-grad-start/20 to-grad-end/20 border border-white/20 hover:border-highlight/50 transition-all duration-300">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Connect Wallet
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
