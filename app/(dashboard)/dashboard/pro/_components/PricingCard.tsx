import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table } from "@/components/ui/table";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
};

function PricingCard(props: Props) {
  return (
    <div className=" mt-4 bg-white border border-gray-300 shadow-md w-[300px] sm:w-[340px] px-4 py-3 backdrop-blur-sm bg-white/30 rounded-md">
      <div className="image mx-auto w-fit h-[120px]">
        <Image src={props.image} width={120} height={120} alt="monthly" />
      </div>
      <Separator className="my-2 bg-black" />
      <div className="text-center">
        <div>{props.title}</div>
        <div className="text-md font-semibold mt-4">3 Free Scans</div>
        <div className="text-md font-semibold mt-2">$ 20.00</div>
      </div>
      <Button className="mt-4 w-full">Buy Now</Button>
    </div>
  );
}

export default PricingCard;
