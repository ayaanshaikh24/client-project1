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
      color: "text-brand-teal bg-brand-teal/10 dark:bg-brand-teal/20",
    },
    {
      label: "Duration",
      value: "4 Weeks",
      description: "Convenient weekly modules",
      icon: Clock,
      color: "text-brand-indigo bg-brand-indigo/10 dark:bg-brand-indigo/20",
    },
    {
      label: "Mode",
      value: "Online",
      description: "Live-guided interactive sessions",
      icon: Globe,
      color: "text-brand-teal bg-brand-teal/10 dark:bg-brand-teal/20",
    },
    {
      label: "Workshop Fee",
      value: "₹2,999",
      description: "All inclusive, lifetime access",
      icon: IndianRupee,
      color: "text-brand-amber bg-brand-amber/10 dark:bg-brand-amber/20",
    },
    {
      label: "Start Date",
      value: "15 July 2026",
      description: "Enrollment closes 12 July",
      icon: Calendar,
      color: "text-brand-indigo bg-brand-indigo/10 dark:bg-brand-indigo/20",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-12 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Screen Reader Header */}
        <h2 className="sr-only">Workshop Key Details</h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {details.map((detail, index) => {
            const IconComponent = detail.icon;
            return (
              <motion.div
                key={detail.label}
                variants={cardVariants}
                className="bg-white dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col items-center text-center group focus-within:ring-2 focus-within:ring-brand-teal"
              >
                {/* Icon Container */}
                <div className={`p-3.5 rounded-xl ${detail.color} group-hover:scale-110 transition-transform duration-200 mb-4`}>
                  <IconComponent size={24} className="stroke-[2.2]" />
                </div>
                
                {/* Text Section */}
                <span className="text-xs font-semibold text-slate-muted uppercase tracking-wider mb-1">
                  {detail.label}
                </span>
                <span className="text-xl font-bold text-slate-dark dark:text-white mb-1.5 tracking-tight">
                  {detail.value}
                </span>
                <span className="text-xs text-slate-muted dark:text-slate-400 font-medium">
                  {detail.description}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
