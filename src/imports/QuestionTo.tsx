function Tag() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Waiting for approval</p>
    </div>
  );
}

function Lhs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="LHS">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden">{` 12/03/2024  6:40 PM`}</p>
      </div>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C8CEE2)" id="Ellipse 14" r="2" />
        </svg>
      </div>
      <Tag />
    </div>
  );
}

export default function QuestionTo() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative size-full" data-name="Question to">
      <Lhs />
    </div>
  );
}