"use client";
import { UserButton } from "@clerk/nextjs";
import {
  Component,
  GitBranch,
  History,
  LayoutDashboard,
  MessageSquare,
  ScanLine,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import ThemeSwitch from "@/components/ThemeSwitch";

function SideBar() {
  let pathname = usePathname().split("/")[2];

  const getActiveClass = (path: string) => {
    return pathname === path
      ? "relative after:absolute after:left-[-2rem] after:top-3 after:transform after:-translate-y-1/2 after:w-4 after:h-4 after:rounded-full after:bg-gradient-to-r after:from-blue-700 after:to-sky-300 after:opacity-80 after:animate-bounce"
      : "";
  };

  return (
    <>
      <aside className="hidden flex-col justify-between h-full sm:flex">
        <div className="flex flex-col gap-4 justify-between h-80 mt-6 px-6">
          <Link href="/dashboard/home">
            <div className={getActiveClass("home")}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <LayoutDashboard size={32} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div>Home</div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </Link>

          <Link href="/dashboard/scan">
            <div className={getActiveClass("scan")}>
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
            <div className={getActiveClass("history")}>
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

          <div
            className={getActiveClass("workflow")}
            onClick={() => {
              toast.info(
                "Workflow comming soon!"
              );
            }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                <GitBranch size={32} />
                </TooltipTrigger>
                <TooltipContent>
                  <div>Workflow</div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div
            className={getActiveClass("pro")}
            onClick={() => {
              toast.info(
                "Reconswift is currently free. Pro version coming soon!"
              );
            }}
          >
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
        </div>
        <div className="profile scale-125 mt-20 flex flex-col items-center justify-center">
          <ThemeSwitch className="mb-4 text-2xl" />
          <UserButton afterSignOutUrl="/" />
        </div>
      </aside>
    </>
  );
}

export default SideBar;
