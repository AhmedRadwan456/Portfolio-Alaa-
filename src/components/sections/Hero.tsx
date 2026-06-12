"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Download, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { name, title, subTitle, resumeUrl } = portfolioData.personalInfo;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-brand-purple/30 text-xs font-semibold text-brand-cyan mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            Available for Freelance & Projects
          </motion.div>

          {/* Title and Job Roles */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-4"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-white via-zinc-100 to-brand-purple bg-clip-text text-transparent text-glow-purple">
              {name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-brand-cyan to-indigo-400 bg-clip-text text-transparent mb-6"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base sm:text-lg max-w-xl mb-8 leading-relaxed"
          >
            {subTitle}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel border-zinc-800 hover:border-brand-purple text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-brand-purple" />
              Download CV
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Mini Tech Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4 items-center text-zinc-500 text-xs"
          >
            <span className="font-semibold uppercase tracking-wider">Focus Areas:</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
              <Code2 className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-zinc-400">ASP.NET</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
              <Database className="w-3.5 h-3.5 text-brand-cyan" />
              <span className="text-zinc-400">SQL Server</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-zinc-400">Clean Architecture</span>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Visual Column */}
        <div className="lg:col-span-5 flex justify-center z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md relative group"
          >
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-cyan opacity-30 blur-xl group-hover:opacity-50 transition duration-1000" />
            
            {/* Image Container */}
            <div className="relative glass-panel border-brand-purple/20 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/alaa.jpeg" 
                alt="Alaa Samir" 
                className="w-full h-auto object-cover aspect-[4/5] object-center transform hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Decorative corner tag / overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border-zinc-800/80 bg-zinc-950/80 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Alaa Samir</p>
                  <p className="text-[10px] text-zinc-400 font-mono">Backend Developer (.NET)</p>
                </div>
                <div className="p-2 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                  <Terminal className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-brand-purple" />
        </motion.div>
      </div>
    </section>
  );
}
