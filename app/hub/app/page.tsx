import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="p-6 bg-gray-800 text-white">
        <div className="flex flex-row gap-4 items-center justify-end border-b border-b-white/34 pb-4">
          <SignUpButton forceRedirectUrl="/hub">
            <button className="text-sm" type="button">Sign up</button>
          </SignUpButton>
          <Link className="px-3 py-2 rounded-full bg-violet-600" href="/hub">Go to hub</Link>
        </div>
        <section className="pt-4">
          <h1 className="text-xl font-light text-slate-300">Found something?</h1>
          <p className="text-sm text-slate-100">
            If you have found a tagged object or person, simply fill out the
            form and we will notify the owner immediately.
          </p>
          <nav className="flex flex-row mt-4">
          <Link className="px-3 py-2 rounded text-violet-400 border border-current" href="/dispatch">Get started</Link>
          </nav>
        </section>
      </header>
    </>
  );
}
