import svgPathsForm from "../../imports/svg-bmen1r6wqa";
import { useState, useRef, useEffect } from "react";
import { CloseButton } from "./CloseButton";
import { useGovernment } from '../context/GovernmentContext';

function IconsFormatListBulleted() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_list_notice" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_list_notice)">
          <path d={svgPathsForm.p399b9f80} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

interface NoticeFormProps {
  onClose: () => void;
}

export function NoticeForm({ onClose }: NoticeFormProps) {
  const { noticeThemes } = useGovernment();
  const [noticeText, setNoticeText] = useState('');
  const [theme, setTheme] = useState('');
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const themes = noticeThemes;

  const handleBulletListClick = () => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = noticeText;

    // If there's selected text
    if (start !== end) {
      const selectedText = text.substring(start, end);
      const lines = selectedText.split('\n');
      let counter = 1;
      const numberedLines = lines.map(line => {
        const trimmed = line.trim();
        // If line already starts with number, remove it
        if (/^\d+\.\s/.test(trimmed)) {
          return trimmed.replace(/^\d+\.\s/, '');
        }
        // If line is empty, don't add number
        if (trimmed === '') return line;
        // Add number to line
        const numbered = `${counter}. ` + trimmed;
        counter++;
        return numbered;
      });
      const newText = text.substring(0, start) + numberedLines.join('\n') + text.substring(end);
      setNoticeText(newText);
      
      // Restore cursor position
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + numberedLines.join('\n').length);
      }, 0);
    } else {
      // No selection - insert number at current position or start of line
      const lineStart = text.lastIndexOf('\n', start - 1) + 1;
      const lineEnd = text.indexOf('\n', start);
      const currentLine = lineEnd === -1 ? text.substring(lineStart) : text.substring(lineStart, lineEnd);
      
      // Check if current line already has a number
      if (/^\s*\d+\.\s/.test(currentLine)) {
        // Remove number
        const withoutNumber = currentLine.replace(/^\s*\d+\.\s/, '');
        const newText = text.substring(0, lineStart) + withoutNumber + (lineEnd === -1 ? '' : text.substring(lineEnd));
        setNoticeText(newText);
      } else {
        // Add number at the start of line - figure out what number to use
        // Look at previous lines to determine the next number
        const textBeforeLine = text.substring(0, lineStart);
        const previousLines = textBeforeLine.split('\n');
        let lastNumber = 0;
        
        // Find the last numbered line before this one
        for (let i = previousLines.length - 1; i >= 0; i--) {
          const match = previousLines[i].match(/^\s*(\d+)\.\s/);
          if (match) {
            lastNumber = parseInt(match[1]);
            break;
          }
        }
        
        const nextNumber = lastNumber + 1;
        const indent = currentLine.match(/^\s*/)?.[0] || '';
        const restOfLine = currentLine.substring(indent.length);
        const numberedLine = indent + `${nextNumber}. ` + restOfLine;
        const newText = text.substring(0, lineStart) + numberedLine + (lineEnd === -1 ? '' : text.substring(lineEnd));
        setNoticeText(newText);
      }
      
      // Restore focus
      setTimeout(() => {
        textarea.focus();
      }, 0);
    }
  };

  // Handle Cmd+A / Ctrl+A manually
  const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'a') {
      e.preventDefault();
      e.stopPropagation();
      if (textareaRef.current) {
        textareaRef.current.select();
      }
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] w-full max-h-[calc(100vh-180px)] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Scrollable Content Area */}
      <div className="content-stretch flex flex-col gap-[16px] items-start w-full overflow-y-auto flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-[2px] overflow-x-visible">
        {/* Header with Title and Close Button */}
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-semibold justify-center leading-[0] min-h-[32px] not-italic overflow-hidden relative shrink-0 text-[#041a5e] text-[20px] text-ellipsis w-full whitespace-nowrap">
                <p className="leading-[1.3] overflow-hidden">New Notice</p>
              </div>
            </div>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Theme Dropdown */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Theme</p>
          <div className="relative w-full">
            <button
              onClick={() => setShowThemeDropdown(!showThemeDropdown)}
              className="bg-[#f8f9fb] content-stretch flex items-center justify-between px-[12px] py-[10px] relative rounded-[8px] w-full cursor-pointer hover:bg-[#f1f2f8] transition-colors"
            >
              <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <p className={`leading-[20px] text-[14px] ${theme ? 'text-[#2f3e6d]' : 'text-[#6e7ca8]'}`}>
                {theme || 'Select a theme'}
              </p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <mask height="16" id="mask_dropdown" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                    <rect fill="#D9D9D9" height="16" width="16" />
                  </mask>
                  <g mask="url(#mask_dropdown)">
                    <path d="M8 10.6667L3.33333 6L4.26667 5.06667L8 8.8L11.7333 5.06667L12.6667 6L8 10.6667Z" fill="#6E7CA8" />
                  </g>
                </svg>
              </div>
            </button>
            {showThemeDropdown && (
              <div className="absolute bg-white mt-[4px] w-full rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] z-50 max-h-[240px] overflow-y-auto">
                <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="py-[4px]">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption}
                      onClick={() => {
                        setTheme(themeOption);
                        setShowThemeDropdown(false);
                      }}
                      className="w-full px-[12px] py-[8px] text-left hover:bg-[#f8f9fb] transition-colors cursor-pointer"
                    >
                      <p className="leading-[20px] text-[14px] text-[#2f3e6d]">{themeOption}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Notice Text Area */}
        <div className="content-stretch flex flex-col gap-[8px] h-[400px] items-start relative shrink-0 w-full">
          <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Notice</p>
          <div className="bg-[#f8f9fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
            <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
                {/* Toolbar */}
                <div className="bg-white relative rounded-[8px] shrink-0">
                  <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[8px] py-[4px] relative">
                      <div className="content-stretch flex items-center p-[4px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f8f9fb]" onClick={handleBulletListClick}>
                        <IconsFormatListBulleted />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content */}
                <textarea
                  ref={textareaRef}
                  value={noticeText}
                  onChange={(e) => setNoticeText(e.target.value)}
                  className="flex-[1_0_0] min-h-px min-w-px bg-transparent border-none outline-none resize-none leading-[20px] not-italic text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap relative z-10"
                  placeholder="Enter your notice here..."
                  tabIndex={0}
                  autoComplete="off"
                  onKeyDown={handleTextareaKeyDown}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer with Submit Button */}
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
        <button className="bg-[#2766da] flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#1e54b7] transition-colors">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
              <p className="leading-[16px] not-italic text-[14px] text-white whitespace-nowrap">Submit</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}