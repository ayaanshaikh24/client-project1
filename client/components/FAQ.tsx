"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "Are there any coding prerequisites for this workshop?",
      answer: "No prior coding or robotics experience is required! We start from the absolute basics. Our block-based logic curriculum is designed specifically to be intuitive and engaging for children ages 8–14.",
    },
    {
      question: "What equipment or hardware is needed to participate?",
      answer: "All you need is a computer (laptop or desktop, Windows/Mac/Chromebook) with a webcam, microphone, and a stable internet connection. All robotics and AI programming are done through our browser-based interactive simulators—no expensive physical kits are required.",
    },
    {
      question: "Is a course certificate provided upon completion?",
      answer: "Yes, absolutely! Every student who completes the weekly quizzes and submits their capstone project will receive a personalized digital Certificate of Completion in AI & Robotics, signed by our lead instructors.",
    },
    {
      question: "What is your refund policy if our plans change?",
      answer: "We offer a 100% money-back refund if you cancel your enrollment at least 48 hours before the workshop starts (on or before July 13, 2026). Once the workshop has started, we offer a pro-rated refund after the first week if your child is not fully satisfied.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/50 dark:border-slate-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-brand-indigo/10 text-brand-indigo mb-4">
            <HelpCircle size={24} className="stroke-[2.2]" />
          </div>
          <h2 className="font-sans font-extrabold text-3xl tracking-tight text-slate-dark dark:text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-muted dark:text-slate-400 font-medium">
            Everything you need to know about the summer workshop.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-350 dark:hover:border-slate-750"
              >
                <h3>
                  <button
                    id={headingId}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between text-left p-6 font-bold text-slate-dark dark:text-white hover:text-brand-teal dark:hover:text-brand-teal-glow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-inset"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-muted group-hover:text-brand-teal transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-brand-teal" : ""
                      }`}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-muted dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-850">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
