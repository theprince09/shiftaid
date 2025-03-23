import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/shiftaid"; // Default to local DB if env variable is missing

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return; // Prevent multiple connections

    await mongoose.connect(MONGODB_URI, {
      dbName: "shiftaid", // Set your database name explicitly
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
