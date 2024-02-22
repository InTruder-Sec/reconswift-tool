import { connectToDatabase } from "@/lib/auth/connection";
import UserData from "@/model/UserSchema";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request, response: Response) {
  console.log(request);
  // await connectToDatabase();
  // const userDetails = await UserData.findOne({ email: mail }).populate(
  //   "scanHistory"
  // );
  // return userDetails?.scanHistory;
  // return new Response("Reconswift API");
}
