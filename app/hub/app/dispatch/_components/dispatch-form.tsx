"use client";

import { Form, TextFormField } from "@/components/form";
import { type PropsWithChildren, useActionState } from "react";
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

function FormSection({ children }: PropsWithChildren) {
  return <section className="flex flex-col gap-2 my-4">{children}</section>;
}

export function DispatchForm({
  defaultValues,
}: {
  defaultValues?: Record<string, unknown>;
}) {
  const [state, dispatchAction, isPending] = useActionState(
    submitReportAction,
    {
      action: "input",
      defaults: {},
    },
  );

  if (state.action === "success") {
    return (
      <div className="bg-white px-6 py-4 w-full max-w-lg mx-auto">
        <header>
          <h1>Thank you</h1>
        </header>
        <hr className="my-4" />
        <p>
          Your report has been submitted successfully. The owner of the tag will
          be notified and will reach out to you if necessary.
        </p>
      </div>
    );
  }

  return (
    <Form
      disabled={isPending}
      formProps={{
        action: dispatchAction,
        className: "bg-white px-6 py-4 w-full max-w-lg mx-auto",
      }}
    >
      <header>
        <h1 className="text-xl text-center">Report tag discovery</h1>
      </header>
      <hr className="my-4" />
      <LocationServiceProvider
        consentFallback={<LocationUserConsent />}
        fallback={<>LOADING</>}
      >
        <FormSection>
          <TextFormField
            inputProps={{
              name: "tagId",
              autoComplete: "off",
              required: true,
              defaultValue: state.defaults.tagId || "",
            }}
            label="Tag serial number"
            description="You should be able to find the serial number on the tag itself. Alternatiely, follow the URL on the QR code if it is available."
          />
        </FormSection>
        <FormSection>
          <TextFormField
            inputProps={{
              name: "tagCode",
              autoComplete: "off",
              required: true,
              defaultValue: state.defaults.tagCode || "",
            }}
            label="Verification code"
            description="Each tag comes with an 8 - 12 alphanumeric code for verification purposes."
          />
        </FormSection>
        <FormSection>
          <TextFormField
            inputProps={{
              name: "contactInfo",
              defaultValue: state.defaults.contactInfo || "",
              autoComplete: "email",
            }}
            label="Contact Information (optional)"
            description="Please provide your contact information so that the owner can reach you if necessary."
          />
        </FormSection>
        <FormSection>
          <TextFormField
            multiline
            inputProps={{
              name: "pickupAddress",
              autoComplete: "off",
              rows: 3,
              required: true,
              defaultValue: state.defaults.pickupAddress || "",
            }}
            label="Pick-up location"
            description="Please provide the address where the tagged item can be retrieved. You may also leave it with a trusted location like your local law enforcement office, and provide the necessary details to the location."
          />
        </FormSection>
        <LocationData />
        <button
          type="submit"
          disabled={isPending}
          className="px-3 py-2 bg-violet-600 text-white rounded"
        >
          Submit
        </button>
      </LocationServiceProvider>
    </Form>
  );
}
