import React from "react";

type Props = {
  title: string;
};

function SectionHead(props: Props) {
  return (
    <>
      <div className="text-xl font-medium text-foreground pl-3 ">
        {props.title}
      </div>
      <div className="h-1 mt-2 opacity-25 w-full bg-slate-400"></div>
    </>
  );
}

export default SectionHead;
