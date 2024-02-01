import mongoose from "mongoose";

const scanSchema = new mongoose.Schema({
  url: {
    require: true,
    type: String,
  },
  scanStatus: {
    require: true,
    type: String,
  },
  scanDate: {
    require: true,
    type: Date,
  },
});

export default mongoose.model("Scan", scanSchema);
