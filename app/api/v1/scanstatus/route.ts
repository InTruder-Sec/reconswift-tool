import { connectToDatabase } from "@/lib/auth/connection";
import Scan from "@/model/UserScans";
import UserData from "@/model/UserSchema";
import { auth } from "@clerk/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function PUT(req: Request, response: Response) {
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

  // take status from PUT body and update the scan status
  try {
    const scan = await Scan.findOneAndUpdate(
      { _id: body.id },
      { scanStatus: body.status }
    );
    scan.then((data: any) => {
      if (data) {
        return new Response("", {
          statusText: "Scan status updated",
          status: 200,
        });
      } else {
        return new Response("", {
          statusText: "Scan not found",
          status: 400,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 400,
    });
  }
}
