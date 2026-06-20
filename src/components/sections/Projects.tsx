"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Cpu, Server } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Projects() {
  const [filter, setFilter] = useState<"all" | "backend" | "embedded" | "frontend">("all");
  const { projects } = portfolioData;

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "backend", label: "Backend (.NET)" },
    { id: "embedded", label: "Robotics & Embedded" },
  ] as const;

  const filteredProjects = projects.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "backend":
        return {
          icon: Server,
          color: "text-brand-purple",
          border: "border-brand-purple/20",
          glow: "shadow-brand-purple/10",
        };
      case "embedded":
        return {
          icon: Cpu,
          color: "text-indigo-400",
          border: "border-indigo-500/20",
          glow: "shadow-indigo-500/10",
        };
      default:
        return {
          icon: Code2,
          color: "text-brand-cyan",
          border: "border-brand-cyan/20",
          glow: "shadow-brand-cyan/10",
        };
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Featured <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-12 h-1 rounded bg-brand-purple" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                  ? "text-white bg-brand-purple/10 border border-brand-purple/20"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/50 border border-transparent"
                  }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="active-project-filter"
                    className="absolute inset-0 bg-brand-purple/5 border border-brand-purple/40 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const theme = getCategoryTheme(project.category);
              const ProjIcon = theme.icon;

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-panel p-6 rounded-2xl flex flex-col justify-between border ${theme.border} hover:border-brand-purple/35 transition-all shadow-lg ${theme.glow}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-zinc-900 border border-zinc-800 ${theme.color}`}>
                        <ProjIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-brand-purple transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-950/60 border border-zinc-800 text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 border-t border-zinc-900 pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-brand-cyan transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
