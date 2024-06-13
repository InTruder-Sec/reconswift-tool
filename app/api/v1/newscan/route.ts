import { connectToDatabase } from "@/lib/auth/connection";
import Scan from "@/model/UserScans";
import UserData from "@/model/UserSchema";
import { auth } from "@clerk/nextjs";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(req: Request, response: Response) {
  const user = auth();
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
    const newId = "RSID-" + Math.random().toString(36).substring(7);
    const scan = await Scan.create({
      scanId: newId,
      url: body.url,
      scanStatus: "Pending",
      scanType: body.scanType,
      scanDate: new Date(),
      userId: userDetails?._id,
    }).catch((error) => {
      console.log(error);
      return new Response("", {
        statusText: "Error creating scan!",
        status: 400,
      });
    });

    // Update user scan history array
    await UserData.updateOne(
      { _id: userDetails?._id },
      { $push: { scanHistory: scan._id } }
    );
    const responseText = {
      message: "Scan added to queue",
      data: scan,
    };
    return new Response("", {
      statusText: JSON.stringify(responseText),
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", {
      status: 400,
    });
  }
}
