import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";

function Hero() {
  return (
    <header className="flex flex-col min-h-96 bg-slate-800 text-white px-9 py-6">
      <div className="@container flex flex-row flex-no-wrap items-center gap-4">
        <h1 className="flex-1 text-3xl font-bold">Blubberfish</h1>
        <SignUpButton forceRedirectUrl="/hub">
          <button className="hidden @md:block text-sm" type="button">
            Sign up
          </button>
        </SignUpButton>
        <Link
          className="px-3 py-2 text-sm rounded-full bg-violet-600"
          href="/hub"
        >
          Go to hub
        </Link>
      </div>
      <hr className="border-white/34 my-4" />
      <section className="flex-1 flex flex-col justify-center">
        <h1 className="font-light text-slate-200 text-xl mb-2">
          Found something?
        </h1>
        <p className="font-light text-slate-400 mb-4">
          Every registered tag should come with all the information needed for
          our backend to notify the owner(s).
          <br />
          If you find one, please fill out the form with all the information you
          can provide, or follow the URL/QR code on the tag.
        </p>
        <nav className="flex flex-row">
          <Link
            className="group text-violet-400 text-2xl font-bold flex flex-row items-center gap-3"
            href="/dispatch"
          >
            <span className="group-hover:underline">Report discovery</span>
            <ArrowRightIcon className="size-7 animate-pulse" />
          </Link>
        </nav>
      </section>
    </header>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
    </>
  );
}
