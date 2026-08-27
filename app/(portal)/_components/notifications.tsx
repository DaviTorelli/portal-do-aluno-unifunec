"use client";

//* Libraries imports
import { useState } from "react";
import { BellIcon, Trash2Icon } from "lucide-react";

//* Components imports
import { Panel, PanelHeading } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

//* Utils imports
import { cn } from "@/lib/utils";

type Notification = {
  id: number;
  title: string;
  description: string;
  read: boolean;
};

const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: "Boleto disponível",
    description: "A mensalidade de setembro já está disponível para pagamento.",
    read: false,
  },
  {
    id: 2,
    title: "Notas publicadas",
    description: "Suas notas do bimestre foram lançadas no sistema.",
    read: true,
  },
  {
    id: 3,
    title: "Aula remarcada",
    description:
      "A disciplina de Cálculo foi transferida para quinta-feira às 14h.",
    read: false,
  },
  {
    id: 4,
    title: "Documentos pendentes",
    description:
      "Envie o comprovante de residência atualizado até sexta-feira.",
    read: false,
  },
  {
    id: 5,
    title: "Biblioteca",
    description: "O livro emprestado vence em 3 dias. Renove pelo portal.",
    read: true,
  },
  {
    id: 6,
    title: "Evento acadêmico",
    description: "A Semana de Tecnologia começa na próxima segunda-feira.",
    read: true,
  },
];

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>(
    INITIAL_NOTIFICATIONS,
  );

  function removeNotification(id: number) {
    setNotifications((current) =>
      current.filter((notification) => notification.id !== id),
    );
  }

  return (
    <Panel>
      <PanelHeading icon={BellIcon}>Notificações</PanelHeading>
      <div className="h-52">
        {notifications.length === 0 ? (
          <EmptyNotifications />
        ) : (
          <ScrollArea className="h-full">
            <ul className="divide-y divide-border/70">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onRemove={removeNotification}
                />
              ))}
            </ul>
          </ScrollArea>
        )}
      </div>
    </Panel>
  );
}

type NotificationItemProps = {
  notification: Notification;
  onRemove: (id: number) => void;
};

function NotificationItem(props: NotificationItemProps) {
  return (
    <li
      key={props.notification.id}
      className="group flex items-start gap-3 px-5 py-4 sm:px-6"
    >
      <span
        className={cn(
          "mt-2 size-2 shrink-0 rounded-full",
          props.notification.read ? "bg-muted-foreground/40" : "bg-primary",
        )}
        aria-label={props.notification.read ? "Lida" : "Não lida"}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">
          {props.notification.title}
        </p>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {props.notification.description}
        </p>
      </div>
      <Button
        id={`remove-notification-${props.notification.id}`}
        aria-label={`Remover notificação: ${props.notification.title}`}
        variant="ghost"
        size="icon-sm"
        className="shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 hover:text-destructive"
        onClick={() => props.onRemove(props.notification.id)}
      >
        <Trash2Icon />
      </Button>
    </li>
  );
}

function EmptyNotifications() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="grid size-11 place-items-center rounded-full bg-muted">
        <BellIcon className="size-5 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground">
        Você não tem novas notificações.
      </p>
    </div>
  );
}
