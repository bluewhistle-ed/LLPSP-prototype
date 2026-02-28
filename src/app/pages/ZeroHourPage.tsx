import svgPaths from "../../imports/svg-yy4ljbh9ou";
import svgPathsNotice from "../../imports/svg-l4efvdw4l8";
import imgEllipse4 from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";
import imgEllipse8 from "figma:asset/ba2f16d42d47f4ee59f03debf98e6bdc2a4d8653.png";
import { PageHeader } from "../components/PageHeader";
import { SharedNavBar } from "../components/SharedNavBar";
import { PrimaryActionButton } from "../components/PrimaryActionButton";
import { NoticeForm } from "../components/NoticeForm";
import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';

function PartyBadge({ party }: { party: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    UPP: { bg: '#fef3e8', border: '#ed7d31', text: '#ed7d31' },
    TRP: { bg: '#e8f4ff', border: '#2766da', text: '#2766da' }
  };

  const color = colors[party] || colors.UPP;

  return (
    <div className={`content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0`} style={{ backgroundColor: color.bg }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: color.border }} />
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis" style={{ color: color.text }}>{party}</p>
    </div>
  );
}

function RoleBadge({ role }: { role: string }) {
  const getRoleConfig = (role: string) => {
    const roleConfigs: Record<string, { bg: string; border: string; text: string; icon?: JSX.Element }> = {
      Minister: { 
        bg: '#fef7ed', 
        border: '#92400e', 
        text: '#92400e',
        icon: (
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id="mask_minister_zh" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_minister_zh)">
                <path d="M6 7.5L3.5 9.25L4.25 6.4L2 4.5L4.95 4.3L6 1.5L7.05 4.3L10 4.5L7.75 6.4L8.5 9.25L6 7.5Z" fill="#92400e"/>
              </g>
            </svg>
          </div>
        )
      }
    };
    return roleConfigs[role] || roleConfigs.Minister;
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

function StatusChip({ status }: { status: string }) {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{status}</p>
    </div>
  );
}

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_expand_zh" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" x="0.0015626" />
        </mask>
        <g mask="url(#mask_expand_zh)">
          <path d={svgPaths.p271bc980} fill="#6E7CA8" />
        </g>
      </svg>
    </div>
  );
}

interface Notice {
  id: string;
  title: string;
  author: string;
  party: string;
  date: string;
  status: string;
  content: string;
  replies?: Reply[];
  expanded?: boolean;
}

interface Reply {
  id: string;
  author: string;
  role?: string;
  party?: string;
  date: string;
  content: string;
}

export function ZeroHourPage() {
  const [showForm, setShowForm] = useState(false);
  const tabs = ['Submitted', 'Approved', 'Rejected'];
  const [activeTab, setActiveTab] = useState(0);
  const [notices, setNotices] = useState<Notice[]>([
    {
      id: '1',
      title: 'Railway Safety Concerns',
      author: 'Rajesh Kumar',
      party: 'UPP',
      date: 'Feb 20, 2026',
      status: 'Approved',
      content: 'I would like to bring to the attention of this House the urgent need for improved railway safety measures following recent incidents in the eastern region. Multiple derailments have occurred in the past month, causing significant disruption and raising serious concerns about passenger safety.',
      expanded: false,
      replies: [
        {
          id: 'r1',
          author: 'Addie V. Biela',
          role: 'Minister',
          party: 'TRP',
          date: 'Feb 21, 2026',
          content: 'Thank you for raising this important matter. The Ministry is conducting a comprehensive safety audit of all railway infrastructure in the eastern region. We expect to present our findings and action plan to the House within two weeks.'
        }
      ]
    },
    {
      id: '2',
      title: 'Flood Relief',
      author: 'Priya Sharma',
      party: 'TRP',
      date: 'Feb 18, 2026',
      status: 'Under Review',
      content: 'The recent floods in coastal districts have displaced thousands of families. I urge the government to immediately release emergency funds and deploy additional relief teams to the affected areas.',
      expanded: false
    },
    {
      id: '3',
      title: 'Textile Sector Support',
      author: 'Amit Patel',
      party: 'UPP',
      date: 'Feb 15, 2026',
      status: 'Submitted',
      content: 'Small and medium enterprises in the textile sector are facing severe challenges due to rising input costs and competition from imported goods. The government should consider providing targeted support to preserve jobs in this critical sector.',
      expanded: false
    }
  ]);

  const [replyTexts, setReplyTexts] = useState<Record<string, string>>({});

  const toggleNoticeExpanded = (id: string) => {
    setNotices(notices.map(notice => 
      notice.id === id ? { ...notice, expanded: !notice.expanded } : notice
    ));
  };

  const handleReplyChange = (noticeId: string, text: string) => {
    setReplyTexts({ ...replyTexts, [noticeId]: text });
  };

  const handleReplySubmit = (noticeId: string) => {
    if (!replyTexts[noticeId]?.trim()) return;

    // Add reply to notice
    setNotices(notices.map(notice => {
      if (notice.id === noticeId) {
        const newReply: Reply = {
          id: `r${Date.now()}`,
          author: 'You',
          date: 'Just now',
          content: replyTexts[noticeId]
        };
        return {
          ...notice,
          replies: [...(notice.replies || []), newReply]
        };
      }
      return notice;
    }));

    // Clear reply text
    setReplyTexts({ ...replyTexts, [noticeId]: '' });
  };

  return (
    <div className="bg-[#f8f9fb] relative size-full">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="zero-hour" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px]">
        {/* Action Bar - Filter Buttons and New Notice Button */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Filter Buttons */}
          <div className="content-stretch flex gap-[12px] items-center">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              
              if (isActive) {
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className="bg-[#2766da] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer"
                  >
                    <p className="font-semibold leading-[14px] not-italic relative shrink-0 text-[12px] text-center text-white">{tab}</p>
                  </button>
                );
              }
              
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className="bg-[#f1f2f8] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#e3e6f0] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <p className="font-semibold leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-center">{tab}</p>
                </button>
              );
            })}
          </div>

          {/* New Notice Button */}
          <PrimaryActionButton 
            label="New Notice" 
            onClick={() => setShowForm(true)}
          />
        </div>

        {/* Two Column Layout - Notices List + Form (within the container boundaries) */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* Left Column - Notices List (full width when form is closed, flex-1 when form is open) */}
          <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 max-h-[calc(100vh-192px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            showForm ? 'flex-1' : 'w-full'
          }`}>
            <div className={`flex flex-col gap-[16px] transition-opacity duration-200 w-full ${showForm ? 'opacity-40' : ''}`}>
              {notices.map((notice, index) => (
                <div key={notice.id} className="bg-white rounded-[12px] border border-[#f1f2f8] overflow-hidden">
                  <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
                    {/* Notice Title Header with Menu */}
                    <div className="content-stretch flex items-center justify-between min-h-[32px] relative shrink-0 w-full">
                      {/* Notice Number | Title */}
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                        {/* Notice Number */}
                        <div className="content-stretch flex items-center relative shrink-0">
                          <p className="leading-[16px] overflow-hidden text-[#6e7ca8] text-[14px] text-ellipsis whitespace-nowrap">Notice {index + 1}</p>
                        </div>
                        {/* Vertical Line Separator */}
                        <div className="flex flex-row items-center self-stretch">
                          <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0">
                            <div className="-rotate-90 flex-none h-full">
                              <div className="h-full relative w-[16px]">
                                <div className="absolute inset-[-1px_0_0_0]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                                    <line stroke="#E3E6F0" x2="16" y1="0.5" y2="0.5" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Notice Title */}
                        <div className="content-stretch flex items-center relative shrink-0">
                          <p className="font-semibold leading-[16px] overflow-hidden text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">{notice.title}</p>
                        </div>
                      </div>
                      {/* Three-dot Menu Button */}
                      <button className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 hover:bg-[#f1f2f8] transition-colors">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <mask height="16" id={`mask_more_${notice.id}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                              <rect fill="#D9D9D9" height="16" width="16" />
                            </mask>
                            <g mask={`url(#mask_more_${notice.id})`}>
                              <path d={svgPathsNotice.pc41f800} fill="#2F3E6D" />
                            </g>
                          </svg>
                        </div>
                      </button>
                    </div>
                    
                    {/* Date, Time and Status */}
                    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full mt-[8px]">
                      <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative">
                        <p className="leading-[14px] overflow-hidden text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">{notice.date}</p>
                        <div className="relative shrink-0 size-[4px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                            <circle cx="2" cy="2" fill="#C8CEE2" r="2" />
                          </svg>
                        </div>
                        {(() => {
                          // Map status to display text and colors
                          const statusDisplay = notice.status === 'Under Review' ? 'Waiting for approval' : notice.status;
                          const getStatusColors = (displayStatus: string) => {
                            const statusColors: Record<string, { bg: string; border: string; text: string }> = {
                              'Approved': { bg: '#e8ffeb', border: '#42a22a', text: '#42a22a' },
                              'Waiting for approval': { bg: '#fef3e8', border: '#ed7d31', text: '#ed7d31' },
                              'Rejected': { bg: '#ffe8e8', border: '#d32f2f', text: '#d32f2f' },
                              'Submitted': { bg: '#f1f2f8', border: '#98a3c5', text: '#6e7ca8' }
                            };
                            return statusColors[displayStatus] || { bg: '#f1f2f8', border: '#98a3c5', text: '#6e7ca8' };
                          };
                          const colors = getStatusColors(statusDisplay);
                          return (
                            <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" style={{ backgroundColor: colors.bg }}>
                              <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" style={{ borderColor: colors.border }} />
                              <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis" style={{ color: colors.text }}>{statusDisplay}</p>
                            </div>
                          );
                        })()}
                      </div>
                    </div>

                    {/* Notice Content */}
                    <div className="mt-[12px] w-full">
                      <p className="leading-[20px] text-[#3c4c7c] text-[14px] whitespace-pre-wrap">{notice.content}</p>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-[#e3e6f0] w-full mt-[16px]" />

                    {/* Author Footer */}
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full mt-[12px]">
                      <div className="relative shrink-0 size-[24px]">
                        <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse8} />
                      </div>
                      <p className="leading-[16px] text-[#2f3e6d] text-[12px]">{notice.author}</p>
                      <PartyBadge party={notice.party} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form Panel (only when visible) */}
          <AnimatePresence mode="wait">
            {showForm && (
              <motion.div 
                key="form"
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px] max-h-[calc(100vh-192px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <NoticeForm onClose={() => setShowForm(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}