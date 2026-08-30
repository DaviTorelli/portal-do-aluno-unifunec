//* Libraries imports
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

//* Components imports
import { buttonVariants } from "@/components/ui/button";
import { StatusBadge } from "../../../_components/academic-periods";

//* Utils imports
import { cn } from "@/lib/utils";

//* Type definitions
import type { AcademicPeriod } from "../../../_components/academic-periods";

type PeriodHeaderProps = {
  period: AcademicPeriod;
};

export function PeriodHeader(props: PeriodHeaderProps) {
  const { period } = props;

  return (
    <div className="flex flex-col gap-5">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "self-start text-muted-foreground hover:text-foreground",
        )}
      >
        <ArrowLeftIcon aria-hidden="true" />
        Voltar para o início
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-lg font-semibold tracking-tight text-foreground">
            {period.label}
          </h1>
          <StatusBadge status={period.status} />
        </div>

        <dl className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
          <PeriodField label="Vigência" value={period.range} />
          <PeriodField label="Turma" value={period.class} />
        </dl>
      </div>
    </div>
  );
}

type PeriodFieldProps = {
  label: string;
  value: string;
};

function PeriodField(props: PeriodFieldProps) {
  return (
    <div>
      <dt className="inline font-semibold text-foreground">{props.label}:</dt>{" "}
      <dd className="inline text-muted-foreground">{props.value}</dd>
    </div>
  );
}
