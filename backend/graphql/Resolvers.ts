import UserSchema from "../model/UserSchema";
import Auth from "../middleware/Auth";
import getUser from "../controllers/getUser";
import createAccount from "../controllers/createAccount";

const resolvers = {
  getUser: async ({ token }: { token: string }) => {
    return getUser(token);
  },
  createAccount: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    return createAccount({ email, password });
  },
};

export default resolvers;
