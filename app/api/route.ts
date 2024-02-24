import { connectToDatabase } from "@/lib/auth/connection";
import UserData from "@/model/UserSchema";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request, response: Response) {
  return new Response("Reconswift API");
}
