import { useState, useRef, useEffect } from 'react';
import { CloseButton } from './CloseButton';
import { X, Plus } from 'lucide-react';
import type { Ministry } from '../types';

interface MinistryDetailPanelProps {
  ministry: Ministry;
  onClose: () => void;
  onUpdateThemes: (ministryId: number, themes: string[]) => void;
}

export function MinistryDetailPanel({ ministry, onClose, onUpdateThemes }: MinistryDetailPanelProps) {
  const themes = ministry.themes ?? [];
  const [activeTab, setActiveTab] = useState<'about' | 'themes'>('about');
  const [isAdding, setIsAdding] = useState(false);
  const [newTheme, setNewTheme] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  const handleAddTheme = () => {
    const trimmed = newTheme.trim();
    if (trimmed && !themes.includes(trimmed)) {
      onUpdateThemes(ministry.id, [...themes, trimmed]);
    }
    setNewTheme('');
    setIsAdding(false);
  };

  const handleRemoveTheme = (theme: string) => {
    onUpdateThemes(ministry.id, themes.filter(t => t !== theme));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTheme();
    } else if (e.key === 'Escape') {
      setNewTheme('');
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[var(--radius-card)] w-full max-h-[calc(100vh-230px)] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Scrollable Content Area */}
      <div className="content-stretch flex flex-col gap-[16px] items-start w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-[2px]">
        {/* Header with Title and Close Button */}
        <div className="content-stretch flex gap-[8px] items-start relative rounded-[var(--radius-card)] shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-semibold leading-[0] min-h-[32px] not-italic relative shrink-0 text-[var(--foreground)] text-[length:var(--text-h3)] w-full">
                <p className="leading-[1.3]">{ministry.name}</p>
              </div>
            </div>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Ministry Info Card — matches PartnerDetailsView partner info card */}
        <div className="bg-[var(--input-background)] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[var(--radius-card)] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[var(--card-border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

          {/* Description */}
          {ministry.description && (
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
                <p className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                  {ministry.description}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tabs — exact match to PartnerDetailsView tab pattern */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <button
            onClick={() => setActiveTab('about')}
            className={`content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px p-[8px] relative rounded-[var(--radius)] cursor-pointer ${
              activeTab === 'about' ? 'bg-[var(--primary)]' : 'bg-[var(--card)]'
            }`}
          >
            <div aria-hidden="true" className={`absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)] ${
              activeTab === 'about' ? 'border-[var(--primary)]' : 'border-[var(--border)]'
            }`} />
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-base)] whitespace-nowrap">
              <p className={`leading-[16px] ${activeTab === 'about' ? 'text-[var(--primary-foreground)]' : 'text-[var(--foreground)]'}`}>
                About
              </p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('themes')}
            className={`content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px p-[8px] relative rounded-[var(--radius)] cursor-pointer ${
              activeTab === 'themes' ? 'bg-[var(--primary)]' : 'bg-[var(--card)]'
            }`}
          >
            <div aria-hidden="true" className={`absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)] ${
              activeTab === 'themes' ? 'border-[var(--primary)]' : 'border-[var(--border)]'
            }`} />
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[length:var(--text-base)] whitespace-nowrap">
              <p className={`leading-[16px] ${activeTab === 'themes' ? 'text-[var(--primary-foreground)]' : 'text-[var(--foreground)]'}`}>
                Themes
              </p>
            </div>
          </button>
        </div>

        {/* Divider below tabs */}
        <div className="bg-[var(--card-border)] h-px shrink-0 w-full" />

        {/* Tab Content — About */}
        {activeTab === 'about' && (
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {/* Ministry Details section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis w-full whitespace-nowrap">Ministry Details</p>

              {/* Themes count */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--muted-foreground)] text-[length:var(--text-label)] text-ellipsis whitespace-nowrap">Themes</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">{themes.length} {themes.length === 1 ? 'theme' : 'themes'}</p>
                </div>
              </div>
            </div>

            {/* Spacer at bottom for scroll comfort */}
            <div className="bg-[var(--card)] h-[40px] shrink-0 w-full" />
          </div>
        )}

        {/* Tab Content — Themes */}
        {activeTab === 'themes' && (
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Theme Count Badge — matches student count badge in Partners */}
            <div className="bg-[var(--input-background)] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
              <div aria-hidden="true" className="absolute border-[var(--card-border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
              <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">
                <p className="leading-[16px]">{themes.length} {themes.length === 1 ? 'Theme' : 'Themes'}</p>
              </div>
            </div>

            {/* Themes List */}
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              {/* Theme chips */}
              <div className="flex flex-wrap gap-[8px] w-full">
                {themes.map((theme) => (
                  <div
                    key={theme}
                    className="group flex items-center gap-[6px] px-[10px] py-[6px] rounded-[var(--radius-chip)] bg-[var(--status-role-bg)] relative transition-colors"
                  >
                    <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-[var(--status-role-border)] inset-0 pointer-events-none rounded-[var(--radius-chip)]" />
                    <p className="leading-[14px] text-[var(--status-role-text)] text-[length:var(--text-label)]">
                      {theme}
                    </p>
                    <button
                      onClick={() => handleRemoveTheme(theme)}
                      className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      aria-label={`Remove ${theme}`}
                    >
                      <X className="size-[12px] text-[var(--status-role-text)]" />
                    </button>
                  </div>
                ))}

                {/* Inline Add button / input */}
                {isAdding ? (
                  <div className="flex items-center gap-[4px] px-[10px] py-[4px] rounded-[var(--radius-chip)] bg-[var(--input-background)] relative">
                    <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-[var(--border)] inset-0 pointer-events-none rounded-[var(--radius-chip)]" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={newTheme}
                      onChange={(e) => setNewTheme(e.target.value)}
                      onKeyDown={handleKeyDown}
                      onBlur={handleAddTheme}
                      placeholder="Theme name"
                      className="bg-transparent leading-[14px] text-[var(--foreground)] text-[length:var(--text-label)] outline-none placeholder:text-[var(--muted-foreground)] w-[120px]"
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAdding(true)}
                    className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-[var(--radius-chip)] border border-dashed border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors cursor-pointer"
                  >
                    <Plus className="size-[12px]" />
                    <p className="leading-[14px] text-[length:var(--text-label)]">Add Theme</p>
                  </button>
                )}
              </div>
            </div>

            {/* Spacer at bottom for scroll comfort */}
            <div className="bg-[var(--card)] h-[40px] shrink-0 w-full" />
          </div>
        )}
      </div>
    </div>
  );
}