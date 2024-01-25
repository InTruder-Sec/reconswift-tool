"use client";
import React from "react";

type Props = {
  name: string | null | undefined;
};

function Welcome(props: Props) {
  return (
    <>
      <div className="text-lg font-semibold">~(Hello@{props.name})</div>
    </>
  );
}

export default Welcome;
