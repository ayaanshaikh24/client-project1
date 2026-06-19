"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Bot, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
});

type FormData = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${apiUrl}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 201) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Registration successful!",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please check your details.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Unable to connect to the server. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enroll" className="py-20 lg:py-28 bg-white dark:bg-slate-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Form Left Info Panel */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-dark dark:text-white">
                Reserve a Slot for Your Child
              </h2>
              <p className="text-slate-muted dark:text-slate-400 font-medium">
                Complete the registration form to lock in the special summer pricing of ₹2,999. Our team will contact you within 24 hours to schedule batch timings.
              </p>
            </div>

            {/* Micro-Features */}
            <div className="space-y-4 hidden sm:block">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-teal/10 text-brand-teal mt-0.5">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-dark dark:text-white text-sm">Flexible Timings</h4>
                  <p className="text-slate-muted dark:text-slate-400 text-xs mt-0.5">Multiple morning and evening batches starting weekly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-indigo/10 text-brand-indigo mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-dark dark:text-white text-sm">Interactive Batches</h4>
                  <p className="text-slate-muted dark:text-slate-400 text-xs mt-0.5">Small 1:6 instructor-student ratio for personal attention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card Panel */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-slate-950 p-6 sm:p-10 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 shadow-md">
              <h3 className="text-xl font-bold text-slate-dark dark:text-white mb-6">
                Registration Form
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-muted dark:text-slate-400 mb-1.5">
                    Child's Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-dark dark:text-white text-sm transition-colors focus:outline-none ${
                      errors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-250 dark:border-slate-850 focus:border-brand-teal"
                    }`}
                    placeholder="Enter full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-muted dark:text-slate-400 mb-1.5">
                    Parent's Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-dark dark:text-white text-sm transition-colors focus:outline-none ${
                      errors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-slate-250 dark:border-slate-850 focus:border-brand-teal"
                    }`}
                    placeholder="example@email.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-muted dark:text-slate-400 mb-1.5">
                    10-Digit Contact Phone Number
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-muted font-bold tracking-tight select-none">
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      {...register("phone")}
                      className={`w-full pl-14 pr-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-slate-dark dark:text-white text-sm tracking-wide transition-colors focus:outline-none ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : "border-slate-250 dark:border-slate-850 focus:border-brand-teal"
                      }`}
                      placeholder="9876543210"
                      maxLength={10}
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 font-semibold mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.phone.message}</span>
                    </p>
                  )}
                </div>

                {/* Submissions Alerts */}
                <AnimatePresence mode="wait">
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-xl text-sm font-semibold flex items-start gap-2.5 ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                          : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                      )}
                      <span>{submitStatus.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-white bg-brand-teal hover:bg-brand-teal/90 disabled:opacity-55 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-brand-teal/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <span>Register for Summer Workshop</span>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
