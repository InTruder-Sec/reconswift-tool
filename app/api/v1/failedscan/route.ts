import { connectToDatabase } from "@/lib/auth/connection";
import Scan from "@/model/UserScans";
import UserData from "@/model/UserSchema";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(req: Request, response: Response) {
  const user = await auth();
  const id = user.userId;
  await connectToDatabase();
  if (!id) {
    return new Response("User not authorized", {
      status: 400,
    });
  }
  const userDetails = await UserData.findOne({ clerkId: id });
  const body = await req.json();
  console.log(body, "Request Body");

  try {
  Scan.updateOne(
    {scanId: body.scanId}, 
    {scanStatus: "Failed"}
    ).then((res) => {
        const responseText = {
            message: "Scan added to queue",
        };
        
        return new Response(JSON.stringify(responseText), {
        status: 200,
        });
    })
    } catch(err) {
        const responseText = {
            message: "Something went wrong",
        };
        return new Response(JSON.stringify(responseText), {
            status: 200,
        })
    }
    const responseText = {
        message: "Something went wrong",
    };
    return new Response(JSON.stringify(responseText), {
        status: 200,
    })

}
