import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { SpeakerQuestionHourContent } from "../components/SpeakerQuestionHourContent";

/** Speaker's Question Hour page — manage & moderate the Question Hour session */
export default function SpeakerQuestionHourPage() {
  return (
    <div className="bg-[var(--input-background)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="speaker-question-hour" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start page-inset-x top-[100px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[calc(100vh-148px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <SpeakerQuestionHourContent />
        </div>
      </div>
    </div>
  );
}
