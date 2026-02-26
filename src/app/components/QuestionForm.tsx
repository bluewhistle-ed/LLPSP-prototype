import svgPathsForm from "../../imports/svg-bmen1r6wqa";
import imgEllipse4 from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";
import imgEllipse8 from "figma:asset/ba2f16d42d47f4ee59f03debf98e6bdc2a4d8653.png";
import { useState, useRef, useEffect } from "react";

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
              <mask height="12" id="mask_minister_form" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_minister_form)">
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

function IconsCircleClose() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_close" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
          <rect fill="#D9D9D9" height="16" width="16" x="-0.000782013" />
        </mask>
        <g mask="url(#mask_close)">
          <path d={svgPathsForm.p1dd38d00} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsRadioButtonChecked() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_radio_checked" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_radio_checked)">
          <path d={svgPathsForm.p3c1de890} fill="#1850C5" />
        </g>
      </svg>
    </div>
  );
}

function IconsRadioButtonUnchecked() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_radio_unchecked" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_radio_unchecked)">
          <path d={svgPathsForm.p12a172c0} fill="#6E7CA8" />
        </g>
      </svg>
    </div>
  );
}

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_expand" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" x="0.0015626" />
        </mask>
        <g mask="url(#mask_expand)">
          <path d={svgPathsForm.p271bc980} fill="#6E7CA8" />
        </g>
      </svg>
    </div>
  );
}

function IconsFormatListBulleted() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_list" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_list)">
          <path d={svgPathsForm.p399b9f80} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsFormatBold() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_bold" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_bold)">
          <path d={svgPathsForm.p133ab6c0} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsFormatItalic() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_italic" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_italic)">
          <path d={svgPathsForm.p3f0af600} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsFormatUnderlined() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_underline" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_underline)">
          <path d={svgPathsForm.p27e3b580} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsFormatStrikethrough() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_strike" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_strike)">
          <path d={svgPathsForm.p2f7b6c00} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

interface QuestionFormProps {
  onClose: () => void;
}

const availableMinistries = [
  { 
    id: 'ministry-1', 
    name: 'Ministry of Education',
    themes: ['Curriculum Development', 'Teacher Training', 'Student Assessment', 'Infrastructure', 'Digital Learning']
  },
  { 
    id: 'ministry-2', 
    name: 'Ministry of Health',
    themes: ['Public Health', 'Healthcare Access', 'Medical Research', 'Disease Prevention', 'Mental Health']
  },
  { 
    id: 'ministry-3', 
    name: 'Ministry of Finance',
    themes: ['Budget Planning', 'Tax Policy', 'Economic Growth', 'Financial Regulation', 'Public Debt']
  },
  { 
    id: 'ministry-4', 
    name: 'Ministry of Environment',
    themes: ['Climate Change', 'Conservation', 'Pollution Control', 'Renewable Energy', 'Wildlife Protection']
  },
  { 
    id: 'ministry-5', 
    name: 'Ministry of Transportation',
    themes: ['Infrastructure Development', 'Public Transit', 'Road Safety', 'Aviation', 'Maritime']
  },
  { 
    id: 'ministry-6', 
    name: 'Ministry of Agriculture',
    themes: ['Food Security', 'Sustainable Farming', 'Rural Development', 'Livestock', 'Crop Production']
  },
  { 
    id: 'ministry-7', 
    name: 'Ministry of Technology',
    themes: ['Digital Innovation', 'Cybersecurity', 'AI & ML', 'Telecommunications', 'Data Privacy']
  },
];

export function QuestionForm({ onClose }: QuestionFormProps) {
  const [selectedMinistry, setSelectedMinistry] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [isMinistryOpen, setIsMinistryOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const ministryDropdownRef = useRef<HTMLDivElement>(null);
  const themeDropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle clicks outside of dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // For ministry dropdown, check if click is outside the entire dropdown container
      if (ministryDropdownRef.current && !ministryDropdownRef.current.contains(event.target as Node)) {
        setIsMinistryOpen(false);
      }
      // For theme dropdown, check if click is outside the entire dropdown container
      if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get available themes based on selected ministry
  const selectedMinistryData = availableMinistries.find(m => m.name === selectedMinistry);
  const availableThemes = selectedMinistryData?.themes || [];

  const handleMinistrySelect = (ministry: string) => {
    setSelectedMinistry(ministry);
    setIsMinistryOpen(false);
    // Reset theme to first theme of the new ministry
    const newMinistryData = availableMinistries.find(m => m.name === ministry);
    if (newMinistryData && newMinistryData.themes.length > 0) {
      setSelectedTheme(newMinistryData.themes[0]);
    }
  };

  const handleThemeSelect = (theme: string) => {
    setSelectedTheme(theme);
    setIsThemeOpen(false);
  };

  const handleBulletListClick = () => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = questionText;

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
      setQuestionText(newText);
      
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
        setQuestionText(newText);
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
        setQuestionText(newText);
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

  const ministries = [
    'Ministry of Human Resource Development',
    'Ministry of Commerce & Industry',
    'Ministry of Defence',
    'Ministry of Ports, Shipping and Waterways'
  ];

  const themes = [
    'Higher Education',
    'School Education',
    'Skill Development',
    'Research & Innovation',
    'Student Welfare'
  ];

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
                <p className="leading-[1.3] overflow-hidden">New Starred Question</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white h-[32px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50"
          >
            <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
              <IconsCircleClose />
            </div>
            <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </button>
        </div>

        {/* Ministry Dropdown */}
        <div ref={ministryDropdownRef} className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${isMinistryOpen ? 'z-[100]' : 'z-0'}`}>
          <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Ministry</p>
          <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <button 
              onClick={() => setIsMinistryOpen(!isMinistryOpen)}
              className="flex flex-row items-center size-full w-full text-left"
            >
              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                <p className="flex-[1_0_0] leading-[20px] not-italic text-[#2f3e6d] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{selectedMinistry}</p>
                <IconsExpandMore />
              </div>
            </button>
          </div>
          {isMinistryOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#c8cee2] border-solid rounded-[8px] z-[100] shadow-lg max-h-[200px] overflow-y-auto">
              {availableMinistries.map(ministry => (
                <div
                  key={ministry.id}
                  className="cursor-pointer px-[12px] py-[8px] hover:bg-[#f8f9fb] leading-[20px] text-[#2f3e6d] text-[14px]"
                  onClick={() => handleMinistrySelect(ministry.name)}
                >
                  {ministry.name}
                </div>
              ))}
            </div>
          )}
          
          {/* Minister - Person info (only shown when ministry is selected) */}
          {selectedMinistry && (
            <div className="content-stretch flex gap-[6px] items-center relative shrink-0 mt-[4px]">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="block max-w-none size-full rounded-full" src={imgEllipse8} />
              </div>
              <p className="leading-[16px] text-[#2f3e6d] text-[12px]">Addie V. Biela</p>
              <RoleBadge role="Minister" />
              <PartyBadge party="TRP" />
            </div>
          )}
        </div>

        {/* Theme Dropdown - only shown when ministry is selected */}
        {selectedMinistry && (
          <div ref={themeDropdownRef} className={`content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full ${isThemeOpen ? 'z-[90]' : 'z-0'}`}>
            <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Theme</p>
            <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <button 
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="flex flex-row items-center size-full w-full text-left"
              >
                <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                  <p className="flex-[1_0_0] leading-[20px] not-italic text-[#2f3e6d] text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">{selectedTheme}</p>
                  <IconsExpandMore />
                </div>
              </button>
            </div>
            {isThemeOpen && availableThemes.length > 0 && (
              <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border border-[#c8cee2] border-solid rounded-[8px] z-[90] shadow-lg max-h-[200px] overflow-y-auto">
                {availableThemes.map(theme => (
                  <div
                    key={theme}
                    className="cursor-pointer px-[12px] py-[8px] hover:bg-[#f8f9fb] leading-[20px] text-[#2f3e6d] text-[14px]"
                    onClick={() => handleThemeSelect(theme)}
                  >
                    {theme}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Question Text Area */}
        <div className="content-stretch flex flex-col gap-[8px] h-[300px] items-start relative shrink-0 w-full">
          <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Question</p>
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
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className="flex-[1_0_0] min-h-px min-w-px bg-transparent border-none outline-none resize-none leading-[20px] not-italic text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap relative z-10"
                  placeholder="Enter your question here..."
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
          <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
            <p className="leading-[16px] not-italic text-[14px] text-white whitespace-nowrap">Submit</p>
          </div>
        </button>
      </div>
    </div>
  );
}