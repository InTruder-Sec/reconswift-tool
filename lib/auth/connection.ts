import mongoose from "mongoose";

const connectToDatabase = () => {
  const mongodbUri = process.env.MONGODB_URI || "";
  mongoose
    .connect(mongodbUri)
    .then(() => {
      console.log("Connected to database");
      return true;
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
      return false;
    });
};

const disconnectFromDatabase = async () => {
  await mongoose.disconnect();
  console.log("Disconnected from database");
  return;
};

export { connectToDatabase, disconnectFromDatabase };
