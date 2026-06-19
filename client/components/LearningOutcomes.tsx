"use client";

import { motion } from "framer-motion";
import { Award, Code2, Cpu, Eye, Lightbulb } from "lucide-react";

export default function LearningOutcomes() {
  const outcomes = [
    {
      week: "Week 1",
      title: "AI Foundations & Logic",
      description: "Understand the core concepts of artificial intelligence and robotics. Learn computational logic through interactive visual games.",
      icon: Lightbulb,
      skills: ["Machine Learning Basics", "Algorithmic Thinking", "Pattern Recognition"],
      color: "border-brand-teal text-brand-teal bg-brand-teal/5",
      glowColor: "rgba(13, 148, 136, 0.4)",
    },
    {
      week: "Week 2",
      title: "Visual Robot Programming",
      description: "Dive into block-based coding structures. Learn to control robot sensors, coordinate motors, and program navigation algorithms.",
      icon: Code2,
      skills: ["Sequential Logic", "Looping & Conditions", "Sensor Integration"],
      color: "border-brand-indigo text-brand-indigo bg-brand-indigo/5",
      glowColor: "rgba(79, 70, 229, 0.4)",
    },
    {
      week: "Week 3",
      title: "Interactive AI Models",
      description: "Train your own machine learning models using text, image, and voice inputs. Connect these smart models to program your robots.",
      icon: Cpu,
      skills: ["Supervised Learning", "Data Collection & Labeling", "AI Decision Making"],
      color: "border-brand-teal text-brand-teal bg-brand-teal/5",
      glowColor: "rgba(13, 148, 136, 0.4)",
    },
    {
      week: "Week 4",
      title: "Capstone Smart Robot Project",
      description: "Apply your logic, programming, and AI model skills to build an autonomous robot project that solves a real-world task.",
      icon: Eye,
      skills: ["Systems Engineering", "Testing & Debugging", "Problem Solving"],
      color: "border-brand-indigo text-brand-indigo bg-brand-indigo/5",
      glowColor: "rgba(79, 70, 229, 0.4)",
    },
    {
      week: "Final outcome",
      title: "Showcase & Certification",
      description: "Present your robot project in a live virtual showcase. Graduate with an industry-recognized certificate of accomplishment.",
      icon: Award,
      skills: ["Project Presentation", "Design Pitching", "Robotics Certification"],
      color: "border-brand-amber text-brand-amber bg-brand-amber/5",
      glowColor: "rgba(245, 158, 11, 0.4)",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section id="syllabus" className="py-20 lg:py-28 bg-white dark:bg-slate-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-dark dark:text-white mb-4">
            Our Interactive Curriculum
          </h2>
          <p className="text-lg text-slate-muted dark:text-slate-400">
            A carefully structured 4-week path. Watch your child advance from foundational computational logic to training their first machine learning robot.
          </p>
        </div>

        {/* Vertical Circuit-Path Curriculum */}
        <div className="relative">
          {/* Background Circuit Line (The Pathway) */}
          <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-slate-200 dark:bg-slate-800 pointer-events-none rounded-full" />
          
          {/* Foreground glowing circuit path line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-brand-teal via-brand-indigo to-brand-amber pointer-events-none rounded-full shadow-[0_0_12px_rgba(20,184,166,0.5)]"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 md:space-y-16"
          >
            {outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={outcome.title}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-start relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Glowing Node in center (positioned over the line) */}
                  <div className="absolute left-[27px] md:left-1/2 top-10 w-6 h-6 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-25">
                    {/* Node Core */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 shadow-sm`}
                      style={{
                        backgroundColor: outcome.week.startsWith("Week 1") || outcome.week.startsWith("Week 3") 
                          ? "var(--color-brand-teal)" 
                          : outcome.week.startsWith("Week 2") || outcome.week.startsWith("Week 4")
                            ? "var(--color-brand-indigo)"
                            : "var(--color-brand-amber)"
                      }}
                    />
                    {/* Glowing outer ring */}
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-35"
                      style={{
                        backgroundColor: outcome.week.startsWith("Week 1") || outcome.week.startsWith("Week 3") 
                          ? "var(--color-brand-teal)" 
                          : outcome.week.startsWith("Week 2") || outcome.week.startsWith("Week 4")
                            ? "var(--color-brand-indigo)"
                            : "var(--color-brand-amber)"
                      }}
                    />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full md:w-[45%] pl-14 md:pl-0 md:px-6">
                    <div className="bg-slate-50 dark:bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:border-slate-350 dark:hover:border-slate-750 focus-within:ring-2 focus-within:ring-brand-teal">
                      
                      {/* Week/Step Badge */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border tracking-wider uppercase mb-4 ${outcome.color}`}>
                        <IconComponent size={13} />
                        <span>{outcome.week}</span>
                      </span>

                      {/* Heading */}
                      <h3 className="font-sans font-bold text-xl text-slate-dark dark:text-white mb-2 leading-tight">
                        {outcome.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-muted dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {outcome.description}
                      </p>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                        {outcome.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-white dark:bg-slate-900 text-slate-muted dark:text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-850 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on other side (desktop only) */}
                  <div className="hidden md:block md:w-[45%]" />

                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
