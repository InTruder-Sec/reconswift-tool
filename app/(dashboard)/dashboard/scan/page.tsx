import React from "react";
import SectionHead from "../_components/SectionHead";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function page() {
  return (
    <div className="w-screen block sm:w-11/12 md:11/12 h-5/6 p-2 pt-6  sm:pl-6 sm:overflow-hidden sm:overflow-y-scroll  scrollbar-thumb-gray-600 scrollbar-track-gray-300 scrollbar-thin">
      <SectionHead title="Scan" />
      <div className="mt-6 px-4 mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 py-1 text-sm">Scan URL:</div>
          <div className="w-full flex">
            <Input placeholder="https://google.com" />
            <Button className="mx-3">Scan</Button>
          </div>
          <div className="w-full">
            <div className="py-2 mt-2 text-sm mr-4">Scan Type:</div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select one type!" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select one type...</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <div className="py-2 mt-2 text-sm mr-4">Schedule Scan:</div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select one type!" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>
                    Only avaliable for Reconswift pro users
                  </SelectLabel>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
