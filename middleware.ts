import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/login", "/signup", "/api", "/api/(.*)"],
  afterAuth(auth, req, evt) {
    if (auth.sessionId) {
      return NextResponse.redirect("/dashboard");
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
