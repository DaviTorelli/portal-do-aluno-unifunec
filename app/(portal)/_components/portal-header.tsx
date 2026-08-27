//* Libraries imports
import { GraduationCap, LogOut } from "lucide-react";

//* Components imports
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/button";

export function PortalHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm sm:size-11">
            <GraduationCap className="size-6" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold leading-none tracking-tight sm:text-base">
              Central do Aluno
            </span>
            <span className="mt-1 text-xs text-muted-foreground">
              Área acadêmica
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeButton />

          <Button id="logout-button" variant="destructive" type="button">
            <LogOut className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
