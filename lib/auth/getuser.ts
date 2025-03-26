"use server";
import { currentUser } from "@clerk/nextjs/server";
import User from "@/model/UserSchema";
import { connectToDatabase, disconnectFromDatabase } from "./connection";

const getuser = async () => {
  const user = await currentUser();
  const mail = user?.emailAddresses[0].emailAddress;
  connectToDatabase();
  try {
    const userDetails = await User.findOne({ email: mail });
    return userDetails;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default getuser;
