import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/options";
import RedirectMe from "@/components/RedirectMe";
import SigninMain from "@/components/SigninMain";

export default async function SignIn() {
  const providers = (await getProviders()) || [];
  const session = await getServerSession(options);

  console.log(JSON.stringify(providers));
  const providersObj = Object.values(providers).map((provider) => ({
    id: `{provider.id}`,
    name: provider.name,
  }));
  console.log(providersObj);
  if (session) {
    return <RedirectMe />;
  } else {
    return <SigninMain providersObj={providersObj} />;
  }
}
