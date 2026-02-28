import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";

export default function MentorHomePage() {
  return (
    <div className="bg-[#f8f9fb] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="mentor-dashboard" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Empty State */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-center justify-center left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[200px] bottom-[32px]">
        <div className="flex items-center justify-center size-[64px] rounded-[var(--radius-card)] bg-[var(--sidebar-primary)]">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="var(--muted-foreground)" />
          </svg>
        </div>
        <div className="flex flex-col gap-[8px] items-center text-center max-w-[400px]">
          <p className="font-semibold leading-[24px] text-[var(--foreground)] text-[20px]">
            Mentor Dashboard
          </p>
          <p className="leading-[20px] text-[var(--muted-foreground)] text-[14px]">
            This view is coming soon. You'll be able to guide and mentor student participants from here.
          </p>
        </div>
      </div>
    </div>
  );
}