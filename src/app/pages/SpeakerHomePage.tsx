import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";

export default function SpeakerHomePage() {
  return (
    <div className="bg-[#f8f9fb] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="dashboard" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Empty State */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[200px] bottom-[32px]">
        <div className="flex items-center justify-center size-[64px] rounded-[var(--radius-card)] bg-[var(--sidebar-primary)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 14.5C9.33 14.5 4 15.84 4 18.5V20H20V18.5C20 15.84 14.67 14.5 12 14.5ZM12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="var(--muted-foreground)" />
          </svg>
        </div>
        <div className="flex flex-col gap-[8px] items-center text-center max-w-[400px]">
          <p className="font-semibold leading-[24px] text-[var(--foreground)] text-[20px]">
            Speaker Dashboard
          </p>
          <p className="leading-[20px] text-[var(--muted-foreground)] text-[14px]">
            This view is coming soon. You'll be able to manage parliamentary sessions from here.
          </p>
        </div>
      </div>
    </div>
  );
}
