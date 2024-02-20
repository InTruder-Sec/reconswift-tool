import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    require: true,
    type: String,
    unique: true,
  },
  password: {
    require: true,
    type: String,
  },
  scanHistory: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
export default User;
