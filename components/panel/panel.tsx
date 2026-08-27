//* Types imports
import type { LucideIcon } from "lucide-react";

//* Utils imports
import { cn } from "@/lib/utils";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};
export function Panel(props: PanelProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border/70 bg-background/95 shadow-xl shadow-primary/5 backdrop-blur-sm",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
}

type PanelHeadingProps = {
  icon: LucideIcon;
  children: React.ReactNode;
};
export function PanelHeading(props: PanelHeadingProps) {
  const Icon = props.icon;

  return (
    <div className="flex items-center gap-2 border-b border-border/70 px-5 py-4 sm:px-6">
      <Icon className="size-5 text-primary" aria-hidden="true" />
      <h2 className="text-sm font-semibold tracking-tight text-foreground sm:text-base">
        {props.children}
      </h2>
    </div>
  );
}
