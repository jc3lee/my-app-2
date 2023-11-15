import { getServerSession } from "next-auth";
import { options } from "../../lib/options";
import redirectToSignIn from "@/lib/sign-in";

export default async function Dashboard() {
  const session = await getServerSession(options);
  if (!session) redirectToSignIn("/dashboard");
  return <>{JSON.stringify(session)}</>;
}
