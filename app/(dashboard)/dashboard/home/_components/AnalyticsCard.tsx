"use client";
import {
  AlignHorizontalJustifyStart,
  BadgeCheck,
  FileSearch,
  GitPullRequestArrow,
  HardDriveDownload,
  Hourglass,
  ShieldBan,
  Sparkles,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

import React, { ReactElement, SetStateAction, useEffect } from "react";

type analyticsType = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  subIcon: ReactElement;
  value: number | string;
};


function AnalyticsCardMap() {   
  const [AnalyticsData, setAnalyticsData] = React.useState<analyticsType[]>([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {

    fetch("/api/v1/getanalytics", {
      method: "POST",
      
    })
      .then(async (res) => {
        const data = await res.json();
        setAnalyticsData([
          {
            title: "Total Scans",
            value: data.totalScans,
            subtitle: `Go ahead add new scans!`,
            icon: <FileSearch size={24} />,
            subIcon: <GitPullRequestArrow size={18} className="mx-2" />,
          },
          {
            title: "Scanning time",
            value: `${data.scanTime} Min`,
            subtitle: "Experience the speed!",
            icon: <Hourglass size={24} />,
            subIcon: <HardDriveDownload size={18} className="mx-2" />,
          },
          {
            title: "Vulnerabilities",
            value: 0,
            subtitle: "Feature coming soon!",
            icon: <ShieldBan size={24} />,
            subIcon: <AlignHorizontalJustifyStart size={18} className="mx-2" />,
          },
          {
            title: "Upgrade for more",
            value: "✨",
            subtitle: "Get detailed analytics!",
            icon: <Sparkles size={24} />,
            subIcon: <BadgeCheck size={18} className="mx-2" />,
          },
        ]);
        setisLoading(false);
      });
     }
  ,[])



  return (
    <>
      {isLoading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          {AnalyticsData.map((card, index) => (
            <AnalyticsCard
              key={index}
              title={card.title}
              value={card.value}
              subtitle={card.subtitle}
              icon={card.icon}
              subIcon={card.subIcon}
            />
          ))}
        </>
      )}
    </>
  );
}

function SkeletonCard() {
  return (
    <div className="flex flex-row flex-wrap m-5 mx-auto">
      <Skeleton className="w-72 h-28 rounded-md bg-gray-300" />
    </div>
  );
}

function AnalyticsCard(props: analyticsType) {
  return (
    <section className="mx-auto ">
      <div className="hover:scale-105 duration-200  col-span-full w-72 xl:col-span-8 bg-white dark:bg-reconswiftDarkPrimary shadow-2xl  mt-6 sm:m-5 rounded-md border border-gray-200">
        <div className="px-5 pt-5">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-500 dark:bg-blue-100 dark:text-black">
              {props.icon}
            </div>
            <div className="ml-5">
              <h4 className="text-2xl font-semibold text-gray-700 dark:text-white overflow-scroll w-10/12 no-scrollbar"  >
                {props.value}
              </h4>
              <div className="text-gray-500 dark:text-white">{props.title}</div>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 bg-gray-100 dark:bg-gray-700  mt-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-white">
            {props.subIcon}
            <div>{props.subtitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsCardMap;
