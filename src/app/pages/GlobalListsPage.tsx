import { useState } from 'react';
import { SharedNavBar } from '../components/SharedNavBar';
import { SearchField } from '../components/SearchField';
import { PrimaryActionButton } from '../components/PrimaryActionButton';
import { PageHeader } from '../components/PageHeader';
import { AddMinistryForm } from '../components/AddMinistryForm';
import { AddCommitteeForm } from '../components/AddCommitteeForm';
import { MinistryDetailPanel } from '../components/MinistryDetailPanel';
import { motion, AnimatePresence } from 'motion/react';
import { useGovernment } from '../context/GovernmentContext';
import { StatusChip } from '../components/StatusChip';

export default function GlobalListsPage() {
  const { ministries, committees, addMinistry, addCommittee, updateMinistryThemes } = useGovernment();

  const [activeTab, setActiveTab] = useState<'ministries' | 'committees'>('ministries');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddMinistryFormOpen, setIsAddMinistryFormOpen] = useState(false);
  const [isAddCommitteeFormOpen, setIsAddCommitteeFormOpen] = useState(false);
  const [selectedMinistryId, setSelectedMinistryId] = useState<number | null>(null);

  const filteredMinistries = ministries.filter(ministry =>
    ministry.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCommittees = committees.filter(committee =>
    committee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddMinistry = (ministryName: string) => {
    addMinistry(ministryName);
    setIsAddMinistryFormOpen(false);
  };

  const handleAddCommittee = (committeeName: string) => {
    addCommittee(committeeName);
    setIsAddCommitteeFormOpen(false);
  };

  const selectedMinistry = selectedMinistryId !== null
    ? ministries.find(m => m.id === selectedMinistryId) ?? null
    : null;

  // Right-panel open state per tab
  const isMinistryPanelOpen = activeTab === 'ministries' && (isAddMinistryFormOpen || selectedMinistryId !== null);
  const isCommitteePanelOpen = activeTab === 'committees' && isAddCommitteeFormOpen;
  const isAnyPanelOpen = isMinistryPanelOpen || isCommitteePanelOpen;

  const handleMinistryClick = (ministryId: number) => {
    setIsAddMinistryFormOpen(false);
    setSelectedMinistryId(ministryId);
  };

  const handleOpenAddMinistry = () => {
    setSelectedMinistryId(null);
    setIsAddMinistryFormOpen(true);
  };

  return (
    <div className="bg-[#f8f9fb] relative size-full" data-name="Global Lists">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="global-lists" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />

      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start page-inset-x top-[100px]">
        {/* Tabs */}
        <div className="flex gap-[12px] items-start">
          <button
            onClick={() => setActiveTab('ministries')}
            className="flex items-center p-[12px] relative"
          >
            {activeTab === 'ministries' && (
              <div aria-hidden="true" className="absolute border-[var(--accent)] border-b-4 border-solid inset-0 pointer-events-none" />
            )}
            <p className={`font-semibold leading-[16px] text-[length:var(--text-base)] text-center relative ${
              activeTab === 'ministries' ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)]'
            }`}>
              Ministries
            </p>
          </button>

          <button
            onClick={() => setActiveTab('committees')}
            className="flex items-center p-[12px] relative"
          >
            {activeTab === 'committees' && (
              <div aria-hidden="true" className="absolute border-[var(--accent)] border-b-4 border-solid inset-0 pointer-events-none" />
            )}
            <p className={`font-semibold leading-[16px] text-[length:var(--text-base)] text-center relative ${
              activeTab === 'committees' ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)]'
            }`}>
              Select Committees
            </p>
          </button>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center justify-between w-full">
          <div className="w-[320px]">
            <SearchField 
              placeholder={activeTab === 'ministries' ? 'Search Ministries' : 'Search Committee'} 
              value={searchQuery}
              onChange={setSearchQuery} 
            />
          </div>
          
          <PrimaryActionButton 
            label={activeTab === 'ministries' ? 'New Ministry' : 'New Committee'} 
            onClick={() => {
              if (activeTab === 'ministries') {
                handleOpenAddMinistry();
              } else if (activeTab === 'committees') {
                setIsAddCommitteeFormOpen(true);
              }
            }}
          />
        </div>

        {/* Two-column layout: List + Form */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* Left Column - Ministries/Committees List */}
          <div className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 max-h-[calc(100vh-230px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isAnyPanelOpen ? 'flex-1' : 'w-full'
          }`}>
            {activeTab === 'ministries' && filteredMinistries.map((ministry) => {
              const isSelected = selectedMinistryId === ministry.id;
              const shouldGreyOut = isAddMinistryFormOpen || (selectedMinistryId !== null && !isSelected);

              return (
                <div
                  key={ministry.id}
                  onClick={() => handleMinistryClick(ministry.id)}
                  className={`cursor-pointer w-full transition-opacity duration-200 ${
                    shouldGreyOut ? 'opacity-40' : ''
                  }`}
                >
                  <div className="bg-[var(--card)] relative rounded-[var(--radius-card)] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
                        <div className="shrink-0">
                          <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                            <path d="M3.33333 17.5V15H5V4.16667C5 3.47222 5.24306 2.875 5.72917 2.375C6.21583 1.875 6.80556 1.625 7.5 1.625H12.5C13.1944 1.625 13.7844 1.875 14.2708 2.375C14.7566 2.875 15 3.47222 15 4.16667V15H16.6667V17.5H3.33333ZM6.66667 15H8.33333V13.3333H6.66667V15ZM6.66667 11.6667H8.33333V10H6.66667V11.6667ZM6.66667 8.33333H8.33333V6.66667H6.66667V8.33333ZM6.66667 5H8.33333V3.33333H6.66667V5ZM11.6667 15H13.3333V13.3333H11.6667V15ZM11.6667 11.6667H13.3333V10H11.6667V11.6667ZM11.6667 8.33333H13.3333V6.66667H11.6667V8.33333ZM11.6667 5H13.3333V3.33333H11.6667V5Z" fill="var(--muted-foreground)" />
                          </svg>
                        </div>

                        <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                          <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">
                            <p className="leading-[16px] overflow-hidden">{ministry.name}</p>
                          </div>
                          <StatusChip label={ministry.status === 'active' ? 'Active' : 'Inactive'} />
                        </div>

                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors"
                        >
                          <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path d="M8 12.6667C7.63333 12.6667 7.31944 12.5364 7.05833 12.2757C6.79722 12.0145 6.66667 11.7004 6.66667 11.3333C6.66667 10.9667 6.79722 10.6528 7.05833 10.3917C7.31944 10.1306 7.63333 10 8 10C8.36667 10 8.68056 10.1306 8.94167 10.3917C9.20278 10.6528 9.33333 10.9667 9.33333 11.3333C9.33333 11.7004 9.20278 12.0145 8.94167 12.2757C8.68056 12.5364 8.36667 12.6667 8 12.6667ZM8 9.33335C7.63333 9.33335 7.31944 9.20279 7.05833 8.94168C6.79722 8.68057 6.66667 8.36668 6.66667 8.00002C6.66667 7.63335 6.79722 7.31946 7.05833 7.05835C7.31944 6.79724 7.63333 6.66668 8 6.66668C8.36667 6.66668 8.68056 6.79724 8.94167 7.05835C9.20278 7.31946 9.33333 7.63335 9.33333 8.00002C9.33333 8.36668 9.20278 8.68057 8.94167 8.94168C8.68056 9.20279 8.36667 9.33335 8 9.33335ZM8 6.00002C7.63333 6.00002 7.31944 5.86946 7.05833 5.60835C6.79722 5.34724 6.66667 5.03335 6.66667 4.66668C6.66667 4.30002 6.79722 3.98613 7.05833 3.72502C7.31944 3.46391 7.63333 3.33335 8 3.33335C8.36667 3.33335 8.68056 3.46391 8.94167 3.72502C9.20278 3.98613 9.33333 4.30002 9.33333 4.66668C9.33333 5.03335 9.20278 5.34724 8.94167 5.60835C8.68056 5.86946 8.36667 6.00002 8 6.00002Z" fill="var(--foreground)" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {activeTab === 'committees' && filteredCommittees.map((committee) => (
              <div
                key={committee.id}
                className="bg-[var(--card)] relative rounded-[var(--radius-card)] shrink-0 w-full"
              >
                <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
                    <div className="shrink-0">
                      <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d="M3.33333 17.5V15H5V4.16667C5 3.47222 5.24306 2.875 5.72917 2.375C6.21583 1.875 6.80556 1.625 7.5 1.625H12.5C13.1944 1.625 13.7844 1.875 14.2708 2.375C14.7566 2.875 15 3.47222 15 4.16667V15H16.6667V17.5H3.33333ZM6.66667 15H8.33333V13.3333H6.66667V15ZM6.66667 11.6667H8.33333V10H6.66667V11.6667ZM6.66667 8.33333H8.33333V6.66667H6.66667V8.33333ZM6.66667 5H8.33333V3.33333H6.66667V5ZM11.6667 15H13.3333V13.3333H11.6667V15ZM11.6667 11.6667H13.3333V10H11.6667V11.6667ZM11.6667 8.33333H13.3333V6.66667H11.6667V8.33333ZM11.6667 5H13.3333V3.33333H11.6667V5Z" fill="var(--muted-foreground)" />
                      </svg>
                    </div>

                    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                      <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">
                        <p className="leading-[16px] overflow-hidden">{committee.name}</p>
                      </div>
                    </div>

                    <button className="flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors">
                      <svg className="size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M8 12.6667C7.63333 12.6667 7.31944 12.5364 7.05833 12.2757C6.79722 12.0145 6.66667 11.7004 6.66667 11.3333C6.66667 10.9667 6.79722 10.6528 7.05833 10.3917C7.31944 10.1306 7.63333 10 8 10C8.36667 10 8.68056 10.1306 8.94167 10.3917C9.20278 10.6528 9.33333 10.9667 9.33333 11.3333C9.33333 11.7004 9.20278 12.0145 8.94167 12.2757C8.68056 12.5364 8.36667 12.6667 8 12.6667ZM8 9.33335C7.63333 9.33335 7.31944 9.20279 7.05833 8.94168C6.79722 8.68057 6.66667 8.36668 6.66667 8.00002C6.66667 7.63335 6.79722 7.31946 7.05833 7.05835C7.31944 6.79724 7.63333 6.66668 8 6.66668C8.36667 6.66668 8.68056 6.79724 8.94167 7.05835C9.20278 7.31946 9.33333 7.63335 9.33333 8.00002C9.33333 8.36668 9.20278 8.68057 8.94167 8.94168C8.68056 9.20279 8.36667 9.33335 8 9.33335ZM8 6.00002C7.63333 6.00002 7.31944 5.86946 7.05833 5.60835C6.79722 5.34724 6.66667 5.03335 6.66667 4.66668C6.66667 4.30002 6.79722 3.98613 7.05833 3.72502C7.31944 3.46391 7.63333 3.33335 8 3.33335C8.36667 3.33335 8.68056 3.46391 8.94167 3.72502C9.20278 3.98613 9.33333 4.30002 9.33333 4.66668C9.33333 5.03335 9.20278 5.34724 8.94167 5.60835C8.68056 5.86946 8.36667 6.00002 8 6.00002Z" fill="var(--foreground)" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Form Panel (only when visible) - Independently Scrollable */}
          <AnimatePresence mode="wait">
            {isAddMinistryFormOpen && activeTab === 'ministries' && (
              <motion.div 
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <AddMinistryForm 
                  onClose={() => setIsAddMinistryFormOpen(false)}
                  onSave={handleAddMinistry}
                />
              </motion.div>
            )}
            {isAddCommitteeFormOpen && activeTab === 'committees' && (
              <motion.div 
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <AddCommitteeForm 
                  onClose={() => setIsAddCommitteeFormOpen(false)}
                  onSave={handleAddCommittee}
                />
              </motion.div>
            )}
            {selectedMinistry && activeTab === 'ministries' && (
              <motion.div 
                key={`detail-${selectedMinistry.id}`}
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <MinistryDetailPanel 
                  ministry={selectedMinistry}
                  onClose={() => setSelectedMinistryId(null)}
                  onUpdateThemes={updateMinistryThemes}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}