"use client";
//* Libraries imports
import {
  BadgeCheckIcon,
  BookOpenIcon,
  FileQuestionIcon,
  FileTextIcon,
  LightbulbIcon,
  LockKeyholeIcon,
  MenuIcon,
  ScrollTextIcon,
} from "lucide-react";

//* Components imports
import { Panel, PanelHeading } from "@/components/panel";
import {
  OptionButton,
  type OptionItem,
} from "@/components/button/option-button";

export function QuickActions() {
  const options: OptionItem[] = [
    { label: "Boletos de Mensalidades", icon: FileTextIcon, available: true },
    { label: "Arquivos e aulas", icon: BookOpenIcon, available: true },
    {
      label: "Alterar senha de acesso",
      icon: LockKeyholeIcon,
      available: true,
      href: "/change-password",
    },
    {
      label: "Solicitação de Carteirinha",
      icon: BadgeCheckIcon,
      available: false,
      reason:
        "A solicitação de carteirinha estará disponível após a confirmação da matrícula.",
    },
    {
      label: "Serviços",
      icon: ScrollTextIcon,
      available: false,
      reason:
        "Os serviços estão temporariamente indisponíveis para este perfil de aluno.",
    },
    {
      label: "Manuais",
      icon: FileQuestionIcon,
      available: false,
      reason: "Os manuais ainda não foram liberados pela secretaria acadêmica.",
    },
  ];

  return (
    <Panel>
      <PanelHeading icon={MenuIcon}>Opções</PanelHeading>
      <div className="flex flex-col p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {options.map((option) => (
            <OptionButton key={option.label} option={option} type="button" />
          ))}
        </div>
        <p className="mt-7 flex items-center gap-2 text-xs leading-5 text-muted-foreground">
          <LightbulbIcon aria-hidden="true" className="size-3.5 shrink-0" />
          Passe o mouse ou use Tab sobre uma opção cinza para saber por que ela
          está indisponível.
        </p>
      </div>
    </Panel>
  );
}
