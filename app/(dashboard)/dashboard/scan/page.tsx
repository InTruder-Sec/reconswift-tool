"use client"

import React, { useState } from "react";
import SectionHead from "../_components/SectionHead";
import PendingScans from "./_components/PendingScans";
import { ProfileForm } from "./_components/Form";
import action from "@/app/actions";



function page() {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  return (
    <div className="w-screen block sm:w-11/12 md:11/12 h-5/6 p-2 pt-6  sm:pl-6 sm:overflow-hidden sm:overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thin">
      <ProfileForm action={action} setdata={setdata} isLoading={isLoading} setisLoading={setisLoading}/>

      <div className="mt-10 mx-auto">
        <SectionHead title="Pending Scans" />
        <PendingScans data={data} setdata={setdata} isLoading={isLoading} setisLoading={setisLoading} />
      </div>
    </div>
  );
}

export default page;
