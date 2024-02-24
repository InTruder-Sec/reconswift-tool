import { currentUser, useUser } from "@clerk/nextjs";
import User from "@/model/UserSchema";
import { connectToDatabase } from "../auth/connection";

const getuserScans = async () => {
  const user = useUser();

  return {};
};

export default getuserScans;
