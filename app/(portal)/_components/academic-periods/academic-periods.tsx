//* Libraries imports
import Link from "next/link";
import {
  CalendarRangeIcon,
  ChevronRightIcon,
  LibraryBigIcon,
} from "lucide-react";

//* Components imports
import { Panel, PanelHeading } from "@/components/panel";
import { StatusBadge } from "./status-badge";

//* Data imports
import { ACADEMIC_PERIODS } from "./data";

//* Type definitions
import type { AcademicPeriod } from "./types";

export function AcademicPeriods() {
  return (
    <Panel>
      <PanelHeading icon={LibraryBigIcon}>Períodos Letivos</PanelHeading>

      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <p className="text-sm text-muted-foreground">
          Selecione um período letivo para ver os detalhes e as notas.
        </p>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ACADEMIC_PERIODS.map((period) => (
            <li key={period.id}>
              <PeriodLink period={period} />
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

type PeriodLinkProps = {
  period: AcademicPeriod;
};

function PeriodLink(props: PeriodLinkProps) {
  const { period } = props;

  return (
    <Link
      href={`/academic-periods/${period.id}`}
      aria-label={`Abrir período ${period.label}, ${period.range}`}
      className="group flex w-full items-center gap-3 rounded-xl border border-border bg-background p-4 text-left transition-all outline-none hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <CalendarRangeIcon aria-hidden="true" className="size-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">
          {period.label}
        </span>
        <span className="block text-xs text-muted-foreground">
          {period.range}
        </span>
        <StatusBadge status={period.status} className="mt-1" />
      </span>

      <ChevronRightIcon
        aria-hidden="true"
        className="size-4 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-primary"
      />
    </Link>
  );
}
