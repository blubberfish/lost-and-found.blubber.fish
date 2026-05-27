"use client";

import { Form, TextFormField } from "@/components/form";
import { useActionState } from "react";
import {
  LocationServiceProvider,
  useLocation,
  useLocationConsent,
} from "./location-service";
import { submitReportAction } from "../_actions/submit-report";

function LocationUserConsent() {
  const { allow } = useLocationConsent();
  return (
    <section className="flex flex-col gap-2 my-4">
      <h2 className="text-xl">
        You must allow location access to use this service.
      </h2>
      <p className="text-sm ">
        Your general location will be used to provide accurate reporting and to
        ensure the safety of all users.
      </p>
      <button
        className="px-3 py-2 bg-violet-600 text-white rounded"
        type="button"
        onClick={allow}
      >
        Allow Location
      </button>
    </section>
  );
}

function LocationData() {
  const locationData = useLocation();
  if (!locationData) return null;
  return (
    <>
      <input type="hidden" name="latitude" value={locationData.latitude} />
      <input type="hidden" name="longitude" value={locationData.longitude} />
    </>
  );
}

export function DispatchForm({
  defaultValues,
}: {
  defaultValues?: Record<string, unknown>;
}) {
  const [state, dispatchAction, isPending] = useActionState(
    submitReportAction,
    {},
  );
  return (
    <Form
      disabled={isPending}
      formProps={{ className: "bg-white px-6 py-4 w-full max-w-lg mx-auto" }}
    >
      <header>
        <h1 className="text-xl text-center">FORM TITLE</h1>
      </header>
      <hr className="my-4" />
      <LocationServiceProvider
        consentFallback={<LocationUserConsent />}
        fallback={<>LOADING</>}
      >
        <section>
          <TextFormField
            inputProps={{ name: "field1", autoComplete: "off" }}
            label="Field 1"
            description="This is a description for Field 1"
          />
        </section>
        <LocationData />
      </LocationServiceProvider>
    </Form>
  );
}
