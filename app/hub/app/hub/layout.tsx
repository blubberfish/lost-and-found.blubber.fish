import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { BellIcon, SignOutIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";

export default async function Layout({
  children,
  unauthorized,
}: LayoutProps<"/hub">) {
  const user = await currentUser();

  if (!user) {
    return <>{unauthorized}</>;
  }

  /** @todo implement alerts sub-system and integration */
  const totalAlerts = 0;

  return (
    <>
      <header className="bg-slate-800 text-white">
        <div className="@container flex flex-row items-center px-9 py-6">
          <h1 className="flex-1">{user.fullName}</h1>
          <SignOutButton redirectUrl="/">
            <button
              className="flex flex-row items-center gap-2 hover:opacity-75"
              type="button"
              title="Sign out"
            >
              <SignOutIcon className="size-6 @md:size-4 transition-[width,height]" />
              <span className="hidden @md:block text-sm">Exit</span>
            </button>
          </SignOutButton>
        </div>
      </header>
      <nav
        className="@container bg-surface-b px-9 py-3 sticky top-0 flex flex-row items-center justify-start"
        title="notifications"
      >
        <Link
          href="/hub/alert"
          className="group w-max flex flex-row items-center gap-2"
        >
          <h1 className="mx-1 grid grid-cols-[max-content_0fr] @md:grid-cols-[max-content_1fr] items-center gap-0 @md:gap-1 transition-[grid-template-columns]">
            <BellIcon className="size-4" />
            <span className="group-hover:underline text-sm overflow-hidden">
              Alerts
            </span>
          </h1>
          <aside className="px-2 text-sm rounded bg-slate-800 text-white">
            {totalAlerts}
          </aside>
        </Link>
      </nav>
      {children}
    </>
  );
}
