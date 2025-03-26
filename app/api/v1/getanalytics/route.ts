import { connectToDatabase } from "@/lib/auth/connection";
import UserData from "@/model/UserSchema";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request, response: Response) {
  const {userId} = await auth();
  let id : string | null = userId;
  await connectToDatabase();
  if (id == null) {
    return new Response("User not authorized", {
      status: 400,
    });
  }

  try {
    const user = await UserData.findOne({
      clerkId: id,
    })

    const details = {
      totalScans: user?.scanHistory?.length,
      scanTime: user?.scanTime,
    }


    if(!user) {
      return new Response("User not found", {
        status: 404,
      });
    }
     


    return new Response(JSON.stringify(details), {
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
