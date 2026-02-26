function Tabs() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name=".tabs">
      <div aria-hidden="true" className="absolute border-[#1850c5] border-b-4 border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#1850c5] text-[14px] text-center">Party details</p>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative shrink-0" data-name=".tabs">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#6e7ca8] text-[14px] text-center">Approved Questions</p>
    </div>
  );
}

export default function InputFieldTabs() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start relative size-full" data-name="Input field/Tabs">
      <Tabs />
      <Tabs1 />
    </div>
  );
}