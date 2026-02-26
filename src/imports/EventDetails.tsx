import svgPaths from "./svg-g3dbnhdfg1";
import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import imgEllipse3 from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/2255efa6e3d4e9cd3d5daf58f5f5df679f8ce61b.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/bdd8fbc00e625d0c6fe14c2c8af968a19e0b5258.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/666aaf651ac2fa50457b5314dddb3ef527236357.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/0c010bee9a65e7abc8fbcfcd9aabb12192721142.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/4fe1dc6012c7950c64680d0050aa8870cf6b7629.png";
import imgUnsplash0HjWobhGhJs6 from "figma:asset/970678de1f18c883f87566bc9d6cb8a33ce7c22b.png";
import imgUnsplash0HjWobhGhJs7 from "figma:asset/1fe3a74538117eb749053e9327f4316a11266495.png";
import { imgUnsplash0HjWobhGhJs } from "./svg-s5z32";

function Flag() {
  return (
    <div className="absolute inset-[-0.47px_calc(0%-0.47px)_-0.47px_calc(0%-0.46px)]" data-name="Flag">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlag} />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute border-[0.465px] border-solid border-white inset-0 overflow-clip rounded-[5.581px]" data-name="Component 4">
      <Flag />
    </div>
  );
}

function PartyLogo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Party Logo">
      <Component />
    </div>
  );
}

function PartyNameDEscription() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-ellipsis" data-name="Party name + DEscription">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#2f3e6d] text-[16px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Techno-Revolution Party Members</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] w-full">
        <p className="leading-[1.4] whitespace-pre-wrap">Forging Together, Advancing Forward</p>
      </div>
    </div>
  );
}

function IconsOpenInNew() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / open_in_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / open_in_new">
          <mask height="20" id="mask0_188_947" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_188_947)">
            <path d={svgPaths.p71cf200} fill="var(--fill-0, #1850C5)" id="open_in_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LogoGroupName() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Logo + Group Name">
      <PartyLogo />
      <PartyNameDEscription />
      <IconsOpenInNew />
    </div>
  );
}

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">20 Members</p>
      </div>
    </div>
  );
}

function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[12px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <LogoGroupName />
      <AvatarTag />
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

function Tag() {
  return (
    <div className="bg-[#e7f2fe] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#3c7ce8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconsPresident />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#1850c5] text-[12px] text-ellipsis">President</p>
    </div>
  );
}

function NameAvatar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Sheilah T. Sayasane</p>
      </div>
      <Tag />
    </div>
  );
}

function InputFieldNameList() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar />
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

function Tag1() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#6820ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconsPresident1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6820ff] text-[12px] text-ellipsis">V.President</p>
    </div>
  );
}

function NameAvatar1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Avatar">
      <Avatar2 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Roy X. Hinde</p>
      </div>
      <Tag1 />
    </div>
  );
}

function InputFieldNameList1() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar1 />
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
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar2 />
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
        <p className="leading-[16px] overflow-hidden">Mai G. Sollom</p>
      </div>
    </div>
  );
}

function InputFieldNameList3() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar3 />
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
        <p className="leading-[16px] overflow-hidden">Latricia W. Silletti</p>
      </div>
    </div>
  );
}

function InputFieldNameList4() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar4 />
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
        <p className="leading-[16px] overflow-hidden">Adrianne P. Tillis</p>
      </div>
    </div>
  );
}

function InputFieldNameList5() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar5 />
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
        <p className="leading-[16px] overflow-hidden">Elvira E. Aus</p>
      </div>
    </div>
  );
}

function InputFieldNameList6() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Input field/Name list">
      <NameAvatar6 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis w-[280px] whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden">Leaders</p>
      </div>
      <InputFieldNameList />
      <InputFieldNameList1 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis w-[280px] whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden">Members</p>
      </div>
      <InputFieldNameList2 />
      <InputFieldNameList3 />
      <InputFieldNameList4 />
      <InputFieldNameList5 />
      <InputFieldNameList6 />
    </div>
  );
}

export default function EventDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] size-full" data-name="Event Details">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1 />
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />
      <Frame />
    </div>
  );
}