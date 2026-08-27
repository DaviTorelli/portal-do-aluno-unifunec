//* Components imports
import { PortalFooter, PortalHeader } from "./_components";

type PortalLayoutProps = {
  children: React.ReactNode;
}
export default function PortalLayout(props: PortalLayoutProps) {
  return (
    <div className="flex min-h-svh flex-1 flex-col bg-muted/60 text-foreground">
      <PortalHeader />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        {props.children}
      </main>
      <PortalFooter />
    </div>
  );
}
