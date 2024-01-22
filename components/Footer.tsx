import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ClickHandlers from "./ClickHandlers";

function Footer() {
  return (
    <div className="w-full text-white">
      <div className="border border-t-2 w-10/12 mx-auto opacity-30"></div>
      <div className="w-8/12 flex mx-auto py-10">
        <div>
          <div className="text-2xl">Keep in Touch</div>
          <div className="text-sm mt-2">contact@reconswift.com</div>
        </div>
        <div className="flex-grow py-10">
          <div className="flex h-full">
            <div className="flex-grow" />
            <div className="flex items-center">
              <ClickHandlers
                text="Pricing"
                message="Currently ReconSwift is free!"
                styles="mx-5 cursor-pointer"
              />
              <a href="/signup" className="mx-5">
                Login
              </a>
              <a href="/register" className="mx-5">
                SignUp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-center pb-3">
        <div>
          © 2024 All Rights Reserved &nbsp; | &nbsp; Terms & Conditions &nbsp; |
          &nbsp; Privacy Policy
        </div>
      </div>
    </div>
  );
}

export default Footer;
