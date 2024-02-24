import mongoose from "mongoose";

const scanSchema = new mongoose.Schema({
  scanId: {
    require: true,
    type: String,
  },
  url: {
    require: true,
    type: String,
  },
  scanStatus: {
    require: true,
    type: String,
  },
  scanType: {
    require: true,
    type: String,
  },
  scanDate: {
    require: true,
    type: Date,
  },
  userId: {
    require: true,
    type: mongoose.Schema.Types.ObjectId,
  },
  reportUrl: {
    type: String,
    default: "",
  },
});

const Scan = mongoose.models.Scan || mongoose.model("Scan", scanSchema);
export default Scan;
