"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Code2, Cpu, Eye, Lightbulb, ChevronRight } from "lucide-react";

export default function LearningOutcomes() {
  const outcomes = [
    {
      id: 1,
      week: "Week 1",
      title: "AI Foundations & Computational Logic",
      description: "Understand the core concepts of artificial intelligence and robotics. Learn computational logic through visual game challenges where you program decisions for virtual entities. By the end of this week, students will master logic flow diagrams, loops, and conditional reasoning.",
      icon: Lightbulb,
      skills: ["Machine Learning Basics", "Algorithmic Thinking", "Pattern Recognition", "Conditional If-Else Logic"],
      color: "border-brand-teal text-brand-teal bg-brand-teal/10",
      accentColor: "rgba(0, 212, 170, 0.4)",
    },
    {
      id: 2,
      week: "Week 2",
      title: "Visual Robot Programming & Control Loops",
      description: "Dive into block-based coding structures. Learn to read robot sensors (ultrasonic, light, infrared) and coordinate motor drivers. Students write algorithms for autonomous line-following, obstacle avoidance, and interactive pathfinding.",
      icon: Code2,
      skills: ["Feedback Loops", "Sensor Reading Calibration", "Motor Output Control", "Event Handlers"],
      color: "border-brand-purple text-brand-purple bg-brand-purple/10",
      accentColor: "rgba(124, 58, 237, 0.4)",
    },
    {
      id: 3,
      week: "Week 3",
      title: "Interactive AI Models & Decision Systems",
      description: "Train your own machine learning models using text, image, and voice datasets. Learn how supervised training works. Connect these custom models to your robot's programming so the robot responds to hand signals, voice commands, or object recognition.",
      icon: Cpu,
      skills: ["Supervised Learning", "Data Gathering & Labeling", "Confidence Thresholds", "Model Deployment"],
      color: "border-brand-teal text-brand-teal bg-brand-teal/10",
      accentColor: "rgba(0, 212, 170, 0.4)",
    },
    {
      id: 4,
      week: "Week 4",
      title: "Capstone Smart Robot Project",
      description: "Apply your combined logic, programming, and AI model skills to build an autonomous robot project that solves a real-world task (e.g., sorting recycling, searching for objects). Design, test, debug, and optimize your codebase.",
      icon: Eye,
      skills: ["Systems Engineering", "Debugging Workflows", "Optimization Cycles", "Creative Problem Solving"],
      color: "border-brand-purple text-brand-purple bg-brand-purple/10",
      accentColor: "rgba(124, 58, 237, 0.4)",
    },
    {
      id: 5,
      week: "Graduate",
      title: "Live Showcase & Robotics Certification",
      description: "Pitch and demonstrate your final capstone robot project in a live virtual room to peers and industry instructors. Graduate with a certified, shareable digital credential and a portfolio project you can showcase.",
      icon: Award,
      skills: ["Project Presentation", "Visual Design Pitching", "Peer Review Collaboration", "Credential Sharing"],
      color: "border-brand-amber text-brand-amber bg-brand-amber/10",
      accentColor: "rgba(245, 158, 11, 0.4)",
    },
  ];

  const [expandedWeek, setExpandedWeek] = useState<number>(1);

  const toggleWeek = (id: number) => {
    setExpandedWeek(expandedWeek === id ? 0 : id);
  };

  return (
    <section id="syllabus" className="py-20 lg:py-28 bg-slate-dark relative">
      {/* Background radial orbs */}
      <div className="absolute top-1/2 left-[-15%] w-[400px] h-[400px] rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white mb-4">
            Curriculum Roadmap
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Click on each week below to explore the visual block coding syllabus and hand-on projects.
          </p>
        </div>

        {/* Interactive Vertical Timeline Accordion */}
        <div className="relative">
          {/* Main vertical line of the timeline */}
          <div className="absolute left-[24px] md:left-[28px] top-6 bottom-6 w-0.5 bg-white/5 pointer-events-none rounded-full" />
          
          {/* Dynamic Scroll-linked Progress-Fill Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: `${(expandedWeek / 5) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-[24px] md:left-[28px] top-6 w-0.5 bg-gradient-to-b from-brand-teal via-brand-purple to-brand-amber pointer-events-none rounded-full shadow-[0_0_8px_rgba(0,212,170,0.5)]"
          />

          <div className="space-y-6">
            {outcomes.map((outcome) => {
              const IconComponent = outcome.icon;
              const isExpanded = expandedWeek === outcome.id;
              
              // Determine active theme color
              const activeColor = outcome.id % 2 !== 0 ? "text-brand-teal" : "text-brand-purple";
              const glowClass = outcome.id % 2 !== 0 
                ? "shadow-[0_0_15px_rgba(0,212,170,0.3)] bg-brand-teal border-brand-teal" 
                : "shadow-[0_0_15px_rgba(124,58,237,0.3)] bg-brand-purple border-brand-purple";

              return (
                <div
                  key={outcome.id}
                  className={`relative flex items-start transition-all duration-300 ${
                    isExpanded ? "scale-[1.01]" : ""
                  }`}
                >
                  {/* Timeline Numbered Nodes */}
                  <div className="absolute left-0 top-[18px] z-10">
                    <motion.button
                      onClick={() => toggleWeek(outcome.id)}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center font-display font-black text-sm md:text-base cursor-pointer focus:outline-none transition-all duration-350 ${
                        isExpanded
                          ? `${glowClass} text-slate-dark border-transparent`
                          : "bg-slate-900 border-white/10 text-slate-400 hover:border-brand-teal/40 hover:text-white"
                      }`}
                      aria-label={`${outcome.week} details`}
                    >
                      {outcome.id}
                    </motion.button>
                  </div>

                  {/* Accordion Card */}
                  <div className="w-full pl-16 md:pl-20">
                    <div className={`bg-slate-900/40 backdrop-blur-sm rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isExpanded 
                        ? "border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.25)]" 
                        : "border-white/5 hover:border-white/10"
                    }`}>
                      
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleWeek(outcome.id)}
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                      >
                        <div className="space-y-1">
                          <span className={`text-[10px] font-black tracking-widest uppercase block ${
                            isExpanded ? activeColor : "text-slate-400"
                          }`}>
                            {outcome.week}
                          </span>
                          <h3 className="font-sans font-bold text-base md:text-lg text-white leading-snug">
                            {outcome.title}
                          </h3>
                        </div>

                        <ChevronRight
                          size={18}
                          className={`text-slate-400 transition-transform duration-300 ${
                            isExpanded ? "transform rotate-90 text-brand-teal" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Body */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="p-5 md:p-6 pt-0 border-t border-white/5 space-y-5 bg-slate-950/20">
                              
                              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                                {outcome.description}
                              </p>

                              {/* Skills Tags */}
                              <div className="space-y-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                                  Skills Developed
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {outcome.skills.map((skill) => (
                                    <span
                                      key={skill}
                                      className="bg-white/5 text-slate-350 text-xs px-3 py-1 rounded-md border border-white/5 font-medium hover:bg-white/10 transition-colors"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
