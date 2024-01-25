"use client";
import React from "react";
import { toast } from "sonner";

type Props = {
  text: string;
  message: string;
  styles: string;
};

function ClickHandlers(props: Props) {
  const toastMessage = (message: string) => {
    toast.info(props.message);
  };
  return (
    <button
      className={props.styles}
      onClick={() => {
        toastMessage(props.message);
      }}
    >
      {props.text}
    </button>
  );
}

export default ClickHandlers;
