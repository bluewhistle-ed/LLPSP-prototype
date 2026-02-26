import { useState } from 'react';
import svgPaths from "../../imports/svg-dv2wdhz28y";

function IconsCircleClose() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / circle_close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / circle_close">
          <mask height="16" id="mask0_1_14827" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_1_14827)">
            <path d={svgPaths.p1dd38d00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface AddMinistryFormProps {
  onClose: () => void;
  onSave: (ministryName: string) => void;
}

export function AddMinistryForm({ onClose, onSave }: AddMinistryFormProps) {
  const [ministryName, setMinistryName] = useState('');

  const handleSave = () => {
    if (ministryName.trim()) {
      onSave(ministryName.trim());
      setMinistryName('');
    }
  };

  const isSaveDisabled = !ministryName.trim();

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] w-full max-h-[calc(100vh-230px)] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Scrollable Content Area */}
      <div className="content-stretch flex flex-col gap-[16px] items-start w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-[2px]">
        {/* Header with Title and Close Button */}
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Title + close">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-semibold justify-center leading-[0] min-h-[32px] not-italic overflow-hidden relative shrink-0 text-[#041a5e] text-[20px] text-ellipsis w-full whitespace-nowrap">
                <p className="leading-[1.3] overflow-hidden">Add New Ministry</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white h-[32px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50"
          >
            <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
              <IconsCircleClose />
            </div>
            <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </button>
        </div>

        {/* Ministry Name Field */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">
            Ministry Name
          </p>
          <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                <input
                  type="text"
                  value={ministryName}
                  onChange={(e) => setMinistryName(e.target.value)}
                  placeholder="Enter Ministry Name"
                  className="flex-[1_0_0] bg-transparent leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap outline-none placeholder:text-[#6e7ca8]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button Container - Fixed at bottom */}
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
        <button
          onClick={handleSave}
          disabled={isSaveDisabled}
          className={`h-[40px] relative rounded-[8px] shrink-0 w-full transition-colors ${
            isSaveDisabled ? 'bg-[#2766da] opacity-40 cursor-not-allowed' : 'bg-[#2766da] hover:bg-[#1850c5] cursor-pointer'
          }`}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
              <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
                <p className="leading-[16px]">Save</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}