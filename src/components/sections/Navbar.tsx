"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => {
        const el = document.getElementById(link.href.substring(1));
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: link.href.substring(1),
            topDiff: Math.abs(rect.top),
            inView: rect.top <= 150 && rect.bottom >= 150,
          };
        }
        return null;
      });

      const visible = sections.find(s => s && s.inView);
      if (visible) {
        setActiveSection(visible.id);
      } else {
        const validSections = sections.filter((s): s is { id: string; topDiff: number; inView: boolean } => s !== null);
        if (validSections.length > 0) {
          const closest = validSections.reduce((prev, curr) =>
            prev.topDiff < curr.topDiff ? prev : curr
          );
          setActiveSection(closest.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-7xl mx-auto w-full flex items-center justify-between px-6 py-3 rounded-2xl pointer-events-auto transition-all duration-300 ${isScrolled
            ? "glass-panel bg-opacity-80 shadow-lg border-brand-purple/20 py-2.5"
            : "bg-transparent border-transparent"
          }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2 group text-white font-bold text-xl tracking-tight"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-purple/30 group-hover:border-brand-purple">
            <Terminal className="w-4 h-4 text-brand-purple group-hover:text-brand-cyan transition-colors" />
          </div>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-brand-purple transition-all duration-300">
            {portfolioData.personalInfo.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1.5 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg transition-colors duration-250 hover:text-white ${isActive ? "text-white" : ""
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-brand-purple/10 border border-brand-purple/20 rounded-lg -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-r from-brand-purple to-indigo-600 hover:from-brand-purple hover:to-brand-cyan text-white shadow-md shadow-brand-purple/20 hover:shadow-brand-cyan/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 top-20 glass-panel border-brand-purple/20 rounded-2xl p-6 pointer-events-auto flex flex-col gap-6 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block text-lg font-medium py-1.5 px-3 rounded-xl transition-all ${isActive
                          ? "bg-brand-purple/15 text-white border-l-2 border-brand-purple pl-4"
                          : "text-zinc-400 hover:text-white"
                        }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="w-full text-center py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-brand-purple to-indigo-600 text-white shadow-lg"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
