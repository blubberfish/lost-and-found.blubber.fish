import { PropsWithChildren } from "react";

export interface FormFieldContainerProps {
  label: string;
  description?: string;
  targetInputId?: string;
}

export function FormFieldContainer({
  label,
  description,
  children,
  targetInputId,
}: PropsWithChildren<FormFieldContainerProps>) {
  return (
    <fieldset className="group flex flex-col">
      <label className="group-focus-within:text-violet-600 font-semibold" htmlFor={targetInputId}>{label}</label>
      {description && (
        <legend className="text-sm text-black/67">{description}</legend>
      )}
      {children}
    </fieldset>
  );
}
