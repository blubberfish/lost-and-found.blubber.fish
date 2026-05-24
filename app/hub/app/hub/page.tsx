import { currentUser } from "@clerk/nextjs/server";
import { PlusCircleIcon } from "@phosphor-icons/react/ssr";
import { Metadata } from "next";
import Link from "next/link";
import { type PropsWithChildren } from "react";

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
      <TagSection />
    </>
  );
}

function Section({ children }: PropsWithChildren) {
  return <section className="my-6">{children}</section>;
}
Section.Header = function SectionHeader({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <header className="px-9 py-3 flex flex-row items-center justify-between">
      <h1 className="text-lg">{title}</h1>
      {children}
    </header>
  );
};
Section.Body = function SectionBody({ children }: PropsWithChildren) {
  return <section className="px-9 py-3 bg-surface-t">{children}</section>;
};

function TagSection() {
  return (
    <Section>
      <Section.Header title="Tags">
        <Link
          className="px-3 py-1 bg-slate-800 text-white rounded flex items-center gap-2"
          href="/hub/tag/new"
        >
          <PlusCircleIcon className="size-4" />
          Add new
        </Link>
      </Section.Header>
      <Section.Body>
        <h1>Recently added</h1>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Added on</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Name</td>
              <td>Added on</td>
            </tr>
          </tbody>
        </table>
      </Section.Body>
    </Section>
  );
}
