PROJECT BRIEF: AI & Robotics Summer Workshop — Landing Page + Backend
Build a production-quality, portfolio-worthy full-stack web application. Treat this as if it will be reviewed by a senior engineer for a hiring decision — code quality, architecture, and polish all matter as much as functionality.
Tech Stack
Frontend: React.js (Vite) + TypeScript + Tailwind CSS
Backend: Express.js + TypeScript
Database: MongoDB (Mongoose) — implement it, don't skip it
Form handling/validation: React Hook Form + Zod
Icons: lucide-react
Deployment-ready for Vercel (frontend) and Render/Railway (backend)
Project Structure
Set up a clean monorepo: /client (React app) and /server (Express API), each with its own package.json, proper folder structure (components/, hooks/, types/, utils/ on frontend; routes/, controllers/, models/, middleware/ on backend), and a root README.
Workshop Content
Title: AI & Robotics Summer Workshop
Age Group: 8–14 Years
Duration: 4 Weeks
Mode: Online
Fee: ₹2,999
Start Date: 15 July 2026
Frontend Requirements
Hero Section — workshop title, compelling short description/tagline, prominent "Enroll Now" CTA button that smooth-scrolls to the registration form. Include a subtle hero illustration/graphic (AI/robotics themed, can be an SVG or icon composition).
Workshop Details Section — display Age Group, Duration, Mode, Fee, and Start Date as clean info cards/badges with icons.
Learning Outcomes — minimum 5 well-written points (e.g., "Build and program a simple robot using block-based AI logic", "Understand the basics of machine learning through interactive games") displayed as a checklist or icon grid.
FAQ Section — minimum 3 thoughtful FAQs (e.g., prerequisites, what's included, refund policy, certificate provided) as an accessible accordion component.
Registration Form — Name, Email, Phone Number fields with:
Real-time client-side validation (Zod schema): required fields, valid email format, valid phone format (10 digits)
Loading state on submit (disabled button + spinner)
Success and error states with clear user feedback (toast or inline message)
Submits to the backend /api/enquiry endpoint
Design quality
Fully responsive (mobile-first: 375px, tablet 768px, desktop 1280px+)
Cohesive color palette and typography (pick a real design direction — e.g., playful-but-credible edtech aesthetic, not generic Bootstrap-blue)
Smooth micro-interactions: hover states, button transitions, scroll animations (Framer Motion optional but a strong bonus)
Proper semantic HTML and accessibility (ARIA labels, keyboard navigation, sufficient color contrast)
Add a sticky/minimal header with logo placeholder and nav
Backend Requirements
POST /api/enquiry endpoint that:
Accepts { name, email, phone } in the request body
Validates all fields server-side too (never trust client validation alone) — use Zod or express-validator
Returns proper HTTP status codes (201 success, 400 validation error, 500 server error) with consistent JSON response shape: { success: boolean, message: string, data?: object, errors?: object }
Saves the enquiry to MongoDB with a Mongoose schema (name, email, phone, workshopId, createdAt timestamp)
Includes basic rate limiting and input sanitization to prevent abuse
Has CORS configured properly for the frontend origin
Add a GET /api/health endpoint for uptime checks.
Centralized error-handling middleware — don't scatter try/catch logic inconsistently.
Environment variables via .env (MongoDB URI, PORT, CORS origin) with a .env.example file included.
Code Quality Standards
Strict TypeScript on both frontend and backend (no any types unless truly unavoidable)
ESLint + Prettier configured
Reusable, well-named components (no 300-line monolith components)
Meaningful commit history — at least 8–10 logical commits (e.g., "chore: project setup", "feat: hero section", "feat: registration form with validation", "feat: enquiry API endpoint", "feat: mongodb integration", "style: responsive polish", "docs: README") — do NOT do one giant initial commit
A clean, professional README with: project overview, tech stack, setup instructions, screenshots placeholder, API documentation, and a "future improvements" section
Deliverables
Fully working local dev setup (npm run dev for both client and server)
Deployment config ready (vercel.json for frontend, instructions for backend host)
A short 100–150 word note (I'll write this myself after reviewing the final build) on approach and future improveme
[Logo]   Missions   My Badges   Profile          [avatar]
──────────────────────────────────────────────────────
Mission 03: Build Your First Robot
●━━●━━●━━○━━○        (3 of 5 lessons complete)
──────────────────────────────────────────────────────
[Lesson card grid — each card connects to the next
via a thin circuit-line, reinforcing the path metaphor]
Apply this circuit-path treatment consistently across:
- Dashboard (overall course progress)
- Individual course pages (lesson-by-lesson progress)
- Certificate/completion page (final "circuit complete" moment)

## Signature Element
The glowing circuit-path progress indicator. This is the one visually distinctive, memorable element — used everywhere progress is shown, never replaced with a plain progress bar.

## Motion
- One orchestrated page-load moment: circuit path lights up sequentially on dashboard load
- Subtle hover states on lesson cards (slight lift + glow on the connecting node)
- No excessive confetti/sparkle animations — keep it calm and uncluttered despite the young audience
- Respect `prefers-reduced-motion`

## Restraint Rules
- Spend visual boldness ONLY on the circuit-path signature element
- Everything else (typography, spacing, cards) stays quiet and disciplined
- No gradients beyond a single subtle one (if any) on the hero
- Rounded corners: moderate (8–12px), not pill-shaped everywhere — keeps it credible, not babyish

## Copy/Voice Guidelines
- Active voice, plain verbs: "Start Lesson," not "Begin Module Initialization"
- Name things by what the user controls: "My Missions," not "Dashboard Modules"
- Empty states are invitations to act: "No missions started yet — pick your first one below," not a blank screen
- Errors explain what happened and how to fix it, no apology filler

## Accessibility Floor (non-negotiable)
- Fully responsive: 375px → 768px → 1280px+
- Visible keyboard focus states on all interactive elements
- Color contrast meets WCAG AA minimum, especially text on `--bg-cream`
- All circuit-path progress indicators have a text-equivalent (e.g., "3 of 5 lessons complete") for screen readers