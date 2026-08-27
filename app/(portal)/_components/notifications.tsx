//* Libraries imports
import { BellIcon } from "lucide-react";

//* Components imports
import { Panel, PanelHeading } from "@/components/panel";

export function Notifications() {
  return (
    <Panel>
      <PanelHeading icon={BellIcon}>Notificações</PanelHeading>
      <div className="flex min-h-52 flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="grid size-11 place-items-center rounded-full bg-muted">
          <BellIcon className="size-5 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground">
          Você não tem novas notificações.
        </p>
      </div>
    </Panel>
  );
}
