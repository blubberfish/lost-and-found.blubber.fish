"use client";

import {
  type FormHTMLAttributes,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { FormContext } from "./context";

export function Form({
  children,
  formProps,
  disabled,
}: PropsWithChildren<{
  disabled?: boolean;
  formProps?: FormHTMLAttributes<HTMLFormElement>;
}>) {
  const base = useContext(FormContext);
  const [context, setContext] = useState(base);
  useEffect(() => {
    const data: Record<string, unknown> = {};
    setContext((prev) => ({
      ...prev,
      getData() {
        return { ...data };
      },
      getFieldValue<T = unknown>(name: string) {
        return data[name] as T;
      },
      setFieldValue<T = unknown>(name: string, value: T) {
        data[name] = value;
      },
    }));
  }, []);
  useEffect(() => {
    setContext((prev) => ({ ...prev, disabled }));
  }, [disabled]);

  return (
    <FormContext.Provider value={context}>
      <form {...formProps}>{children}</form>
    </FormContext.Provider>
  );
}
