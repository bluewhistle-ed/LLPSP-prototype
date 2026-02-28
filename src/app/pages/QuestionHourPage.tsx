import svgPaths from "../../imports/svg-yy4ljbh9ou";
import svgPathsButton from "../../imports/svg-3p1d7b9wop";
import svgPathsM62qn7xwsa from "../../imports/svg-m62qn7xwsa";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import svgPathsChevron from "../../imports/svg-0xkqyva2mx";
import imgEllipse3 from "figma:asset/072958e13f38abd0a42ad7f8edae5e3aa7e2ff2b.png";
import imgEllipse4 from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";
import imgEllipse5 from "figma:asset/f6ba6f3786e668346bbfc663e520ac1bacb87949.png";
import imgEllipse8 from "figma:asset/ba2f16d42d47f4ee59f03debf98e6bdc2a4d8653.png";
import { PageHeader } from "../components/PageHeader";
import { SharedNavBar } from "../components/SharedNavBar";
import { PrimaryActionButton } from "../components/PrimaryActionButton";
import { QuestionForm } from "../components/QuestionForm";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { useUser } from "../context/UserContext";

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_more" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_more)">
          <path d="M8 12.6667C7.63333 12.6667 7.31956 12.5362 7.05867 12.2753C6.79778 12.0144 6.66711 11.7004 6.66667 11.3334C6.66667 10.9667 6.79711 10.6529 7.058 10.392C7.31889 10.1311 7.63289 10.0004 8 10C8.36667 10 8.68044 10.1304 8.94133 10.3913C9.20222 10.6522 9.33289 10.9662 9.33333 11.3334C9.33333 11.7 9.20289 12.0138 8.942 12.2747C8.68111 12.5356 8.36711 12.6662 8 12.6667ZM8 9.33337C7.63333 9.33337 7.31956 9.20293 7.05867 8.94204C6.79778 8.68115 6.66711 8.36715 6.66667 8.00004C6.66667 7.63337 6.79711 7.3196 7.058 7.05871C7.31889 6.79782 7.63289 6.66715 8 6.66671C8.36667 6.66671 8.68044 6.79715 8.94133 7.05804C9.20222 7.31893 9.33289 7.63293 9.33333 8.00004C9.33333 8.36671 9.20289 8.68048 8.942 8.94137C8.68111 9.20226 8.36711 9.33293 8 9.33337ZM8 6.00004C7.63333 6.00004 7.31956 5.8696 7.05867 5.60871C6.79778 5.34782 6.66711 5.03382 6.66667 4.66671C6.66667 4.30004 6.79711 3.98626 7.058 3.72537C7.31889 3.46448 7.63289 3.33382 8 3.33337C8.36667 3.33337 8.68044 3.46382 8.94133 3.72471C9.20222 3.9856 9.33289 4.2996 9.33333 4.66671C9.33333 5.03337 9.20289 5.34715 8.942 5.60804C8.68111 5.86893 8.36711 5.9996 8 6.00004Z" fill="#2F3E6D"/>
        </g>
      </svg>
    </div>
  );
}

function IconsGovernment() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_gov" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_gov)">
          <path d={svgPathsM62qn7xwsa.pb5bda80} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsCalendar() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_cal" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_cal)">
          <path d={svgPaths.p1bca1d80} fill="#6E7CA8" />
        </g>
      </svg>
    </div>
  );
}

function IconsReply() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_reply" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_reply)">
          <path d="M6.66667 11.3333V8.66667H12.6667V7.33333H6.66667V4.66667L2.66667 8L6.66667 11.3333Z" fill="#1850C5"/>
        </g>
      </svg>
    </div>
  );
}

function AnswerButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white cursor-pointer relative rounded-[6px] shrink-0 hover:bg-[#f1f2f8] transition-colors">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative">
        <p className="leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">Answer</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function MentorActionButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white cursor-pointer relative rounded-[6px] shrink-0 hover:bg-[#f1f2f8] transition-colors">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative">
        <p className="leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">{label}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

function PartyBadge({ party }: { party: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    UPP: { bg: '#fef3e8', border: '#ed7d31', text: '#ed7d31' },
    TRP: { bg: '#e8f4ff', border: '#2766da', text: '#2766da' }
  };

  const color = colors[party] || colors.UPP;

  return (
    <div className={`${color.bg} content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0`}>
      <div aria-hidden="true" className={`absolute border-[${color.border}] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]`} style={{ borderColor: color.border }} />
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis" style={{ color: color.text }}>{party}</p>
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const getRoleConfig = (role: string) => {
    const roleConfigs: Record<string, { bg: string; border: string; text: string; icon?: JSX.Element }> = {
      Mentor: { 
        bg: '#f5f0ff', 
        border: '#6820ff', 
        text: '#6820ff'
        // No icon for Mentor
      },
      'Private Member': {
        bg: '#f1f2f8',
        border: '#6e7ca8',
        text: '#3c4c7c'
      },
      President: { 
        bg: '#e7f2fe', 
        border: '#3c7ce8', 
        text: '#1850c5',
        icon: (
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id="mask_president" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_president)">
                <path d={svgPathsFlag.p34b4d070} fill="#1850C5" />
              </g>
            </svg>
          </div>
        )
      },
      Minister: { 
        bg: '#fef7ed', 
        border: '#92400e', 
        text: '#92400e',
        icon: (
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id="mask_minister" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_minister)">
                <path d="M6 7.5L3.5 9.25L4.25 6.4L2 4.5L4.95 4.3L6 1.5L7.05 4.3L10 4.5L7.75 6.4L8.5 9.25L6 7.5Z" fill="#92400e"/>
              </g>
            </svg>
          </div>
        )
      },
      MoS: { 
        bg: '#fef7ed', 
        border: '#92400e', 
        text: '#92400e',
        icon: (
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id="mask_mos" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_mos)">
                <path d="M6 7.5L3.5 9.25L4.25 6.4L2 4.5L4.95 4.3L6 1.5L7.05 4.3L10 4.5L7.75 6.4L8.5 9.25L6 7.5Z" fill="#92400e"/>
              </g>
            </svg>
          </div>
        )
      }
    };
    return roleConfigs[role] || roleConfigs.President;
  };

  const config = getRoleConfig(role);

  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: config.bg }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: config.border }} />
      {config.icon}
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis" style={{ color: config.text }}>{role}</p>
    </div>
  );
}

function QuestionCard() {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<string[]>([]);

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  const handleCancelReply = () => {
    setReplyText("");
    setShowReplyInput(false);
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          <IconsGovernment />
          <div className="flex flex-col gap-[8px] flex-1">
            <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">To the Ministry of Commerce & Industry</p>
            <div className="flex gap-[8px] items-center">
              <p className="leading-[14px] text-[#6e7ca8] text-[12px]">12/03/2024  6:40 PM</p>
              <div className="relative shrink-0 size-[4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                  <circle cx="2" cy="2" fill="#C8CEE2" r="2" />
                </svg>
              </div>
              <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Waiting for approval</p>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer">
          <IconsMoreVert />
        </button>
      </div>

      {/* Questions List */}
      <ul className="content-stretch flex flex-col gap-[6px] list-disc pl-[20px] relative shrink-0 w-full">
        <li className="leading-[20px] text-[#3c4c7c] text-[14px]">
          What are the steps taken to tap the potential of Medicinal and Aromatic Plants(MAPs) in Assam, which is one of the biggest repositories of MAPs in the world?
        </li>
        <li className="leading-[20px] text-[#3c4c7c] text-[14px]">
          If so how much has been spent towards the promotion of MAPs?
        </li>
        <li className="leading-[20px] text-[#3c4c7c] text-[14px]">
          What are the steps taken to attract investments in MAPs through 'Make in India' scheme?
        </li>
      </ul>

      {/* Divider */}
      <div className="border-t border-[#e3e6f0] w-full" />

      {/* Footer */}
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        {/* Person asking the question */}
        <div className="flex gap-[6px] items-center">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse3} />
          </div>
          <p className="leading-[16px] text-[#2f3e6d] text-[12px]">Sheilah T. Sayasane</p>
          <RoleBadge role="Private Member" />
          <PartyBadge party="UPP" />
        </div>

        {/* Separator */}
        <p className="leading-[16px] text-[#6e7ca8] text-[12px]">|</p>

        {/* Minister being asked */}
        <div className="flex gap-[6px] items-center">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse4} />
          </div>
          <p className="leading-[16px] text-[#2f3e6d] text-[12px]">Addie V. Biela</p>
          <RoleBadge role="Minister" />
          <PartyBadge party="TRP" />
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full">
        <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
        
        {/* Mentor Feedback Comment */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[16px] text-[#2f3e6d] text-[12px]">Feedback</p>
          <p className="leading-[20px] text-[#3c4c7c] text-[14px]">
            This question can be paraphrased differently focusing on the inflicting actions performed by our Alliance,
          </p>
        </div>

        {/* Avatar Tag + Reply */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Avatar + Name + Tag Wrapper */}
          <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            {/* Avatar + Name */}
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse5} />
              </div>
              <p className="leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">Regina</p>
            </div>
            <RoleBadge role="Mentor" />
          </div>

          {/* Reply Button */}
          <button 
            className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
            onClick={() => setShowReplyInput(!showReplyInput)}
          >
            <IconsReply />
            <p className="leading-[16px] text-[#1850c5] text-[14px] whitespace-nowrap">Reply</p>
          </button>
        </div>

        {/* Reply Input (shown when reply button is clicked) */}
        <AnimatePresence>
          {showReplyInput && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full overflow-hidden"
            >
              {/* Text Input */}
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Type your reply..."
                className="w-full bg-white border border-[#e3e6f0] rounded-[6px] p-[8px] leading-[20px] text-[#3c4c7c] text-[14px] min-h-[80px] resize-none focus:outline-none focus:border-[#2766da]"
              />
              
              {/* Action Buttons */}
              <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                <button
                  onClick={handleCancelReply}
                  className="bg-[#f1f2f8] hover:bg-[#e3e6f0] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[6px] cursor-pointer transition-colors"
                >
                  <p className="leading-[16px] text-[#3c4c7c] text-[14px]">Cancel</p>
                </button>
                <button
                  onClick={handleSubmitReply}
                  className="bg-[#2766da] hover:bg-[#1850c5] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[6px] cursor-pointer transition-colors"
                >
                  <p className="leading-[16px] text-white text-[14px]">Submit</p>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* User Replies (shown below input) */}
        {replies.length > 0 && (
          <>
            {/* Divider between mentor feedback and user replies */}
            <div className="border-t border-[#e3e6f0] w-full" />
            
            {replies.map((reply, index) => (
              <div key={index} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                {/* Reply Text First */}
                <p className="leading-[20px] text-[#3c4c7c] text-[14px]">{reply}</p>
                
                {/* Avatar + Name Tag Below */}
                <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  {/* Avatar + Name */}
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse8} />
                    </div>
                    <p className="leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">You</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function AssignQuestionButton({ onAssign, currentAssignment }: { onAssign: (assignee: string) => void; currentAssignment?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onAssign(option);
    setIsOpen(false);
  };

  const buttonLabel = currentAssignment ? `Assigned to ${currentAssignment}` : 'Assign Question';

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white cursor-pointer relative rounded-[6px] shrink-0"
      >
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative">
          <p className="leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">{buttonLabel}</p>
          <div className="relative shrink-0 size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path
                d={svgPathsChevron.p214eb100}
                fill="#2F3E6D"
                transform="translate(4 5.53)"
              />
            </svg>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute bg-white right-0 top-[calc(100%+4px)] z-50 rounded-[6px] shadow-[0px_12px_24px_0px_rgba(47,62,109,0.1)] min-w-[160px]"
          >
            <div aria-hidden="true" className="absolute border-[#e3e6f0] border border-solid inset-0 pointer-events-none rounded-[6px]" />
            <button
              onClick={() => handleSelect('Myself')}
              className={`relative z-10 content-stretch flex items-center px-[12px] py-[8px] w-full cursor-pointer transition-colors ${
                currentAssignment === 'Myself' ? 'bg-[#e7f2fe]' : 'hover:bg-[#f1f2f8]'
              }`}
            >
              <p className="leading-[14px] not-italic text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">Myself</p>
            </button>
            <div className="border-t border-[#e3e6f0] relative z-10" />
            <button
              onClick={() => handleSelect('Minister of State')}
              className={`relative z-10 content-stretch flex items-center px-[12px] py-[8px] w-full cursor-pointer transition-colors ${
                currentAssignment === 'Minister of State' ? 'bg-[#e7f2fe]' : 'hover:bg-[#f1f2f8]'
              }`}
            >
              <p className="leading-[14px] not-italic text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">Minister of State</p>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface QuestionCardWithDataProps {
  id?: string;
  ministry: string;
  theme?: string;
  timestamp: string;
  status: string;
  questions: string[];
  askedBy: {
    name: string;
    avatar: string;
    role: string;
    party: string;
  };
  askedTo: {
    name: string;
    avatar: string;
    role: string;
    party: string;
  };
  feedback?: {
    text: string;
    mentorName: string;
    mentorAvatar: string;
  };
  hideFeedback?: boolean;
  assignedTo?: string;
  onAssign?: (questionId: string, assignee: string) => void;
  isMoS?: boolean;
  isMentorView?: boolean;
  onStatusChange?: (questionKey: string, newStatus: string) => void;
}

function QuestionCardWithData({ id, ministry, theme, timestamp, status, questions, askedBy, askedTo, feedback, hideFeedback, assignedTo, onAssign, isMoS, isMentorView, onStatusChange }: QuestionCardWithDataProps) {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<string[]>([]);
  const [showAnswerForm, setShowAnswerForm] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);
  const answerRef = useRef<HTMLTextAreaElement>(null);
  
  // Mentor feedback state
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [mentorFeedback, setMentorFeedback] = useState<{ text: string } | null>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmitReply = () => {
    if (replyText.trim()) {
      setReplies([...replies, replyText]);
      setReplyText("");
      setShowReplyInput(false);
    }
  };

  const handleCancelReply = () => {
    setReplyText("");
    setShowReplyInput(false);
  };

  const handleSubmitAnswer = () => {
    if (answerText.trim()) {
      setSubmittedAnswer(answerText);
      setAnswerText("");
      setShowAnswerForm(false);
    }
  };

  const handleCancelAnswer = () => {
    setAnswerText("");
    setShowAnswerForm(false);
  };

  const handleSubmitFeedback = () => {
    if (feedbackText.trim()) {
      setMentorFeedback({ text: feedbackText });
      setFeedbackText("");
      setShowFeedbackForm(false);
    }
  };

  const handleCancelFeedback = () => {
    setFeedbackText("");
    setShowFeedbackForm(false);
  };

  // Status color mapping
  const getStatusColors = (status: string) => {
    const statusColors: Record<string, { bg: string; border: string; text: string }> = {
      'Approved': { bg: '#e8ffeb', border: '#42a22a', text: '#42a22a' },
      'Waiting for approval': { bg: '#fef3e8', border: '#ed7d31', text: '#ed7d31' },
      'Rejected': { bg: '#ffe8e8', border: '#d32f2f', text: '#d32f2f' }
    };
    return statusColors[status] || { bg: '#f1f2f8', border: '#98a3c5', text: '#6e7ca8' };
  };

  const statusColors = getStatusColors(status);

  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          <IconsGovernment />
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="flex flex-col gap-[4px]">
              <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">{ministry}</p>
              {theme && <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{theme}</p>}
            </div>
            <div className="flex gap-[8px] items-center">
              <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{timestamp}</p>
              <div className="relative shrink-0 size-[4px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                  <circle cx="2" cy="2" fill="#C8CEE2" r="2" />
                </svg>
              </div>
              <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: statusColors.bg }}>
                <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: statusColors.border }} />
                <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis" style={{ color: statusColors.text }}>{status}</p>
              </div>
            </div>
          </div>
        </div>
        {hideFeedback ? (
          <div className="flex gap-[8px] items-center shrink-0">
            {assignedTo === 'Minister of State' && isMoS && <AnswerButton onClick={() => setShowAnswerForm(!showAnswerForm)} />}
            {assignedTo === 'Myself' && !isMoS && <AnswerButton onClick={() => setShowAnswerForm(!showAnswerForm)} />}
            {!isMoS && (
              <AssignQuestionButton 
                onAssign={(assignee) => onAssign && id && onAssign(id, assignee)} 
                currentAssignment={assignedTo}
              />
            )}
          </div>
        ) : isMentorView ? (
          <div className="flex gap-[8px] items-center shrink-0">
            {status === 'Waiting for approval' && (
              <>
                <MentorActionButton label="Approve" onClick={() => onStatusChange?.(`${ministry}-${timestamp}`, 'Approved')} />
                <MentorActionButton label="Reject" onClick={() => onStatusChange?.(`${ministry}-${timestamp}`, 'Rejected')} />
              </>
            )}
            {status === 'Approved' && (
              <>
                <MentorActionButton label="Reject" onClick={() => onStatusChange?.(`${ministry}-${timestamp}`, 'Rejected')} />
                <MentorActionButton label="Reset Decision" onClick={() => onStatusChange?.(`${ministry}-${timestamp}`, 'Waiting for approval')} />
              </>
            )}
            {status === 'Rejected' && (
              <>
                <MentorActionButton label="Approve" onClick={() => onStatusChange?.(`${ministry}-${timestamp}`, 'Approved')} />
                <MentorActionButton label="Reset Decision" onClick={() => onStatusChange?.(`${ministry}-${timestamp}`, 'Waiting for approval')} />
              </>
            )}
          </div>
        ) : (
          <button className="cursor-pointer">
            <IconsMoreVert />
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
        <p className="leading-[20px] text-[#3c4c7c] text-[14px]">Will the Minister be pleased to state:</p>
        <ul className="content-stretch flex flex-col gap-[6px] list-none relative shrink-0 w-full">
          {questions.map((question, index) => (
            <li key={index} className="leading-[20px] text-[#3c4c7c] text-[14px]">{question}</li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e3e6f0] w-full" />

      {/* Footer */}
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
        {/* Person asking the question */}
        <div className="flex gap-[6px] items-center">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="block max-w-none size-full rounded-full" src={askedBy.avatar} />
          </div>
          <p className="leading-[16px] text-[#2f3e6d] text-[12px]">{askedBy.name}</p>
          <RoleBadge role={askedBy.role} />
          <PartyBadge party={askedBy.party} />
        </div>

        {/* Separator */}
        <p className="leading-[16px] text-[#6e7ca8] text-[12px]">|</p>

        {/* Minister being asked */}
        <div className="flex gap-[6px] items-center">
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="block max-w-none size-full rounded-full" src={askedTo.avatar} />
          </div>
          <p className="leading-[16px] text-[#2f3e6d] text-[12px]">{askedTo.name}</p>
          <RoleBadge role={askedTo.role} />
          <PartyBadge party={askedTo.party} />
        </div>
      </div>

      {/* Feedback Section — Student view: show existing feedback from mentor */}
      {feedback && !hideFeedback && !isMentorView && (
        <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full">
          <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
          
          {/* Mentor Feedback Comment */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[16px] text-[#2f3e6d] text-[12px]">Feedback</p>
            <p className="leading-[20px] text-[#3c4c7c] text-[14px]">{feedback.text}</p>
          </div>

          {/* Avatar Tag + Reply */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {/* Avatar + Name + Tag Wrapper */}
            <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
              <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              {/* Avatar + Name */}
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="block max-w-none size-full rounded-full" src={feedback.mentorAvatar} />
                </div>
                <p className="leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">{feedback.mentorName}</p>
              </div>
              <RoleBadge role="Mentor" />
            </div>

            {/* Reply Button */}
            <button 
              className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
              onClick={() => setShowReplyInput(!showReplyInput)}
            >
              <IconsReply />
              <p className="leading-[16px] text-[#1850c5] text-[14px] whitespace-nowrap">Reply</p>
            </button>
          </div>

          {/* Reply Input (shown when reply button is clicked) */}
          <AnimatePresence>
            {showReplyInput && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full overflow-hidden"
              >
                {/* Text Input */}
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Type your reply..."
                  className="w-full bg-white border border-[#e3e6f0] rounded-[6px] p-[8px] leading-[20px] text-[#3c4c7c] text-[14px] min-h-[80px] resize-none focus:outline-none focus:border-[#2766da]"
                />
                
                {/* Action Buttons */}
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                  <button
                    onClick={handleCancelReply}
                    className="bg-[#f1f2f8] hover:bg-[#e3e6f0] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[6px] cursor-pointer transition-colors"
                  >
                    <p className="leading-[16px] text-[#3c4c7c] text-[14px]">Cancel</p>
                  </button>
                  <button
                    onClick={handleSubmitReply}
                    className="bg-[#2766da] hover:bg-[#1850c5] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[6px] cursor-pointer transition-colors"
                  >
                    <p className="leading-[16px] text-white text-[14px]">Submit</p>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* User Replies (shown below input) */}
          {replies.length > 0 && (
            <>
              {/* Divider between mentor feedback and user replies */}
              <div className="border-t border-[#e3e6f0] w-full" />
              
              {replies.map((reply, index) => (
                <div key={index} className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {/* Reply Text First */}
                  <p className="leading-[20px] text-[#3c4c7c] text-[14px]">{reply}</p>
                  
                  {/* Avatar + Name Tag Below */}
                  <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    {/* Avatar + Name */}
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <div className="relative shrink-0 size-[16px]">
                        <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse8} />
                      </div>
                      <p className="leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">You</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Mentor Feedback Section — Give Feedback or show submitted feedback */}
      {isMentorView && (
        <>
          {/* Already submitted feedback (by this mentor in this session) */}
          {mentorFeedback && (
            <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <p className="leading-[20px] text-[#3c4c7c] text-[14px]">{mentorFeedback.text}</p>
              </div>

              {/* Mentor avatar tag */}
              <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse5} />
                  </div>
                  <p className="leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">You</p>
                </div>
                <RoleBadge role="Mentor" />
              </div>
            </div>
          )}

          {/* Give Feedback button — shown when no feedback has been submitted yet */}
          {!mentorFeedback && !showFeedbackForm && (
            <button
              onClick={() => setShowFeedbackForm(true)}
              className="content-stretch flex gap-[6px] items-center relative shrink-0 cursor-pointer group"
            >
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <path d="M14 1H2C1.45 1 1 1.45 1 2V11C1 11.55 1.45 12 2 12H5L8 15L11 12H14C14.55 12 15 11.55 15 11V2C15 1.45 14.55 1 14 1ZM14 11H10.83L8 13.83L5.17 11H2V2H14V11ZM4 5H12V6.5H4V5ZM4 7.5H9V9H4V7.5Z" fill="#1850C5"/>
                </svg>
              </div>
              <p className="leading-[16px] text-[#1850c5] text-[14px] group-hover:underline">Give Feedback</p>
            </button>
          )}

          {/* Feedback Form — shown when mentor clicks "Give Feedback" */}
          <AnimatePresence>
            {showFeedbackForm && !mentorFeedback && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full overflow-hidden"
              >
                <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full">
                  <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  
                  <textarea
                    ref={feedbackRef}
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Write your feedback on this question..."
                    className="w-full bg-white border border-[#e3e6f0] rounded-[6px] p-[8px] leading-[20px] text-[#3c4c7c] text-[14px] min-h-[100px] resize-none overflow-hidden focus:outline-none focus:border-[#2766da]"
                  />
                  
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                    <button
                      onClick={handleCancelFeedback}
                      className="relative bg-[#f1f2f8] hover:bg-[#e3e6f0] content-stretch flex items-center justify-center px-[12px] py-[6px] rounded-[6px] cursor-pointer transition-colors"
                    >
                      <p className="leading-[14px] text-[#3c4c7c] text-[12px]">Cancel</p>
                      <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    </button>
                    <button
                      onClick={handleSubmitFeedback}
                      className="bg-[#2766da] hover:bg-[#1850c5] content-stretch flex items-center justify-center px-[12px] py-[6px] rounded-[6px] cursor-pointer transition-colors"
                    >
                      <p className="leading-[14px] text-white text-[12px]">Submit Feedback</p>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {/* Answer Section — Minister/MoS view only, when assigned to them */}
      {((assignedTo === 'Myself' && !isMoS) || (assignedTo === 'Minister of State' && isMoS)) && (
        <>
          {/* Submitted Answer (shown after submitting) */}
          {submittedAnswer && (
            <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full">
              <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                  <p className="font-semibold leading-[16px] text-[#2f3e6d] text-[12px]">Your Answer</p>
                  <button
                    onClick={() => {
                      setAnswerText(submittedAnswer);
                      setSubmittedAnswer(null);
                      setShowAnswerForm(true);
                    }}
                    className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
                  >
                    <p className="leading-[16px] text-[#1850c5] text-[14px] whitespace-nowrap">Edit</p>
                  </button>
                </div>
                <p className="leading-[20px] text-[#3c4c7c] text-[14px]">{submittedAnswer}</p>
              </div>
              {/* Avatar + role tag */}
              <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[16px]">
                    <img alt="" className="block max-w-none size-full rounded-full" src={askedTo.avatar} />
                  </div>
                  <p className="leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">{askedTo.name}</p>
                </div>
                <RoleBadge role={askedTo.role} />
              </div>
            </div>
          )}

          {/* Answer Form (toggled by Answer button) */}
          <AnimatePresence>
            {showAnswerForm && !submittedAnswer && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full overflow-hidden"
              >
                <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] w-full">
                  <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    
                    <textarea
                      ref={answerRef}
                      value={answerText}
                      onChange={(e) => setAnswerText(e.target.value)}
                      placeholder="Type your answer to the question..."
                      className="w-full bg-white border border-[#e3e6f0] rounded-[6px] p-[8px] leading-[20px] text-[#3c4c7c] text-[14px] min-h-[100px] resize-none overflow-hidden focus:outline-none focus:border-[#2766da]"
                    />
                    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                      <button
                        onClick={handleCancelAnswer}
                        className="bg-[#f1f2f8] hover:bg-[#e3e6f0] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[6px] cursor-pointer transition-colors"
                      >
                        <p className="leading-[14px] text-[#3c4c7c] text-[12px]">Cancel</p>
                        <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      </button>
                      <button
                        onClick={handleSubmitAnswer}
                        className="bg-[#2766da] hover:bg-[#1850c5] content-stretch flex items-center justify-center px-[12px] py-[6px] relative rounded-[6px] cursor-pointer transition-colors"
                      >
                        <p className="leading-[14px] text-white text-[12px]">Submit Answer</p>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default function QuestionHourPage() {
  const { userType, studentRole } = useUser();
  const isMinisterView = userType === 'student' && (studentRole === 'minister' || studentRole === 'mos');
  const isMoS = userType === 'student' && studentRole === 'mos';
  const isFullMinister = userType === 'student' && studentRole === 'minister';
  const isMentorView = userType === 'mentor';

  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  // Track question assignments: questionId -> 'Myself' | 'Minister of State'
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  // Track mentor status changes: questionKey -> 'Approved' | 'Rejected'
  const [statusOverrides, setStatusOverrides] = useState<Record<string, string>>({});

  const handleStatusChange = (questionKey: string, newStatus: string) => {
    setStatusOverrides(prev => ({ ...prev, [questionKey]: newStatus }));
  };

  const handleAssign = (questionId: string, assignee: string) => {
    setAssignments(prev => ({ ...prev, [questionId]: assignee }));
  };

  // --- Role-aware tabs ---
  const privateMemberTabs = ['Submitted', 'Approved', 'Rejected'];
  const mentorTabs = ['Submitted', 'Approved', 'Rejected'];
  const ministerTabs = ['All Questions', 'For Me', 'For Minister of State'];
  const mosTabs = ['All Questions', 'For Minister of State'];
  const tabs = isMentorView ? mentorTabs : (isMoS ? mosTabs : (isMinisterView ? ministerTabs : privateMemberTabs));

  // --- Private Member questions (own questions, filtered by status) ---
  const privateMemberQuestions = [
    {
      ministry: "To the Ministry of Ports, Shipping and Waterways",
      theme: "Inland Navigation Infrastructure",
      timestamp: "14/03/2024  2:15 PM",
      status: "Waiting for approval",
      questions: [
        "i. Whether the Ministry has assessed the reasons why nearly 64 per cent of the notified inland waterways remain non-navigable during the lean season despite substantial public investment;",
        "ii. The key technical and operational constraints identified (such as inadequate assured depth, siltation, lack of dredging, insufficient terminals and navigational aids, and diversion of river flows); and",
        "iii. The specific time-bound measures proposed to make these stretches reliably navigable throughout the year?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Addie V. Biela",
        avatar: imgEllipse4,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "Excellent question with specific data points. Consider adding reference to National Waterways Act 2016 for stronger legislative context.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    },
    {
      ministry: "To the Ministry of Defence",
      theme: "Defence Technology & Innovation",
      timestamp: "13/03/2024  4:30 PM",
      status: "Approved",
      questions: [
        "What progress has been made in the operational deployment of indigenous systems related to counter-drone operations and electronic warfare in the last two years?",
        "Further, under initiatives such as iDEX and ADITI, how many defence technologies have advanced from prototype stage to acceptance or induction during this period?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Smayan S.",
        avatar: imgEllipse8,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "Well-structured question. The reference to iDEX and ADITI adds legislative depth. Approved as-is.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    },
    {
      ministry: "To the Ministry of Commerce & Industry",
      theme: "Medicinal & Aromatic Plants Development",
      timestamp: "12/03/2024  6:40 PM",
      status: "Waiting for approval",
      questions: [
        "What are the steps taken to tap the potential of Medicinal and Aromatic Plants(MAPs) in Assam, which is one of the biggest repositories of MAPs in the world?",
        "If so how much has been spent towards the promotion of MAPs?",
        "What are the steps taken to attract investments in MAPs through 'Make in India' scheme?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Addie V. Biela",
        avatar: imgEllipse4,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "This question can be paraphrased differently focusing on the inflicting actions performed by our Alliance,",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    },
    {
      ministry: "To the Ministry of Education",
      theme: "Learning Outcomes & Digital Infrastructure",
      timestamp: "10/03/2024  11:00 AM",
      status: "Approved",
      questions: [
        "i. Whether the Government has conducted any assessment of learning outcomes under the National Education Policy 2020 since its implementation;",
        "ii. If so, what measurable improvements have been recorded in foundational literacy and numeracy at the primary school level across States; and",
        "iii. What steps are being taken to address the digital divide in rural schools that hinders effective implementation of the policy's technology-driven pedagogy goals?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Smayan S.",
        avatar: imgEllipse8,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "Strong question linking NEP 2020 to ground-level outcomes. The digital divide angle is very relevant. Approved.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    },
    {
      ministry: "To the Ministry of Health & Family Welfare",
      theme: "Healthcare Workforce & Rural Access",
      timestamp: "08/03/2024  3:45 PM",
      status: "Rejected",
      questions: [
        "Whether the Government is aware of the increasing shortage of specialist doctors in district hospitals across rural India;",
        "If so, what data has been collected on the current vacancy rates for specialist positions in government hospitals at the district and sub-district level; and",
        "What concrete measures are proposed to incentivise specialist doctors to serve in underserved and remote areas?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Addie V. Biela",
        avatar: imgEllipse4,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "This question overlaps with a similar question already admitted for the current session. Please rephrase to focus on a specific scheme or policy measure to avoid duplication.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    }
  ];

  // --- Minister view questions (questions directed TO the minister's ministry) ---
  // The minister (Addie V. Biela) sees all questions addressed to their ministry,
  // from various private members, some directed to the Minister and some to the MoS.
  const ministerQuestions = [
    {
      id: 'mq-1',
      ministry: "To the Ministry of Commerce & Industry",
      theme: "Production Linked Incentive (PLI) Scheme",
      timestamp: "14/03/2024  3:20 PM",
      status: "Approved",
      questions: [
        "i. Whether the Government has evaluated the impact of the Production Linked Incentive (PLI) scheme on employment generation in the manufacturing sector since its inception;",
        "ii. If so, what is the sector-wise breakdown of jobs created under PLI across all 14 notified sectors; and",
        "iii. What corrective measures are being considered for sectors where PLI uptake and employment targets remain significantly below projections?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Addie V. Biela",
        avatar: imgEllipse4,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "Well-researched question. The PLI scheme analysis with sector-wise breakdown adds strong analytical depth.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    },
    {
      id: 'mq-2',
      ministry: "To the Ministry of Commerce & Industry",
      theme: "Medicinal & Aromatic Plants Development",
      timestamp: "13/03/2024  11:45 AM",
      status: "Approved",
      questions: [
        "What are the steps taken to tap the potential of Medicinal and Aromatic Plants (MAPs) in Assam, which is one of the biggest repositories of MAPs in the world?",
        "If so how much has been spent towards the promotion of MAPs?",
        "What are the steps taken to attract investments in MAPs through 'Make in India' scheme?"
      ],
      askedBy: {
        name: "Isha Aarya",
        avatar: imgEllipse8,
        role: "Private Member",
        party: "TRP"
      },
      askedTo: {
        name: "Addie V. Biela",
        avatar: imgEllipse4,
        role: "Minister",
        party: "TRP"
      },
      feedback: {
        text: "Good regional focus. Consider strengthening with reference to the National AYUSH Mission for broader policy context.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    },
    {
      id: 'mq-3',
      ministry: "To the Ministry of Commerce & Industry",
      theme: "Textile Exports & Trade Agreements",
      timestamp: "12/03/2024  5:10 PM",
      status: "Approved",
      questions: [
        "Whether the Government is aware that several Export Promotion Councils have reported a decline in India's share of global textile exports over the past three years;",
        "If so, what specific policy interventions have been introduced to reverse this trend, particularly for handloom and handicraft exporters; and",
        "Whether any new bilateral or multilateral trade agreements are under negotiation that specifically address market access for Indian MSMEs?"
      ],
      askedBy: {
        name: "Smayan S.",
        avatar: imgEllipse8,
        role: "Party President",
        party: "TRP"
      },
      askedTo: {
        name: "Kavya Reddy",
        avatar: imgEllipse5,
        role: "MoS",
        party: "TRP"
      }
    },
    {
      id: 'mq-4',
      ministry: "To the Ministry of Commerce & Industry",
      theme: "Special Economic Zones (SEZ) Policy",
      timestamp: "11/03/2024  9:30 AM",
      status: "Approved",
      questions: [
        "i. Whether the Government has undertaken any comprehensive review of the Special Economic Zones (SEZ) policy in light of declining new approvals and de-notifications over the past five years;",
        "ii. If so, what are the key findings and recommendations of such review; and",
        "iii. What legislative or regulatory reforms are being proposed to revitalise SEZs as drivers of export-led growth?"
      ],
      askedBy: {
        name: "Sheilah T. Sayasane",
        avatar: imgEllipse3,
        role: "Private Member",
        party: "UPP"
      },
      askedTo: {
        name: "Addie V. Biela",
        avatar: imgEllipse4,
        role: "Minister",
        party: "TRP"
      }
    },
    {
      id: 'mq-5',
      ministry: "To the Ministry of Commerce & Industry",
      theme: "District Export Hubs Initiative",
      timestamp: "10/03/2024  2:00 PM",
      status: "Approved",
      questions: [
        "Whether the Ministry has assessed the effectiveness of the District Export Hubs (DEH) initiative in achieving its stated objective of promoting exports from all districts;",
        "If so, how many districts have achieved measurable export growth attributable to the DEH programme since its launch; and",
        "What capacity-building measures are being implemented to address the lack of export infrastructure and awareness in aspirational districts?"
      ],
      askedBy: {
        name: "Isha Aarya",
        avatar: imgEllipse8,
        role: "Private Member",
        party: "TRP"
      },
      askedTo: {
        name: "Kavya Reddy",
        avatar: imgEllipse5,
        role: "MoS",
        party: "TRP"
      },
      feedback: {
        text: "Solid question with clear focus on DEH outcomes. The aspirational districts angle demonstrates good policy awareness.",
        mentorName: "Regina",
        mentorAvatar: imgEllipse5
      }
    }
  ];

  // --- For mentor view, strip pre-populated feedback so mentor can initiate their own ---
  const mentorQuestions = privateMemberQuestions.map(q => {
    const key = `${q.ministry}-${q.timestamp}`;
    return {
      ...q,
      status: statusOverrides[key] || q.status,
      feedback: undefined
    };
  });

  // --- Filtering logic ---
  const questions = isMentorView ? mentorQuestions : (isMinisterView ? ministerQuestions : privateMemberQuestions);

  // Calculate unassigned questions count (only for full minister, not MoS)
  const unassignedCount = isFullMinister 
    ? questions.filter(q => !q.id || !assignments[q.id]).length 
    : 0;

  // Calculate dynamic counts for chips
  const allCount = questions.length;
  const pendingActionCount = questions.filter(q => q.status === 'Waiting for approval').length;
  const approvedCount = questions.filter(q => q.status === 'Approved').length;
  const rejectedCount = questions.filter(q => q.status === 'Rejected').length;

  const filteredQuestions = (() => {
    if (isMinisterView) {
      if (isMoS) {
        // MoS tabs: "All Questions" | "For Minister of State"
        // MoS cannot assign, only views questions assigned to them
        switch (activeTab) {
          case 0: return questions;  // All Questions
          case 1: return questions.filter(q => {
            const assignment = q.id ? assignments[q.id] : undefined;
            return assignment === 'Minister of State';
          });
          default: return questions;
        }
      } else {
        // Full Minister tabs: "All Questions" | "For Me" | "For Minister of State"
        // When a question is assigned, it should appear in the respective tab
        // regardless of the original askedTo.role
        switch (activeTab) {
          case 0: return questions;  // All Questions
          case 1: return questions.filter(q => {
            const assignment = q.id ? assignments[q.id] : undefined;
            return assignment === 'Myself';
          });
          case 2: return questions.filter(q => {
            const assignment = q.id ? assignments[q.id] : undefined;
            return assignment === 'Minister of State';
          });
          default: return questions;
        }
      }
    } else {
      // Private member & Mentor tabs: "Submitted" | "Approved" | "Rejected"
      const tabStatusMap: Record<number, string[]> = {
        0: ['Waiting for approval'],
        1: ['Approved'],
        2: ['Rejected'],
      };
      return questions.filter(q => tabStatusMap[activeTab]?.includes(q.status));
    }
  })();

  return (
    <div className="bg-[#f8f9fb] relative size-full">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="question-hour" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px]">
        {/* Action Bar - Filter Buttons and New Question Button */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Filter Buttons and Unassigned Chip */}
          <div className="content-stretch flex gap-[12px] items-center">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              
              if (isActive) {
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(index)}
                    className="bg-[#2766da] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer"
                  >
                    <p className="font-semibold leading-[14px] not-italic relative shrink-0 text-[12px] text-center text-white">{tab}</p>
                  </button>
                );
              }
              
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className="bg-[#f1f2f8] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#e3e6f0] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="font-semibold leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-center">{tab}</p>
                </button>
              );
            })}
            
            {/* Contextual Count Chips — change based on active tab */}
            {!isMinisterView && (
              <>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="leading-[14px] text-[#3c4c7c] text-[12px]">All Submissions {allCount}</p>
                </div>
                {activeTab === 0 && pendingActionCount > 0 && (
                  <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="leading-[14px] text-[#3c4c7c] text-[12px]">Pending Action {pendingActionCount}</p>
                  </div>
                )}
                {activeTab === 1 && approvedCount > 0 && (
                  <div className="bg-[#e6f7ee] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#42a22a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="leading-[14px] text-[#2d7a1e] text-[12px]">Approved {approvedCount}</p>
                  </div>
                )}
                {activeTab === 2 && rejectedCount > 0 && (
                  <div className="bg-[#fde8e8] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#e53535] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="leading-[14px] text-[#c62828] text-[12px]">Rejected {rejectedCount}</p>
                  </div>
                )}
              </>
            )}

            {/* Unassigned Questions Count Chip — only shown for full Minister (not MoS) */}
            {isFullMinister && unassignedCount > 0 && (
              <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">{unassignedCount} Unassigned</p>
              </div>
            )}
          </div>

          {/* New Question Button — only students (except Minister/MoS) can ask questions */}
          {userType === 'student' && !isMinisterView && (
            <PrimaryActionButton 
              label="New Question"
              onClick={() => setShowForm(true)}
            />
          )}
        </div>

        {/* Two Column Layout - Questions List + Form (within the container boundaries) */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* Left Column - Questions List (full width when form is closed, flex-1 when form is open) */}
          <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 max-h-[calc(100vh-192px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            showForm && !isMinisterView ? 'flex-1' : 'w-full'
          }`}>
            <div className={`flex flex-col gap-[16px] transition-opacity duration-200 w-full ${showForm && !isMinisterView ? 'opacity-40' : ''}`}>
              {filteredQuestions.length > 0 ? (
                filteredQuestions.map((question) => (
                  <QuestionCardWithData 
                    key={`${question.ministry}-${question.timestamp}`} 
                    {...question} 
                    hideFeedback={isMinisterView} 
                    isMentorView={isMentorView}
                    onAssign={handleAssign}
                    onStatusChange={handleStatusChange}
                    assignedTo={'id' in question ? assignments[question.id as string] : undefined}
                    isMoS={isMoS}
                  />
                ))
              ) : (
                <div className="bg-card content-stretch flex flex-col gap-[8px] items-center justify-center p-[40px] relative rounded-[var(--radius-card)] w-full">
                  <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
                  <p className="leading-[20px] text-muted-foreground text-[var(--text-base)]">No questions found in this category.</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Form Panel (only when visible, never for Minister view) */}
          <AnimatePresence mode="wait">
            {showForm && !isMinisterView && (
              <motion.div 
                key="form"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px] max-h-[calc(100vh-192px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <QuestionForm onClose={() => setShowForm(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}