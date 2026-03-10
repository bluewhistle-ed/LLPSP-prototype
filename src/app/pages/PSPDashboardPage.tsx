import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { WelcomeTab } from "../components/MissionControlTab";
import { PartyManagementTab } from "../components/PartyManagementTab";
import { GovernmentTab } from "../components/GovernmentTab";
import { OppositionTab } from "../components/OppositionTab";
import { useState, useEffect } from "react";
import { useUser } from '../context/UserContext';

type TabType = 'welcome' | 'party-management' | 'government' | 'opposition';

export function PSPDashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('welcome');
  const { houseSide } = useUser();

  const showGovernmentTab = houseSide === 'government';
  const showOppositionTab = houseSide === 'opposition';

  // Reset to Welcome tab if the current tab becomes hidden (e.g., switching from PM to LoO)
  useEffect(() => {
    if (activeTab === 'government' && !showGovernmentTab) setActiveTab('welcome');
    if (activeTab === 'opposition' && !showOppositionTab) setActiveTab('welcome');
  }, [showGovernmentTab, showOppositionTab, activeTab]);

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
          
          {showGovernmentTab && (
            <button
              onClick={() => setActiveTab('government')}
              className="flex items-center p-[12px] relative"
            >
              {activeTab === 'government' && (
                <div aria-hidden="true" className="absolute border-[#1850c5] border-b-4 border-solid inset-0 pointer-events-none" />
              )}
              <p className={`font-semibold leading-[16px] text-[14px] text-center relative ${
                activeTab === 'government' ? 'text-[#1850c5]' : 'text-[#6e7ca8]'
              }`}>
                Government
              </p>
            </button>
          )}

          {showOppositionTab && (
            <button
              onClick={() => setActiveTab('opposition')}
              className="flex items-center p-[12px] relative"
            >
              {activeTab === 'opposition' && (
                <div aria-hidden="true" className="absolute border-[#1850c5] border-b-4 border-solid inset-0 pointer-events-none" />
              )}
              <p className={`font-semibold leading-[16px] text-[14px] text-center relative ${
                activeTab === 'opposition' ? 'text-[#1850c5]' : 'text-[#6e7ca8]'
              }`}>
                Opposition
              </p>
            </button>
          )}
        </div>
        
        {/* Tab Content - Scrollable area with hidden scrollbar */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[calc(100vh-192px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeTab === 'welcome' && <WelcomeTab />}
          {activeTab === 'party-management' && <PartyManagementTab />}
          {activeTab === 'government' && showGovernmentTab && <GovernmentTab />}
          {activeTab === 'opposition' && showOppositionTab && <OppositionTab />}
        </div>
      </div>
    </div>
  );
}