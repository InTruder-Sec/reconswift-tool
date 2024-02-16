import exp from "constants";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    require: true,
    type: String || undefined,
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
    type: String || null || undefined,
    require: true,
  },
  scanHistory: {
    type: [String],
    default: [],
  },
});

// export default mongoose.model("User", UserSchema);
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
