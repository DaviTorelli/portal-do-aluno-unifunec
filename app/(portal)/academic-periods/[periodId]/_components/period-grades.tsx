//* Libraries imports
import { FileTextIcon } from "lucide-react";

//* Components imports
import { Button } from "@/components/ui/button";

//* Type definitions
import type { AcademicPeriod } from "../../../_components/academic-periods";

type PeriodGradesProps = {
  period: AcademicPeriod;
};

export function PeriodGrades(props: PeriodGradesProps) {
  const { period } = props;

  return (
    <div className="rounded-xl border border-border/70 bg-muted/30 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-foreground">
            Notas do Período
          </h2>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Consulte o boletim completo com as notas de {period.label}.
          </p>
        </div>

        <Button className="shrink-0">
          <FileTextIcon aria-hidden="true" />
          Abrir boletim em PDF
        </Button>
      </div>
    </div>
  );
}
