# AI & Robotics Summer Workshop — Landing Page + Backend

A production-quality, portfolio-worthy full-stack web application for the **AI & Robotics Summer Workshop**. Built as a clean monorepo, it features a responsive, edtech-themed frontend landing page with real-time validations, custom animations, and a secure Express.js + Mongoose backend.

## 🛠️ Tech Stack

### Frontend (Client)
- **Framework**: Next.js (App Router, React 19)
- **Styling**: Tailwind CSS v4 (with custom `@theme` styling variables)
- **Animations**: Framer Motion (for smooth micro-interactions)
- **Form Handling**: React Hook Form + Zod (for client-side schema validation)
- **Icons**: Lucide React
- **Deployment**: Configured for Vercel

### Backend (Server)
- **Runtime & Language**: Node.js + TypeScript
- **Framework**: Express.js
- **Database ORM**: Mongoose (MongoDB)
- **Validation**: Zod (server-side payload parsing)
- **Security & Rate Limiting**: CORS + Express Rate Limit
- **Development Utility**: ts-node-dev

---

## 📁 Project Structure

```txt
project/
├── client/                 # Next.js React Application
│   ├── app/                # App router (pages, layout, globals.css)
│   ├── components/         # Reusable presentation & form components
│   ├── public/             # Static SVGs, favicon, assets
│   ├── package.json        # Frontend configuration and dependencies
│   ├── tsconfig.json       # Frontend TypeScript configurations
│   └── vercel.json         # Vercel deployment specifications
├── server/                 # Express API Backend
│   ├── src/
│   │   ├── config/         # DB connection management
│   │   ├── controllers/    # Endpoint controller handlers
│   │   ├── middleware/     # Rate limiter, Zod validations, centralized error handlers
│   │   ├── models/         # Mongoose schemas & models (Enquiry)
│   │   ├── routes/         # Router declarations
│   │   ├── app.ts          # Express app configuration
│   │   └── index.ts        # Server listener entry point
│   ├── package.json        # Backend configuration and dependencies
│   └── tsconfig.json       # Backend TypeScript configurations
├── .gitignore              # Monorepo level git ignores
├── CLAUDE.md               # Coding rules and agent guidelines
└── README.md               # Main repository documentation
```

---

## ⚡ Local Development Setup

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v18.x or later)
- **npm** (v9.x or later)
- **MongoDB** (running locally or a remote connection string from Atlas)

### Setup Configurations

1. **Clone and Install dependencies**:
   ```bash
   # From the repository root, install dependencies for the backend
   cd server
   npm install

   # Go to client directory and install dependencies for the frontend
   cd ../client
   npm install
   ```

2. **Configure Environment Variables**:
   In the `/server` directory, create a `.env` file (you can copy `.env.example` as a template):
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/workshop
   CORS_ORIGIN=http://localhost:3000
   ```

3. **Run the Development Servers**:
   Open two terminal tabs to run both projects concurrently:

   **Tab 1 (Express Backend)**:
   ```bash
   cd server
   npm run dev
   # Server will start on http://localhost:5000
   ```

   **Tab 2 (Next.js Frontend)**:
   ```bash
   cd client
   npm run dev
   # Client will start on http://localhost:3000
   ```

---

## 🔌 API Endpoints Documentation

All backend endpoints are prefixed with `/api`.

### 1. Health Uptime Check
- **Endpoint**: `GET /api/health`
- **Description**: Verifies API uptime status.
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Server is healthy and running.",
    "data": {
      "uptime": 12.45,
      "timestamp": "2026-06-19T17:15:00.000Z"
    }
  }
  ```

### 2. Submit Workshop Enquiry
- **Endpoint**: `POST /api/enquiry`
- **Description**: Submits a student registration request. Includes input validation and rate limiting (max 10 submissions per 15 minutes per IP).
- **Request Body (JSON)**:
  ```json
  {
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "phone": "9876543210"
  }
  ```
- **Validation Errors (400 Bad Request)**:
  ```json
  {
    "success": false,
    "message": "Validation failed",
    "errors": {
      "email": "Please provide a valid email address",
      "phone": "Phone number must be exactly 10 digits"
    }
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "Registration successful! Welcome to the AI & Robotics Workshop.",
    "data": {
      "id": "60a8b9c1d2e3f4a5b6c7d8e9",
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "phone": "9876543210",
      "createdAt": "2026-06-19T17:15:05.123Z"
    }
  }
  ```

---

## 🔮 Future Improvements

1. **SMS Notifications**: Integrate Twilio API to automatically send WhatsApp/SMS confirmations to parents after form submission.
2. **Admin Dashboard**: Add a secured admin panel (`/admin`) for teachers to view, sort, and export registrations into CSV formats.
3. **Razorpay Integration**: Connect a secure payment gateway to allow parents to pay the ₹2,999 fee directly during registration.
4. **Interactive Bot Simulator**: Embed a simple 2D canvas robot-grid playground on the hero page for children to test block commands immediately in the browser.
