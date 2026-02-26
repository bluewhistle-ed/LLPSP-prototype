import imgEllipse3 from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">UPP</p>
      </div>
    </div>
  );
}

export default function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] size-full" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
    </div>
  );
}