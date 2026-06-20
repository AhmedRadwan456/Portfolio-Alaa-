"use client";

import { motion } from "framer-motion";

export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-bg-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />

      <motion.div
        className="absolute w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full radial-glow-purple -left-20 -top-20 opacity-70"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full radial-glow-cyan right-0 bottom-10 md:-right-20 opacity-60"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full radial-glow-purple left-1/3 top-1/2 opacity-30"
        animate={{
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
