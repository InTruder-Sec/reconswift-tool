"use client";
import {
  AlignHorizontalJustifyStart,
  BadgeCheck,
  FileSearch,
  GitPullRequestArrow,
  Hourglass,
  ShieldBan,
  Sparkles,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

import React, { ReactElement } from "react";

type Props = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  subIcon: ReactElement;
  value: number;
};

const cardData = [
  {
    title: "Total Scans",
    value: 0o6,
    subtitle: "12 Scans in queue",
    icon: <FileSearch size={24} />,
    subIcon: <GitPullRequestArrow size={18} className="mx-2" />,
  },
  {
    title: "Scanning time",
    value: 84.69,
    subtitle: "New scan in queue",
    icon: <Hourglass size={24} />,
    subIcon: <GitPullRequestArrow size={18} className="mx-2" />,
  },
  {
    title: "Vulnerabilities",
    value: 12,
    subtitle: "Horses working hard!",
    icon: <ShieldBan size={24} />,
    subIcon: <AlignHorizontalJustifyStart size={18} className="mx-2" />,
  },
  {
    title: "Upgrade for more",
    value: 0,
    subtitle: "Get detailed analytics!",
    icon: <Sparkles size={24} />,
    subIcon: <BadgeCheck size={18} className="mx-2" />,
  },
];

function AnalyticsCardMap() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
          {cardData.map((card, index) => (
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
    <div className="flex flex-row flex-wrap m-5">
      <Skeleton className="w-72 h-28 rounded-md bg-gray-300" />
    </div>
  );
}

function AnalyticsCard(props: Props) {
  return (
    <section>
      <div className="col-span-full w-72 xl:col-span-8 bg-white shadow-2xl m-5 rounded-md border border-gray-200">
        <div className="px-5 pt-5">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 text-indigo-500">
              {props.icon}
            </div>
            <div className="ml-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {props.value}
              </h4>
              <div className="text-gray-500">{props.title}</div>
            </div>
          </div>
        </div>
        <div className="px-5 py-3 bg-gray-100 mt-4">
          <div className="flex items-center text-sm text-gray-600">
            {props.subIcon}
            <div>{props.subtitle}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsCardMap;
