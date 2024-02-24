import { connectToDatabase } from "@/lib/auth/connection";
import Scan from "@/model/UserScans";
import UserData from "@/model/UserSchema";
import { auth } from "@clerk/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request, response: Response) {
  const user = auth();
  const id = user.userId;
  await connectToDatabase();
  if (!id) {
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
      })
      .sort({ scanDate: body.sort })
      .limit(body.limit);
    if (!user) {
      return new Response("User not found", {
        status: 400,
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
