import { UserButton, auth, currentUser } from "@clerk/nextjs";
import SectionHead from "../_components/SectionHead";
import Welcome from "./_components/Welcome";
import { User } from "@clerk/nextjs/server";
import AnalyticsCardMap from "./_components/AnalyticsCard";

export default async function Page() {
  const user: User | null = await currentUser();

  return (
    <section className=" w-11/12 h-5/6 p-2 pt-6 pl-6 overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thin">
      <SectionHead title="Home" />
      <div>
        <div className="w-7/12 mt-5 ml-5 p-5 bg-gradient-to-r from-blue-500 to-blue-600  rounded-lg">
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
        <SectionHead title="Recent Scans" />
      </div>
    </section>
  );
}
