import SideBar from "./_components/SideBar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Component,
  History,
  Menu,
  MessageSquare,
  ScanLine,
} from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import FeedbackWrapper from "@/components/ui/feedback";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-reconswiftPrimary dark:bg-reconswiftDarkPrimary">
      <FeedbackWrapper />
      <img
        src="/background.png"
        alt="background"
        className="fixed -z-10 top-44 sm:top-0 right-0  scale-125 sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] opacity-20 pointer-events-none "
      />

      <div className="h-screen sm:overflow-hidden">
        <div className="nav flex justify-between mx-6 items-center py-2                                                                                                                                                                                             ">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 w-12 sm:h-16 sm:w-16"
            />
            <div className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent text-2xl h-fit font-semibold px-2">
              ReconSwift
            </div>
          </div>
          <div className="hamburger sm:hidden flex">
            <div className=" mx-3">
              <UserButton />
            </div>
            <Sheet>
              <SheetTrigger>
                <Menu size={32} />
              </SheetTrigger>
              <SheetContent className="rounded-l-3xl bg-indigo-50">
                <SheetHeader>
                  <SheetDescription className="text-black text-xl ">
                    <div className="flex flex-col h-80  mt-32 justify-between">
                      <Link href="/dashboard/home">
                        <SheetTrigger className="flex items-center">
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
                          <div className="ml-2">Home</div>
                        </SheetTrigger>
                      </Link>
                      <Link href="/dashboard/scan">
                        <SheetTrigger className="flex items-center">
                          <ScanLine size={32} />
                          <div className="ml-2 ">New Scan</div>
                        </SheetTrigger>
                      </Link>
                      <Link href="/dashboard/history">
                        <SheetTrigger className="flex items-center">
                          <History size={32} />
                          <div className="ml-2">History</div>
                        </SheetTrigger>
                      </Link>
                      <Link href="/dashboard/feedback">
                        <SheetTrigger className="flex items-center">
                          <MessageSquare size={32} />
                          <div className="ml-2 ">Feedback</div>
                        </SheetTrigger>
                      </Link>
                      <Link href="/dashboard/pro">
                        <SheetTrigger className="flex items-center">
                          <Component size={32} />
                          <div className="ml-2 ">Pro</div>
                        </SheetTrigger>
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex h-full w-full">
          <div className="flex h-5/6 pb-12 mt-5 w-fit border-r-2 border-slate-400">
            <SideBar />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
