"use server";

export interface AddNewObjectActionState {
  defaults?: Record<string, unknown>;
}

export async function addNewObjectAction(
  state: AddNewObjectActionState,
  data: FormData,
): Promise<AddNewObjectActionState> {
  const defaults = Object.fromEntries(data);
  console.log("addNewObjectAction called", defaults);
  return { ...state, defaults };
}
