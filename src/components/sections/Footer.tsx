"use client";

import { ArrowUp, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { name } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-bg-dark/85 border-t border-zinc-900/60 py-12 px-4 md:px-8 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <div className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
            <Terminal className="w-3.5 h-3.5 text-brand-purple" />
          </div>
          <span>
            Designed & Built by <span className="font-semibold text-white">{name}</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xs text-zinc-500 text-center font-mono">
          Clean Code • SOLID Principles • ASP.NET Core & Next.js
        </p>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-6">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 cursor-pointer shadow-lg"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
