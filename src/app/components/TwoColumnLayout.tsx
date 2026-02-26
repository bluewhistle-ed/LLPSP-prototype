import { ReactNode } from 'react';

interface TwoColumnLayoutProps {
  leftColumn: ReactNode;
  rightColumn?: ReactNode;
  showRightColumn: boolean;
}

/**
 * Reusable two-column layout component that handles responsive behavior:
 * - When rightColumn is hidden: leftColumn takes full width
 * - When rightColumn is shown: leftColumn shrinks and rightColumn appears alongside
 */
export function TwoColumnLayout({ leftColumn, rightColumn, showRightColumn }: TwoColumnLayoutProps) {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative w-full">
      {/* Left Column - takes remaining space */}
      <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 transition-all ${
        showRightColumn ? 'flex-1' : 'w-full'
      }`}>
        {leftColumn}
      </div>

      {/* Right Column - fixed width sidebar that appears/disappears */}
      {showRightColumn && rightColumn && (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]">
          {rightColumn}
        </div>
      )}
    </div>
  );
}
