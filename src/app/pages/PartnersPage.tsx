import { SharedNavBar } from '../components/SharedNavBar';
import { useState } from 'react';
import { SearchField } from '../components/SearchField';
import { PrimaryActionButton } from '../components/PrimaryActionButton';
import { PageHeader } from '../components/PageHeader';
import { motion, AnimatePresence } from 'motion/react';
import { NewPartnerForm } from '../components/NewPartnerForm';
import { PartnerDetailsView } from '../components/PartnerDetailsView';
import svgPaths from "../../imports/svg-gq87p0ikdv";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/570dfe1e78ba73cce493c4895be93ab0d92bdaaa.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/4fb1f9850130e69d652ab1618e13e68969e60d8f.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/7e770874797467c1231a6e2c0407a4ed24aa9429.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/f9b3c06508440585b4469b994d2f927d35c18a2c.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/5974f7b6e8531748cde6121621fa76d653ce8677.png";
import imgUnsplash0HjWobhGhJs6 from "figma:asset/f6c3f136bcd647f8b0cfe8441465a26b617ae301.png";
import imgUnsplash0HjWobhGhJs7 from "figma:asset/031bc32e613200e7bcd453fc49d1e8fe8945b774.png";
import imgUnsplash0HjWobhGhJs8 from "figma:asset/c6b0c7d88bae35c3a82808879eaf644233de6207.png";
import { imgUnsplash0HjWobhGhJs } from "../../imports/svg-8iuiz";

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
        <p className="leading-[16px]">New Partner</p>
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
      <SearchField placeholder="Search Partner" />
      <PrimaryActionButton label="New Partner" />
    </div>
  );
}

function Avatar({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[52px]" data-name="Avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[52px_52px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
          <img alt="" className="block max-w-none size-full" height="52" src={imgSrc} width="52" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f2f8] border-[0.65px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Tag({ status }: { status: 'active' | 'inactive' }) {
  if (status === 'active') {
    return (
      <div className="bg-[#e8ffeb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
        <div aria-hidden="true" className="absolute border-[#42a22a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#42a22a] text-[12px] text-ellipsis">Active</p>
      </div>
    );
  }
  
  return (
    <div className="bg-[#fff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Inactive</p>
    </div>
  );
}

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_1_4569" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_4569)">
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

function NameTag({ name, status }: { name: string; status: 'active' | 'inactive' }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">{name}</p>
      </div>
      <Tag status={status} />
    </div>
  );
}

function Name({ name, status }: { name: string; status: 'active' | 'inactive' }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag name={name} status={status} />
      <Buttons2 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mail">
          <mask height="16" id="mask0_1_4577" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_4577)">
            <path d={svgPaths.p1a898b00} fill="var(--fill-0, #6E7CA8)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconTextEmail({ email }: { email: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center max-w-[180px] min-h-px min-w-px relative" data-name="icon + Text">
      <Mail />
      <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">{email}</p>
    </div>
  );
}

function Call() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <mask height="16" id="mask0_1_4555" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_4555)">
            <path d={svgPaths.p1e3ca700} fill="var(--fill-0, #6E7CA8)" id="call_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconTextPhone({ phone }: { phone: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center max-w-[130px] min-h-px min-w-px relative" data-name="icon + Text">
      <Call />
      <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">{phone}</p>
    </div>
  );
}

function SubText({ email, phone }: { email: string; phone: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Sub Text">
      <IconTextEmail email={email} />
      <IconTextPhone phone={phone} />
    </div>
  );
}

function TitleLocation({ name, status, email, phone }: { name: string; status: 'active' | 'inactive'; email: string; phone: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name name={name} status={status} />
      <SubText email={email} phone={phone} />
    </div>
  );
}

function EventDetails({ name, status, email, phone }: { name: string; status: 'active' | 'inactive'; email: string; phone: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation name={name} status={status} email={email} phone={phone} />
    </div>
  );
}

function Content2({ imgSrc, name, status, email, phone }: { imgSrc: string; name: string; status: 'active' | 'inactive'; email: string; phone: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Avatar imgSrc={imgSrc} />
      <EventDetails name={name} status={status} email={email} phone={phone} />
    </div>
  );
}

function PartnerCard({ imgSrc, name, status, email, phone }: { imgSrc: string; name: string; status: 'active' | 'inactive'; email: string; phone: string }) {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <Content2 imgSrc={imgSrc} name={name} status={status} email={email} phone={phone} />
        </div>
      </div>
    </div>
  );
}

function PartnersList() {
  const partners = [
    {
      imgSrc: imgUnsplash0HjWobhGhJs1,
      name: "Oliver High School",
      status: 'active' as const,
      email: "lorri73@gmail.com",
      phone: "(904) 335-2403"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs2,
      name: "Peabody High School",
      status: 'active' as const,
      email: "k_pacheco@gmail.com",
      phone: "(908) 813-8989"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs3,
      name: "Oliver High School",
      status: 'active' as const,
      email: "c_j_mccoy@gmail.com",
      phone: "(907) 248-8330"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs4,
      name: "Pittsburgh Central Catholic High School",
      status: 'inactive' as const,
      email: "judith403@gmail.com",
      phone: "(636) 296-7838"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs5,
      name: "Winchester Thurston School",
      status: 'active' as const,
      email: "paul681@gmail.com",
      phone: "(214) 390-8650"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs6,
      name: "Perry Traditional Academy",
      status: 'active' as const,
      email: "s.t.sharkey@outlook.com",
      phone: "(816) 313-7673"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs7,
      name: "North Catholic High School",
      status: 'inactive' as const,
      email: "k.t.mastrangelo@outlook.com",
      phone: "(503) 338-2573"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs8,
      name: "Pittsburgh Central Catholic High School",
      status: 'active' as const,
      email: "susan718@gmail.com",
      phone: "(219) 380-3890"
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {partners.map((partner, index) => (
        <PartnerCard key={index} {...partner} />
      ))}
    </div>
  );
}

function SearchPartnersList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Search+ Partner list">
      <Action />
      <PartnersList />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[calc(16.67%+56px)] top-[32px] w-[848px]">
      <SharedNavBar activePage="partners" />
      <SearchPartnersList />
    </div>
  );
}

export default function PartnersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<typeof partners[0] | null>(null);

  const partners = [
    {
      imgSrc: imgUnsplash0HjWobhGhJs1,
      name: "Oliver High School",
      status: 'active' as const,
      email: "lorri73@gmail.com",
      phone: "(904) 335-2403"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs2,
      name: "Peabody High School",
      status: 'active' as const,
      email: "k_pacheco@gmail.com",
      phone: "(908) 813-8989"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs3,
      name: "Oliver High School",
      status: 'active' as const,
      email: "c_j_mccoy@gmail.com",
      phone: "(907) 248-8330"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs4,
      name: "Pittsburgh Central Catholic High School",
      status: 'inactive' as const,
      email: "judith403@gmail.com",
      phone: "(636) 296-7838"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs5,
      name: "Winchester Thurston School",
      status: 'active' as const,
      email: "paul681@gmail.com",
      phone: "(214) 390-8650"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs6,
      name: "Perry Traditional Academy",
      status: 'active' as const,
      email: "s.t.sharkey@outlook.com",
      phone: "(816) 313-7673"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs7,
      name: "North Catholic High School",
      status: 'inactive' as const,
      email: "k.t.mastrangelo@outlook.com",
      phone: "(503) 338-2573"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs8,
      name: "Pittsburgh Central Catholic High School",
      status: 'active' as const,
      email: "susan718@gmail.com",
      phone: "(219) 380-3890"
    }
  ];

  const filteredPartners = partners.filter(partner =>
    partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.phone.includes(searchQuery)
  );

  return (
    <div className="bg-[#f8f9fb] relative size-full" data-name="Partners">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="partners" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />

      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px]">
        {/* Action Bar - Search and Button */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <SearchField 
            placeholder="Search Partner" 
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <PrimaryActionButton label="New Partner" onClick={() => {
            setSelectedPartner(null);
            setShowForm(true);
          }} />
        </div>

        {/* Two Column Layout - Partners List + Form/Details (within the container boundaries) */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* Left Column - Partners List */}
          <div className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 max-h-[calc(100vh-170px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            (showForm || selectedPartner) ? 'flex-1' : 'w-full'
          }`}>
            {filteredPartners.map((partner, index) => {
              const isSelected = selectedPartner && 
                selectedPartner.name === partner.name && 
                selectedPartner.email === partner.email;
              const shouldGreyOut = showForm || (selectedPartner && !isSelected);
              
              return (
                <div 
                  key={index} 
                  onClick={() => {
                    setShowForm(false);
                    setSelectedPartner(partner);
                  }} 
                  className={`cursor-pointer w-full transition-opacity duration-200 ${
                    shouldGreyOut ? 'opacity-40' : ''
                  }`}
                >
                  <PartnerCard {...partner} />
                </div>
              );
            })}
          </div>

          {/* Right Column - Form OR Details Panel (only when visible) - Independently Scrollable */}
          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div 
                key="form"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <NewPartnerForm onClose={() => setShowForm(false)} />
              </motion.div>
            )}
            {selectedPartner && !showForm && (
              <motion.div 
                key="details"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <PartnerDetailsView partner={selectedPartner} onClose={() => setSelectedPartner(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}