//* Utils imports
import { cn } from "@/lib/utils";

//* Data imports
import { ACADEMIC_PERIOD_STATUS_LABELS } from "./data";

//* Type definitions
import type { AcademicPeriodStatus } from "./types";

type StatusBadgeProps = {
  status: AcademicPeriodStatus;
  className?: string;
};

export function StatusBadge(props: StatusBadgeProps) {
  const isInProgress = props.status === "in_progress";

  return (
    <span
      className={cn(
        "inline-block rounded-full px-2 py-0.5 text-[11px] font-medium",
        isInProgress
          ? "bg-primary/10 text-primary"
          : "bg-muted text-muted-foreground",
        props.className,
      )}
    >
      {ACADEMIC_PERIOD_STATUS_LABELS[props.status]}
    </span>
  );
}
