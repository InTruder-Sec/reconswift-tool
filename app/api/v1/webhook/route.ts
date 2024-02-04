import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);

  return new Response("Reconswift API");
}
