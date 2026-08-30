//* Library imports
import { UserRoundIcon } from "lucide-react";

//* Component imports
import { Panel, PanelHeading } from "@/components/panel";
import { UserAvatar } from "@/components/user-avatar";
import { StudentIdCard } from "./student-id-card";
import { StudentIdCardDialog } from "./student-id-card-dialog";

//* Type definitions
import type { StudentProfileData } from "./types";

const student: StudentProfileData = {
  name: "John Doe",
  rm: "12345",
  course: "Especialização em Desenvolvimento de Software para Web",
  academicPeriod: "1º Semestre",
  class: "Integral - 1º A",
  photoUrl: undefined,
  validUntil: "19/12/2027",
};

export function StudentProfile() {
  return (
    <Panel>
      <PanelHeading icon={UserRoundIcon}>Perfil do Aluno</PanelHeading>

      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:p-6">
        {/* Student photo */}
        <div className="flex shrink-0 flex-col items-center gap-2">
          <UserAvatar
            name={student.name}
            photoUrl={student.photoUrl}
            className="size-24 rounded-full border-2 border-primary/30 shadow-md"
            sizes="96px"
            priority
          />
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

          <StudentIdCardDialog>
            <StudentIdCard student={student} />
          </StudentIdCardDialog>
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
