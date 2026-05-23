import { negotiateLanguage } from "@blubberfish/server/negotiators";
import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Lost n' found",
  description: "Connecting people with what they have lost.",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const [{ lang }] = negotiateLanguage(
    requestHeaders.get("accept-language") ?? "",
    { default: "en" },
  );
  return (
    <html lang={lang}>
      <body className="min-h-full flex flex-col">
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
