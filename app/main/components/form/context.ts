import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface IFormContext {
  disabled?: boolean;
  getData(): Record<string, unknown>;
  getFieldValue<T = unknown>(name: string): T | undefined;
  setFieldValue<T = unknown>(name: string, value: T): void;
}

export const FormContext = createContext<IFormContext>({
  disabled: false,
  getFieldValue() {
    console.warn("[FormContext]", "[getField]", "context unavailable.");
    return undefined;
  },
  setFieldValue() {
    console.warn("[FormContext]", "[setField]", "context unavailable.");
  },
  getData() {
    console.warn("[FormContext]", "[getData]", "context unavailable.");
    return {};
  },
});

export function useFormFieldData<T = unknown>(name: string) {
  const context = useContext(FormContext);
  const [inner, setInner] = useState<T | undefined>();
  useEffect(() => {
    if (!context) return;
    context.setFieldValue(name, inner);
  }, [context?.setFieldValue, inner]);
  return [inner, setInner] as const;
}

export function useFormFieldDisabled(state?: boolean) {
  const context = useContext(FormContext);
  return useMemo(() => state ?? context?.disabled, [context, state]);
}
