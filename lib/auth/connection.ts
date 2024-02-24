"use server";
import mongoose from "mongoose";

const connectToDatabase = async () => {
  let isConnected = false;
  const mongodbUri = process.env.MONGODB_URI || "";

  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  if (!mongodbUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  try {
    await mongoose.connect(mongodbUri);
    isConnected = true;
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

const disconnectFromDatabase = async () => {
  await mongoose.disconnect();
  console.log("Disconnected from database");
  return;
};

export { connectToDatabase, disconnectFromDatabase };
