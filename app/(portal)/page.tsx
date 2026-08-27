//* Components imports
import {
  AcademicPeriods,
  Faculty,
  Notifications,
  QuickActions,
  StudentProfile,
} from "./_components";

export default function PortalPage() {
  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <StudentProfile />
        <Faculty />
      </div>

      <AcademicPeriods />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)]">
        <QuickActions />
        <Notifications />
      </div>
    </>
  );
}
