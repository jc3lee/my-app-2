"use client";
import React from "react";
import { signIn } from "next-auth/react";

async function SigninMain({
  providersObj,
}: {
  providersObj: { id: string; name: string }[];
}) {
  const radio = await JSON.parse("{dede: 1}");
  console.log(radio);
  const mySignInObj = Object.values(providersObj).map((provider) => (
    <div key={provider.name}>
      <button onClick={() => signIn(provider.id)}>
        Sign in with {provider.name}
      </button>
    </div>
  ));

  return (
    <>
      <h1>My own Sign In Page</h1>
      {mySignInObj}
    </>
  );
}

export default SigninMain;
