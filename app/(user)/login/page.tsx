"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <SignIn afterSignInUrl="/dashboard/" />
    </div>
  );
}

export default Login;
