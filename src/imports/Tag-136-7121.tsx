export default function Tag() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] size-full" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Inactive</p>
    </div>
  );
}