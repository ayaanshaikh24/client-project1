import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkshopDetails from "../components/WorkshopDetails";
import LearningOutcomes from "../components/LearningOutcomes";
import FAQ from "../components/FAQ";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cream text-slate-dark dark:bg-slate-dark dark:text-slate-200">
      {/* Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-brand-teal focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Key Workshop Details Section */}
        <WorkshopDetails />

        {/* Learning Outcomes & Custom Circuit Progress Section */}
        <LearningOutcomes />

        {/* FAQ Section */}
        <FAQ />

        {/* Registration Form Section */}
        <RegistrationForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-slate-muted dark:text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} RoboAI Summer Workshop. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-muted dark:text-slate-400 font-medium">
            <a href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
