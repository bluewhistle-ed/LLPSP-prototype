import { useState } from "react";
import { useSearchParams } from "react-router";
import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { LegislativeBusinessTab } from "../components/LegislativeBusinessTab";
import { QuestionHourContent, ZeroHourContent } from "../components/SittingShared";

// ── Local Types ──────────────────────────────────────────────────────────────

type SittingTab = 'question-hour' | 'zero-hour' | 'legislative-business';

// ── Tab Button (local to Sitting page — students see tabs, speaker sees pages) ─

function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-[12px] relative cursor-pointer"
    >
      {isActive && (
        <div aria-hidden="true" className="absolute border-[var(--accent)] border-b-4 border-solid inset-0 pointer-events-none" />
      )}
      <p className={`font-semibold leading-[16px] text-[length:var(--text-base)] text-center relative ${
        isActive ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)]'
      }`}>
        {label}
      </p>
    </button>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SittingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') as SittingTab | null;
  const VALID_TABS: SittingTab[] = ['question-hour', 'zero-hour', 'legislative-business'];
  const activeTab: SittingTab = tabParam && VALID_TABS.includes(tabParam) ? tabParam : 'question-hour';

  const setActiveTab = (tab: SittingTab) => {
    setSearchParams({ tab }, { replace: true });
  };

  return (
    <div className="bg-[var(--input-background)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="sitting" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start page-inset-x top-[100px]">
        {/* Session Tabs */}
        <div className="flex gap-[12px] items-start">
          <TabButton
            label="Question Hour"
            isActive={activeTab === 'question-hour'}
            onClick={() => setActiveTab('question-hour')}
          />
          <TabButton
            label="Zero Hour"
            isActive={activeTab === 'zero-hour'}
            onClick={() => setActiveTab('zero-hour')}
          />
          <TabButton
            label="Legislative Business"
            isActive={activeTab === 'legislative-business'}
            onClick={() => setActiveTab('legislative-business')}
          />
        </div>

        {/* Tab Content */}
        <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full ${
          activeTab === 'legislative-business'
            ? 'overflow-hidden'
            : 'max-h-[calc(100vh-192px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        }`}>
          {activeTab === 'question-hour' && <QuestionHourContent />}
          {activeTab === 'zero-hour' && <ZeroHourContent />}
          {activeTab === 'legislative-business' && <LegislativeBusinessTab />}
        </div>
      </div>
    </div>
  );
}
