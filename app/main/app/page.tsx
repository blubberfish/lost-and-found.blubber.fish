import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (user) {
    redirect("/hub/dashboard");
  }
  return (
    <>
      <header className="">
        <div className="max-w-7xl mx-auto">
        <SignInButton>
          <button type="button">Sign in</button>
        </SignInButton>
        </div>
      </header>
    </>
  );
}
