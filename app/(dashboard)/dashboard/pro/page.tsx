import React from "react";
import PricingCard from "./_components/PricingCard";
import Image from "next/image";
import SectionHead from "../_components/SectionHead";

function page() {
  return (
    <div className="w-screen mx-auto block sm:w-11/12 md:11/12 h-5/6 p-2 pt-6 ">
      <SectionHead title="Pro Versions" />
      <div className="flex mt-8 flex-wrap flex-col font-semibold sm:flex-row sm:justify-around w-10/12 mx-auto">
        <PricingCard image="/monthly.png" title="Monthly" />
        <PricingCard image="/yearly.png" title="Yearly" />
        <PricingCard image="/free.png" title="Enterprise" />
      </div>
    </div>
  );
}

export default page;
