

export async function POST(req: Request) {
  
  // Get the body
  const payload = await req.json();

    console.log(payload.scanId);

    try {
        await fetch(`${process.env.BACKEND_ORIGIN}/api/v1/scanqueue?id=${payload.scanId}`)
        return new Response("Scan started", {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response(`Something went wrong! Error: ${error}`, {
            status: 500,
        });
    }
}
