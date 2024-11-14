import mongoose from "mongoose";

const connectDB = async (connString: string) => {
  try {
    await mongoose.connect(connString);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
