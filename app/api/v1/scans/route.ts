import { connectToDatabase } from "@/lib/auth/connection";
import Scan from "@/model/UserScans";
import UserData from "@/model/UserSchema";
import { auth } from "@clerk/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request, response: Response) {
  const {userId} : {userId: string | null} = auth();
  let id : string | null = userId;
  await connectToDatabase();
  if (id == null) {
    return new Response("User not authorized", {
      status: 400,
    });
  }

  const body = await request.json();
  try {
    const user = await UserData.findOne({
      clerkId: id,
    })
      .populate({
        path: "scanHistory",
        model: Scan,
        select: body.request,
        options: {sort: {scanDate: body.sort}}
      });
    if (!user) {
      return new Response(JSON.stringify([]), {
        status: 200,
      });
    }

    return new Response(JSON.stringify(user.scanHistory), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 400,
    });
  }
}
