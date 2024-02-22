"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";
import React from "react";

const dummyData = [
  {
    targetUrl: "https://google.com",
    scanId: "RSID35194",
    status: "Completed",
  },
  {
    targetUrl: "https://waveauth.com",
    scanId: "RSID35192",
    status: "Completed",
  },
  {
    targetUrl: "https://facebook.com",
    scanId: "RSID35124",
    status: "Completed",
  },
  {
    targetUrl: "https://instagram.com",
    scanId: "RSID35594",
    status: "In queue",
  },
];

function Grid() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-8 overflow-scroll sm:overflow-hidden">
      <table className="table-auto w-full ">
        <thead>
          <tr className="text-left ">
            <th className="px-4 py-2 border-b-2 border-r-2 border-gray-600">
              Target URL
            </th>
            <th className="px-4 py-2 border-b-2 border-r-2 border-gray-600">
              Scan ID
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <>
              {
                <>
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                  <LoadingSkeleton />
                </>
              }
            </>
          ) : (
            <>
              {dummyData.map((data, index) => (
                <TR
                  key={index}
                  targetUrl={data.targetUrl}
                  scanId={data.scanId}
                  status={data.status}
                />
              ))}
            </>
          )}
          <tr>
            <td className="px-4 py-2 border-r-2 border-gray-400"></td>
            <td className="px-4 py-2 border-r-2 border-gray-400"></td>
            <td className="px-4 py-2 border-gray-400"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const LoadingSkeleton = () => {
  return (
    <tr>
      <td className="px-4 py-4 border-r-2 border-b-2 border-gray-400">
        <Skeleton className="w-72 h-3 rounded-md bg-gray-300" />
      </td>
      <td className="px-4 py-4 border-r-2 border-gray-400 border-b-2">
        <Skeleton className="w-72 h-3 rounded-md  bg-gray-300" />
      </td>
      <td className="px-4 py- border-gray-400 border-b-2">
        <Skeleton className="w-72 h-3 rounded-md bg-gray-300" />
      </td>
    </tr>
  );
};

const TR = (props: any) => {
  return (
    <tr className="text-sm hover:bg-slate-200">
      <td className="px-4 py-3 border-b-2 border-r-2 border-gray-400">
        {props.targetUrl}
      </td>
      <td className="px-4 py-3 border-b-2 border-r-2 border-gray-400">
        {props.scanId}
      </td>
      <td className="px-4 py-3 border-b-2  border-gray-400">{props.status}</td>
    </tr>
  );
};

export default Grid;
