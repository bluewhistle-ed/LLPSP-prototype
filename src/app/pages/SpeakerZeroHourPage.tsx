import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { ZeroHourContent } from "../components/SittingShared";

/** Speaker's Zero Hour page — manage & moderate the Zero Hour session */
export default function SpeakerZeroHourPage() {
  return (
    <div className="bg-[var(--input-background)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="speaker-zero-hour" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start page-inset-x top-[100px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[calc(100vh-148px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ZeroHourContent />
        </div>
      </div>
    </div>
  );
}
