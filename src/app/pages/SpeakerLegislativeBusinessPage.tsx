import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { SpeakerLegislativeBusinessContent } from "../components/SpeakerLegislativeBusinessContent";

/** Speaker's Legislative Business page — manage & moderate bill debate and amendments */
export default function SpeakerLegislativeBusinessPage() {
  return (
    <div className="bg-[var(--input-background)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="speaker-legislative-business" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="absolute flex flex-col gap-[16px] items-start page-inset-x top-[100px] bottom-[32px] overflow-hidden">
        <SpeakerLegislativeBusinessContent />
      </div>
    </div>
  );
}