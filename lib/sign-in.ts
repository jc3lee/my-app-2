import { redirect } from "next/navigation";

export default function redirectToSignIn(callbackDestination: string) {
  redirect(`api/auth/signin?callback=${callbackDestination}`);
}
