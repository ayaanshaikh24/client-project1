"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Bot, CheckCircle2, AlertCircle, Loader2, ChevronDown, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// Zod Validation Schema
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

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

const countries: Country[] = [
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
];

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showModal, setShowModal] = useState(false);

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
    setSubmitError("");

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${apiUrl}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          // If the backend accepts phone with dialCode, we append it, but since backend has `^\d{10}$` regex, 
          // we submit the 10 digits directly.
        }),
      });

      const result = await response.json();

      if (response.status === 201) {
        setIsSuccess(true);
        setIsSubmitting(false);

        // Confetti Burst Trigger
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#00D4AA", "#7C3AED", "#F59E0B", "#4F46E5"],
        });

        // Trigger double burst
        setTimeout(() => {
          confetti({
            particleCount: 80,
            spread: 50,
            origin: { y: 0.6 },
          });
        }, 200);

        setShowModal(true);
        reset();
      } else {
        setSubmitError(result.message || "Registration failed. Please verify details.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("Unable to connect to the server. Please verify your connection.");
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsSuccess(false);
  };

  return (
    <section id="enroll" className="py-20 lg:py-28 bg-slate-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Form Left Panel */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
                Secure Your <br />
                <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
                  Workshop Seat
                </span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Complete the registration form to lock in the special summer pricing of ₹2,999. Our team will contact you within 24 hours to schedule batch timings.
              </p>
            </div>

            <div className="space-y-4 hidden sm:block">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 rounded-lg bg-brand-teal/10 text-brand-teal mt-0.5">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Flexible Timings</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Multiple morning and evening batches starting weekly</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="p-2.5 rounded-lg bg-brand-purple/10 text-brand-purple-glow mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Interactive Batches</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Small 1:6 instructor-student ratio for personal attention</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Form Card Panel */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/40 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-white mb-8 font-display">
                Registration details
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Child Name Field (Floating Label) */}
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    {...register("name")}
                    placeholder=" "
                    className={`peer w-full px-4 pt-6 pb-2 rounded-xl border bg-slate-950 text-white text-sm transition-all focus:outline-none ${
                      errors.name
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/5 focus:border-brand-teal/50"
                    }`}
                    disabled={isSubmitting || isSuccess}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-all duration-200 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm 
                    peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-brand-teal 
                    peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    Child's Full Name
                  </label>
                  {errors.name && (
                    <p className="text-xs text-red-400 font-medium mt-2 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.name.message}</span>
                    </p>
                  )}
                </div>

                {/* Parent Email Field (Floating Label) */}
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    placeholder=" "
                    className={`peer w-full px-4 pt-6 pb-2 rounded-xl border bg-slate-950 text-white text-sm transition-all focus:outline-none ${
                      errors.email
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/5 focus:border-brand-teal/50"
                    }`}
                    disabled={isSubmitting || isSuccess}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-all duration-200 
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm 
                    peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-brand-teal 
                    peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    Parent's Email Address
                  </label>
                  {errors.email && (
                    <p className="text-xs text-red-400 font-medium mt-2 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.email.message}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field (Floating Label + Custom Country Flags Selector) */}
                <div className="relative">
                  <div className="flex gap-2.5">
                    {/* Flags Dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => !isSubmitting && !isSuccess && setIsDropdownOpen(!isDropdownOpen)}
                        className="h-[52px] px-3.5 rounded-xl border border-white/5 bg-slate-950 text-white flex items-center gap-1.5 hover:border-white/15 focus:outline-none"
                      >
                        <span className="text-lg leading-none">{selectedCountry.flag}</span>
                        <span className="text-xs font-bold text-slate-400">{selectedCountry.dialCode}</span>
                        <ChevronDown size={12} className="text-slate-400" />
                      </button>

                      {/* Dropdown Options */}
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute z-50 left-0 mt-2 w-48 rounded-xl border border-white/5 bg-slate-950 shadow-xl overflow-hidden"
                          >
                            {countries.map((c) => (
                              <button
                                key={c.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full text-left px-4 py-3 text-xs font-medium text-slate-350 hover:bg-white/5 hover:text-white flex items-center gap-2.5 transition-colors"
                              >
                                <span className="text-lg leading-none">{c.flag}</span>
                                <span>{c.name} ({c.dialCode})</span>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Input Box */}
                    <div className="relative flex-grow">
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        placeholder=" "
                        maxLength={10}
                        className={`peer w-full px-4 pt-6 pb-2 rounded-xl border bg-slate-950 text-white text-sm transition-all focus:outline-none ${
                          errors.phone
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-white/5 focus:border-brand-teal/50"
                        }`}
                        disabled={isSubmitting || isSuccess}
                      />
                      <label
                        htmlFor="phone"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-all duration-200 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm 
                        peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-brand-teal 
                        peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                      >
                        10-Digit Contact Phone Number
                      </label>
                    </div>
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 font-medium mt-2 flex items-center gap-1">
                      <AlertCircle size={12} />
                      <span>{errors.phone.message}</span>
                    </p>
                  )}
                </div>

                {/* Error Banner */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/15 flex items-start gap-2.5"
                  >
                    <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{submitError}</span>
                  </motion.div>
                )}

                {/* Redesigned Submit Button with transitions */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`shimmer-btn w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold transition-all duration-200 shadow-md ${
                    isSuccess
                      ? "bg-green-500 text-white shadow-green-500/15"
                      : "bg-brand-teal text-slate-dark hover:shadow-[0_0_20px_rgba(0,212,170,0.25)]"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Verifying Seat Reservation...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={18} />
                      <span>Seat Reserved Successfully!</span>
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

      {/* SUCCESS CONFETTI MODAL OVERLAY */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-slate-900 border border-white/5 rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl text-center space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Close success details"
              >
                <X size={18} />
              </button>

              {/* Pulsing check icon */}
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.15)] animate-pulse-glow">
                <Sparkles size={28} />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-white">
                  Seat Locked In!
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Your summer slot has been successfully registered. We have sent a confirmation email to parent details.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/40 border border-white/5 text-left text-xs space-y-2 text-slate-350">
                <div className="flex justify-between">
                  <span className="font-semibold">Workshop:</span>
                  <span>AI & Robotics Summer</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Start Date:</span>
                  <span className="text-brand-teal">15 July 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Promo Fee:</span>
                  <span className="text-brand-amber font-bold">₹2,999</span>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="w-full py-3.5 rounded-xl font-bold bg-white text-slate-dark hover:bg-slate-100 transition-colors shadow-lg"
              >
                Awesome, Got it!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
