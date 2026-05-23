import { SignInButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignInButton>
      <button type="button">Sign in</button>
    </SignInButton>
  );
}
