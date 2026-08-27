//* Components imports
import { Fragment } from "react";
import {
  AcademicPeriods,
  Notifications,
  QuickActions,
  StudentProfile,
} from "./_components";

export default function PortalPage() {
  return (
    <Fragment>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <StudentProfile />
        <Notifications />
      </div>

      <AcademicPeriods />

      <QuickActions />
    </Fragment>
  );
}
