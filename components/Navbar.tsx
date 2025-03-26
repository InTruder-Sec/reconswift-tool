import React from "react";
import { ArrowRight } from "lucide-react";
import ClickHandlers from "./ClickHandlers";
import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@clerk/nextjs/server";
import ThemeSwitch from "./ThemeSwitch";

async function Navbar() {
  const { userId } = await auth();

  return (
    <div className="w-full flex bg-background text-foreground px-4 sm:px-20 text-sm py-2 border-b border-reconswiftBorder dark:bg-reconswiftDarkSecondary">
      <div className="flex items-center justify-center w-fit">
        <img src="/logo.png" alt="logo" className="w-14 h-14 md:w-20 md:h-20" />
        <div className="sm:hidden pt-1 px-2 text-2xl font-semibold ">
          Reconswift
        </div>
      </div>
      <div className="flex-grow ">
        <div className="flex h-full">
          <div className="flex-grow" />
          <div className="items-center hidden sm:flex">
            <ClickHandlers
              text="Pricing"
              message="Currently ReconSwift is free!"
              styles="mx-5 cursor-pointer"
            />
            {/* Display block if userid is null */}
            <span className={`${userId == null ? "" : "hidden"}`}>
              <Link href="/login" className="mx-5">
                Login
              </Link>
              <Link href="/signup" className="mx-5">
                Signup
              </Link>
            </span>
            <Link href="/dashboard/home">
              <Button className="mx-5 duration-200 font-semibold text-sm p-6 bg-reconswiftThemeColor dark:bg-reconswiftThemeColorDark dark:hover:bg-reconswiftThemeColorDarkSecondary dark:hover:text-black hover:bg-reconswiftThemeColorSecondary hover:text-white">
                Get Started for Free
                <ArrowRight size={20} className="inline-block ml-2" />
              </Button>
            </Link>
            <ThemeSwitch className="ml-5 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
