import { useRouter } from "next/router";
import SideBar from "./_components/SideBar";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <img
        src="/background.png"
        alt="background"
        className="fixed z-0 top-0 right-0 h-screen scale-125 opacity-20 pointer-events-none"
      />
      <div className="h-screen overflow-hidden">
        <div className="nav flex mx-6 mt-1">
          <img src="/logo.png" alt="logo" className="h-16 w-16" />
          <div className="bg-gradient-to-r from-blue-700 to-sky-600 bg-clip-text text-transparent text-2xl font-semibold mt-4 px-2">
            ReconSwift
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="flex h-5/6 pb-12 mt-5 w-fit border-r-2 border-slate-400">
            <SideBar />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
