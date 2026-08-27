"use client";

//* Components imports
import { ButtonTooltip } from "./button-tooltip";

//* Utils imports
import { cn } from "@/lib/utils";

//* Types imports
import type { LucideIcon } from "lucide-react";
import type { ButtonProps } from "@/components/ui/button";

export type OptionItem = {
  label: string;
  icon: LucideIcon;
  available: boolean;
  reason?: string;
};

interface OptionButtonProps extends Omit<ButtonProps, "children"> {
  option: OptionItem;
}

export function OptionButton({
  option,
  className,
  disabled,
  ...buttonProps
}: OptionButtonProps) {
  const Icon = option.icon;
  const isUnavailable = !option.available;

  return (
    <ButtonTooltip
      description={option.reason ?? option.label}
      variant="ghost"
      aria-disabled={isUnavailable || disabled}
      aria-label={
        isUnavailable
          ? option.reason
            ? `${option.label}: indisponível. ${option.reason}`
            : `${option.label}: indisponível`
          : option.label
      }
      className={cn(
        "h-auto min-h-32 w-full flex-col gap-3 rounded-xl border p-4 text-center whitespace-normal",
        option.available
          ? "cursor-pointer border-primary/25 bg-primary/5 text-primary hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          : "cursor-help border-border bg-muted/60 text-muted-foreground hover:bg-muted/60 hover:text-muted-foreground",
        className,
      )}
      {...buttonProps}
    >
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-xl",
          option.available
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-white",
        )}
      >
        <Icon aria-hidden className="size-6" />
      </span>
      <span className="text-sm font-semibold leading-5">{option.label}</span>
    </ButtonTooltip>
  );
}
