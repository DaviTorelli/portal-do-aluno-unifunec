//* Component imports
import { UserAvatar } from "@/components/user-avatar";

//* Type definitions
import type { StudentProfileData } from "./types";

type StudentIdCardProps = {
  student: StudentProfileData;
};

export function StudentIdCard(props: StudentIdCardProps) {
  return (
    <article
      className="overflow-hidden rounded-xl border border-border/60 bg-background shadow-sm"
      aria-label="Carteirinha digital de estudante"
    >
      {/* Institutional strip */}
      <header className="relative overflow-hidden bg-linear-to-r from-primary via-primary to-primary/80 px-5 py-3.5 text-primary-foreground sm:px-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 90% 50%, white 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex items-end justify-between gap-3 flex-wrap">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold tracking-[0.2em] uppercase">
              UNIFUNEC
            </span>
            <span className="text-[11px] leading-tight text-primary-foreground/85">
              Centro Universitário de Santa Fé do Sul
            </span>
          </div>
          <span className="rounded-md border border-primary-foreground/25 bg-primary-foreground/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase max-sm:w-full max-sm:text-center">
            Pós-graduação
          </span>
        </div>
      </header>

      {/* Card body */}
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-stretch sm:gap-6 sm:p-6">
        {/* Photo */}
        <div className="flex shrink-0 flex-col items-center gap-2 sm:items-start">
          <UserAvatar
            name={props.student.name}
            photoUrl={props.student.photoUrl}
            className="aspect-[3/4] w-28 rounded-lg border border-border/70 shadow-sm sm:w-32"
            sizes="128px"
          />
        </div>

        {/* Fields — typography only, no input-like boxes */}
        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                Nome
              </span>
              <p className="text-base font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
                {props.student.name}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                Curso
              </span>
              <p className="text-sm leading-snug text-foreground/90">
                {props.student.course}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                  Matrícula
                </span>
                <p className="font-mono text-sm font-medium tabular-nums text-foreground">
                  {props.student.rm}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                  Validade
                </span>
                <p className="text-sm font-medium tabular-nums text-foreground">
                  {props.student.validUntil}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-muted/30 px-5 py-2.5 sm:px-6">
        <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
          Documento digital
        </span>
      </footer>
    </article>
  );
}
