import { getServerSession } from "next-auth";
import { options } from "../lib/options";
import User from "@/components/User";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      <User />
      <h3>{JSON.stringify(session)}</h3>
    </>
  );
}
