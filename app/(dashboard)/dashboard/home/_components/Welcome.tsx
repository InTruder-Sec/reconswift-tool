"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";


function Welcome() {
  const {user} = useUser();
  return (
    <>
      <div className="text-lg font-semibold">~(Hello@{user?.firstName})</div>
    </>
  );
}

export default Welcome;
