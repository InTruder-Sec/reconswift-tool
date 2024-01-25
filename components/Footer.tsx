import React from "react";
import ClickHandlers from "./ClickHandlers";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full text-white">
      <div className="border border-t-2 w-10/12 mx-auto opacity-30"></div>
      <div className="w-11/12 sm:w-8/12 sm:flex mx-auto py-10">
        <div className="w-fit mx-auto sm:w-auto">
          <div className="text-2xl">Keep in Touch</div>
          <Link href="mailto:contact@reconswift.com">
            <div className="text-xs mt-2">contact@reconswift.com</div>
          </Link>
        </div>
        <div className="flex-grow py-10 text-sm">
          <div className="flex h-full w-fit mx-auto  sm:w-auto">
            <div className="sm:flex-grow" />
            <div className="flex items-center">
              <ClickHandlers
                text="Pricing"
                message="Currently ReconSwift is free!"
                styles="mx-5 cursor-pointer"
              />
              <a href="/login" className="mx-5">
                Login
              </a>
              <a href="/signup" className="mx-5">
                SignUp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-center pb-3">
        <div>
          © 2024 All Rights Reserved &nbsp; | &nbsp; Terms & Conditions &nbsp; |
          &nbsp; Privacy Policy
        </div>
      </div>
    </div>
  );
}

export default Footer;
