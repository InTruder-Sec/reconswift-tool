import { SignUp } from "@clerk/nextjs";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <SignUp afterSignInUrl="/dashboard" />
    </div>
  );
}

export default page;
