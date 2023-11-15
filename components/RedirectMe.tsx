"use client";
import { useRouter, useSearchParams } from "next/navigation";

async function RedirectMe() {
  const radio = await JSON.parse("dede");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callBackUrl = searchParams.get("callbackUrl");
  console.log(callBackUrl);
  if (callBackUrl) router.push(callBackUrl);
  else router.push("/");
  return <></>;
}

export default RedirectMe;
