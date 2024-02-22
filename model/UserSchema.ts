import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    require: true,
    type: String,
    unique: true,
  },
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  profile_picture: {
    type: String,
    default: "",
  },
  scanHistory: {
    type: [String],
    default: [],
  },
});

const UserData = mongoose.models?.User || mongoose.model("User", userSchema);

export default UserData;
