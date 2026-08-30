//* Type definitions
import type { AcademicPeriod, AcademicPeriodStatus } from "./types";

export const ACADEMIC_PERIOD_STATUS_LABELS: Record<
  AcademicPeriodStatus,
  string
> = {
  in_progress: "Em andamento",
  finished: "Encerrado",
};

export const ACADEMIC_PERIODS: AcademicPeriod[] = [
  {
    id: "3-semestre",
    range: "4/2026 - 12/2027/P",
    label: "3º Semestre",
    status: "in_progress",
    class: "Integral - 1º A",
  },
  {
    id: "2-semestre",
    range: "8/2025 - 12/2025/P",
    label: "2º Semestre",
    status: "finished",
    class: "Integral - 1º A",
  },
  {
    id: "1-semestre",
    range: "2/2025 - 7/2025/P",
    label: "1º Semestre",
    status: "finished",
    class: "Integral - 1º A",
  },
];

export function getAcademicPeriod(id: string) {
  return ACADEMIC_PERIODS.find((period) => period.id === id);
}
