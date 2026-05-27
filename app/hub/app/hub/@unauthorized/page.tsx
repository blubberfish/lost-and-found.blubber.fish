import { SignInButton } from "@clerk/nextjs";
import {
  CaretRightIcon,
  SignInIcon,
  WarningOctagonIcon,
} from "@phosphor-icons/react/ssr";

export default function Page() {
  return (
    <>
      <header className="bg-slate-800 text-white px-9 py-6 flex flex-row items-center justify-center">
        <h1 className="text-center text-xl">UNAUTHORIZED</h1>
      </header>
      <section className="mx-9 my-6 p-6 bg-surface-t text-center shadow">
        <header className="flex flex-row justify-center">
          <WarningOctagonIcon className="p-3 size-16 rounded-full bg-slate-800 text-white" />
        </header>
        <p className="text-gray-600 mt-4 mb-6">
          Please sign in to get access to our application.
        </p>
        <div className="flex flex-row justify-center">
          <SignInButton>
            <button
              type="button"
              className="group px-3 py-2 rounded flex flex-row items-center text-white bg-slate-800 justify-self-center"
            >
              <div className="size-6 p-2 relative overflow-hidden">
                <CaretRightIcon className="size-full absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform" />
                <SignInIcon className="size-full absolute inset-0 translate-x-0 group-hover:translate-x-full transition-transform" />
              </div>
              <span className="ml-2">Proceed to sign in</span>
            </button>
          </SignInButton>
        </div>
      </section>
    </>
  );
}
