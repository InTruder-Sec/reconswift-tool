"use client";
import React from "react";
import { toast } from "sonner";

function ClickHandlers({ text, message, styles }) {
  const toastMessage = (message: string) => {
    toast.info(message);
  };
  return (
    <div
      className={styles}
      onClick={() => {
        toastMessage(message);
      }}
    >
      {text}
    </div>
  );
}

export default ClickHandlers;
