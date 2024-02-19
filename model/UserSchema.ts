import mongoose from "mongoose";

let User;

try {
  User = mongoose.model("User");
} catch {
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

  User = mongoose.model("User", userSchema);
}

export default User;
