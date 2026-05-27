"use client";

import {
  InputHTMLAttributes,
  useEffect,
  useState,
  type TextareaHTMLAttributes,
} from "react";
import { FormFieldContainer } from "./container";
import { shortId } from "../utils";

export type TextFormFieldProps = { label: string; description?: string } & (
  | {
      multiline?: false;
      inputProps?: InputHTMLAttributes<HTMLInputElement>;
    }
  | {
      multiline: true;
      inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    }
);

export function TextFormField({
  label,
  description,
  multiline,
  inputProps,
}: TextFormFieldProps) {
  const [inputId, setInputId] = useState<string | undefined>();
  useEffect(() => {
    const id = inputProps?.id;
    setInputId(() => id || shortId());
  }, [inputProps]);
  return (
    <FormFieldContainer
      label={label}
      description={description}
      targetInputId={inputId}
    >
      {multiline ? (
        <textarea
          className="py-1 border-b focus:border-violet-600 outline-none resize-none"
          {...inputProps}
          id={inputId}
        />
      ) : (
        <input
          className="py-1 border-b focus:border-violet-600 outline-none"
          {...inputProps}
          id={inputId}
          type={inputProps?.type || "text"}
        />
      )}
    </FormFieldContainer>
  );
}
