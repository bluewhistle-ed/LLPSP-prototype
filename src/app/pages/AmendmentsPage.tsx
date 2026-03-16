import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { PrimaryActionButton } from "../components/PrimaryActionButton";
import { BillDraftingForm } from "../components/BillDraftingForm";
import { BillReviewView } from "../components/BillReviewView";
import { BillAmendmentView } from "../components/BillAmendmentView";
import { StatusChip } from "../components/StatusChip";
import { CompactActionButton } from "../components/CompactActionButton";
import { useState } from "react";
import { useUser } from "../context/UserContext";

export function AmendmentsPage() {
  const [showDraftingForm, setShowDraftingForm] = useState(false);
  const [showBillReview, setShowBillReview] = useState(false);
  const [showBillAmendment, setShowBillAmendment] = useState(false);
  const { userType, studentRole } = useUser();

  const canDraftBill = userType === 'student' && (studentRole === 'sc-chair' || studentRole === 'sc-member');
  const isMentor = userType === 'mentor';
  const isMember = userType === 'student' && !canDraftBill;

  const handleDraftBill = () => {
    setShowDraftingForm(true);
  };

  const handleCloseDraftingForm = () => {
    setShowDraftingForm(false);
  };

  // Show drafting form if active
  if (showDraftingForm) {
    return (
      <div className="bg-[var(--input-background)] relative size-full">
        {/* Navbar - positioned absolutely at the top */}
        <div className="absolute page-inset-left top-[32px]">
          <SharedNavBar activePage="amendments" />
        </div>

        {/* Page Header - positioned absolutely at the top-right */}
        <PageHeader />

        {/* Bill Drafting Form - within page boundaries */}
        <div className="absolute page-inset-x top-[100px] bottom-[32px]">
          <BillDraftingForm onClose={handleCloseDraftingForm} />
        </div>
      </div>
    );
  }

  // Show bill review for mentor
  if (showBillReview) {
    return (
      <div className="bg-[var(--input-background)] relative size-full">
        {/* Navbar */}
        <div className="absolute page-inset-left top-[32px]">
          <SharedNavBar activePage="amendments" />
        </div>

        {/* Page Header */}
        <PageHeader />

        {/* Bill Review View */}
        <div className="absolute page-inset-x top-[100px] bottom-[32px]">
          <BillReviewView onClose={() => setShowBillReview(false)} />
        </div>
      </div>
    );
  }

  // Show bill amendment view for members
  if (showBillAmendment) {
    return (
      <div className="bg-[var(--input-background)] relative size-full">
        {/* Navbar */}
        <div className="absolute page-inset-left top-[32px]">
          <SharedNavBar activePage="amendments" />
        </div>

        {/* Page Header */}
        <PageHeader />

        {/* Bill Amendment View */}
        <div className="absolute page-inset-x top-[100px] bottom-[32px]">
          <BillAmendmentView onClose={() => setShowBillAmendment(false)} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--input-background)] relative size-full">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="amendments" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Action Button */}
      {canDraftBill && (
        <div className="absolute page-inset-right top-[100px]">
          <PrimaryActionButton 
            label="Draft New Bill"
            onClick={handleDraftBill}
          />
        </div>
      )}
      
      {/* Mentor: Show published bill card */}
      {isMentor ? (
        <div className="absolute page-inset-x top-[100px]">
          <div className="bg-[var(--card)] flex flex-col gap-[16px] p-[16px] relative rounded-[var(--radius-card)]">
            <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
            
            {/* Bill status + title */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <StatusChip label="Published" />
                <StatusChip label="Waiting for approval" />
                <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">27/02/2026  4:30 PM</p>
              </div>
              <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
                The Medicinal and Aromatic Plants (Promotion and Development) Bill, 2026
              </p>
              <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                5 Chapters  &middot;  12 Clauses
              </p>
            </div>

            {/* Divider */}
            <div className="bg-[var(--card-border)] h-px shrink-0 w-full" />

            {/* Action */}
            <div className="flex items-center">
              <CompactActionButton
                label="Review Bill"
                variant="primary"
                onClick={() => setShowBillReview(true)}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      ) : isMember ? (
        /* Member: Show approved bill card with "Propose Amendments" */
        <div className="absolute page-inset-x top-[100px]">
          <div className="bg-[var(--card)] flex flex-col gap-[16px] p-[16px] relative rounded-[var(--radius-card)]">
            <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
            
            {/* Bill status + title */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <StatusChip label="Published" />
                <StatusChip label="Approved" />
                <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">27/02/2026  4:30 PM</p>
              </div>
              <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
                The Medicinal and Aromatic Plants (Promotion and Development) Bill, 2026
              </p>
              <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                5 Chapters  &middot;  12 Clauses
              </p>
            </div>

            {/* Divider */}
            <div className="bg-[var(--card-border)] h-px shrink-0 w-full" />

            {/* Action */}
            <div className="flex items-center">
              <CompactActionButton
                label="Propose Amendments"
                variant="primary"
                onClick={() => setShowBillAmendment(true)}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      ) : (
        /* Non-mentor, non-member (SC members see draft button): Show waiting message */
        !canDraftBill && (
          <div className="absolute page-inset-x top-[150px]">
            <div className="bg-[var(--card)] content-stretch flex flex-col items-center justify-center p-[32px] relative rounded-[var(--radius-card)]">
              <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
              <p className="leading-[24px] text-center text-[var(--sidebar-primary-foreground)] text-[16px]">
                The Select Committee is working on drafting the Bill, it will appear here once their draft has been approved.
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}