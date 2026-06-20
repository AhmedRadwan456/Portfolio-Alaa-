"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Award, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { aboutBio } = portfolioData.personalInfo;
  const { stats } = portfolioData;

  const coreValues = [
    {
      title: "Clean Architecture",
      desc: "Structuring systems to remain decoupled, easily testable, and maintainable over years of lifecycle.",
      icon: Cpu,
    },
    {
      title: "High Performance",
      desc: "Optimizing relational database schemas, memory footprints, caching layers, and query workloads.",
      icon: Award,
    },
    {
      title: "Modern Frontend integration",
      desc: "Connecting API layers cleanly with stateful React & Next.js client templates with type safety.",
      icon: Eye,
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            About <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-12 h-1 rounded bg-brand-purple" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl border-zinc-800/80"
            >
              <h3 className="text-xl font-bold mb-4 text-white">Who is Alaa Samir?</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {aboutBio}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Backend Specialist</h4>
                    <p className="text-xs text-zinc-500">Expertise in C# & .NET architectures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Database Optimization</h4>
                    <p className="text-xs text-zinc-500">Efficient relational schema structures & indexing.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl border border-zinc-900 bg-zinc-950/40 items-start hover:border-zinc-800 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-200 text-sm mb-1">{val.title}</h4>
                      <p className="text-xs text-zinc-455 text-zinc-500 leading-relaxed">{val.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel-interactive p-6 flex flex-col justify-center items-center text-center rounded-2xl h-[160px]"
              >
                <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-zinc-200 to-brand-purple bg-clip-text text-transparent mb-2">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-zinc-400 tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2 p-6 glass-panel border-brand-cyan/20 rounded-2xl text-center flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900/50 to-zinc-950/80"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan mb-2">Database design</span>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                Strong focus on Microsoft SQL Server, Entity Framework query tuning, migrations, and schema validation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
