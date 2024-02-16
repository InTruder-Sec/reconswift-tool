import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@/lib/auth/connection";
import User from "@/model/UserSchema";
import getuser from "@/lib/auth/getuser";

const resolvers = {
  Query: {
    Users: async () => {
      const mail = await getuser();
      console.log(mail);
      await connectToDatabase();
      const data = await User.find({});
      console.log(data);
      await disconnectFromDatabase();
      return data;
    },
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
  },
};

export { resolvers };
