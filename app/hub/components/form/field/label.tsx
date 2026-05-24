import { type PropsWithChildren } from "react";

export function FormFieldLabel({
  children,
  clickTargetId,
  label,
}: PropsWithChildren<{ label?: string; clickTargetId?: string }>) {
  return (
    <>
      {label && <label htmlFor={clickTargetId}>{label}</label>}
      {children}
    </>
  );
}
