"use client";
//* Libraries imports
import { forwardRef, useState } from "react";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

//* Components imports
import { Button } from "@/components/ui/button";
import { Input, type InputProps } from "@/components/ui/input";

//* Utils imports
import { cn } from "@/lib/utils";

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { disabled } = props;

    return (
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          className={cn("hide-password-toggle pr-10", className)}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={disabled}
        >
          {showPassword && !disabled ? (
            <EyeIcon className="size-4" aria-hidden="true" />
          ) : (
            <EyeClosedIcon className="size-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? "Esconder a senha" : "Exibir a senha"}
          </span>
        </Button>

        {/* hides browsers password toggles */}
        <style>{`
          .hide-password-toggle::-ms-reveal,
          .hide-password-toggle::-ms-clear {
            visibility: hidden;
            pointer-events: none;
            display: none;
          }
        `}</style>
      </div>
    );
  },
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
