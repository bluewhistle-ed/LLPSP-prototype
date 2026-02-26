export default function Buttons() {
  return (
    <button className="bg-[#2766da] cursor-pointer relative rounded-[6px] size-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-white whitespace-nowrap">
            <p className="leading-[14px]">{`Submit bill for approval `}</p>
          </div>
        </div>
      </div>
    </button>
  );
}