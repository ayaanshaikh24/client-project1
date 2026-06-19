import { Request, Response, NextFunction } from "express";

interface AppError extends Error {
  statusCode?: number;
  errors?: Record<string, string>;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error("Centralized Error:", err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    ...(err.errors ? { errors: err.errors } : {}),
    // Include stack trace in development mode only
    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
  });
};
