import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("✅ Already connected to MongoDB");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "university-club",
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};
