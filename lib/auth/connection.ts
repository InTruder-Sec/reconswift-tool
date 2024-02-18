import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongodbUri = process.env.MONGODB_URI || "";
  await mongoose
    .connect(mongodbUri)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Error connecting to database", err);
    });
};

const disconnectFromDatabase = async () => {
  await mongoose.disconnect();
};

export { connectToDatabase, disconnectFromDatabase };
