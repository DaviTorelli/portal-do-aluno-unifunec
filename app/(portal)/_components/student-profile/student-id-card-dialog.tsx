"use client";

//* Library imports
import { IdCardIcon } from "lucide-react";

//* Component imports
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";

type StudentIdCardDialogProps = {
  children: React.ReactNode;
};

export function StudentIdCardDialog({ children }: StudentIdCardDialogProps) {
  return (
    <DialogRoot>
      <DialogTrigger
        id="ver-carteirinha-button"
        render={
          <Button variant="outline" size="sm" type="button" className="w-fit gap-1.5">
            <IdCardIcon className="size-5" aria-hidden="true" />
            Ver carteirinha
          </Button>
        }
      />

      <DialogContent
        title="Carteirinha de Estudante"
        icon={IdCardIcon}
        titleId="student-id-card-title"
        showClose
        closeLabel="Fechar carteirinha"
        className="max-w-xl"
        contentClassName="p-4 sm:p-5"
      >
        {children}
      </DialogContent>
    </DialogRoot>
  );
}
