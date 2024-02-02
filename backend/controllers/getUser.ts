import Auth from "../middleware/Auth";
import UserSchema from "../model/UserSchema";

const getUser = async (token: string) => {
  const verify = await Auth(token);
  if (verify.status === 200) {
    const user: any = await UserSchema.findById(verify.data);
    return {
      data: {
        _id: user?._id,
        email: user?.email,
        scans: user?.scans,
      },
      error: {
        status: 200,
        message: "Success",
      },
    };
  }
  return {
    data: {
      _id: "",
      email: "",
      scans: [],
    },
    error: {
      status: 401,
      message: "Unauthorized! Token expired or invalid.",
    },
  };
};

export default getUser;
