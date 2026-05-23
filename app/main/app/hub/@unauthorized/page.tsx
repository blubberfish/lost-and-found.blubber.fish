import { SignInButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <header>
        <h1>Unauthorized</h1>
      </header>
      <section>
        <p>YOu need to sign in to get full access</p>
        <SignInButton />
      </section>
    </>
  );
}
