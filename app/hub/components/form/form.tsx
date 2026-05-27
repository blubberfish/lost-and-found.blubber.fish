"use client";

import {
  type FormHTMLAttributes,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { FormContext, IFormContext } from "./context";

export function Form({
  children,
  formProps,
  disabled,
  readonly,
}: PropsWithChildren<{
  disabled?: boolean;
  readonly?: boolean;
  formProps?: Omit<FormHTMLAttributes<HTMLFormElement>, "children">;
}>) {
  const [context, setContext] = useState<IFormContext>({});
  useEffect(() => {
    setContext(() => ({ disabled, readonly }));
  }, [disabled, readonly]);
  return (
    <FormContext.Provider value={context}>
      <form
        {...formProps}
        aria-disabled={context.disabled}
        aria-readonly={context.readonly}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}
