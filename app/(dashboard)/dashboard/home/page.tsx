
import { currentUser } from "@clerk/nextjs";
import SectionHead from "../_components/SectionHead";
import Welcome from "./_components/Welcome";
import { User } from "@clerk/nextjs/server";
import AnalyticsCardMap from "./_components/AnalyticsCard";
import Grid from "../_components/Grid";
import RecentScans from "./_components/RecentScans";
import { toast } from "sonner";

export default async function Page() {
  const user: User | null = await currentUser();
  // toast user that the reconswift is in devlopment 
  return (
    <section className="w-screen block sm:w-11/12 md:11/12 h-5/6 p-2 pt-6  sm:pl-6 sm:overflow-hidden sm:overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thin">
      <SectionHead title="Home" />
      <div>
        <div className="w-11/12 mx-auto sm:9/12 md:w-7/12 mt-5  sm:mx-5 p-5 g-white shadow-2xl z-10 relative bg-white rounded-md border border-gray-200">
          <Welcome name={user?.firstName} />
          <span className="block text-sm font-semibold my-4">
            Welcome to dashboard, organize, keep track and start new scans. Get
            started by navigating to the scanning tab on navigation panel.
          </span>
          <span className="block text-sm ">
            Upgrade now ✨ to experience the power of ReconSwift. Get unlimited
            free scans, priority scanning and multiple tools to get the detailed
            reports.
          </span>
        </div>
      </div>
      <div className="mt-8">
        <SectionHead title="Analytics" />
        <div className="flex flex-row flex-wrap">
          <AnalyticsCardMap />
        </div>
      </div>
      <div className="mt-8">
        <SectionHead title="Top Scans" />
        <RecentScans />
      </div>
    </section>
  );
}
