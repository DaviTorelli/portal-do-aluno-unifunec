export type AcademicPeriodStatus = "in_progress" | "finished";

export type AcademicPeriod = {
  id: string;
  range: string;
  label: string;
  status: AcademicPeriodStatus;
  class: string;
};
