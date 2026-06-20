"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Work <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-12 h-1 rounded bg-brand-purple" />
        </div>

        <div className="relative border-l border-zinc-800 md:pl-8 pl-4 space-y-12">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <span className={`absolute md:-left-[48px] -left-[30px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border ${exp.isCurrent
                    ? "bg-brand-purple/20 border-brand-purple text-brand-purple shadow-[0_0_15px_rgba(81,43,212,0.5)]"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400"
                  }`}>
                  <Briefcase className="w-3.5 h-3.5" />
                </span>

                <div className="glass-panel p-6 rounded-2xl border-zinc-800/80 hover:border-brand-purple/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-brand-cyan">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium bg-zinc-950/60 border border-zinc-900 px-3 py-1.5 rounded-lg w-fit">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <CheckSquare className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
