"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";
import CanvasParticles from "./CanvasParticles";

export default function Hero() {
  // Split heading for kinetic reveal mask
  const headingWord1 = "AI &".split("");
  const headingWord2 = "Robotics".split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const orbitBadges = [
    { name: "LOGIC", style: { left: "50%", top: "8%", transform: "translate(-50%, -50%)" }, color: "border-brand-teal/20" },
    { name: "ROBOTS", style: { left: "92%", top: "50%", transform: "translate(-50%, -50%)" }, color: "border-brand-purple/20" },
    { name: "AI", style: { left: "50%", top: "92%", transform: "translate(-50%, -50%)" }, color: "border-brand-teal/20" },
    { name: "BLOCK CODE", style: { left: "8%", top: "50%", transform: "translate(-50%, -50%)" }, color: "border-brand-purple/20" },
  ];

  return (
    <section id="overview" className="relative overflow-hidden py-16 lg:py-24 xl:py-32 bg-slate-dark bg-dot-grid">
      
      {/* Neural Network Canvas Particle Background */}
      <CanvasParticles />

      {/* Blurred Neon Gradient Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-teal/15 blur-[100px] pointer-events-none orb-pulse" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-purple/15 blur-[120px] pointer-events-none orb-pulse" style={{ animationDelay: "-4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
            
            {/* Live Slot Counter Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start space-y-2 bg-slate-900/80 backdrop-blur border border-white/5 px-4 py-2.5 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-350">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-teal"></span>
                </span>
                <span>12 of 30 slots remaining for Summer 2026</span>
              </div>
              <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mt-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60%" }} // 18 filled, 12 remaining (60%)
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  className="bg-brand-teal h-full rounded-full"
                />
              </div>
            </motion.div>

            {/* Headline with kinetic text reveal mask */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-7.5xl tracking-tight leading-tight text-white"
            >
              <div className="block">
                {headingWord1.map((char, index) => (
                  <span key={index} className="kinetic-mask">
                    <motion.span variants={letterVariants} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  </span>
                ))}
              </div>
              <div className="block">
                {headingWord2.map((char, index) => (
                  <span key={index} className="kinetic-mask">
                    <motion.span variants={letterVariants} className="inline-block">
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  </span>
                ))}
              </div>
              <span className="block mt-2 font-display bg-gradient-to-r from-brand-teal via-brand-purple to-brand-amber bg-[length:200%_auto] animate-gradient-text bg-clip-text text-transparent font-extrabold leading-none">
                Summer Workshop
              </span>
            </motion.h1>

            {/* Description Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl text-lg text-slate-400 leading-relaxed font-normal"
            >
              Ignite your child's curiosity this summer! A 4-week interactive online journey where kids ages 8–14 build block-based AI models, program virtual robots, and learn critical engineering and logic skills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
            >
              <a
                href="#enroll"
                className="shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-dark bg-brand-teal hover:shadow-[0_0_25px_rgba(0,212,170,0.4)] transition-all duration-200"
              >
                <span>Enroll Now</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#syllabus"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
              >
                <span>Explore Curriculum</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Composition (Custom Animated Orbital SVG) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[360px] aspect-square flex items-center justify-center"
            >
              {/* Core robot node pulsing */}
              <div className="absolute w-36 h-36 rounded-full bg-slate-900 border border-brand-teal/40 flex items-center justify-center shadow-[0_0_35px_rgba(0,212,170,0.25)] animate-pulse-glow z-20">
                <Bot size={54} className="text-brand-teal" />
              </div>

              {/* Orbital Paths wrapper (CSS Rotated) */}
              <div className="absolute w-full h-full animate-orbit">
                {/* Visual orbital ring */}
                <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-brand-teal/10 pointer-events-none" />

                {/* Floating counter-rotated orbital label badges */}
                {orbitBadges.map((badge, idx) => (
                  <div
                    key={badge.name}
                    style={badge.style}
                    className="absolute z-30"
                  >
                    <div className="animate-orbit-counter">
                      <span className={`inline-block px-3 py-1.5 rounded-lg text-[10px] font-bold text-white bg-slate-950/95 border ${badge.color} shadow-lg tracking-wider`}>
                        {badge.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive tech grids behind */}
              <svg width="100%" height="100%" viewBox="0 0 360 360" className="absolute inset-0 pointer-events-none opacity-40">
                <circle cx="180" cy="180" r="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="6 6" />
                <circle cx="180" cy="180" r="120" stroke="rgba(0, 212, 170, 0.05)" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
