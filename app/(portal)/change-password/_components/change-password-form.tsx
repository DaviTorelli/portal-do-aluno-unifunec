"use client";

//* Libraries imports
import { AlertCircleIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type SubmitEvent, useState } from "react";
import { toast } from "sonner";

//* Components imports
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ButtonTooltip } from "@/components/button/button-tooltip";
import { Separator } from "@/components/ui/separator";
import { PasswordInput } from "@/components/input";

const TEST_PASSWORD = "12345678";

function validatePasswordChange(
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
): string | null {
  if (currentPassword !== TEST_PASSWORD) {
    return "Senha incorreta";
  }

  if (newPassword.length < 6) {
    return "A senha deve ter no mínimo 6 caracteres";
  }

  if (newPassword !== confirmPassword) {
    return "As senhas novas não coincidem";
  }

  return null;
}

export function ChangePasswordForm() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  function clearError() {
    if (error) {
      setError(null);
    }
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validatePasswordChange(
      currentPassword,
      newPassword,
      confirmPassword,
    );

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);
    toast.success("Senha alterada com sucesso.");
    router.push("/");
  }

  return (
    <Card.Root className="w-full max-w-md">
      <Card.Header className="has-data-[slot=card-action]:grid-cols-[1fr_auto]">
        <Card.Title>Alterar senha</Card.Title>
        <Card.Action>
          <ButtonTooltip
            id="test-password-info"
            type="button"
            description={`Senha para testes: ${TEST_PASSWORD}`}
            variant="ghost"
            aria-label="Informação sobre a senha de teste"
          >
            <InfoIcon className="size-4" aria-hidden="true" />
          </ButtonTooltip>
        </Card.Action>
      </Card.Header>

      <form onSubmit={handleSubmit}>
        <Card.Content className="gap-4">
          {error ? (
            <Alert variant="destructive">
              <AlertCircleIcon aria-hidden="true" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}

          <div className="flex flex-col gap-2">
            <Label htmlFor="current-password">Senha atual</Label>
            <PasswordInput
              id="current-password"
              value={currentPassword}
              onChange={(event) => {
                setCurrentPassword(event.target.value);
                clearError();
              }}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="new-password">Nova senha</Label>
            <PasswordInput
              id="new-password"
              value={newPassword}
              onChange={(event) => {
                setNewPassword(event.target.value);
                clearError();
              }}
              autoComplete="new-password"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="confirm-password">Confirmar nova senha</Label>
            <PasswordInput
              id="confirm-password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
                clearError();
              }}
              autoComplete="new-password"
              required
            />
          </div>
        </Card.Content>

        <Separator className="my-5" />

        <Card.Footer className="gap-3 justify-end">
          <Button
            id="back-to-portal-button"
            variant="outline"
            render={<Link href="/" />}
          >
            Voltar
          </Button>
          <Button id="change-password-button" type="submit">
            Alterar senha
          </Button>
        </Card.Footer>
      </form>
    </Card.Root>
  );
}
