import React from "react";
import SectionHead from "../_components/SectionHead";
import PendingScans from "./_components/PendingScans";
import { ProfileForm } from "./_components/Form";
import action from "@/app/actions";

function page() {
  return (
    <div className="w-screen block sm:w-11/12 md:11/12 h-5/6 p-2 pt-6  sm:pl-6 sm:overflow-hidden sm:overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thin">
      <ProfileForm action={action} />

      <div className="mt-10 mx-auto">
        <SectionHead title="Pending Scans" />
        <PendingScans />
      </div>
    </div>
  );
}

export default page;
