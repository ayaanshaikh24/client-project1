import { Schema, model, Document } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  workshopId: string;
  createdAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    workshopId: {
      type: String,
      default: "ai-robotics-2026",
      trim: true,
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: false },
    versionKey: false,
  }
);

// Add index on email and phone for queries if needed, but since it's just enquiries we can keep it basic.
// Data accessed together is stored together.

export const Enquiry = model<IEnquiry>("Enquiry", enquirySchema);
