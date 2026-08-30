//* Local imports
import packageJson from "../../../package.json";

export function PortalFooter() {
  return (
    <footer className="border-t border-border bg-background px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <span className="font-medium text-foreground">
          UNIFUNEC · Centro Universitário de Santa Fé do Sul
        </span>
        <span>Copyright © {new Date().getFullYear()} - UNIFUNEC. Todos os direitos reservados.</span>
        <span className="font-mono">v{packageJson.version}</span>
      </div>
    </footer>
  );
}
