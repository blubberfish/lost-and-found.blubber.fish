import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Layout({
  children,
  unauthorized,
}: LayoutProps<"/hub">) {
  const user = await currentUser();

  if (!user) {
    return unauthorized;
  }

  return (
    <>
      <header className="bg-white p-6">
        <div></div>
        <SignOutButton redirectUrl="/" />
      </header>
      {children}
    </>
  );
}
