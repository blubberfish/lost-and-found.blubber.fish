"use server";

export interface TagReport {
  tagId: string;
  tagCode: string;
  pickupAddress: string;
  latitude: number;
  longitude: number;
  contactInfo?: string;
}

export type State = {
  action: "input" | "success";
  defaults: Partial<TagReport>;
  validationErrors?: Record<string, string>;
};

export async function submitReportAction(
  previousState: State,
  data: FormData,
): Promise<State> {
  return {
    action: "success",
    defaults: Object.fromEntries(data) as Partial<TagReport>,
  };
}
