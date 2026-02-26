import svgPaths from "./svg-1oyydsqolq";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/e4b1507841a1bbbe6410b5f39178bfdea85d00da.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/b12bfab67dbe73f15b84285f0188913f64346c97.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/1060fa6cbdd9aff94447dee20c356aac232acd4a.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/1fe3a74538117eb749053e9327f4316a11266495.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/2255efa6e3d4e9cd3d5daf58f5f5df679f8ce61b.png";
import imgUnsplash0HjWobhGhJs6 from "figma:asset/2e64743911da5f6f300c2e47c6d8d6252dc58712.png";
import imgUnsplash0HjWobhGhJs7 from "figma:asset/666aaf651ac2fa50457b5314dddb3ef527236357.png";
import imgUnsplash0HjWobhGhJs8 from "figma:asset/21b40986245ed1be4227392be40f3d8ef3fe693c.png";
import imgUnsplash0HjWobhGhJs9 from "figma:asset/a11677eaf0ca84ad9beb7e1fddb81f511ae5aaa6.png";
import { imgUnsplash0HjWobhGhJs } from "./svg-5uzxk";

function MembersAdded() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] not-italic relative shrink-0 text-[#6e7ca8] text-[12px] w-full whitespace-nowrap" data-name="Members Added">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-ellipsis w-[280px]">
        <p className="leading-[14px] overflow-hidden">Members Added</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[14px]">No Members Added</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs1} width="32" />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function NameAvatar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Roy X. Hinde</p>
      </div>
    </div>
  );
}

function InputFieldNameList() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar />
    </div>
  );
}

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
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
        <IconsAddCircle />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList />
      <Buttons />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs2} width="32" />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar3 />
    </div>
  );
}

function NameAvatar1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar2 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Florine H. Kotoff</p>
      </div>
    </div>
  );
}

function InputFieldNameList1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar1 />
    </div>
  );
}

function IconsAddCircle1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList1 />
      <Buttons1 />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs3} width="32" />
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar5 />
    </div>
  );
}

function NameAvatar2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar4 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Aleta H. Starcher</p>
      </div>
    </div>
  );
}

function InputFieldNameList2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar2 />
    </div>
  );
}

function IconsAddCircle2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList2 />
      <Buttons2 />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs4} width="32" />
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar7 />
    </div>
  );
}

function NameAvatar3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar6 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Sheilah T. Sayasane</p>
      </div>
    </div>
  );
}

function InputFieldNameList3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar3 />
    </div>
  );
}

function IconsAddCircle3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList3 />
      <Buttons3 />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs5} width="32" />
      </div>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar9 />
    </div>
  );
}

function NameAvatar4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar8 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Jacquelin E. Bellido</p>
      </div>
    </div>
  );
}

function InputFieldNameList4() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar4 />
    </div>
  );
}

function IconsAddCircle4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList4 />
      <Buttons4 />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs6} width="32" />
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar11 />
    </div>
  );
}

function NameAvatar5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar10 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Nubia S. Mashia</p>
      </div>
    </div>
  );
}

function InputFieldNameList5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar5 />
    </div>
  );
}

function IconsAddCircle5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList5 />
      <Buttons5 />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs7} width="32" />
      </div>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar13 />
    </div>
  );
}

function NameAvatar6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar12 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Luana T. Durousseau</p>
      </div>
    </div>
  );
}

function InputFieldNameList6() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar6 />
    </div>
  );
}

function IconsAddCircle6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList6 />
      <Buttons6 />
    </div>
  );
}

function Avatar15() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs5} width="32" />
      </div>
    </div>
  );
}

function Avatar14() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar15 />
    </div>
  );
}

function NameAvatar7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar14 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Verla L. Duvall</p>
      </div>
    </div>
  );
}

function InputFieldNameList7() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar7 />
    </div>
  );
}

function IconsAddCircle7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList7 />
      <Buttons7 />
    </div>
  );
}

function Avatar17() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs8} width="32" />
      </div>
    </div>
  );
}

function Avatar16() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar17 />
    </div>
  );
}

function NameAvatar8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar16 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Addie V. Biela</p>
      </div>
    </div>
  );
}

function InputFieldNameList8() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar8 />
    </div>
  );
}

function IconsAddCircle8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons8() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle8 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList8 />
      <Buttons8 />
    </div>
  );
}

function Avatar19() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs9} width="32" />
      </div>
    </div>
  );
}

function Avatar18() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar19 />
    </div>
  );
}

function NameAvatar9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar18 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Jacalyn K. Hanaburgh</p>
      </div>
    </div>
  );
}

function InputFieldNameList9() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar9 />
    </div>
  );
}

function IconsAddCircle9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons9() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle9 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList9 />
      <Buttons9 />
    </div>
  );
}

function Avatar21() {
  return (
    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0" data-name="Avatar">
      <div className="absolute inset-[-1px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[32px_32px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
        <img alt="" className="block max-w-none size-full" height="32" src={imgUnsplash0HjWobhGhJs5} width="32" />
      </div>
    </div>
  );
}

function Avatar20() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <Avatar21 />
    </div>
  );
}

function NameAvatar10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar20 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Arminda M. McHalffey</p>
      </div>
    </div>
  );
}

function InputFieldNameList10() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Input field/Name list">
      <NameAvatar10 />
    </div>
  );
}

function IconsAddCircle10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_188_2299" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_188_2299)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsAddCircle10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <InputFieldNameList10 />
      <Buttons10 />
    </div>
  );
}

function ListOfMembers() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List of members">
      <Frame2 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame1 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis w-[280px] whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden">Available members</p>
      </div>
      <ListOfMembers />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <MembersAdded />
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />
      <Frame12 />
    </div>
  );
}