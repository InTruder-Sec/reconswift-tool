import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ClickHandlers from "./ClickHandlers";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-20 flex bg-background text-foreground px-20 text-base py-2">
      <img src="/logo.png" alt="logo" className="w-20 h-20" />
      <div className="flex-grow py-10">
        <div className="flex h-full">
          <div className="flex-grow" />
          <div className="flex items-center">
            <ClickHandlers
              text="Pricing"
              message="Currently ReconSwift is free!"
              styles="mx-5 cursor-pointer"
            />
            <Link href="/login" className="mx-5">
              Login
            </Link>
            <Link href="/dashboard/home">
              <Button className="mx-5 duration-200 font-semibold text-base p-6 bg-blue-700 hover:bg-sky-600 hover:text-white">
                Get Started for Free
                <ArrowRight size={20} className="inline-block ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
