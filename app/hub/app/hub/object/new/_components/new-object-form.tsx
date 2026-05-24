"use client";

import { Form, shortId, TextFormField } from "@/components/form";
import { useActionState, useRef } from "react";
import { addNewObjectAction } from "../_actions/add-new-object";

export function NewObjectForm({ fieldUserId }: { fieldUserId: string }) {
  const { current: inputId } = useRef(shortId());
  const [state, dispatchAction, actionPending] = useActionState(
    addNewObjectAction,
    {},
  );

  return (
    <form action={dispatchAction}>
      <TextFormField
        label="Name"
        inputProps={{
          id: inputId,
          name: "name",
          autoComplete: "name",
          defaultValue: state.defaults?.name as string,
        }}
      />
      <input type="hidden" name="userid" value={fieldUserId} />
      <button type="submit" disabled={actionPending}>
        Submit
      </button>
    </form>
  );
}
