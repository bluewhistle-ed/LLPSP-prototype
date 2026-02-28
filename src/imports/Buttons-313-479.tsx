export default function Buttons() {
  return (
    <button className="bg-white cursor-pointer relative rounded-[6px] size-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">
            <p className="leading-[14px]">Answer</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}