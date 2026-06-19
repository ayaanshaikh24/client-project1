import dotenv from "dotenv";
// Load env vars first
dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to database
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("Critical server startup failure:", error);
  process.exit(1);
});
