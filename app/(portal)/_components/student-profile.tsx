//* Library imports
import { IdCardIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";

//* Component imports
import { Panel, PanelHeading } from "@/components/panel";
import { Button } from "@/components/ui/button";

//* Type definitions
type StudentProfileData = {
  name: string;
  rm: string;
  course: string;
  academicPeriod: string;
  class: string;
  photoUrl?: string;
};

// Student profile mock data
const student: StudentProfileData = {
  name: "Nome do aluno completo",
  rm: "12345",
  course: "Especialização em Desenvolvimento de Software para Web",
  academicPeriod: "1º Semestre",
  class: "Integral - 1º A",
  photoUrl: undefined,
};

export function StudentProfile() {
  return (
    <Panel>
      <PanelHeading icon={UserRoundIcon}>Perfil do Aluno</PanelHeading>

      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
        {/* Student photo */}
        <div className="flex shrink-0 flex-col items-center gap-2">
          <div className="relative size-24 overflow-hidden rounded-full border-2 border-primary/30 bg-muted shadow-md">
            {student.photoUrl ? (
              <Image
                src={student.photoUrl}
                alt={`Foto de ${student.name}`}
                fill
                className="object-cover"
                sizes="96px"
                priority
              />
            ) : (
              <div className="flex size-full items-center justify-center">
                <UserRoundIcon
                  className="size-12 text-muted-foreground/50"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
          <p className="max-w-32 wrap-break-word text-center text-xs font-semibold leading-tight tracking-tight text-foreground">
            {student.name}
          </p>
        </div>

        {/* Vertical divider (visible on larger screens only) */}
        <div
          className="hidden w-px self-stretch bg-border/70 sm:block"
          aria-hidden="true"
        />

        {/* Academic info */}
        <div className="flex flex-1 flex-col gap-4">
          <dl className="flex flex-col gap-2.5 text-sm">
            <ProfileField label="RM" value={student.rm} />
            <ProfileField label="Curso" value={student.course} />
            <ProfileField label="Período Letivo" value={student.academicPeriod} />
            <ProfileField label="Turma" value={student.class} />
          </dl>

          {/* Student ID card button */}
          <Button
            id="ver-carteirinha-button"
            variant="outline"
            size="sm"
            type="button"
            className="w-fit gap-1.5"
            disabled
          >
            <IdCardIcon className="size-5" aria-hidden="true" />
            Ver carteirinha
          </Button>
        </div>
      </div>
    </Panel>
  );
}

type ProfileFieldProps = {
  label: string;
  value: string;
};

function ProfileField(props: ProfileFieldProps) {
  return (
    <div>
      <dt className="inline font-semibold text-foreground">{props.label}:</dt>{" "}
      <dd className="inline text-muted-foreground">{props.value}</dd>
    </div>
  );
}
