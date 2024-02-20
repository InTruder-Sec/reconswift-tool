import { currentUser } from "@clerk/nextjs";
import User from "@/model/UserSchema";
import { connectToDatabase, disconnectFromDatabase } from "./connection";

const getuser = async () => {
  const user = await currentUser();
  const mail = user?.emailAddresses[0].emailAddress;
  await connectToDatabase();
  const userDetails = await User.findOne({ mail }).populate("scanHistory");
  await disconnectFromDatabase();
  return userDetails?.scanHistory;
};

export default getuser;
