import { useNavigate } from 'react-router';
import { useState } from 'react';
import { SharedNavBar } from '../components/SharedNavBar';
import { SearchField } from '../components/SearchField';
import { PrimaryActionButton } from '../components/PrimaryActionButton';
import { PageHeader } from '../components/PageHeader';
import svgPaths from "../../imports/svg-hkh4t53hh4";

function Group() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.314px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3139 24">
        <g id="Group">
          <path d={svgPaths.p357ab000} fill="var(--fill-0, #1850C5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Logo">
      <Group />
    </div>
  );
}

function Nav({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 cursor-pointer" data-name=".nav">
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{label}</p>
    </button>
  );
}

function NavActive({ label }: { label: string }) {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <p className="font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis">{label}</p>
    </div>
  );
}

function Tabs({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs">
      <NavActive label="Dashboard" />
      <Nav label="PSPs" onClick={() => onNavigate('/psps')} />
      <Nav label="Partners" onClick={() => onNavigate('/partners')} />
      <Nav label="Global Lists" onClick={() => onNavigate('/global-lists')} />
    </div>
  );
}

function NavBar({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center p-[8px] relative rounded-[12px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Nav bar">
      <Logo />
      <Tabs onNavigate={onNavigate} />
    </div>
  );
}

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_more">
          <mask height="16" id="mask0_1_1001" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.0015626" />
          </mask>
          <g mask="url(#mask0_1_1001)">
            <path d={svgPaths.p271bc980} fill="var(--fill-0, #3C4C7C)" id="expand_more" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">Let's Legislative</p>
        </div>
        <IconsExpandMore />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TopSideBar() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center p-[8px] relative rounded-[12px] shrink-0" data-name="Top Side bar">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Buttons />
    </div>
  );
}

function Frame1({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <NavBar onNavigate={onNavigate} />
      <TopSideBar />
    </div>
  );
}

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_1_993" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_1_993)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, white)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#2766da] content-stretch flex gap-[4px] h-[44px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <IconsAddCircle />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">New Event</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[281px]" data-name="Button group">
      <Buttons1 />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action">
      <SearchField />
      <PrimaryActionButton label="New Event" />
    </div>
  );
}

function ChipAtom() {
  return (
    <div className="bg-[#2766da] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Chip atom">
      <p className="font-medium leading-[14px] not-italic relative shrink-0 text-[12px] text-center text-white">Ongoing</p>
    </div>
  );
}

function ChipAtom1() {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Chip atom">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-center">Completed</p>
    </div>
  );
}

function ChipAtom2() {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Chip atom">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-center">Draft</p>
    </div>
  );
}

function Chip() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Chip">
      <ChipAtom />
      <ChipAtom1 />
      <ChipAtom2 />
    </div>
  );
}

function SearchEventList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Search+ Event list">
      <Action />
      <Chip />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[calc(16.67%+56px)] top-[32px] w-[848px]">
      <SharedNavBar activePage="dashboard" />
      <SearchEventList />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[200px] relative shrink-0 w-[244.754px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244.754 200">
        <g id="Group 23">
          <path d={svgPaths.p77c6c80} fill="var(--fill-0, #5795F1)" id="Vector" opacity="0.18" />
          <path d={svgPaths.p18d2b200} fill="var(--fill-0, #5795F1)" id="Vector_2" />
          <path d={svgPaths.pf8dedb0} fill="url(#paint0_linear_1_1005)" id="Vector_3" />
          <path d={svgPaths.p3de8fd00} fill="var(--fill-0, #5795F1)" id="Vector_4" />
          <path d={svgPaths.p3de8fd00} fill="url(#paint1_linear_1_1005)" id="Vector_5" />
          <path d={svgPaths.p2a653000} fill="url(#paint2_linear_1_1005)" id="Vector_6" />
          <path d={svgPaths.p181c480} fill="var(--fill-0, #5795F1)" id="Vector_7" />
          <path d={svgPaths.pa32a480} fill="url(#paint3_linear_1_1005)" id="Vector_8" />
          <path d={svgPaths.p1f8e55f0} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p9d4c000} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p227b1700} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p10d2df00} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p244fad00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p159bcb00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p3316b100} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p2ba3b200} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p21f1bc00} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p3dfa0000} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p8c47100} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p1bded800} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p1f0bc780} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p1cfc6600} fill="var(--fill-0, white)" id="Vector_22" />
          <path d={svgPaths.pc3be900} fill="var(--fill-0, white)" id="Vector_23" />
          <path d={svgPaths.p23c53900} fill="var(--fill-0, white)" id="Vector_24" />
          <path d={svgPaths.p13901f80} fill="var(--fill-0, white)" id="Vector_25" />
          <path d={svgPaths.p16deda00} fill="var(--fill-0, white)" id="Vector_26" />
          <path d={svgPaths.p545dc00} fill="var(--fill-0, white)" id="Vector_27" />
          <path d={svgPaths.p37c18d80} fill="var(--fill-0, white)" id="Vector_28" />
          <path d={svgPaths.p261f1b30} fill="var(--fill-0, white)" id="Vector_29" />
          <path d={svgPaths.p19d7a80} fill="var(--fill-0, white)" id="Vector_30" />
          <path d={svgPaths.p37da5f00} fill="var(--fill-0, white)" id="Vector_31" />
          <path d={svgPaths.p5f86b80} fill="var(--fill-0, white)" id="Vector_32" />
          <path d={svgPaths.p19b38f80} fill="var(--fill-0, white)" id="Vector_33" />
          <path d={svgPaths.p1eb2c670} fill="var(--fill-0, #5795F1)" id="Vector_34" />
          <path d={svgPaths.p32c65700} fill="url(#paint4_linear_1_1005)" id="Vector_35" />
          <path d={svgPaths.p1b0d8700} fill="url(#paint5_linear_1_1005)" id="Vector_36" />
          <path d={svgPaths.p3bc9ca80} fill="url(#paint6_linear_1_1005)" id="Vector_37" />
          <path d={svgPaths.p1d5ec380} fill="url(#paint7_linear_1_1005)" id="Vector_38" />
          <path d={svgPaths.p42e6300} fill="url(#paint8_linear_1_1005)" id="Vector_39" />
          <path d={svgPaths.p20c14300} fill="url(#paint9_linear_1_1005)" id="Vector_40" />
          <path d={svgPaths.p2815f300} fill="var(--fill-0, #EA4335)" id="Vector_41" />
          <path d={svgPaths.pd942700} fill="url(#paint10_linear_1_1005)" id="Vector_42" />
          <path d={svgPaths.p1c0a7200} fill="url(#paint11_linear_1_1005)" id="Vector_43" />
          <path d={svgPaths.p9afd300} fill="url(#paint12_linear_1_1005)" id="Vector_44" />
          <path d={svgPaths.p32d3ba00} fill="var(--fill-0, #3D5644)" id="Vector_45" />
          <path d={svgPaths.pfc2c900} fill="url(#paint13_linear_1_1005)" id="Vector_46" />
          <path d={svgPaths.p18c82880} fill="var(--fill-0, #5795F1)" id="Vector_47" />
          <path d={svgPaths.p18fdc700} fill="url(#paint14_linear_1_1005)" id="Vector_48" />
          <path d={svgPaths.p3d3cde00} fill="url(#paint15_linear_1_1005)" id="Vector_49" />
          <path d={svgPaths.p1ad70e80} fill="var(--fill-0, #5795F1)" id="Vector_50" />
          <path d={svgPaths.p26ae0180} fill="var(--fill-0, #5795F1)" id="Vector_51" />
          <path d={svgPaths.p14fed200} fill="var(--fill-0, #5795F1)" id="Vector_52" />
          <path d={svgPaths.p370f4200} fill="var(--fill-0, #5795F1)" id="Vector_53" />
          <path d={svgPaths.p10c47700} fill="var(--fill-0, #5795F1)" id="Vector_54" />
          <path d={svgPaths.p2304c00} fill="var(--fill-0, #5795F1)" id="Vector_55" />
          <path d={svgPaths.p1d1d0700} fill="var(--fill-0, #5795F1)" id="Vector_56" />
          <path d={svgPaths.p3a67580} fill="var(--fill-0, #5795F1)" id="Vector_57" />
          <path d={svgPaths.p25f8f100} fill="var(--fill-0, #5795F1)" id="Vector_58" />
          <path d={svgPaths.p226cee00} fill="var(--fill-0, #5795F1)" id="Vector_59" />
          <path d={svgPaths.p2538980} fill="var(--fill-0, #5795F1)" id="Vector_60" />
          <path d={svgPaths.p3cfac570} fill="var(--fill-0, #5795F1)" id="Vector_61" />
          <path d={svgPaths.p370f4200} fill="url(#paint16_linear_1_1005)" id="Vector_62" />
          <path d={svgPaths.p2dd4f700} fill="url(#paint17_linear_1_1005)" id="Vector_63" />
          <path d={svgPaths.pb179980} fill="url(#paint18_linear_1_1005)" id="Vector_64" />
          <path d={svgPaths.p37e18b70} fill="url(#paint19_linear_1_1005)" id="Vector_65" />
          <g id="Group">
            <path d={svgPaths.pcabd000} fill="url(#paint20_linear_1_1005)" id="Vector_66" />
            <path d={svgPaths.p29a8c200} fill="url(#paint21_linear_1_1005)" id="Vector_67" />
            <path d={svgPaths.p12592a00} fill="url(#paint22_linear_1_1005)" id="Vector_68" />
          </g>
          <path d={svgPaths.p4cbd400} fill="var(--fill-0, #1D4127)" id="Vector_69" opacity="0.18" />
          <path d={svgPaths.p27fe8800} fill="url(#paint23_linear_1_1005)" id="Vector_70" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1005" x1="213.547" x2="156.269" y1="94.9536" y2="202.731">
            <stop offset="0.02" stopOpacity="0" />
            <stop offset="0.32" stopColor="#161F18" stopOpacity="0.36" />
            <stop offset="0.76" stopColor="#324738" stopOpacity="0.82" />
            <stop offset="0.99" stopColor="#3D5644" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_1005" x1="135.943" x2="129.565" y1="-23.2504" y2="64.3306">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_1005" x1="133.407" x2="110.544" y1="92.1285" y2="-29.8062">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_1005" x1="102.866" x2="-88.4429" y1="114.557" y2="115.119">
            <stop offset="0.03" stopOpacity="0" />
            <stop offset="0.62" stopColor="#28382C" stopOpacity="0.66" />
            <stop offset="0.99" stopColor="#3D5644" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_1005" x1="212.722" x2="160.747" y1="105.307" y2="106.001">
            <stop stopColor="#68A0FD" />
            <stop offset="0.01" stopColor="#679EF9" />
            <stop offset="0.12" stopColor="#4285F4" />
            <stop offset="0.24" stopColor="#5373A9" />
            <stop offset="0.37" stopColor="#34A853" />
            <stop offset="0.5" stopColor="#467352" />
            <stop offset="0.63" stopColor="#42634B" />
            <stop offset="0.79" stopColor="#405947" />
            <stop offset="0.99" stopColor="#3D5644" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_1005" x1="144.821" x2="145.451" y1="42.0525" y2="51.6099">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_1005" x1="144.821" x2="145.451" y1="66.7976" y2="76.3583">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_1005" x1="149.441" x2="150.068" y1="66.7976" y2="76.3583">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_1005" x1="154.063" x2="154.689" y1="66.7976" y2="76.3583">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_1005" x1="144.821" x2="145.451" y1="116.635" y2="126.195">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint10_linear_1_1005" x1="149.442" x2="150.068" y1="116.635" y2="126.195">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint11_linear_1_1005" x1="154.063" x2="154.689" y1="116.635" y2="126.195">
            <stop stopColor="#18662D" />
            <stop offset="1" stopColor="#1A59C1" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint12_linear_1_1005" x1="235.554" x2="204.457" y1="77.9917" y2="65.8649">
            <stop stopColor="#C4D3EC" />
            <stop offset="0.16" stopColor="#CBD8ED" />
            <stop offset="0.42" stopColor="#D1DCEF" />
            <stop offset="0.7" stopColor="#FBBC05" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint13_linear_1_1005" x1="195.637" x2="201.308" y1="87.4141" y2="87.4141">
            <stop stopColor="#C4D3EC" />
            <stop offset="0.42" stopColor="#D1DCEF" />
            <stop offset="1" stopColor="#FBBC05" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint14_linear_1_1005" x1="197.769" x2="202.502" y1="106.79" y2="106.79">
            <stop stopColor="#C4D3EC" />
            <stop offset="0.42" stopColor="#D1DCEF" />
            <stop offset="1" stopColor="#FBBC05" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint15_linear_1_1005" x1="214.041" x2="201.133" y1="83.3379" y2="98.4964">
            <stop stopColor="#C4D3EC" />
            <stop offset="0.42" stopColor="#D1DCEF" />
            <stop offset="1" stopColor="#FBBC05" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint16_linear_1_1005" x1="43.5163" x2="38.3507" y1="163.979" y2="175.325">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint17_linear_1_1005" x1="55.8394" x2="40.0377" y1="171.867" y2="169.84">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint18_linear_1_1005" x1="56.2975" x2="36.5429" y1="155.96" y2="168.321">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint19_linear_1_1005" x1="52.8376" x2="31.5621" y1="141.847" y2="166.567">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint20_linear_1_1005" x1="31.5396" x2="53.6158" y1="185.376" y2="191.519">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint21_linear_1_1005" x1="47.6608" x2="54.3071" y1="179.764" y2="211.623">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint22_linear_1_1005" x1="50.631" x2="50.4267" y1="172.843" y2="188.751">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint23_linear_1_1005" x1="42.0151" x2="58.3227" y1="148.95" y2="166.982">
            <stop offset="0.01" />
            <stop offset="0.1" stopOpacity="0.77" />
            <stop offset="0.99" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Calendar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[280px]" data-name="Calendar">
      <Group1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center not-italic relative shrink-0 text-center w-full whitespace-pre-wrap" data-name="Content">
      <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#2f3e6d] text-[24px] w-full">
        <p className="mb-0">{`It looks like there are `}</p>
        <p>{`no events available at the moment. `}</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#6e7ca8] text-[16px] w-full">Stay tuned for exciting updates and upcoming opportunities</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[378px]">
      <Content1 />
    </div>
  );
}

function EmptyState() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[32px] items-center justify-center left-1/2 top-[317px]" data-name="Empty State">
      <Calendar />
      <Frame />
    </div>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const allEvents = [
    { id: 1, title: 'Parliamentary Debate on Education Reform', date: '2026-02-20', status: 'Ongoing' },
    { id: 2, title: 'Budget Session 2026', date: '2026-02-25', status: 'Ongoing' },
    { id: 3, title: 'Committee Meeting on Healthcare', date: '2026-03-01', status: 'Ongoing' },
    { id: 4, title: 'Winter Session 2025', date: '2025-12-15', status: 'Completed' },
    { id: 5, title: 'Constitutional Amendment Discussion', date: '2026-01-10', status: 'Completed' },
    { id: 6, title: 'Infrastructure Development Review', date: '2026-03-15', status: 'Draft' },
  ];

  const filteredEvents = allEvents.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f8f9fb] relative size-full" data-name="Event List">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="dashboard" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px]">
        {/* Action Bar - Search and Button */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="w-[320px]">
            <SearchField 
              placeholder="Search Events" 
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>
          
          <PrimaryActionButton label="New Event" />
        </div>

        {/* Event List */}
        <div className="flex flex-col gap-[16px] w-full">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-[16px] border border-[#f1f2f8] p-[24px] flex gap-[16px] items-center justify-between"
              >
                <div className="flex-1">
                  <p className="font-semibold leading-[16px] text-[#2f3e6d] text-[14px] mb-[4px]">
                    {event.title}
                  </p>
                  <p className="leading-[14px] text-[#6e7ca8] text-[12px]">
                    {event.date}
                  </p>
                </div>
                
                <div className={`px-[16px] py-[8px] rounded-[8px] ${
                  event.status === 'Ongoing' 
                    ? 'bg-[#2766da] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]'
                    : 'bg-[#f1f2f8] border border-[#e3e6f0]'
                }`}>
                  <p className={`leading-[14px] text-[12px] text-center ${
                    event.status === 'Ongoing'
                      ? 'text-white'
                      : 'font-semibold text-[#2f3e6d]'
                  }`}>
                    {event.status}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-[120px]">
              <p className="font-semibold leading-[32px] text-[#2f3e6d] text-[24px] text-center mb-[12px]">
                No events found
              </p>
              <p className="leading-[20px] text-[#6e7ca8] text-[16px] text-center">
                Try adjusting your search query
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}