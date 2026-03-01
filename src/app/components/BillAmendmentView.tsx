import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { CloseButton } from "./CloseButton";
import { StatusChip } from "./StatusChip";
import {
  AmendmentActionMenu,
  AmendmentInput,
  AmendmentDisplay,
} from "./AmendmentModule";
import type { AmendmentData, AmendmentType } from "./AmendmentModule";

// ── Data Interfaces (shared with BillReviewView) ───────────────────────────────

interface SpecialBlock {
  id: string;
  type: 'proviso' | 'explanation' | 'illustration';
  content: string;
}

interface Item {
  id: string;
  number: number;
  content: string;
  specialBlocks: SpecialBlock[];
}

interface SubClause {
  id: string;
  number: number;
  content: string;
  items: Item[];
  specialBlocks: SpecialBlock[];
}

interface Clause {
  id: string;
  number: number;
  title: string;
  subClauses: SubClause[];
  specialBlocks: SpecialBlock[];
}

interface Chapter {
  id: string;
  name: string;
  number: number;
  clauses: Clause[];
}

interface BillData {
  title: string;
  preamble: string;
  chapters: Chapter[];
}

// ── Numbering Helpers ────────────────────────────────────────────────────────

const toLowerRomanNumeral = (num: number): string => {
  const romanNumerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [value, numeral] of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result.toLowerCase();
};

// ── Dummy Bill Data (same approved bill) ───────────────────────────────────────

const APPROVED_BILL: BillData = {
  title: "THE MEDICINAL AND AROMATIC PLANTS (PROMOTION AND DEVELOPMENT) BILL, 2026",
  preamble: "a bill to provide for the promotion, development and regulation of medicinal and aromatic plants in india, to establish a national board for the conservation and sustainable utilisation of such plants, and for matters connected therewith or incidental thereto.",
  chapters: [
    {
      id: "ch-1",
      name: "PRELIMINARY",
      number: 1,
      clauses: [
        {
          id: "cl-1",
          number: 1,
          title: "This Act may be called the Medicinal and Aromatic Plants (Promotion and Development) Act, 2026.",
          subClauses: [
            { id: "sc-1-1", number: 1, content: "It shall extend to the whole of India.", items: [], specialBlocks: [] },
            { id: "sc-1-2", number: 2, content: "It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.", items: [], specialBlocks: [] }
          ],
          specialBlocks: []
        },
        {
          id: "cl-2",
          number: 2,
          title: "In this Act, unless the context otherwise requires,\u2014",
          subClauses: [
            { id: "sc-2-1", number: 1, content: "\"Aromatic Plant\" means any plant species that produces essential oils, aromatic compounds, or fragrant substances used in pharmaceuticals, cosmetics, or traditional medicine;", items: [], specialBlocks: [] },
            { id: "sc-2-2", number: 2, content: "\"Board\" means the National Medicinal and Aromatic Plants Board established under section 4;", items: [], specialBlocks: [] },
            { id: "sc-2-3", number: 3, content: "\"Cultivation Zone\" means any area designated by the State Government for the systematic cultivation of medicinal and aromatic plants;", items: [], specialBlocks: [] },
            {
              id: "sc-2-4", number: 4,
              content: "\"Medicinal Plant\" means any plant or part thereof, including leaves, roots, bark, flowers, seeds, or extracts, which possesses therapeutic properties and is used in\u2014",
              items: [
                { id: "it-2-4-1", number: 1, content: "Ayurveda, Siddha, Unani, or any recognised system of Indian medicine;", specialBlocks: [] },
                { id: "it-2-4-2", number: 2, content: "modern pharmacology and pharmaceutical preparations;", specialBlocks: [] },
                { id: "it-2-4-3", number: 3, content: "traditional folk remedies practised by local communities.", specialBlocks: [] }
              ],
              specialBlocks: []
            },
            { id: "sc-2-5", number: 5, content: "\"Stakeholder\" means any person, institution, community, or organisation engaged in the cultivation, processing, research, trade, or conservation of medicinal and aromatic plants.", items: [], specialBlocks: [] }
          ],
          specialBlocks: []
        }
      ]
    },
    {
      id: "ch-2",
      name: "ESTABLISHMENT AND CONSTITUTION OF THE BOARD",
      number: 2,
      clauses: [
        { id: "cl-3", number: 3, title: "The Central Government shall, by notification, establish a Board to be called the National Medicinal and Aromatic Plants Board for the purposes of this Act.", subClauses: [], specialBlocks: [] },
        {
          id: "cl-4", number: 4,
          title: "The Board shall consist of the following members, namely:\u2014",
          subClauses: [
            { id: "sc-4-1", number: 1, content: "a Chairperson, who shall be a person of eminence in the field of botany, pharmacology, or traditional medicine, to be appointed by the Central Government;", items: [], specialBlocks: [] },
            {
              id: "sc-4-2", number: 2, content: "six members to be nominated by the Central Government, of whom\u2014",
              items: [
                { id: "it-4-2-1", number: 1, content: "two shall be experts in the field of medicinal plant research;", specialBlocks: [] },
                { id: "it-4-2-2", number: 2, content: "two shall be representatives of State Governments from North-Eastern States;", specialBlocks: [] },
                { id: "it-4-2-3", number: 3, content: "two shall be representatives of recognised farmers' cooperatives engaged in the cultivation of medicinal and aromatic plants;", specialBlocks: [] }
              ],
              specialBlocks: []
            },
            {
              id: "sc-4-3", number: 3,
              content: "a Member-Secretary, to be appointed by the Central Government, who shall be an officer not below the rank of Joint Secretary to the Government of India.",
              items: [],
              specialBlocks: [
                { id: "sb-4-3-1", type: "proviso", content: "the Central Government shall ensure adequate representation of women and members of Scheduled Tribes in the composition of the Board." }
              ]
            }
          ],
          specialBlocks: []
        },
        { id: "cl-5", number: 5, title: "The Chairperson and members of the Board shall hold office for a term of three years from the date of their appointment and shall be eligible for re-appointment for one additional term.", subClauses: [], specialBlocks: [] }
      ]
    },
    {
      id: "ch-3",
      name: "FUNCTIONS AND POWERS OF THE BOARD",
      number: 3,
      clauses: [
        {
          id: "cl-6", number: 6,
          title: "The Board shall perform the following functions, namely:\u2014",
          subClauses: [
            { id: "sc-6-1", number: 1, content: "formulate national policies and programmes for the promotion and development of medicinal and aromatic plants;", items: [], specialBlocks: [] },
            { id: "sc-6-2", number: 2, content: "coordinate with State Governments, research institutions, and stakeholders for the conservation and sustainable harvesting of such plants;", items: [], specialBlocks: [] },
            { id: "sc-6-3", number: 3, content: "promote scientific research and development in the cultivation, processing, and value addition of medicinal and aromatic plants;", items: [], specialBlocks: [] },
            { id: "sc-6-4", number: 4, content: "facilitate the integration of traditional knowledge systems with modern scientific practices for the benefit of farming communities;", items: [], specialBlocks: [] },
            {
              id: "sc-6-5", number: 5,
              content: "advise the Central Government on matters relating to international trade, intellectual property protection, and the prevention of bio-piracy of indigenous medicinal plant resources.",
              items: [],
              specialBlocks: [
                { id: "sb-6-5-1", type: "explanation", content: "For the purposes of this clause, \"bio-piracy\" means the appropriation of traditional knowledge or genetic resources of medicinal plants without the prior informed consent of the communities or the country of origin." }
              ]
            }
          ],
          specialBlocks: []
        },
        {
          id: "cl-7", number: 7,
          title: "The Board shall have the power to\u2014",
          subClauses: [
            { id: "sc-7-1", number: 1, content: "constitute sub-committees for specific purposes, including research, trade facilitation, and conservation;", items: [], specialBlocks: [] },
            { id: "sc-7-2", number: 2, content: "invite experts, consultants, and representatives of civil society organisations to assist in its deliberations;", items: [], specialBlocks: [] },
            { id: "sc-7-3", number: 3, content: "issue guidelines and standards for the quality control of medicinal and aromatic plant products.", items: [], specialBlocks: [] }
          ],
          specialBlocks: []
        }
      ]
    },
    {
      id: "ch-4",
      name: "FINANCIAL PROVISIONS",
      number: 4,
      clauses: [
        { id: "cl-8", number: 8, title: "The Central Government shall, after due appropriation made by Parliament by law in this behalf, pay to the Board by way of grants such sums of money as the Central Government may think fit for being utilised for the purposes of this Act.", subClauses: [], specialBlocks: [] },
        {
          id: "cl-9", number: 9,
          title: "The Board shall maintain proper accounts and other relevant records and prepare an annual statement of accounts in such form as may be prescribed by the Central Government in consultation with the Comptroller and Auditor-General of India.",
          subClauses: [
            { id: "sc-9-1", number: 1, content: "The accounts of the Board shall be audited by the Comptroller and Auditor-General of India at such intervals as may be specified by him.", items: [], specialBlocks: [] },
            { id: "sc-9-2", number: 2, content: "The Board shall furnish to the Central Government, before such date as may be prescribed, its annual report containing a full account of its activities during the previous financial year.", items: [], specialBlocks: [] }
          ],
          specialBlocks: []
        }
      ]
    },
    {
      id: "ch-5",
      name: "MISCELLANEOUS",
      number: 5,
      clauses: [
        {
          id: "cl-10", number: 10,
          title: "The Central Government may, by notification in the Official Gazette, make rules for carrying out the provisions of this Act.",
          subClauses: [
            {
              id: "sc-10-1", number: 1,
              content: "In particular, and without prejudice to the generality of the foregoing power, such rules may provide for\u2014",
              items: [
                { id: "it-10-1-1", number: 1, content: "the manner and conditions of appointment of the Chairperson and members of the Board;", specialBlocks: [] },
                { id: "it-10-1-2", number: 2, content: "the procedure to be followed at the meetings of the Board;", specialBlocks: [] },
                { id: "it-10-1-3", number: 3, content: "the form and manner of maintaining accounts by the Board;", specialBlocks: [] },
                { id: "it-10-1-4", number: 4, content: "the designation and management of cultivation zones by State Governments.", specialBlocks: [] }
              ],
              specialBlocks: []
            }
          ],
          specialBlocks: []
        },
        { id: "cl-11", number: 11, title: "No suit, prosecution, or other legal proceeding shall lie against the Board, the Chairperson, or any member or officer of the Board for anything which is done or intended to be done in good faith under this Act or the rules made thereunder.", subClauses: [], specialBlocks: [] },
        {
          id: "cl-12", number: 12,
          title: "If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order published in the Official Gazette, make such provisions not inconsistent with the provisions of this Act as may appear to be necessary for removing the difficulty.",
          subClauses: [],
          specialBlocks: [
            { id: "sb-12-1", type: "proviso", content: "no order shall be made under this section after the expiry of two years from the date of commencement of this Act." }
          ]
        }
      ]
    }
  ]
};

// ── Special Block Renderer (Read-Only) ─────────────────────────────────────────

function ReadOnlySpecialBlock({ block, index, totalOfType }: { block: SpecialBlock; index: number; totalOfType: number }) {
  const getPrefix = () => {
    if (totalOfType === 1) {
      switch (block.type) {
        case 'proviso': return 'Provided that';
        case 'explanation': return 'Explanation:';
        case 'illustration': return 'Illustration:';
      }
    } else {
      switch (block.type) {
        case 'proviso': return `Proviso ${index + 1}:`;
        case 'explanation': return `Explanation ${index + 1}:`;
        case 'illustration': {
          const letter = String.fromCharCode(97 + index);
          return `Illustration (${letter}):`;
        }
      }
    }
  };

  const getBgColor = () => {
    switch (block.type) {
      case 'proviso': return 'bg-[#fff4e6]';
      case 'explanation': return 'bg-[#e6f4ff]';
      case 'illustration': return 'bg-[#f0f9ff]';
    }
  };

  return (
    <div className={`${getBgColor()} rounded-[4px] p-[12px] flex gap-[8px] mb-[8px]`}>
      <span className="font-semibold text-[length:var(--text-label)] text-[var(--foreground)] leading-[16px] shrink-0">
        {getPrefix()}
      </span>
      <p className="flex-1 text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] leading-[20px]">{block.content}</p>
    </div>
  );
}

function renderReadOnlySpecialBlocks(blocks: SpecialBlock[]) {
  const typeOrder = { proviso: 0, explanation: 1, illustration: 2 };
  const sortedBlocks = [...blocks].sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

  const countByType = blocks.reduce((acc, block) => {
    acc[block.type] = (acc[block.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const indexByType = { proviso: 0, explanation: 0, illustration: 0 };

  return sortedBlocks.map((block) => {
    const currentIndex = indexByType[block.type];
    indexByType[block.type]++;
    return (
      <ReadOnlySpecialBlock
        key={block.id}
        block={block}
        index={currentIndex}
        totalOfType={countByType[block.type] || 0}
      />
    );
  });
}

// ── Member avatar placeholder ──────────────────────────────────────────────────

const MEMBER_AVATAR = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face";

// ── Main Component ─────────────────────────────────────────────────────────────

interface BillAmendmentViewProps {
  onClose: () => void;
}

export function BillAmendmentView({ onClose }: BillAmendmentViewProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>(APPROVED_BILL.chapters[0]?.id || "");
  const [amendments, setAmendments] = useState<AmendmentData[]>([]);
  const [openActionMenuId, setOpenActionMenuId] = useState<string | null>(null);
  const [activeFormNodeId, setActiveFormNodeId] = useState<string | null>(null);
  const [activeFormType, setActiveFormType] = useState<AmendmentType | null>(null);
  const [editingAmendmentId, setEditingAmendmentId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const actionMenuRef = useRef<HTMLDivElement>(null);

  const selectedChapterData = APPROVED_BILL.chapters.find(ch => ch.id === selectedChapter);

  // Close action menu on click outside
  useEffect(() => {
    if (!openActionMenuId) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(e.target as Node)) {
        setOpenActionMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openActionMenuId]);

  // ── Amendment helpers ──────────────────────────────────────────────────────

  const getAmendmentForNode = (nodeId: string) => {
    return amendments.find(a => a.nodeId === nodeId);
  };

  /** Return the status-chip background CSS variable for an amendment's type */
  const getAmendmentBg = (nodeId: string): string | null => {
    const amendment = getAmendmentForNode(nodeId);
    if (!amendment) return null;
    const variantMap: Record<string, string> = {
      substitute: 'warning',
      omit: 'urgent',
      insert: 'progress',
    };
    const variant = variantMap[amendment.type] ?? 'warning';
    return `var(--status-${variant}-bg)`;
  };

  const getAmendmentCountForChapter = (chapterId: string) => {
    const chapter = APPROVED_BILL.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return 0;
    const nodeIds = new Set<string>();
    chapter.clauses.forEach(cl => {
      nodeIds.add(cl.id);
      cl.subClauses.forEach(sc => {
        nodeIds.add(sc.id);
        sc.items.forEach(it => nodeIds.add(it.id));
      });
    });
    return amendments.filter(a => nodeIds.has(a.nodeId)).length;
  };

  const totalAmendmentCount = amendments.length;

  const handleAmendClick = (nodeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenActionMenuId(openActionMenuId === nodeId ? null : nodeId);
    setActiveFormNodeId(null);
    setActiveFormType(null);
  };

  const handleSelectAmendmentType = (nodeId: string, type: AmendmentType) => {
    setOpenActionMenuId(null);
    setActiveFormNodeId(nodeId);
    setActiveFormType(type);
  };

  const getNodeText = (nodeId: string): string => {
    for (const chapter of APPROVED_BILL.chapters) {
      for (const clause of chapter.clauses) {
        if (clause.id === nodeId) return clause.title;
        for (const sc of clause.subClauses) {
          if (sc.id === nodeId) return sc.content;
          for (const item of sc.items) {
            if (item.id === nodeId) return item.content;
          }
        }
      }
    }
    return '';
  };

  const buildNodeLabel = (clause: Clause, subClause?: SubClause, item?: Item) => {
    let label = `Clause ${clause.number}`;
    if (subClause) label += `(${subClause.number})`;
    if (item) label += `(${toLowerRomanNumeral(item.number)})`;
    return label;
  };

  const handleSubmitAmendment = (
    nodeId: string,
    nodeLabel: string,
    data: { type: AmendmentType; proposedText?: string; reason?: string }
  ) => {
    const newAmendment: AmendmentData = {
      id: `amend-${Date.now()}`,
      nodeId,
      nodeLabel,
      type: data.type,
      proposedText: data.proposedText,
      reason: data.reason,
      originalText: getNodeText(nodeId),
      memberName: "You",
      memberAvatar: MEMBER_AVATAR,
      timestamp: new Date().toLocaleString('en-GB', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
      }).replace(',', ''),
    };

    // If editing, replace the existing amendment
    if (editingAmendmentId) {
      setAmendments(amendments.map(a => a.id === editingAmendmentId ? { ...newAmendment, id: a.id } : a));
      setEditingAmendmentId(null);
    } else {
      setAmendments([...amendments, newAmendment]);
    }
    setActiveFormNodeId(null);
    setActiveFormType(null);
  };

  const handleWithdrawAmendment = (amendmentId: string) => {
    setAmendments(amendments.filter(a => a.id !== amendmentId));
  };

  const handleEditAmendment = (amendment: AmendmentData) => {
    setEditingAmendmentId(amendment.id);
    setActiveFormNodeId(amendment.nodeId);
    setActiveFormType(amendment.type);
  };

  const handleCancelForm = () => {
    setActiveFormNodeId(null);
    setActiveFormType(null);
    setEditingAmendmentId(null);
  };

  const handleElementHover = (elementId: string) => {
    setHoveredNodeId(elementId);
    if (openActionMenuId && openActionMenuId !== elementId) {
      setOpenActionMenuId(null);
    }
  };

  // ── Node rendering helper ─────────────────────────────────────────────────

  const renderNodeAmendmentUI = (
    nodeId: string,
    nodeLabel: string,
    originalText: string,
    buttonIndent: string = "ml-[24px]",
  ) => {
    const existingAmendment = getAmendmentForNode(nodeId);
    const hasAmendment = !!existingAmendment;
    const isFormActive = activeFormNodeId === nodeId && activeFormType !== null;
    const isMenuOpen = openActionMenuId === nodeId;
    const isEditing = editingAmendmentId === existingAmendment?.id;
    const isHovered = hoveredNodeId === nodeId;

    return (
      <>
        {/* Amend button — appears on hover if no amendment exists (or while editing) */}
        {(!hasAmendment || isEditing) && !isFormActive && (
          <div className={`${buttonIndent} mt-[4px] relative`}>
            <button
              onClick={(e) => handleAmendClick(nodeId, e)}
              className={`${isMenuOpen || isHovered ? 'inline-flex' : 'hidden'} items-center gap-[4px] px-[8px] py-[4px] text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[14px] bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm hover:bg-[var(--sidebar-primary)] transition-colors cursor-pointer`}
            >
              Amend
            </button>
            {isMenuOpen && (
              <div ref={actionMenuRef} className="absolute left-0 top-[calc(100%+4px)] z-20">
                <AmendmentActionMenu onSelect={(type) => handleSelectAmendmentType(nodeId, type)} />
              </div>
            )}
          </div>
        )}

        {/* Amendment form — inline below the node */}
        <AnimatePresence>
          {isFormActive && (
            <AmendmentInput
              type={activeFormType!}
              originalText={originalText}
              onSubmit={(data) => handleSubmitAmendment(nodeId, nodeLabel, data)}
              onCancel={handleCancelForm}
            />
          )}
        </AnimatePresence>

        {/* Submitted amendment display */}
        {hasAmendment && !isEditing && (
          <div className="mt-[8px]">
            <AmendmentDisplay
              amendment={existingAmendment}
              onEdit={() => handleEditAmendment(existingAmendment)}
              onWithdraw={() => handleWithdrawAmendment(existingAmendment.id)}
            />
          </div>
        )}
      </>
    );
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="bg-[var(--card)] absolute flex inset-0 overflow-hidden rounded-[var(--radius-card)]">
      <div className="flex flex-1 overflow-hidden">

        {/* ── Left Panel: Chapter Navigation ──────────────────────────── */}
        <div className="w-[40%] border-r border-[#e3e6f0] flex flex-col bg-[#f8f9fb] overflow-hidden">

          {/* Bill Header */}
          <div className="bg-white flex flex-col gap-[12px] px-[16px] py-[16px] border-b border-[#e3e6f0]">
            <div className="flex flex-row gap-[8px] items-center">
              <StatusChip label="Published" />
              <StatusChip label="Approved" />
            </div>

            <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
              {APPROVED_BILL.title}
            </p>
            <p className="leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">
              {APPROVED_BILL.preamble}
            </p>
          </div>

          {/* Toolbar */}
          <div className="bg-white flex flex-col gap-[8px] px-[16px] py-[12px] border-b border-[#e3e6f0]">
            <div className="content-stretch flex gap-[8px] items-center justify-between">
              <div className="flex gap-[8px] items-center">
                <p className="leading-[14px] text-[var(--foreground)] text-[length:var(--text-label)]">Chapters</p>
                {totalAmendmentCount > 0 && (
                  <StatusChip label={`${totalAmendmentCount} amendment${totalAmendmentCount !== 1 ? 's' : ''}`} variant="warning" />
                )}
              </div>
            </div>
          </div>

          {/* Chapter List */}
          <div className="flex flex-col gap-[4px] p-[8px] overflow-y-auto scrollbar-hide flex-1">
            {APPROVED_BILL.chapters.map((chapter) => {
              const isSelected = selectedChapter === chapter.id;
              const chapterAmendmentCount = getAmendmentCountForChapter(chapter.id);
              return (
                <div
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className={`bg-white flex gap-[4px] items-start px-[8px] py-[8px] rounded-[4px] cursor-pointer hover:bg-[var(--sidebar-primary)] transition-colors ${
                    isSelected ? 'ring-1 ring-[var(--primary)]' : ''
                  }`}
                >
                  <p className="flex-1 leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] break-words">
                    {chapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                  </p>
                  <StatusChip label={`Ch ${chapter.number}`} variant="inactive" />
                  {chapterAmendmentCount > 0 && (
                    <StatusChip label={`${chapterAmendmentCount}`} variant="warning" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Panel: Bill Content + Amendment Interaction ────────── */}
        <div className="flex-1 overflow-y-auto scrollbar-hide px-[16px] py-[16px] relative" ref={contentRef}>

          {/* Close button */}
          <div className="absolute top-[16px] right-[16px] z-10 flex items-center gap-[8px]">
            <CloseButton onClick={onClose} />
          </div>

          {selectedChapterData ? (
            <div className="flex flex-col gap-[16px]">
              {/* Chapter header */}
              <div className="flex flex-col gap-[8px]">
                <div className="mt-[14px]">
                  <StatusChip label={`CHAPTER ${selectedChapterData.number}`} variant="inactive" />
                </div>
                <p className="font-semibold text-[length:var(--text-h4)] text-[var(--foreground)] leading-[20px]">
                  {selectedChapterData.name}
                </p>
              </div>

              {/* Clauses */}
              <div onMouseLeave={() => { setHoveredNodeId(null); setOpenActionMenuId(null); }}>
              {selectedChapterData.clauses.map((clause) => {
                const clauseNodeId = clause.id;
                const hasAmendment = !!getAmendmentForNode(clauseNodeId);
                const clauseAmendBg = getAmendmentBg(clauseNodeId);

                return (
                  <div key={clause.id} className="mb-[8px]">
                    {/* Clause row */}
                    <div
                      onMouseEnter={() => handleElementHover(clauseNodeId)}
                      className={`flex items-start gap-[8px] px-[8px] py-[6px] rounded-[var(--radius-button-small)] transition-colors cursor-default ${
                        !hasAmendment && hoveredNodeId !== clauseNodeId ? 'hover:bg-[var(--sidebar-primary)]' : ''
                      } ${!hasAmendment && hoveredNodeId === clauseNodeId ? 'bg-[var(--sidebar-primary)]' : ''}`}
                      style={hasAmendment && clauseAmendBg ? { backgroundColor: clauseAmendBg } : undefined}
                    >
                      <span className="font-semibold text-[length:var(--text-base)] text-[var(--foreground)] leading-[20px] shrink-0">
                        {clause.number}.
                      </span>
                      <p className="flex-1 text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] leading-[20px]">
                        {clause.title}
                      </p>
                    </div>

                    {/* Amendment UI for clause */}
                    {renderNodeAmendmentUI(clauseNodeId, buildNodeLabel(clause), clause.title, "ml-[24px]")}

                    {/* Special blocks for clause */}
                    {clause.specialBlocks.length > 0 && (
                      <div className="ml-[24px] mt-[8px]">
                        {renderReadOnlySpecialBlocks(clause.specialBlocks)}
                      </div>
                    )}

                    {/* Sub-clauses */}
                    {clause.subClauses.length > 0 && (
                      <div className="ml-[24px] mt-[8px]">
                        {clause.subClauses.map((subClause) => {
                          const scNodeId = subClause.id;
                          const scHasAmendment = !!getAmendmentForNode(scNodeId);
                          const scAmendBg = getAmendmentBg(scNodeId);

                          return (
                            <div key={subClause.id} className="mb-[4px]">
                              {/* Sub-clause row */}
                              <div
                                onMouseEnter={() => handleElementHover(scNodeId)}
                                className={`flex items-start gap-[8px] px-[8px] py-[4px] rounded-[var(--radius-button-small)] transition-colors cursor-default ${
                                  !scHasAmendment && hoveredNodeId !== scNodeId ? 'hover:bg-[var(--sidebar-primary)]' : ''
                                } ${!scHasAmendment && hoveredNodeId === scNodeId ? 'bg-[var(--sidebar-primary)]' : ''}`}
                                style={scHasAmendment && scAmendBg ? { backgroundColor: scAmendBg } : undefined}
                              >
                                <span className="text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] leading-[20px] shrink-0">
                                  ({subClause.number})
                                </span>
                                <p className="flex-1 text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] leading-[20px]">
                                  {subClause.content}
                                </p>
                              </div>

                              {/* Amendment UI for sub-clause */}
                              {renderNodeAmendmentUI(scNodeId, buildNodeLabel(clause, subClause), subClause.content, "ml-[32px]")}

                              {/* Special blocks for sub-clause */}
                              {subClause.specialBlocks.length > 0 && (
                                <div className="ml-[32px] mt-[4px]">
                                  {renderReadOnlySpecialBlocks(subClause.specialBlocks)}
                                </div>
                              )}

                              {/* Items */}
                              {subClause.items.length > 0 && (
                                <div className="ml-[24px] mt-[4px]">
                                  {subClause.items.map((item) => {
                                    const itemNodeId = item.id;
                                    const itemHasAmendment = !!getAmendmentForNode(itemNodeId);
                                    const itemAmendBg = getAmendmentBg(itemNodeId);

                                    return (
                                      <div key={item.id} className="mb-[2px]">
                                        {/* Item row */}
                                        <div
                                          onMouseEnter={() => handleElementHover(itemNodeId)}
                                          className={`flex items-start gap-[8px] px-[6px] py-[4px] rounded-[var(--radius-button-small)] transition-colors cursor-default ${
                                            !itemHasAmendment && hoveredNodeId !== itemNodeId ? 'hover:bg-[var(--sidebar-primary)]' : ''
                                          } ${!itemHasAmendment && hoveredNodeId === itemNodeId ? 'bg-[var(--sidebar-primary)]' : ''}`}
                                          style={itemHasAmendment && itemAmendBg ? { backgroundColor: itemAmendBg } : undefined}
                                        >
                                          <span className="text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] leading-[20px] shrink-0">
                                            ({toLowerRomanNumeral(item.number)})
                                          </span>
                                          <p className="flex-1 text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)] leading-[20px]">
                                            {item.content}
                                          </p>
                                        </div>

                                        {/* Amendment UI for item */}
                                        {renderNodeAmendmentUI(itemNodeId, buildNodeLabel(clause, subClause, item), item.content, "ml-[32px]")}

                                        {/* Special blocks for item */}
                                        {item.specialBlocks.length > 0 && (
                                          <div className="ml-[40px] mt-[4px]">
                                            {renderReadOnlySpecialBlocks(item.specialBlocks)}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-[var(--muted-foreground)] text-[length:var(--text-base)]">Select a chapter to review</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}