"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

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

function Grid(props: any) {
  let dataMap = props.data?.map((d: any, index: any) => (
    <TR key={index} targetUrl={d.url} scanId={d.scanId} status={d.scanStatus} />
  ));

  if (props.data.length === 0) {
    dataMap = <TR targetUrl="No Scans Found" scanId="N/A" status="N/A" />;
  }

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
          {props.isLoading ? (
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
            <>{dataMap}</>
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

export default Grid;
