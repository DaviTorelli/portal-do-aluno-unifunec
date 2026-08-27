//* Libraries imports
import type * as React from "react";
import Link from "next/link";

//* Components imports
import {
  Button,
  buttonVariants,
  type ButtonProps,
} from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ButtonTooltipProps extends ButtonProps {
  description: string;
  href?: string;
  children: React.ReactNode;
  transparent?: boolean;
}

/**
 * @example
 * ```tsx
 * // ✅ Correct
 * <ButtonTooltip description="See item" href="/view/item">
 *   <Eye className="size-4" />
 * </ButtonTooltip>
 *
 * // ✅ Correct with no href
 * <ButtonTooltip description="See item" onClick={() => console.log("Clicked")}>
 *   <Eye className="size-4" />
 * </ButtonTooltip>
 *
 * // ✅ Correct with transparent prop
 * <ButtonTooltip description="See item" transparent onClick={() => console.log("Clicked")}>
 *   <Eye className="size-4" />
 * </ButtonTooltip>
 *
 * //❌ Incorrect
 * <ButtonTooltip description="See item">
 *   <Eye className="size-4" />
 * </ButtonTooltip>
 * ```
 */
export function ButtonTooltip({
  description,
  href,
  children,
  transparent = false,
  ...buttonProps
}: ButtonTooltipProps) {
  const ButtonComponent = href ? (
    <Link
      id={buttonProps.id}
      href={href}
      className={buttonVariants({
        variant: transparent ? "ghost" : buttonProps.variant,
      })}
      aria-label={buttonProps["aria-label"]}
    >
      {children}
    </Link>
  ) : (
    <Button
      type="button"
      variant={transparent ? "ghost" : buttonProps.variant}
      className={cn(
        transparent && "border-0 bg-transparent hover:bg-transparent",
        buttonProps.className,
      )}
      {...buttonProps}
    >
      {children}
    </Button>
  );

  const TooltipWrapper = (
    <Tooltip.Root>
      <Tooltip.Trigger render={ButtonComponent} />
      <Tooltip.Content>
        <p>{description}</p>
      </Tooltip.Content>
    </Tooltip.Root>
  );

  return TooltipWrapper;
}
