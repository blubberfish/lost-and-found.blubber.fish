import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hub",
  description: "Explore",
};

/**
 * 
 * @returns 
 */
export default async function Page() {
  const user = await currentUser();

  return (
    <>
      <header>
        <h1>Welcome to the hub, {user?.firstName ?? "guest"}!</h1>
      </header>
      <section>
        <header>
          <h1>Inventory</h1>
          <Link href="/hub/inventory/add">Register object</Link>
        </header>
      </section>
      <section></section>
      <section></section>
    </>
  );
}
