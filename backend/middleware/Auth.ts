import jwt from "jsonwebtoken";
import { Secret } from "jsonwebtoken";

const Auth = async (token: string) => {
  try {
    if (!token) {
      return {
        status: 401,
        errorMessage: "Unauthorized",
      };
    }

    const verified: any = jwt.verify(token, process.env.JWT_SECRET as Secret);

    if (!verified) {
      return {
        status: 401,
        errorMessage: "Unauthorized",
      };
    }

    return {
      status: 200,
      data: verified._id,
    };
  } catch (err: any) {
    return {
      status: 500,
      errorMessage: "Internal Server Error",
    };
  }
};

export default Auth;
