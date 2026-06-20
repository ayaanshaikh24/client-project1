import mongoose from "mongoose";

let cachedDbConnectionPromise: Promise<typeof mongoose> | null = null;

export const connectDB = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  if (!cachedDbConnectionPromise) {
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/workshop";

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connection established successfully.");
    });

    mongoose.connection.on("error", (err) => {
      console.error(`MongoDB connection error: ${err}`);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB connection disconnected.");
    });

    cachedDbConnectionPromise = mongoose.connect(mongoURI);
  }

  try {
    await cachedDbConnectionPromise;
  } catch (error) {
    cachedDbConnectionPromise = null; // Reset cache on failure so future calls retry
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};
