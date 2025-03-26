"use client";
import { currentUser } from "@clerk/nextjs/server";
import React, { SetStateAction } from "react";

async function UserButtons() {
  const [user, setUser] = React.useState<SetStateAction<any>>(null);

  const fetchUser = async () => {
    const userDetails = await currentUser();
    setUser(userDetails);
  };

  return <div>Hello</div>;
}

export default UserButtons;
