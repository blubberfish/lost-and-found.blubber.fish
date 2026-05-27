"use server";

export interface TagReport {

}

export interface State {
    validationErrors?: Record<string, string>;
    submittedData?: Record<string, unknown>;
}

export async function submitReportAction(state: State): Promise<State> {
  console.log("submitReportAction called");
  return state;
}
