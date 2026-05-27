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
      <label htmlFor={targetInputId}>
        <legend className="group-focus-within:text-violet-600 font-semibold">
          {label}
        </legend>
        {description && (
          <aside className="text-xs text-black/67">{description}</aside>
        )}
      </label>
      {children}
    </fieldset>
  );
}
