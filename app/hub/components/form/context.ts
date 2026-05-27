import { createContext } from "react";

export interface IFormContext {
  disabled?: boolean;
  readonly?: boolean;
}

export const FormContext = createContext<IFormContext>({});
