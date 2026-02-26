import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { PrimaryActionButton } from "../components/PrimaryActionButton";
import { BillDraftingForm } from "../components/BillDraftingForm";
import { useState } from "react";

export function LegislativeBusinessPage() {
  const [showDraftingForm, setShowDraftingForm] = useState(false);

  const handleDraftBill = () => {
    setShowDraftingForm(true);
  };

  const handleCloseDraftingForm = () => {
    setShowDraftingForm(false);
  };

  // Show drafting form if active
  if (showDraftingForm) {
    return (
      <div className="bg-[#f8f9fb] relative size-full">
        {/* Navbar - positioned absolutely at the top */}
        <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
          <SharedNavBar activePage="legislative-business" />
        </div>

        {/* Page Header - positioned absolutely at the top-right */}
        <PageHeader />

        {/* Bill Drafting Form - within page boundaries */}
        <div className="absolute left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px] bottom-[32px]">
          <BillDraftingForm onClose={handleCloseDraftingForm} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fb] relative size-full">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="legislative-business" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Action Button */}
      <div className="absolute right-[calc(16.67%+56px)] top-[100px]">
        <PrimaryActionButton 
          label="Draft Bill"
          onClick={handleDraftBill}
        />
      </div>
      
      {/* Empty State - centered */}
      <div className="absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[200px] bottom-[32px]">
        {/* Illustration */}
        <div className="content-stretch flex flex-col h-[200px] items-center justify-center overflow-clip relative shrink-0 w-[280px]">
          <div className="h-[199.999px] relative shrink-0 w-[244.754px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244.754 200">
              <g>
                <path d="M213.547 94.9536C213.547 94.9536 213.547 94.9536 213.547 94.9536Z" fill="#5795F1" opacity="0.18" />
                <circle cx="122" cy="100" r="80" fill="#5795F1" opacity="0.1" />
                <rect x="80" y="40" width="85" height="120" rx="4" fill="#3C7CE8" />
                <rect x="85" y="45" width="75" height="110" fill="white" />
                {/* Calendar grid lines */}
                <line x1="90" y1="65" x2="155" y2="65" stroke="#3C7CE8" strokeWidth="1" />
                <line x1="90" y1="85" x2="155" y2="85" stroke="#E3E6F0" strokeWidth="1" />
                <line x1="90" y1="105" x2="155" y2="105" stroke="#E3E6F0" strokeWidth="1" />
                <line x1="90" y1="125" x2="155" y2="125" stroke="#E3E6F0" strokeWidth="1" />
                <line x1="90" y1="145" x2="155" y2="145" stroke="#E3E6F0" strokeWidth="1" />
                {/* Calendar header */}
                <rect x="80" y="40" width="85" height="15" rx="4" fill="#3C7CE8" />
                {/* Person illustration */}
                <circle cx="175" cy="90" r="15" fill="#5795F1" />
                <rect x="165" y="105" width="20" height="30" rx="2" fill="#3C7CE8" />
                {/* Plant decoration */}
                <ellipse cx="50" cy="145" rx="8" ry="10" fill="#42A22A" />
                <rect x="48" y="145" width="4" height="15" fill="#2D7A1E" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Empty State Text */}
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center text-center w-full max-w-[378px]">
          <h2 className="font-semibold leading-[32px] text-[#2f3e6d] text-[24px]">
            It looks like there are no bills available at the moment.
          </h2>
          <p className="leading-[20px] text-[#6e7ca8] text-[16px]">
            Stay tuned for exciting updates and upcoming opportunities
          </p>
        </div>
      </div>
    </div>
  );
}