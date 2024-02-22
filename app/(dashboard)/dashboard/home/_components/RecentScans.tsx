"use client";
import getuserScans from "@/lib/scans/getUserScans";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";

function RecentScans() {
  const [isLoading, setisLoading] = useState(true);
  const [data, setdata] = useState([]);

  getuserScans().then((e) => {
    console.log(e);
  });

  return <div>RecentScans</div>;
}

export default RecentScans;
