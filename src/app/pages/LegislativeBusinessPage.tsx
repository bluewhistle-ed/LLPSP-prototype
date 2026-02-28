import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { PrimaryActionButton } from "../components/PrimaryActionButton";
import { BillDraftingForm } from "../components/BillDraftingForm";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export function LegislativeBusinessPage() {
  const [showDraftingForm, setShowDraftingForm] = useState(false);
  const { userType, studentRole } = useUser();

  const canDraftBill = userType === 'student' && (studentRole === 'sc-chair' || studentRole === 'sc-member');

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
      {canDraftBill && (
        <div className="absolute right-[calc(16.67%+56px)] top-[100px]">
          <PrimaryActionButton 
            label="Draft New Bill"
            onClick={handleDraftBill}
          />
        </div>
      )}
      
      {/* Message box - positioned below navbar */}
      <div className="absolute left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[150px]">
        <div className="bg-white content-stretch flex flex-col items-center justify-center p-[32px] relative rounded-[12px]">
          <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <p className="leading-[24px] text-center text-[#3c4c7c] text-[16px]">
            The Select Committee is working on drafting the Bill, it will appear here once their draft has been approved.
          </p>
        </div>
      </div>
    </div>
  );
}