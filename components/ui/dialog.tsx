"use client";

//* Library imports
import type { LucideIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

//* Component imports
import { Button } from "@/components/ui/button";

//* Utils imports
import { cn } from "@/lib/utils";

function DialogRoot({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal {...props} />;
}

function DialogBackdrop({
  className,
  ...props
}: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

function DialogPopup({
  className,
  children,
  ...props
}: DialogPrimitive.Popup.Props) {
  return (
    <DialogPrimitive.Popup
      data-slot="dialog-popup"
      className={cn(
        "fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border/70 bg-background shadow-xl shadow-primary/10 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Popup>
  );
}

function DialogTitle({
  className,
  ...props
}: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-base font-semibold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

type DialogContentProps = DialogPrimitive.Popup.Props & {
  title?: string;
  icon?: LucideIcon;
  titleId?: string;
  showClose?: boolean;
  closeLabel?: string;
  contentClassName?: string;
};

function DialogContent({
  title,
  icon: Icon,
  titleId,
  showClose,
  closeLabel = "Fechar",
  className,
  contentClassName,
  children,
  ...props
}: DialogContentProps) {
  const hasHeader = Boolean(title || Icon || showClose);
  const shouldShowClose = showClose ?? hasHeader;

  return (
    <DialogPortal>
      <DialogBackdrop />
      <DialogPopup
        className={cn("flex flex-col overflow-hidden p-0", className)}
        {...props}
        aria-labelledby={titleId ?? props["aria-labelledby"]}
      >
        {hasHeader ? (
          <div className="flex items-center justify-between gap-3 border-b border-border/70 px-5 py-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-2">
              {Icon ? (
                <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
              ) : null}
              {title ? (
                <DialogTitle
                  id={titleId}
                  className="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base"
                >
                  {title}
                </DialogTitle>
              ) : null}
            </div>
            {shouldShowClose ? (
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    type="button"
                    aria-label={closeLabel}
                  >
                    <XIcon />
                  </Button>
                }
              />
            ) : null}
          </div>
        ) : null}
        <div className={cn("min-h-0 flex-1", contentClassName)}>{children}</div>
      </DialogPopup>
    </DialogPortal>
  );
}

export {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContent,
};
