import React from "react";

/**
 * Shared horizontal divider using design system border color.
 * Use inside cards, sections, or any layout that needs a visual separator.
 */
export function Divider({ className = "" }: { className?: string }) {
  return <div className={`w-full border-t border-[#e3e6f0] ${className}`} />;
}