"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Globe, IndianRupee, Users } from "lucide-react";

export default function WorkshopDetails() {
  const details = [
    {
      label: "Age Group",
      value: "8–14 Years",
      description: "Designed specifically for kids",
      icon: Users,
      borderClass: "border-l-4 border-brand-teal",
      glowClass: "hover:shadow-[0_0_20px_rgba(0,212,170,0.15)] hover:border-brand-teal/30",
      textClass: "text-brand-teal",
    },
    {
      label: "Duration",
      value: "4 Weeks",
      description: "Convenient weekly modules",
      icon: Clock,
      borderClass: "border-l-4 border-brand-purple",
      glowClass: "hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] hover:border-brand-purple/30",
      textClass: "text-brand-purple",
    },
    {
      label: "Mode",
      value: "Online",
      description: "Live-guided interactive sessions",
      icon: Globe,
      borderClass: "border-l-4 border-brand-indigo",
      glowClass: "hover:shadow-[0_0_20px_rgba(79,70,229,0.15)] hover:border-brand-indigo/30",
      textClass: "text-brand-indigo",
    },
    {
      label: "Workshop Fee",
      value: "₹2,999",
      description: "All inclusive, lifetime access",
      icon: IndianRupee,
      borderClass: "border-l-4 border-brand-amber",
      glowClass: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:border-brand-amber/30",
      textClass: "text-brand-amber",
    },
    {
      label: "Start Date",
      value: "15 July 2026",
      description: "Enrollment closes 12 July",
      icon: Calendar,
      borderClass: "border-l-4 border-pink-500",
      glowClass: "hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:border-pink-500/30",
      textClass: "text-pink-500",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-16 bg-slate-950 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="sr-only">Workshop Key Details</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {details.map((detail) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={detail.label}
                variants={cardVariants}
                className={`bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/5 relative overflow-hidden transition-all duration-350 hover:-translate-y-1 ${detail.borderClass} ${detail.glowClass} group focus-within:ring-2 focus-within:ring-brand-teal`}
              >
                {/* Large Ghost Icon Watermark */}
                <div className="absolute right-[-10px] bottom-[-10px] text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-350">
                  <IconComponent size={90} className="stroke-[1.2]" />
                </div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                      {detail.label}
                    </span>
                    
                    <span className="text-2xl font-extrabold text-white tracking-tight block">
                      {detail.value}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-xs text-slate-400 font-medium">
                      {detail.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
