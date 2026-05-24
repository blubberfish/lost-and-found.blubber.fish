import { NewObjectForm } from "./_components/new-object-form";

export default function Page() {
  return (
    <>
      <header className="">
        <div className="max-w-7xl mx-auto px-6 py-4">Register object</div>
        <NewObjectForm fieldUserId="123" />
      </header>
    </>
  );
}
