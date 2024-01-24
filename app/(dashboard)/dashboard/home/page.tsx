import { UserButton } from "@clerk/nextjs";
import SideBar from "../../_components/SideBar";
import SectionHead from "../_components/SectionHead";
import Welcome from "../_components/Welcome";

export default async function Page() {
  return (
    <div className=" w-11/12 h-full p-2 pt-6 pl-6 ">
      <SectionHead title="Home" />
      <Welcome />
    </div>
  );
}
