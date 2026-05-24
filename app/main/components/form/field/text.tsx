import {
  InputHTMLAttributes,
  useEffect,
  useState,
  type TextareaHTMLAttributes,
} from "react";
import { FormFieldLabel } from "./label";
import { shortId } from "../utils";

export function TextFormField({
  label,
  multiline,
  inputProps,
}: { label?: string } & (
  | {
      multiline?: false;
      inputProps?: InputHTMLAttributes<HTMLInputElement>;
    }
  | {
      multiline: true;
      inputProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    }
)) {
  const [inputId, setInputId] = useState<string | undefined>();
  useEffect(() => {
    const id = inputProps?.id;
    setInputId(id || shortId());
  }, [inputProps?.id]);
  return (
    <>
      {label && <FormFieldLabel label={label} clickTargetId={inputId} />}
      {multiline ? (
        <textarea {...inputProps} id={inputId} />
      ) : (
        <input {...inputProps} id={inputId} />
      )}
    </>
  );
}
