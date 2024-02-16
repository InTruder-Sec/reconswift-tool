import { currentUser } from "@clerk/nextjs";

const getuser = async () => {
  const user = await currentUser();
  const mail = user?.emailAddresses[0].emailAddress;
  return mail;
};

export default getuser;
