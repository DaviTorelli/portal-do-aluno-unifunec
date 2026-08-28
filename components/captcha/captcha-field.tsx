"use client";

//* Libraries imports
import { CheckIcon, RefreshCwIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useId, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

//* Components imports
import { ButtonTooltip } from "@/components/button/button-tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

//* Utils imports
import { cn } from "@/lib/utils";

const CAPTCHA_LENGTH = 6;

type CaptchaColors = {
  background: string;
  foreground: string;
};

function getCaptchaColors(): CaptchaColors {
  if (typeof window === "undefined") {
    return {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.3211 0 0)",
    };
  }

  const styles = getComputedStyle(document.documentElement);

  return {
    background: styles.getPropertyValue("--card").trim(),
    foreground: styles.getPropertyValue("--foreground").trim(),
  };
}

type CaptchaFieldProps = {
  onSolvedChange?: (solved: boolean) => void;
};

function CaptchaField({ onSolvedChange }: CaptchaFieldProps) {
  const fieldId = useId();
  const inputId = `${fieldId}-answer`;
  const { resolvedTheme } = useTheme();
  const [answer, setAnswer] = useState<string>("");
  const [isSolved, setIsSolved] = useState<boolean>(false);

  function resetCaptchaState() {
    setAnswer("");
    setIsSolved(false);
    onSolvedChange?.(false);
  }

  function renderCaptcha() {
    const { background, foreground } = getCaptchaColors();
    loadCaptchaEnginge(CAPTCHA_LENGTH, background, foreground);
  }

  function handleRegenerateCaptcha() {
    renderCaptcha();
    resetCaptchaState();
  }

  useEffect(() => {
    let frameId = 0;

    function initCaptcha() {
      const canvas = document.getElementById("canv");
      if (!canvas) {
        frameId = requestAnimationFrame(initCaptcha);
        return;
      }

      renderCaptcha();
      resetCaptchaState();
    }

    initCaptcha();

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [resolvedTheme]);

  useEffect(() => {
    onSolvedChange?.(isSolved);
  }, [isSolved, onSolvedChange]);

  function handleAnswerChange(value: string) {
    setAnswer(value);

    if (!value.trim()) {
      setIsSolved(false);
      return;
    }

    setIsSolved(validateCaptcha(value, false));
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3 rounded-md border p-4 transition-colors",
        isSolved
          ? "border-primary/40 bg-primary/5"
          : "border-border bg-muted/30",
      )}
      aria-labelledby={`${fieldId}-label`}
    >
      <div className="flex flex-col gap-1">
        <Label id={`${fieldId}-label`} htmlFor={inputId}>
          Verificação de segurança
        </Label>
        <p className="text-sm text-muted-foreground">
          Digite os caracteres exibidos na imagem para confirmar que você não é
          um robô.
        </p>
      </div>

      <div
        className={cn(
          "flex items-center justify-between gap-3 rounded-md border border-border bg-card p-3",
          "[&_canvas]:max-w-full [&_canvas]:rounded-sm",
          "[&_#reload_href]:hidden",
        )}
      >
        <LoadCanvasTemplateNoReload />

        <ButtonTooltip
          id="regenerate-captcha-button"
          type="button"
          variant="outline"
          size="icon"
          description="Gerar outro captcha"
          aria-label="Gerar outro captcha"
          onClick={handleRegenerateCaptcha}
        >
          <RefreshCwIcon className="size-4" aria-hidden="true" />
        </ButtonTooltip>
      </div>

      <Input
        id={inputId}
        type="text"
        value={answer}
        onChange={(event) => handleAnswerChange(event.target.value)}
        placeholder="Digite o captcha"
        aria-label="Resposta do captcha"
        aria-invalid={answer !== "" && !isSolved}
        autoComplete="off"
        spellCheck={false}
        required
      />

      {isSolved ? (
        <p
          className="flex items-center gap-1.5 text-sm text-primary"
          role="status"
          aria-live="polite"
        >
          <CheckIcon className="size-4" aria-hidden="true" />
          Verificação concluída
        </p>
      ) : null}
    </div>
  );
}

export { CaptchaField, type CaptchaFieldProps };
