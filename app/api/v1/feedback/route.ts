import Feedback from "@/model/Feedback";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, rating, feedback } = await request.json();
  const storeFeedback = await Feedback.create({ email, rating, feedback });
  return NextResponse.json({ message: "Feedback submitted" });
}
