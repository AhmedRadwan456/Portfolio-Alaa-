"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Layout, Settings } from "lucide-react";
import { portfolioData, Skill } from "@/data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "backend" | "frontend" | "tools">("all");
  const { skills } = portfolioData;

  // Tabs structure
  const tabs = [
    { id: "all", label: "All Skills", icon: null },
    { id: "backend", label: "Backend / .NET", icon: Server },
    { id: "frontend", label: "Frontend UI", icon: Layout },
    { id: "tools", label: "Tools & DevOps", icon: Settings },
  ] as const;

  // Filter skills
  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "all") return true;
    return skill.category === activeTab;
  });

  // Decide colors based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "backend":
        return {
          text: "text-brand-purple",
          bg: "bg-brand-purple",
          border: "border-brand-purple/20",
          glow: "rgba(81, 43, 212, 0.25)",
        };
      case "frontend":
        return {
          text: "text-brand-cyan",
          bg: "bg-brand-cyan",
          border: "border-brand-cyan/20",
          glow: "rgba(6, 182, 212, 0.2)",
        };
      default:
        return {
          text: "text-indigo-400",
          bg: "bg-indigo-400",
          border: "border-indigo-400/20",
          glow: "rgba(129, 140, 248, 0.2)",
        };
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Technical <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-12 h-1 rounded bg-brand-purple" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "text-white border border-brand-purple/20 bg-brand-purple/10"
                    : "text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/50"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="active-skill-tab"
                    className="absolute inset-0 bg-brand-purple/5 border border-brand-purple/40 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const theme = getCategoryColor(skill.category);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-panel p-6 rounded-2xl border ${theme.border} flex flex-col justify-between`}
                  style={{
                    boxShadow: `0 4px 20px -5px ${theme.glow}`,
                  }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-sm text-zinc-100">{skill.name}</span>
                    <span className={`text-xs font-mono font-semibold ${theme.text}`}>
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2 rounded-full bg-zinc-900 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                      className={`h-full rounded-full ${theme.bg} bg-gradient-to-r from-indigo-500`}
                    />
                  </div>

                  {/* Subtitle tag */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">
                      {skill.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
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
