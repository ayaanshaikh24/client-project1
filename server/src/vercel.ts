import app from "./app";
import { connectDB } from "./config/db";

// Serverless function wrapper for Express on Vercel
const serverlessHandler = async (req: any, res: any) => {
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection failure in serverless context:", error);
    return res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
  
  return app(req, res);
};

export default serverlessHandler;
