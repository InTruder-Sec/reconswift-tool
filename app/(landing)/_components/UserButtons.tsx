"use client";
import { auth, currentUser } from "@clerk/nextjs";
import React, { SetStateAction } from "react";

function UserButtons() {
  const [user, setUser] = React.useState<SetStateAction<any>>(null);

  const fetchUser = async () => {
    const userDetails = await currentUser();
    setUser(userDetails);
  };

  return <div>Hell0o</div>;
}

export default UserButtons;
