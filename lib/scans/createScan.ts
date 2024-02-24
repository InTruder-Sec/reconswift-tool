import Scan from "@/model/UserScans";
import User from "@/model/UserSchema";
import getuser from "../auth/getuser";

const createScan = async (targetUri: string, type: string) => {
  let user: any;
  try {
    user = await getuser();
  } catch (error) {
    console.error("Error:", error);
    return "User not authenticated!";
  }

  console.log(type);

  try {
    const newId = "RSID" + Math.random().toString(36).substring(7);
    const scan = await Scan.create({
      scanId: newId,
      url: targetUri,
      scanStatus: "Pending",
      scanType: type,
      scanDate: new Date(),
      userId: user._id,
    });

    const userScans = await User.findOne({ _id: user._id });
    userScans?.scanHistory.push(scan);
    await userScans?.save();
    return "Scan created!";
  } catch (error) {
    console.error("Error:", error);
    return "Error creating scan!";
  }
};

export default createScan;
