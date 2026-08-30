//* Libraries imports
import { notFound } from "next/navigation";
import { LibraryBigIcon } from "lucide-react";

//* Components imports
import { Panel, PanelHeading } from "@/components/panel";
import { PeriodGrades, PeriodHeader } from "./_components";

//* Data imports
import {
  ACADEMIC_PERIODS,
  getAcademicPeriod,
} from "../../_components/academic-periods";

export function generateStaticParams() {
  return ACADEMIC_PERIODS.map((period) => ({ periodId: period.id }));
}

export default async function AcademicPeriodPage(
  props: PageProps<"/academic-periods/[periodId]">,
) {
  const { periodId } = await props.params;
  const period = getAcademicPeriod(periodId);

  if (!period) notFound();

  return (
    <Panel>
      <PanelHeading icon={LibraryBigIcon}>Períodos Letivos</PanelHeading>

      <div className="flex flex-col gap-5 p-5 sm:p-6">
        <PeriodHeader period={period} />
        <PeriodGrades period={period} />
      </div>
    </Panel>
  );
}
