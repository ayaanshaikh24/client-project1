"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden py-16 lg:py-24 xl:py-32">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.12),rgba(253,251,247,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal dark:text-brand-teal-glow font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase border border-brand-teal/20"
            >
              <Sparkles size={14} className="animate-spin-slow" />
              <span>Limited Summer Slots Available</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-slate-dark dark:text-white"
            >
              AI & Robotics <br />
              <span className="bg-gradient-to-r from-brand-teal via-brand-indigo to-brand-amber bg-clip-text text-transparent">
                Summer Workshop
              </span>
            </motion.h1>

            {/* Description Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-slate-muted dark:text-slate-300 leading-relaxed font-normal"
            >
              Ignite your child's curiosity this summer! A 4-week interactive online journey where kids ages 8–14 build block-based AI models, program virtual robots, and learn critical engineering and logic skills.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#enroll"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-teal hover:bg-brand-teal/90 transition-all duration-200 shadow-lg hover:shadow-brand-teal/30 hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-brand-teal/50"
              >
                <span>Enroll Now</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#syllabus"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-dark dark:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-850 hover:border-slate-300 transition-all duration-200 focus-visible:ring-3 focus-visible:ring-slate-200"
              >
                <span>Explore Curriculum</span>
              </a>
            </motion.div>
          </div>

          {/* Hero Right Composition (Custom SVG / Graphic illustration) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
            >
              {/* Glowing Background Glows */}
              <div className="absolute w-72 h-72 rounded-full bg-brand-teal/10 dark:bg-brand-teal/5 blur-3xl" />
              <div className="absolute w-60 h-60 rounded-full bg-brand-indigo/10 dark:bg-brand-indigo/5 blur-2xl" />

              {/* Custom Tech SVG Composition */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10 drop-shadow-xl"
              >
                {/* Outer decorative ring */}
                <circle cx="200" cy="200" r="170" stroke="url(#gradient-teal-indigo)" strokeWidth="1" strokeDasharray="5 5" opacity="0.6" />
                
                {/* Circuit paths */}
                <path d="M 60,200 L 140,200 L 160,180" stroke="url(#gradient-teal)" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 340,200 L 260,200 L 240,220" stroke="url(#gradient-indigo)" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 200,60 L 200,120" stroke="url(#gradient-amber)" strokeWidth="1.5" />
                
                {/* Connector dots */}
                <circle cx="60" cy="200" r="4" fill="var(--color-brand-teal)" />
                <circle cx="340" cy="200" r="4" fill="var(--color-brand-indigo)" />
                
                {/* central circle backdrop */}
                <circle cx="200" cy="200" r="80" fill="var(--color-cream)" className="dark:fill-slate-900" stroke="url(#gradient-teal-indigo)" strokeWidth="2" />
                <circle cx="200" cy="200" r="72" fill="url(#gradient-teal-indigo)" opacity="0.08" />

                {/* Animated circuit lines inside SVG */}
                <g className="animate-pulse-glow">
                  {/* Glowing core */}
                  <circle cx="200" cy="200" r="55" fill="url(#gradient-teal-glow)" opacity="0.15" />
                  <circle cx="200" cy="200" r="40" fill="url(#gradient-teal)" opacity="0.2" />
                </g>

                {/* Robot/Bot Character Icon inside SVG */}
                <svg x="160" y="160" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal dark:text-brand-teal-glow">
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4M8 16h.01M16 16h.01M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
                </svg>

                {/* Tech badges floating */}
                <g transform="translate(70, 90)">
                  <rect width="90" height="34" rx="8" fill="white" className="dark:fill-slate-800" stroke="#E2E8F0" strokeWidth="1" />
                  <circle cx="18" cy="17" r="8" fill="#E0F2FE" />
                  <path d="M15 17h6" stroke="#0284C7" strokeWidth="1.5" />
                  <text x="34" y="21" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="var(--color-slate-dark)" className="dark:fill-white">LOGIC</text>
                </g>

                <g transform="translate(240, 100)">
                  <rect width="84" height="34" rx="8" fill="white" className="dark:fill-slate-800" stroke="#E2E8F0" strokeWidth="1" />
                  <circle cx="18" cy="17" r="8" fill="#FEF3C7" />
                  <circle cx="18" cy="17" r="3" fill="#D97706" />
                  <text x="34" y="21" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="var(--color-slate-dark)" className="dark:fill-white">ROBOTS</text>
                </g>

                <g transform="translate(240, 270)">
                  <rect width="70" height="34" rx="8" fill="white" className="dark:fill-slate-800" stroke="#E2E8F0" strokeWidth="1" />
                  <circle cx="18" cy="17" r="8" fill="#ECEFFE" />
                  <path d="M18 13v8M15 16h6" stroke="#4F46E5" strokeWidth="1.5" />
                  <text x="34" y="21" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="var(--color-slate-dark)" className="dark:fill-white">AI</text>
                </g>

                <g transform="translate(70, 280)">
                  <rect width="105" height="34" rx="8" fill="white" className="dark:fill-slate-800" stroke="#E2E8F0" strokeWidth="1" />
                  <circle cx="18" cy="17" r="8" fill="#E0F2F1" />
                  <text x="34" y="21" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="var(--color-slate-dark)" className="dark:fill-white">BLOCK CODE</text>
                </g>

                {/* SVG Gradients definitions */}
                <defs>
                  <linearGradient id="gradient-teal-indigo" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-brand-teal)" />
                    <stop offset="100%" stopColor="var(--color-brand-indigo)" />
                  </linearGradient>
                  <linearGradient id="gradient-teal" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-brand-teal)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--color-brand-teal-glow)" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient-indigo" x1="400" y1="0" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-brand-indigo)" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="var(--color-brand-indigo-light)" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="gradient-amber" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-brand-amber)" />
                    <stop offset="100%" stopColor="var(--color-brand-amber-dark)" />
                  </linearGradient>
                  <linearGradient id="gradient-teal-glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--color-brand-teal-glow)" />
                    <stop offset="100%" stopColor="var(--color-brand-teal)" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
