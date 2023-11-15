"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

function User() {
  const { data } = useSession();
  const userImageSrc = data?.user?.image || null;
  return (
    <>
      <h1>User</h1>
      <p>{JSON.stringify(data)}</p>
      {userImageSrc && (
        <Image
          src={userImageSrc}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-md object-cover"
        />
      )}
    </>
  );
}

export default User;
