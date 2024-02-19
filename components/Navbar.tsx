import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ClickHandlers from "./ClickHandlers";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-20 flex bg-background text-foreground px-4 sm:px-20 text-sm py-2">
      <img src="/logo.png" alt="logo" className="w-15 h-15 md:w-20 md:h-20" />
      <div className="sm:hidden mt-5 px-2 text-2xl font-semibold ">
        Reconswift
      </div>
      <div className="flex-grow py-10">
        <div className="flex h-full">
          <div className="flex-grow" />
          <div className="items-center hidden sm:flex">
            <ClickHandlers
              text="Pricing"
              message="Currently ReconSwift is free!"
              styles="mx-5 cursor-pointer"
            />
            <Link href="/login" className="mx-5">
              Login
            </Link>
            <Link href="/signup" className="mx-5">
              Signup
            </Link>
            <Link href="/dashboard/home">
              <Button className="mx-5 duration-200 font-semibold text-sm p-6 bg-blue-700 hover:bg-sky-600 hover:text-white">
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
