"use client"
import SectionHead from "../_components/SectionHead";
import Welcome from "./_components/Welcome";
import AnalyticsCardMap from "./_components/AnalyticsCard";
import RecentScans from "./_components/RecentScans";

export default function Page() {
  return (
    <section className="w-screen block sm:w-11/12 md:11/12 h-5/6 p-2 pt-6  sm:pl-6 sm:overflow-hidden sm:overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thin">
      <SectionHead title="Home" />
      <div>
        <div className="w-11/12 mx-auto sm:9/12 md:w-7/12 mt-5  sm:mx-5 p-5 g-white shadow-2xl z-10 relative bg-white dark:bg-reconswiftDarkPrimary rounded-md border border-gray-200">
          <Welcome />
          <span className="block text-sm font-semibold my-4">
            Welcome to dashboard, organize, keep track and start new scans🚀.
            Currently we are limited to IP and subdomains enumeration.
            We are working on adding more features and tools to make your experience better.
            Please feel free to contribute and suggest new features on out GitHub repository.
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
