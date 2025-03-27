import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  email: String,
  rating: Number,
  feedback: String,
});

const Feedback =
  mongoose.models.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
