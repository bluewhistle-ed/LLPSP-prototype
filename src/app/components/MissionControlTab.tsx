import svgPaths from "../../imports/svg-cbwl7h0y6b";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/aa54fa5a3bd4d263bcb864f95f6d443a92beae03.png";
import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import imgEllipse1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";
import imgEllipse3 from "figma:asset/4a8f8e72f5fe25465071d4ab7006bf2930bf6fc5.png";
import imgEllipse4 from "figma:asset/072958e13f38abd0a42ad7f8edae5e3aa7e2ff2b.png";
import imgEllipse5 from "figma:asset/7e0d7ab070d39f3cfc9f86f2768f90e8f6c155d2.png";
import imgEllipse6 from "figma:asset/e754befde01d23dc9b0ee961c7db7f0d45c70f90.png";
import imgEllipse7 from "figma:asset/40f6d59c4c64e58f45df1ad8a583decfd06e5817.png";
import imgEllipse8 from "figma:asset/25865008497d19d3e4a672e5cc60b40969e02c3f.png";
import imgEllipse9 from "figma:asset/7d537f4f1b05e605b168f4447189c4a1b187cdb6.png";
import imgFlag1 from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";
import { imgUnsplash0HjWobhGhJs } from "../../imports/svg-9n6vy";
import { Bell } from "lucide-react";
import { StatusChip } from './StatusChip';
import { JoinPartyModal } from "./JoinPartyModal";
import { useState } from "react";

// Phase badge configuration
type PhaseType = 'genesis' | 'preparation' | 'execution' | 'reflection';

interface PhaseBadge {
  label: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: 'target' | 'pencil' | 'checkmark' | 'lightbulb';
}

const PHASE_CONFIG: Record<PhaseType, PhaseBadge> = {
  genesis: {
    label: 'Genesis',
    bgColor: '#e7f2fe',
    borderColor: '#3c7ce8',
    textColor: '#1850c5',
    icon: 'target'
  },
  preparation: {
    label: 'Preparation',
    bgColor: '#fef3c7',
    borderColor: '#f59e0b',
    textColor: '#d97706',
    icon: 'pencil'
  },
  execution: {
    label: 'Execution',
    bgColor: '#dcfce7',
    borderColor: '#22c55e',
    textColor: '#16a34a',
    icon: 'checkmark'
  },
  reflection: {
    label: 'Reflection',
    bgColor: '#f3e8ff',
    borderColor: '#a855f7',
    textColor: '#9333ea',
    icon: 'lightbulb'
  }
};

// Phase badge icon component
function PhaseBadgeIcon({ icon, color }: { icon: 'target' | 'pencil' | 'checkmark' | 'lightbulb', color: string }) {
  const maskId = `mask_${icon}_chip`;
  
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <mask height="12" id={maskId} maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="12" x="0" y="0">
          <rect fill="#D9D9D9" height="12" width="12" />
        </mask>
        <g mask={`url(#${maskId})`}>
          {icon === 'target' && (
            <>
              <circle cx="6" cy="6" r="4" fill="none" stroke={color} strokeWidth="0.8"/>
              <circle cx="6" cy="6" r="2" fill="none" stroke={color} strokeWidth="0.8"/>
              <circle cx="6" cy="6" r="0.8" fill={color}/>
            </>
          )}
          {icon === 'pencil' && (
            <path d="M2 10.5V9L7.5 3.5L9.5 5.5L4 11H2V10.5ZM10 5L8 3L9 2L11 4L10 5Z" fill={color}/>
          )}
          {icon === 'checkmark' && (
            <path d="M4.5 9L2 6.5L2.7 5.8L4.5 7.6L9.3 2.8L10 3.5L4.5 9Z" fill={color}/>
          )}
          {icon === 'lightbulb' && (
            <path d="M6 2C4.9 2 4 2.9 4 4C4 4.8 4.4 5.5 5 5.9V7.5C5 7.8 5.2 8 5.5 8H6.5C6.8 8 7 7.8 7 7.5V5.9C7.6 5.5 8 4.8 8 4C8 2.9 7.1 2 6 2ZM5.5 9.5V9H6.5V9.5C6.5 9.8 6.3 10 6 10C5.7 10 5.5 9.8 5.5 9.5Z" fill={color}/>
          )}
        </g>
      </svg>
    </div>
  );
}

// Phase badge component
function PhaseBadge({ phase }: { phase: PhaseType }) {
  const config = PHASE_CONFIG[phase];
  
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: config.bgColor }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: config.borderColor }} />
      <PhaseBadgeIcon icon={config.icon} color={config.textColor} />
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis" style={{ color: config.textColor }}>{config.label}</p>
    </div>
  );
}

// Diagonal stripe pattern for break times
function DiagonalStripePattern() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.4 }}>
      <defs>
        <pattern id="diagonal-stripes" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#d1d5db" strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
    </svg>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Mask group">
      <div className="col-1 h-[100px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[800px_100px] ml-0 mt-0 relative row-1 w-[800px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUnsplash0HjWobhGhJs1} />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end mb-[-50px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="banner">
      <MaskGroup />
    </div>
  );
}

function Flag() {
  return (
    <div className="absolute inset-[-1px_calc(0%-1px)]" data-name="Flag">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlag} />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute border border-solid border-white inset-0 overflow-clip rounded-[8.93px]" data-name="Component 4">
      <Flag />
    </div>
  );
}

function PartyLogo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[64px]" data-name="Party Logo">
      <Component2 />
    </div>
  );
}

function Logo() {
  return (
    <div className="mb-[-50px] relative shrink-0 w-full" data-name="Logo">
      <div className="content-stretch flex items-start px-[24px] relative w-full">
        <PartyLogo />
      </div>
    </div>
  );
}

function BannerLogo() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[50px] relative shrink-0 w-full" data-name="Banner + Logo">
      <Banner />
      <Logo />
    </div>
  );
}

function TitleTagline() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis" data-name="Title + Tagline">
      <p className="font-semibold leading-[32px] min-w-full overflow-hidden relative shrink-0 text-[#2f3e6d] text-[24px] w-[min-content] whitespace-pre-wrap">Unity Progress Party</p>
      <p className="leading-[14px] overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px]">Forging Together, Advancing Forward</p>
    </div>
  );
}

function IconsEdit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / edit">
          <mask height="16" id="mask0_118_4538" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_118_4538)">
            <path d={svgPaths.p20e10000} fill="var(--fill-0, #2F3E6D)" id="edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsEdit />
    </div>
  );
}

function IconsDelete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / delete">
          <mask height="16" id="mask0_118_4530" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_118_4530)">
            <path d={svgPaths.p29a6c900} fill="var(--fill-0, #2F3E6D)" id="delete" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsDelete />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title">
      <TitleTagline />
      <Buttons />
      <Buttons1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <BannerLogo />
      <Title />
    </div>
  );
}

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">07 Members</p>
      </div>
    </div>
  );
}

function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
    </div>
  );
}

function AvatarName1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Regina</p>
      </div>
    </div>
  );
}

function Tag() {
  return <StatusChip label="Mentor" />;
}

function AvatarTag1() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName1 />
      <Tag />
    </div>
  );
}

function AvatarName2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse4} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Sheilah T. Sayasane</p>
      </div>
    </div>
  );
}

function IconsEmojiFlags() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons / emoji_flags">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons / emoji_flags">
          <mask height="12" id="mask0_118_4550" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_118_4550)">
            <path d={svgPaths.p34b4d070} fill="var(--fill-0, #1850C5)" id="emoji_flags" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <StatusChip label="President">
      <IconsEmojiFlags />
    </StatusChip>
  );
}

function AvatarTag2() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName2 />
      <Tag1 />
    </div>
  );
}

function Tags() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center relative shrink-0 w-full" data-name="Tags">
      <AvatarTag />
      <AvatarTag1 />
      <AvatarTag2 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] pb-[24px] relative w-full">
          <Content />
          <Tags />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function IconsAvTimer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / av_timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / av_timer">
          <mask height="16" id="mask0_118_4479" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_118_4479)">
            <path d={svgPaths.p3e7ba00} fill="var(--fill-0, #6E7CA8)" id="av_timer" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
      <IconsAvTimer />
      <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Allocated Time : 30mins</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
      <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Discussion Speakers</p>
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function AvatarName3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse5} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Aleta H. Starcher (5min)</p>
      </div>
    </div>
  );
}

function AvatarTag3() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName3 />
    </div>
  );
}

function AvatarName4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse6} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Mai G. Sollom (10min)</p>
      </div>
    </div>
  );
}

function AvatarTag4() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName4 />
    </div>
  );
}

function AvatarName5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse7} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Latricia W. Silletti (5min)</p>
      </div>
    </div>
  );
}

function AvatarTag5() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName5 />
    </div>
  );
}

function AvatarName6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse8} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Adrianne P. Tillis (10min)</p>
      </div>
    </div>
  );
}

function AvatarTag6() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <AvatarTag3 />
      <AvatarTag4 />
      <AvatarTag5 />
      <AvatarTag6 />
    </div>
  );
}

function DiscussionSpeakers() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <Frame9 />
      <Frame4 />
    </div>
  );
}

function DiscussionSpeakersCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Details">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <DiscussionSpeakers />
      </div>
    </div>
  );
}

function AvatarName7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse4} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Sheilah T. Sayasane</p>
      </div>
    </div>
  );
}

function IconsPresident() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons / President">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons / President">
          <path d={svgPaths.p99d5500} fill="var(--fill-0, #1850C5)" id="30. Crown" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <StatusChip label="President">
      <IconsPresident />
    </StatusChip>
  );
}

function AvatarTag7() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName7 />
      <Tag2 />
    </div>
  );
}

function AvatarName8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse4} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Sheilah T. Sayasane</p>
      </div>
    </div>
  );
}

function IconsPresident1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons / President">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons / President">
          <path d={svgPaths.p99d5500} fill="var(--fill-0, #6820FF)" id="30. Crown" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <StatusChip label="Vice President">
      <IconsPresident1 />
    </StatusChip>
  );
}

function AvatarTag8() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName8 />
      <Tag3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <AvatarTag7 />
      <AvatarTag8 />
    </div>
  );
}

function Leaders() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Leaders</p>
      <Frame5 />
    </div>
  );
}

function LeadersCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Details">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Leaders />
      </div>
    </div>
  );
}

function AvatarName9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse5} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Aleta H. Starcher</p>
      </div>
    </div>
  );
}

function AvatarTag9() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName9 />
    </div>
  );
}

function AvatarName10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse6} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Mai G. Sollom</p>
      </div>
    </div>
  );
}

function AvatarTag10() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName10 />
    </div>
  );
}

function AvatarName11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse7} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Latricia W. Silletti</p>
      </div>
    </div>
  );
}

function AvatarTag11() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName11 />
    </div>
  );
}

function AvatarName12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse8} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Adrianne P. Tillis</p>
      </div>
    </div>
  );
}

function AvatarTag12() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName12 />
    </div>
  );
}

function AvatarName13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse9} width="16" />
      </div>
      <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Elvira E. Aus</p>
      </div>
    </div>
  );
}

function AvatarTag13() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName13 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <AvatarTag9 />
      <AvatarTag10 />
      <AvatarTag11 />
      <AvatarTag12 />
      <AvatarTag13 />
    </div>
  );
}

function Members() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Members</p>
      <Frame6 />
    </div>
  );
}

function MembersCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Details">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Members />
      </div>
    </div>
  );
}

function Flag1() {
  return (
    <div className="absolute inset-[-0.3px_calc(0%-0.3px)]" data-name="Flag">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlag} />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute border-[0.303px] border-solid border-white inset-[0_34.88%_34.88%_0] overflow-clip rounded-[3.634px]" data-name="Component 2">
      <Flag1 />
    </div>
  );
}

function Flag2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.02px)] rounded-[4.007px] size-[26.047px] top-[calc(50%-0.02px)]" data-name="Flag">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4.007px] size-full" src={imgFlag1} />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute border-[0.303px] border-solid border-white inset-[34.88%_0_0_34.88%] overflow-clip rounded-[3.634px]" data-name="Component 3">
      <Flag2 />
    </div>
  );
}

function PartyLogo1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Party Logo">
      <Component />
      <Component1 />
    </div>
  );
}

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_118_4526" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_118_4526)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert />
    </div>
  );
}

function LogoGroupName() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Logo + Group Name">
      <PartyLogo1 />
      <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[16px] text-ellipsis">
        <p className="leading-[20px] whitespace-pre-wrap">{`Techno-Revolution Party + Citizen's Voice Party`}</p>
      </div>
      <Buttons2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <LogoGroupName />
    </div>
  );
}

function AssociatedAlliance() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Associated Alliance</p>
      <Frame7 />
    </div>
  );
}

function AssociatedAllianceCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Event Details">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <AssociatedAlliance />
      </div>
    </div>
  );
}

export function WelcomeTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<string>("");

  const handleActionClick = (actionTitle: string) => {
    setModalAction(actionTitle);
    if (actionTitle === "Join a Party") {
      setIsModalOpen(true);
    } else {
      // Handle other actions
      console.log("Action clicked:", actionTitle);
    }
  };

  // Mock PSP data - this would come from your state management/API
  const currentPSP = {
    currentDay: 1,
    totalDays: 14,
    currentPhase: 'genesis' as PhaseType, // Change this to 'preparation', 'execution', or 'reflection' to test
  };
  
  const nextActions = [
    { id: 1, title: 'Join a Party', description: 'Select and register with your preferred political party', status: 'pending' },
    { id: 2, title: 'Complete Profile', description: 'Fill in your complete profile information', status: 'pending' },
  ];

  return (
    <>
      <div className="flex gap-[24px] w-full items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-[18px] flex-1">
          {/* Next Actions Card */}
          <div className="bg-white relative rounded-[12px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#3c7ce8] border-solid inset-0 pointer-events-none rounded-[12px] opacity-[0.46]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
              <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Next Actions</p>
              <div className="flex flex-col w-full divide-y divide-[#f1f2f8]">
                {nextActions.map((action, index) => (
                  <button
                    key={action.id}
                    onClick={() => handleActionClick(action.title)}
                    className={`flex flex-col gap-[4px] w-full text-left hover:bg-[#f8f9fb] p-[8px] rounded-[8px] transition-colors cursor-pointer ${index === 0 ? 'pb-[12px] -m-[8px] mb-0' : 'py-[12px] -m-[8px]'}`}
                  >
                    <p className="flex items-center gap-[6px] leading-[16px] text-[#3c4c7c] text-[14px]">{action.title}<svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-30"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="#3c4c7c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></p>
                    <p className="leading-[16px] text-[#6e7ca8] text-[12px]">{action.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

        {/* My Party & Role Card */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
            <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">About</p>
            
            {/* My Info */}
            <div className="flex items-start gap-[12px] w-full">
              {/* Avatar */}
              <div className="relative shrink-0 size-[48px]">
                <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse1} />
              </div>
              
              {/* Name and Details */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Jason Surya</p>
                
                {/* Party Tag and Treasury Chip */}
                <div className="flex items-center gap-[6px]">
                  {/* Private Member Chip */}
                  <StatusChip label="Private Member" />
                  
                  {/* Treasury Chip */}
                  <StatusChip label="Treasury" />
                </div>
              </div>
            </div>

            {/* Details Card - nested card */}
            <div className="flex flex-col gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full">
              
              
              {/* Party Name with Avatar */}
              <div className="flex items-center gap-[6px]">
                <div className="relative shrink-0 size-[24px]">
                  <img alt="" className="block max-w-none size-full rounded-full" src={imgFlag} />
                </div>
                <p className="leading-[16px] text-[#3c4c7c] text-[12px]">United Progressive Party</p>
              </div>
              
              {/* President Info */}
              <div className="flex items-center gap-[6px]">
                <div className="relative shrink-0 size-[24px]">
                  <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse4} />
                </div>
                <p className="leading-[16px] text-[#3c4c7c] text-[12px]">Sheilah T. Sayasane</p>
                {/* President Badge */}
                <StatusChip label="President">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <mask height="12" id="mask_president_mc" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                        <rect fill="#D9D9D9" height="12" width="12" />
                      </mask>
                      <g mask="url(#mask_president_mc)">
                        <path d={svgPathsFlag.p34b4d070} fill="#1850C5" />
                      </g>
                    </svg>
                  </div>
                </StatusChip>
              </div>
            </div>

          </div>
        </div>

        {/* Important Dates Card */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
            <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Important Dates</p>
            
            <div className="flex flex-col gap-[12px] w-full">
              {/* Date 1 - Passed */}
              <div className="p-[16px] rounded-[8px] bg-[#f8f9fb] w-full relative overflow-hidden">
                <DiagonalStripePattern />
                <div className="flex flex-col gap-[8px] relative z-10">
                  <p className="font-semibold leading-[16px] text-[#6e7ca8] text-[14px]">Submission of questions by Private Members</p>
                  <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Only Private Members can submit questions, from both the Opposition and Treasury benches.</p>
                  <StatusChip label="24 Feb, Tue" variant="info" />
                </div>
              </div>

              {/* Date 2 */}
              <div className="p-[16px] rounded-[8px] bg-[#f8f9fb] w-full">
                <div className="flex flex-col gap-[8px]">
                  <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Submission of Draft Bill by Select Committee</p>
                  <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Only the Select Committee can submit a Draft Bill, which will be circulated among all Members of the House.</p>
                  <StatusChip label="26 Feb, Thu" variant="urgent" />
                </div>
              </div>

              {/* Date 3 */}
              <div className="p-[16px] rounded-[8px] bg-[#f8f9fb] w-full">
                <div className="flex flex-col gap-[8px]">
                  <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Submission of Notices</p>
                  <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Each Member of the House can submit one notice.</p>
                  <StatusChip label="27 Feb, Fri" variant="urgent" />
                </div>
              </div>

              {/* Date 4 */}
              <div className="p-[16px] rounded-[8px] bg-[#f8f9fb] w-full">
                <div className="flex flex-col gap-[8px]">
                  <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Submission of Amendments to the Bill</p>
                  <p className="leading-[16px] text-[#6e7ca8] text-[12px]">All Members of the House can submit amendments to the Bill that has been circulated.</p>
                  <StatusChip label="28 Feb, Sat" variant="urgent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column */}
      <div className="flex flex-col gap-[18px] flex-1">
        {/* Announcements Card */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
            <div className="flex items-center justify-between w-full">
              <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Announcements</p>
              <StatusChip label="1 New" variant="warning">
                <Bell className="size-[12px] shrink-0" style={{ color: 'var(--status-warning-text)' }} />
              </StatusChip>
            </div>

            <div className="flex flex-col gap-[12px] w-full">
              {/* Announcement 1 */}
              <div className="flex flex-col gap-[8px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full relative">
                <div className="absolute top-[12px] right-[12px] size-[6px] bg-[#1850c5] rounded-full" />
                <div className="flex flex-col gap-[4px]">
                  <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Policy Debate Tomorrow</p>
                  <p className="leading-[16px] text-[#6e7ca8] text-[12px]">All parties must submit their policy proposals by 5:00 PM today for tomorrow's debate session.</p>
                  <p className="leading-[14px] text-[#6e7ca8] text-[11px] mt-[4px]">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PSP Overview Card */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
            <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Overview</p>
            
            {/* PSP Info Card */}
            <div className="flex flex-col gap-[8px] w-full">
              <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Let's Legislate at SBOA</p>
              <p className="leading-[16px] text-[#6e7ca8] text-[12px]">India's Street Dog Dilemma—exploring policy solutions for managing India's street dog population while balancing animal welfare, public safety, and community health concerns.</p>
              <div className="w-full h-[1px] bg-[#e3e6f0] mt-[8px]" />
            </div>
            
            {/* Phase Progress */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col gap-[8px]">
                  <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Progress</p>
                  <div className="flex gap-[8px] items-center">
                    {/* Day Progress Badge */}
                    <StatusChip label={`Day ${currentPSP.currentDay} of ${currentPSP.totalDays}`} variant="progress">
                      <div className="relative shrink-0 size-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <mask height="12" id="mask_calendar_chip" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} width="12" x="0" y="0">
                            <rect fill="#D9D9D9" height="12" width="12" />
                          </mask>
                          <g mask="url(#mask_calendar_chip)">
                            <path d="M3 10.5C2.725 10.5 2.48958 10.4021 2.29375 10.2063C2.09792 10.0104 2 9.775 2 9.5V3.5C2 3.225 2.09792 2.98958 2.29375 2.79375C2.48958 2.59792 2.725 2.5 3 2.5H3.5V1.5H4.5V2.5H7.5V1.5H8.5V2.5H9C9.275 2.5 9.51042 2.59792 9.70625 2.79375C9.90208 2.98958 10 3.225 10 3.5V9.5C10 9.775 9.90208 10.0104 9.70625 10.2063C9.51042 10.4021 9.275 10.5 9 10.5H3ZM3 9.5H9V5.5H3V9.5Z" fill="#047857"/>
                          </g>
                        </svg>
                      </div>
                    </StatusChip>
                    
                    {/* Current Phase Badge - dynamically renders based on currentPhase */}
                    <PhaseBadge phase={currentPSP.currentPhase} />
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full">
                <div className="w-full h-[12px] bg-[#f1f2f8] rounded-full overflow-hidden relative">
                  {/* Progress fill - day 1 of 14 = ~7% */}
                  <div className="absolute top-0 left-0 h-full bg-[#1850c5] rounded-full transition-all duration-300" style={{ width: '7.14%' }} />
                  
                  {/* Phase transition markers */}
                  <div className="absolute top-0 h-full w-[1px] bg-white/40" style={{ left: '14.29%' }} />
                  <div className="absolute top-0 h-full w-[1px] bg-white/40" style={{ left: '85.71%' }} />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#f1f2f8]" />

            {/* Schedule */}
            <div className="flex flex-col gap-[12px] w-full">
              <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Tuesday, Feb 24, 2026</p>

              <div className="flex flex-col gap-[8px] w-full">
                {/* Schedule Item 1 */}
                <div className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full">
                  <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[12px]">09:00</p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[11px]">30 min</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Campaigning Session</p>
                    <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Parties present their manifesto and vision</p>
                  </div>
                </div>

                {/* Schedule Item 2 */}
                <div className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full">
                  <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[12px]">09:30</p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[11px]">45 min</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Party Selection</p>
                    <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Students join their preferred political party</p>
                  </div>
                </div>

                {/* Schedule Item 3 - Snacks Break */}
                <div className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full relative overflow-hidden">
                  <DiagonalStripePattern />
                  <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px] relative z-10">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[12px]">10:15</p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[11px]">15 min</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1 relative z-10">
                    <p className="leading-[16px] text-[#6e7ca8] text-[14px]">Snacks Break</p>
                  </div>
                </div>

                {/* Schedule Item 4 */}
                <div className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full">
                  <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[12px]">10:30</p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[11px]">60 min</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Floor Test</p>
                    <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Parties demonstrate majority support</p>
                  </div>
                </div>

                {/* Schedule Item 5 - Lunch */}
                <div className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full relative overflow-hidden">
                  <DiagonalStripePattern />
                  <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px] relative z-10">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[12px]">11:30</p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[11px]">30 min</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1 relative z-10">
                    <p className="leading-[16px] text-[#6e7ca8] text-[14px]">Lunch Break</p>
                  </div>
                </div>

                {/* Schedule Item 6 */}
                <div className="flex gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full">
                  <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[12px]">12:00</p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[11px]">45 min</p>
                  </div>
                  <div className="flex flex-col gap-[4px] flex-1">
                    <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Oath Taking Ceremony</p>
                    <p className="leading-[16px] text-[#6e7ca8] text-[12px]">Party leaders and members take oath of office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Join Party Modal */}
    <JoinPartyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
);
}

export function PartyManagementTab() {
  const [selectedPartyId, setSelectedPartyId] = useState<number | null>(1);

  // Mock data for parties
  const parties = [
    {
      id: 1,
      name: "Unity Progress Party",
      tagline: "Forging Together, Advancing Forward",
      logo: imgFlag,
      banner: imgUnsplash0HjWobhGhJs1,
      memberCount: 7,
      president: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse4
      },
      mentor: {
        name: "Regina",
        avatar: imgEllipse3
      },
      members: [
        { id: 1, name: "Alex Johnson", avatar: imgEllipse5 },
        { id: 2, name: "Maria Garcia", avatar: imgEllipse6 },
        { id: 3, name: "James Lee", avatar: imgEllipse7 },
        { id: 4, name: "Sofia Martinez", avatar: imgEllipse8 },
        { id: 5, name: "David Brown", avatar: imgEllipse9 },
      ],
      alliance: "Techno-Revolution Party + Citizen's Voice Party"
    },
    {
      id: 2,
      name: "Techno-Revolution Party",
      tagline: "Innovation for Tomorrow",
      logo: imgFlag1,
      banner: imgUnsplash0HjWobhGhJs1,
      memberCount: 5,
      president: {
        name: "Alex Johnson",
        avatar: imgEllipse5
      },
      mentor: {
        name: "Maria Garcia",
        avatar: imgEllipse6
      },
      members: [
        { id: 1, name: "James Lee", avatar: imgEllipse7 },
        { id: 2, name: "Sofia Martinez", avatar: imgEllipse8 },
        { id: 3, name: "David Brown", avatar: imgEllipse9 },
      ],
      alliance: "Unity Progress Party + Citizen's Voice Party"
    },
  ];

  const selectedParty = parties.find(p => p.id === selectedPartyId) || parties[0];

  return (
    <div className="flex gap-[24px] w-full items-start">
      {/* Left Column - Party List */}
      <div className="flex flex-col gap-[16px] w-[400px] shrink-0">
        <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">My Parties</p>
        
        {parties.map((party) => (
          <button
            key={party.id}
            onClick={() => setSelectedPartyId(party.id)}
            className={`bg-white relative rounded-[12px] shrink-0 w-full text-left transition-all ${
              selectedPartyId === party.id ? 'ring-2 ring-[#2766da]' : ''
            }`}
          >
            <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
              {/* Party Logo and Name */}
              <div className="flex gap-[12px] items-center w-full">
                <div className="overflow-clip relative shrink-0 size-[48px]">
                  <div className="absolute border border-solid border-white inset-0 overflow-clip rounded-[8px]">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={party.logo} />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-[4px] min-w-0">
                  <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px] truncate">{party.name}</p>
                  <p className="leading-[14px] text-[#6e7ca8] text-[12px] truncate">{party.tagline}</p>
                </div>
              </div>

              {/* Member Count */}
              <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <p className="leading-[16px] text-[#3c4c7c] text-[14px]">{party.memberCount < 10 ? `0${party.memberCount}` : party.memberCount} Members</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Right Column - Party Details */}
      <div className="flex-1 flex flex-col gap-[16px]">
        {/* Header with Banner */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start pt-[24px] px-[24px] pb-[24px] relative w-full">
              {/* Banner + Logo */}
              <div className="content-stretch flex flex-col items-start pb-[50px] relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[10px] items-end mb-[-50px] overflow-clip relative rounded-[8px] shrink-0 w-full">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
                    <div className="col-1 h-[100px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[800px_100px] ml-0 mt-0 relative row-1 w-[800px]" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={selectedParty.banner} />
                    </div>
                  </div>
                </div>
                <div className="mb-[-50px] relative shrink-0 w-full">
                  <div className="content-stretch flex items-start px-[24px] relative w-full">
                    <div className="overflow-clip relative shrink-0 size-[64px]">
                      <div className="absolute border border-solid border-white inset-0 overflow-clip rounded-[8.93px]">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={selectedParty.logo} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title and Actions */}
              <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis">
                  <p className="font-semibold leading-[32px] min-w-full overflow-hidden relative shrink-0 text-[#2f3e6d] text-[24px] w-[min-content] whitespace-pre-wrap">{selectedParty.name}</p>
                  <p className="leading-[14px] overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px]">{selectedParty.tagline}</p>
                </div>
                <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0">
                  <IconsEdit />
                </div>
                <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0">
                  <IconsDelete />
                </div>
              </div>

              {/* Tags */}
              <div className="content-center flex flex-wrap gap-[12px] items-center relative shrink-0 w-full">
                <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="leading-[16px] text-[#3c4c7c] text-[14px]">{selectedParty.memberCount < 10 ? `0${selectedParty.memberCount}` : selectedParty.memberCount} Members</p>
                </div>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="block max-w-none size-full" height="16" src={selectedParty.mentor.avatar} width="16" />
                    </div>
                    <p className="leading-[16px] text-[#3c4c7c] text-[14px]">{selectedParty.mentor.name}</p>
                  </div>
                  <StatusChip label="Mentor" />
                </div>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="block max-w-none size-full" height="16" src={selectedParty.president.avatar} width="16" />
                    </div>
                    <p className="leading-[16px] text-[#3c4c7c] text-[14px]">{selectedParty.president.name}</p>
                  </div>
                  <StatusChip label="President">
                    <IconsEmojiFlags />
                  </StatusChip>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>

        {/* Members Card */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Members</p>
              <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
                {selectedParty.members.map((member) => (
                  <div key={member.id} className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <img alt="" className="block max-w-none size-full" height="16" src={member.avatar} width="16" />
                      </div>
                      <p className="leading-[16px] text-[#3c4c7c] text-[14px]">{member.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Associated Alliance Card */}
        <div className="bg-white relative rounded-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Associated Alliance</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <PartyLogo1 />
                  <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[16px] text-ellipsis">
                    <p className="leading-[20px] whitespace-pre-wrap">{selectedParty.alliance}</p>
                  </div>
                  <Buttons2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}