import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Globe2, Search, ShieldCheck, User } from "lucide-react";
import React from "react";
import UserButtons from "./_components/UserButtons";
import ClickHandlers from "@/components/ClickHandlers";
import Link from "next/link";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-8/12 mx-auto">
        <div className=" text-6xl font-normal mx-auto mt-20 ">
          <span className="font-semibold">Discover</span>
          <span>
            <Globe2 size={60} className="inline-block mx-6" />
          </span>
          <span className="font-semibold mx-2">Assess</span>
          <span>
            <Search size={60} className="inline-block mx-6" />
          </span>
          and
          <span className="font-semibold mx-2">Secure</span>
          <span>
            <ShieldCheck size={60} className="inline-block mx-2" />
          </span>
          <span>Test the Web Safely with</span>
          <span className="font-semibold"> ReconSwift.</span>
        </div>
        <Link href="/signup">
          <Button className="mt-10 font-semibold text-xl duration-200 p-8 bg-blue-700 hover:bg-sky-600">
            Get Started
          </Button>
        </Link>
        <div>
          <div className="w-full bg-gray-100 shadow-2xl shadow-blue-700 mt-20">
            <img
              src="/dashboard.png"
              alt="dashboard"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex bg-gradient-to-r from-blue-800 to-sky-500 text-foreground  text-lg py-10 -mt-20 pb-24">
        <div className="w-8/12 mx-auto mt-40 text-white">
          <div className="text-sm font-semibold">We for Bug Bounty hunters</div>
          <div className="text-6xl mt-2 font-bold">Automate Testing</div>
          <div className="text-lg font-medium mt-6">
            ReconSwift the automated reconnaissance platform serves as an
            indispensable tool for bug bounty hunters by streamlining and
            expediting the initial phase of their security assessments. With
            swift and comprehensive scanning capabilities, bug bounty hunters
            can efficiently gather crucial information about target websites,
            identify potential vulnerabilities, and generate detailed reports.
          </div>
          <Link href="/signup">
            <Button className="mt-24 duration-200 font-semibold  text-xl p-6 px-8 bg-white text-foreground hover:bg-sky-600 hover:text-white">
              Try Now!
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-8/12 mx-auto my-24">
        <div className="text-right ">
          <div className="text-sm font-semibold">Why to have Pro Version?</div>
          <div className="text-6xl mt-2 font-bold">ReconSwift Pro</div>
        </div>
        <div className="text-lg font-semibold mt-10">
          Unlock the full potential of your cybersecurity endeavors with our Pro
          Version. Elevate your scanning experience by gaining exclusive access
          to all tools available on the dashboard. With the Pro Version, you
          enjoy the flexibility of conducting unlimited scans, allowing you to
          assess as many target URLs as needed without constraints. In addition,
          prioritize efficiency with our Pro Version as it grants you access to
          faster scans, ensuring prompt and expedited results. Upgrade to Pro to
          maximize the power of our platform, accelerate your reconnaissance
          tasks, and stay ahead in identifying vulnerabilities for a more secure
          online landscape.
        </div>
        <ClickHandlers
          text="Get Pro Now ✨"
          message="✨ Pro version is free now!"
          styles="my-12 float-right duration-200 font-semibold text-xl p-8 text-white cursor-pointer bg-blue-700 hover:bg-sky-600 hover:text-white rounded-lg "
        />
      </div>
      <div className="w-full bg-black text-foreground pt-32 mt-52">
        <div className="w-8/12 mx-auto pb-20">
          <div className="text-6xl font-bold text-white">Enumerate Target?</div>
          <Link href="/signup">
            <Button className="mt-10  text-2xl font-semibold  p-10  text-white bg-blue-700 duration-500 hover:bg-white hover:text-black">
              Get Started Now
            </Button>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
