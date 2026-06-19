import { Router } from "express";
import { z } from "zod";
import { createEnquiry, healthCheck } from "../controllers/enquiry";
import { validate } from "../middleware/validation";

const router = Router();

// Zod validation schema for enquiry
const enquirySchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: "Name is required" })
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must not exceed 50 characters"),
    email: z
      .string({ required_error: "Email is required" })
      .trim()
      .email("Please provide a valid email address"),
    phone: z
      .string({ required_error: "Phone number is required" })
      .trim()
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  }),
});

router.post("/enquiry", validate(enquirySchema), createEnquiry);
router.get("/health", healthCheck);

export default router;
