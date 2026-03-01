import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { WelcomeTab } from "../components/MissionControlTab";
import { PartyManagementTab } from "../components/PartyManagementTab";
import { useState } from "react";

type TabType = 'welcome' | 'party-management' | 'sitting-of-the-house';

export function PSPDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('welcome');

  return (
    <div className="bg-[#f8f9fb] relative size-full">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="psp-dashboard" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start page-inset-x top-[100px]">
        {/* Top-level Tabs */}
        <div className="flex gap-[12px] items-start">
          <button
            onClick={() => setActiveTab('welcome')}
            className="flex items-center p-[12px] relative"
          >
            {activeTab === 'welcome' && (
              <div aria-hidden="true" className="absolute border-[#1850c5] border-b-4 border-solid inset-0 pointer-events-none" />
            )}
            <p className={`font-semibold leading-[16px] text-[14px] text-center relative ${
              activeTab === 'welcome' ? 'text-[#1850c5]' : 'text-[#6e7ca8]'
            }`}>
              Welcome
            </p>
          </button>
          
          <button
            onClick={() => setActiveTab('party-management')}
            className="flex items-center p-[12px] relative"
          >
            {activeTab === 'party-management' && (
              <div aria-hidden="true" className="absolute border-[#1850c5] border-b-4 border-solid inset-0 pointer-events-none" />
            )}
            <p className={`font-semibold leading-[16px] text-[14px] text-center relative ${
              activeTab === 'party-management' ? 'text-[#1850c5]' : 'text-[#6e7ca8]'
            }`}>
              Party
            </p>
          </button>
          
          <button
            onClick={() => setActiveTab('sitting-of-the-house')}
            className="flex items-center p-[12px] relative"
          >
            {activeTab === 'sitting-of-the-house' && (
              <div aria-hidden="true" className="absolute border-[#1850c5] border-b-4 border-solid inset-0 pointer-events-none" />
            )}
            <p className={`font-semibold leading-[16px] text-[14px] text-center relative ${
              activeTab === 'sitting-of-the-house' ? 'text-[#1850c5]' : 'text-[#6e7ca8]'
            }`}>
              Sitting of The House
            </p>
          </button>
        </div>
        
        {/* Tab Content - Scrollable area with hidden scrollbar */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[calc(100vh-192px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeTab === 'welcome' && <WelcomeTab />}
          {activeTab === 'party-management' && <PartyManagementTab />}
          {activeTab === 'sitting-of-the-house' && (
            <div className="bg-white p-[48px] rounded-[12px] text-center w-full">
              <p className="text-[#6e7ca8] text-[16px]">Sitting of The House - Coming Soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}