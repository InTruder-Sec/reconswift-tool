"use client";
import { UserButton } from "@clerk/nextjs";
import { Component, History, ScanLine, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function SideBar() {
  let pathname = usePathname().split("/")[2];

  let margin = "mt-6";
  if (pathname === "scan") {
    margin = "mt-[83px]";
  } else if (pathname === "history") {
    margin = "mt-[154px]";
  } else if (pathname === "settings") {
    margin = "mt-[224px]";
  } else if (pathname === "pro") {
    margin = "mt-[298px]";
  } else {
    margin = "mt-[12px]";
  }

  return (
    <>
      <aside className="hidden flex-col justify-between  h-full sm:flex">
        <div className="flex flex-col justify-between h-80 mt-6 px-6">
          <div
            className={`ease-linear duration-500 animate-bounce  -z-10 opacity-80 active w-4 h-4 rounded-full  bg-gradient-to-r from-blue-700 to-sky-300 absolute -ml-8 ${margin}`}
          ></div>
          <Link href="/dashboard/home">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.75 28C17.2382 29.103 19.0481 29.75 21 29.75C22.9519 29.75 24.7618 29.103 26.25 28"
                        stroke="black"
                        strokeWidth="3.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M38.5 21.3568V24.0188C38.5 30.8452 38.5 34.2585 36.4497 36.3792C34.3996 38.5 31.0996 38.5 24.5 38.5H17.5C10.9003 38.5 7.60051 38.5 5.55025 36.3792C3.5 34.2585 3.5 30.8452 3.5 24.0188V21.3568C3.5 17.3521 3.5 15.3497 4.4086 13.6898C5.3172 12.0299 6.97716 10.9996 10.2971 8.93923L13.7971 6.76702C17.3064 4.58901 19.0612 3.5 21 3.5C22.9388 3.5 24.6935 4.58901 28.203 6.76702L31.703 8.93921C35.0229 10.9996 36.6828 12.0299 37.5914 13.6898"
                        stroke="black"
                        strokeWidth="3.75"
                        strokeLinecap="round"
                      />
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Home</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>

          <Link href="/dashboard/scan">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <ScanLine size={32} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>New Scan</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>
          <Link href="/dashboard/history">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <History size={32} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>History</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>
          <Link href="/dashboard/settings">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Settings size={32} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Settings</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>
          <Link href="/dashboard/pro">
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Component size={32} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Upgrade</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>
        </div>
        <div className="profile scale-125 ml-8 mt-20 ">
          <UserButton afterSignOutUrl="/" />
        </div>
      </aside>
    </>
  );
}

export default SideBar;
