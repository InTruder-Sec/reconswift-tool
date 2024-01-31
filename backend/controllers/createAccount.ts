import { Secret } from "jsonwebtoken";
import UserSchema from "../model/UserSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

type userType = {
  email: string;
  password: string;
};

const createAccount = async ({ email, password }: userType) => {
  try {
    const user = await UserSchema.findOne({ email });
    if (user) {
      return {
        status: 400,
        errorMessage: "User already exists",
      };
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser: any = await UserSchema.create({
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      process.env.JWT_SECRET as Secret,
      { expiresIn: "24h" }
    );
    return {
      data: {
        email: newUser.email,
        _id: newUser._id,
        scans: [],
        token,
      },
      error: {
        status: 200,
        message: "Success",
      },
    };
  } catch (err: any) {
    return {
      data: {
        _id: "",
        email: "",
        scans: [],
      },
      error: {
        status: 500,
        message: "Internal Server Error",
      },
    };
  }
};

export default createAccount;
