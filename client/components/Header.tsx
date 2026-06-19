"use client";

import { useState, useEffect } from "react";
import { Cpu, Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Syllabus", href: "#syllabus" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-dark/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:rounded"
            aria-label="AI & Robotics Summer Workshop Logo"
          >
            <div className="bg-brand-teal p-2 rounded-lg text-slate-dark group-hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(0,212,170,0.4)]">
              <Cpu size={22} className="stroke-[2.5]" />
            </div>
            <span className="font-sans font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-white via-brand-teal to-brand-purple bg-clip-text text-transparent">
              RoboAI Workshop
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white nav-link-underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:rounded p-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#enroll"
              className="shimmer-btn inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-slate-dark bg-brand-teal hover:shadow-[0_0_20px_rgba(0,212,170,0.4)] transition-all duration-200"
            >
              Enroll Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-teal"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-dark border-b border-white/5" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 py-2 px-3 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#enroll"
                onClick={() => setIsOpen(false)}
                className="shimmer-btn block w-full text-center px-4 py-3 rounded-lg text-base font-bold text-slate-dark bg-brand-teal"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
