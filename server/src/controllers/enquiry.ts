import { Request, Response, NextFunction } from "express";
import { Enquiry } from "../models/Enquiry";

export const createEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email, phone } = req.body;

    // Check if Enquiry already exists (optional, but good practice to allow multiple or not depending on context. Let's allow multiple or check if they already registered for the same workshop).
    const existing = await Enquiry.findOne({ email, phone });
    if (existing) {
      res.status(400).json({
        success: false,
        message: "You have already registered for this workshop.",
      });
      return;
    }

    const enquiry = new Enquiry({
      name,
      email,
      phone,
    });

    await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Registration successful! Welcome to the AI & Robotics Workshop.",
      data: {
        id: enquiry._id,
        name: enquiry.name,
        email: enquiry.email,
        phone: enquiry.phone,
        createdAt: enquiry.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const healthCheck = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "Server is healthy and running.",
    data: {
      uptime: process.uptime(),
      timestamp: new Date(),
    },
  });
};
