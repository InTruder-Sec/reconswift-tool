import {
  connectToDatabase,
  disconnectFromDatabase,
} from "@/lib/auth/connection";
import User from "@/model/UserSchema";
import getuser from "@/lib/auth/getuser";

const resolvers = {
  Query: {
    Users: async (token: string) => {
      // const mail = await getuser(token);
      // await connectToDatabase();
      // const data = await User.find({});
      // console.log(data);
      // await disconnectFromDatabase();
      // return data;
      return {
        id: 23,
      };
    },
  },
  Mutation: {
    createUser: () => {
      return "new user created";
    },
  },
};

export { resolvers };
