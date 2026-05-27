import { DispatchForm } from "./_components/dispatch-form";

/**
 * Public-facing page for users to dispatch a new notification that an object was found.
 */
export default async function Page({ searchParams }: PageProps<"/dispatch">) {
  const search = await searchParams;
  return (
    <>
      <header className="px-9 py-6 bg-slate-800 text-white"></header>
      <section className="px-9 py-6 bg-slate-300"></section>
      <section className="px-9 py-6">
        <DispatchForm />
      </section>
    </>
  );
}
