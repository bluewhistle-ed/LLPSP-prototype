import { useState, useRef, useEffect } from "react";
import imgMentorAvatar from "figma:asset/f6ba6f3786e668346bbfc663e520ac1bacb87949.png";
import { motion, AnimatePresence } from "motion/react";
import { CloseButton } from "./CloseButton";
import { StatusChip } from "./StatusChip";
import { FeedbackDisplay as SharedFeedbackDisplay, FeedbackForm, type FeedbackData } from "./FeedbackModule";

// ── Data Interfaces ────────────────────────────────────────────────────────────

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

interface FeedbackEntry {
  id: string;
  nodeId: string;
  nodeLabel: string;
  text: string;
  mentorName: string;
  mentorAvatar: string;
  timestamp: string;
}

// ── Numbering Helpers ─────────────────────────────────────────────────────────

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

// ── Dummy Bill Data ────────────────────────────────────────────────────────────

const PUBLISHED_BILL: BillData = {
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
            {
              id: "sc-1-1",
              number: 1,
              content: "It shall extend to the whole of India.",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-1-2",
              number: 2,
              content: "It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.",
              items: [],
              specialBlocks: []
            }
          ],
          specialBlocks: []
        },
        {
          id: "cl-2",
          number: 2,
          title: "In this Act, unless the context otherwise requires,—",
          subClauses: [
            {
              id: "sc-2-1",
              number: 1,
              content: "\"Aromatic Plant\" means any plant species that produces essential oils, aromatic compounds, or fragrant substances used in pharmaceuticals, cosmetics, or traditional medicine;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-2-2",
              number: 2,
              content: "\"Board\" means the National Medicinal and Aromatic Plants Board established under section 4;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-2-3",
              number: 3,
              content: "\"Cultivation Zone\" means any area designated by the State Government for the systematic cultivation of medicinal and aromatic plants;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-2-4",
              number: 4,
              content: "\"Medicinal Plant\" means any plant or part thereof, including leaves, roots, bark, flowers, seeds, or extracts, which possesses therapeutic properties and is used in—",
              items: [
                { id: "it-2-4-1", number: 1, content: "Ayurveda, Siddha, Unani, or any recognised system of Indian medicine;", specialBlocks: [] },
                { id: "it-2-4-2", number: 2, content: "modern pharmacology and pharmaceutical preparations;", specialBlocks: [] },
                { id: "it-2-4-3", number: 3, content: "traditional folk remedies practised by local communities.", specialBlocks: [] }
              ],
              specialBlocks: []
            },
            {
              id: "sc-2-5",
              number: 5,
              content: "\"Stakeholder\" means any person, institution, community, or organisation engaged in the cultivation, processing, research, trade, or conservation of medicinal and aromatic plants.",
              items: [],
              specialBlocks: []
            }
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
        {
          id: "cl-3",
          number: 3,
          title: "The Central Government shall, by notification, establish a Board to be called the National Medicinal and Aromatic Plants Board for the purposes of this Act.",
          subClauses: [],
          specialBlocks: []
        },
        {
          id: "cl-4",
          number: 4,
          title: "The Board shall consist of the following members, namely:—",
          subClauses: [
            {
              id: "sc-4-1",
              number: 1,
              content: "a Chairperson, who shall be a person of eminence in the field of botany, pharmacology, or traditional medicine, to be appointed by the Central Government;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-4-2",
              number: 2,
              content: "six members to be nominated by the Central Government, of whom—",
              items: [
                { id: "it-4-2-1", number: 1, content: "two shall be experts in the field of medicinal plant research;", specialBlocks: [] },
                { id: "it-4-2-2", number: 2, content: "two shall be representatives of State Governments from North-Eastern States;", specialBlocks: [] },
                { id: "it-4-2-3", number: 3, content: "two shall be representatives of recognised farmers' cooperatives engaged in the cultivation of medicinal and aromatic plants;", specialBlocks: [] }
              ],
              specialBlocks: []
            },
            {
              id: "sc-4-3",
              number: 3,
              content: "a Member-Secretary, to be appointed by the Central Government, who shall be an officer not below the rank of Joint Secretary to the Government of India.",
              items: [],
              specialBlocks: [
                {
                  id: "sb-4-3-1",
                  type: "proviso",
                  content: "the Central Government shall ensure adequate representation of women and members of Scheduled Tribes in the composition of the Board."
                }
              ]
            }
          ],
          specialBlocks: []
        },
        {
          id: "cl-5",
          number: 5,
          title: "The Chairperson and members of the Board shall hold office for a term of three years from the date of their appointment and shall be eligible for re-appointment for one additional term.",
          subClauses: [],
          specialBlocks: []
        }
      ]
    },
    {
      id: "ch-3",
      name: "FUNCTIONS AND POWERS OF THE BOARD",
      number: 3,
      clauses: [
        {
          id: "cl-6",
          number: 6,
          title: "The Board shall perform the following functions, namely:—",
          subClauses: [
            {
              id: "sc-6-1",
              number: 1,
              content: "formulate national policies and programmes for the promotion and development of medicinal and aromatic plants;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-6-2",
              number: 2,
              content: "coordinate with State Governments, research institutions, and stakeholders for the conservation and sustainable harvesting of such plants;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-6-3",
              number: 3,
              content: "promote scientific research and development in the cultivation, processing, and value addition of medicinal and aromatic plants;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-6-4",
              number: 4,
              content: "facilitate the integration of traditional knowledge systems with modern scientific practices for the benefit of farming communities;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-6-5",
              number: 5,
              content: "advise the Central Government on matters relating to international trade, intellectual property protection, and the prevention of bio-piracy of indigenous medicinal plant resources.",
              items: [],
              specialBlocks: [
                {
                  id: "sb-6-5-1",
                  type: "explanation",
                  content: "For the purposes of this clause, \"bio-piracy\" means the appropriation of traditional knowledge or genetic resources of medicinal plants without the prior informed consent of the communities or the country of origin."
                }
              ]
            }
          ],
          specialBlocks: []
        },
        {
          id: "cl-7",
          number: 7,
          title: "The Board shall have the power to—",
          subClauses: [
            {
              id: "sc-7-1",
              number: 1,
              content: "constitute sub-committees for specific purposes, including research, trade facilitation, and conservation;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-7-2",
              number: 2,
              content: "invite experts, consultants, and representatives of civil society organisations to assist in its deliberations;",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-7-3",
              number: 3,
              content: "issue guidelines and standards for the quality control of medicinal and aromatic plant products.",
              items: [],
              specialBlocks: []
            }
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
        {
          id: "cl-8",
          number: 8,
          title: "The Central Government shall, after due appropriation made by Parliament by law in this behalf, pay to the Board by way of grants such sums of money as the Central Government may think fit for being utilised for the purposes of this Act.",
          subClauses: [],
          specialBlocks: []
        },
        {
          id: "cl-9",
          number: 9,
          title: "The Board shall maintain proper accounts and other relevant records and prepare an annual statement of accounts in such form as may be prescribed by the Central Government in consultation with the Comptroller and Auditor-General of India.",
          subClauses: [
            {
              id: "sc-9-1",
              number: 1,
              content: "The accounts of the Board shall be audited by the Comptroller and Auditor-General of India at such intervals as may be specified by him.",
              items: [],
              specialBlocks: []
            },
            {
              id: "sc-9-2",
              number: 2,
              content: "The Board shall furnish to the Central Government, before such date as may be prescribed, its annual report containing a full account of its activities during the previous financial year.",
              items: [],
              specialBlocks: []
            }
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
          id: "cl-10",
          number: 10,
          title: "The Central Government may, by notification in the Official Gazette, make rules for carrying out the provisions of this Act.",
          subClauses: [
            {
              id: "sc-10-1",
              number: 1,
              content: "In particular, and without prejudice to the generality of the foregoing power, such rules may provide for—",
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
        {
          id: "cl-11",
          number: 11,
          title: "No suit, prosecution, or other legal proceeding shall lie against the Board, the Chairperson, or any member or officer of the Board for anything which is done or intended to be done in good faith under this Act or the rules made thereunder.",
          subClauses: [],
          specialBlocks: []
        },
        {
          id: "cl-12",
          number: 12,
          title: "If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order published in the Official Gazette, make such provisions not inconsistent with the provisions of this Act as may appear to be necessary for removing the difficulty.",
          subClauses: [],
          specialBlocks: [
            {
              id: "sb-12-1",
              type: "proviso",
              content: "no order shall be made under this section after the expiry of two years from the date of commencement of this Act."
            }
          ]
        }
      ]
    }
  ]
};

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconFeedback() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M14 1H2C1.45 1 1 1.45 1 2V11C1 11.55 1.45 12 2 12H4V15L7 12H14C14.55 12 15 11.55 15 11V2C15 1.45 14.55 1 14 1ZM14 11H6.17L5 12.17V11H2V2H14V11Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

function IconFeedbackFilled() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M14 1H2C1.45 1 1 1.45 1 2V11C1 11.55 1.45 12 2 12H4V15L7 12H14C14.55 12 15 11.55 15 11V2C15 1.45 14.55 1 14 1Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

// ── Feedback Inline Component ──────────────────────────────────────────────────

function FeedbackInput({ onSubmit, onCancel }: { onSubmit: (text: string) => void; onCancel: () => void }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden mt-[8px]"
    >
      <FeedbackForm onSubmit={onSubmit} onCancel={onCancel} />
    </motion.div>
  );
}

function FeedbackDisplay({ feedback }: { feedback: FeedbackEntry }) {
  return (
    <div className="mt-[8px]">
      <SharedFeedbackDisplay
        feedback={{
          id: feedback.id,
          text: feedback.text,
          authorName: feedback.mentorName,
          authorAvatar: feedback.mentorAvatar,
          authorRole: "Mentor",
          timestamp: feedback.timestamp,
        }}
      />
    </div>
  );
}

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
      <span className="font-semibold text-[12px] text-[var(--foreground)] leading-[16px] shrink-0">
        {getPrefix()}
      </span>
      <p className="flex-1 text-[14px] text-[var(--sidebar-primary-foreground)] leading-[20px]">{block.content}</p>
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

// ── Main Component ─────────────────────────────────────────────────────────────

interface BillReviewViewProps {
  onClose: () => void;
}

export function BillReviewView({ onClose }: BillReviewViewProps) {
  const [selectedChapter, setSelectedChapter] = useState<string>(PUBLISHED_BILL.chapters[0]?.id || "");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const selectedChapterData = PUBLISHED_BILL.chapters.find(ch => ch.id === selectedChapter);

  // Count feedbacks per chapter
  const getFeedbackCountForChapter = (chapterId: string) => {
    const chapter = PUBLISHED_BILL.chapters.find(ch => ch.id === chapterId);
    if (!chapter) return 0;
    const nodeIds = new Set<string>();
    chapter.clauses.forEach(cl => {
      nodeIds.add(cl.id);
      cl.subClauses.forEach(sc => {
        nodeIds.add(sc.id);
        sc.items.forEach(it => nodeIds.add(it.id));
      });
    });
    return feedbacks.filter(f => nodeIds.has(f.nodeId)).length;
  };

  const getFeedbacksForNode = (nodeId: string) => {
    return feedbacks.filter(f => f.nodeId === nodeId);
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNodeId(selectedNodeId === nodeId ? null : nodeId);
  };

  const handleSubmitFeedback = (nodeId: string, nodeLabel: string, text: string) => {
    const newFeedback: FeedbackEntry = {
      id: `fb-${Date.now()}`,
      nodeId,
      nodeLabel,
      text,
      mentorName: "Regina",
      mentorAvatar: imgMentorAvatar,
      timestamp: new Date().toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true }).replace(',', ''),
    };
    setFeedbacks([...feedbacks, newFeedback]);
    setSelectedNodeId(null);
  };

  const totalFeedbackCount = feedbacks.length;

  // Build a node label for display
  const buildNodeLabel = (clause: Clause, subClause?: SubClause, item?: Item) => {
    let label = `Clause ${clause.number}`;
    if (subClause) label += `(${subClause.number})`;
    if (item) label += `(${toLowerRomanNumeral(item.number)})`;
    return label;
  };

  return (
    <div className="bg-[var(--card)] absolute flex inset-0 overflow-hidden rounded-[var(--radius-card)]">
      <div className="flex flex-1 overflow-hidden">

        {/* ── Left Panel: Chapter Navigation ──────────────────────────── */}
        <div className="w-[40%] border-r border-[#e3e6f0] flex flex-col bg-[#f8f9fb] overflow-hidden">

          {/* Bill Header — matches BillDraftingForm header structure */}
          <div className="bg-white flex flex-col gap-[12px] px-[16px] py-[16px] border-b border-[#e3e6f0]">
            {/* Published badge */}
            <div className="flex flex-row gap-[8px] items-center">
              <StatusChip label="Published" />
              <StatusChip label="Waiting for approval" />
            </div>

            <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">
              {PUBLISHED_BILL.title}
            </p>
            <p className="leading-[16px] text-[#3c4c7c] text-[12px]">
              {PUBLISHED_BILL.preamble}
            </p>
          </div>

          {/* Toolbar — mirrors BillDraftingForm's toolbar row */}
          <div className="bg-white flex flex-col gap-[8px] px-[16px] py-[12px] border-b border-[#e3e6f0]">
            <div className="content-stretch flex gap-[8px] items-center justify-between">
              <div className="flex gap-[8px] items-center">
                <p className="leading-[14px] text-[#2f3e6d] text-[12px]">Chapters</p>
                {totalFeedbackCount > 0 && (
                  <StatusChip label={`${totalFeedbackCount} feedback${totalFeedbackCount !== 1 ? 's' : ''}`} variant="mentor" />
                )}
              </div>
            </div>
          </div>

          {/* Chapter List — matches DraggableChapterItem layout (without drag/delete) */}
          <div className="flex flex-col gap-[4px] p-[8px] overflow-y-auto scrollbar-hide flex-1">
            {PUBLISHED_BILL.chapters.map((chapter) => {
              const isSelected = selectedChapter === chapter.id;
              const chapterFeedbackCount = getFeedbackCountForChapter(chapter.id);
              return (
                <div
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className={`bg-white flex gap-[4px] items-start px-[8px] py-[8px] rounded-[4px] cursor-pointer hover:bg-[#f1f2f8] transition-colors ${
                    isSelected ? 'ring-1 ring-[#2766da]' : ''
                  }`}
                >
                  <p className="flex-1 leading-[16px] text-[14px] text-[#3c4c7c] break-words">
                    {chapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                  </p>
                  <StatusChip label={`Ch ${chapter.number}`} variant="inactive" />
                  {/* Feedback count indicator */}
                  {chapterFeedbackCount > 0 && (
                    <StatusChip label={`${chapterFeedbackCount}`} variant="mentor" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Panel: Bill Content + Feedback ────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden relative" ref={contentRef}>

          {/* Fixed header with chapter chip + action buttons */}
          <div className="flex items-end justify-between gap-[8px] px-[16px] py-[16px] shrink-0">
            <div>
              {selectedChapterData && (
                <StatusChip label={`CHAPTER ${selectedChapterData.number}`} variant="inactive" />
              )}
            </div>
            <div className="flex items-center gap-[8px]">
              <button
                className="bg-[var(--primary)] cursor-pointer h-[32px] relative rounded-[var(--radius-button-small)] shrink-0 hover:opacity-90 transition-opacity"
              >
                <div className="flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-left text-[var(--primary-foreground)] whitespace-nowrap">
                    <p className="leading-[14px]">Approve Bill</p>
                  </div>
                </div>
              </button>
              <CloseButton onClick={onClose} />
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide px-[16px] pb-[16px]">
          {selectedChapterData ? (
            <div className="flex flex-col gap-[16px]">
              {/* Chapter header — matches BillDraftingForm */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-semibold text-[length:var(--text-h4)] text-[var(--foreground)] leading-[20px]">
                  {selectedChapterData.name}
                </p>
              </div>

              {/* Clauses */}
              {selectedChapterData.clauses.map((clause) => {
                const clauseNodeId = clause.id;
                const clauseFeedbacks = getFeedbacksForNode(clauseNodeId);
                const hasFeedback = clauseFeedbacks.length > 0;
                const isActive = selectedNodeId === clauseNodeId;

                return (
                  <div key={clause.id} className="mb-[8px]">
                    {/* Clause row */}
                    <div
                      onClick={() => handleNodeClick(clauseNodeId)}
                      className={`flex items-start gap-[8px] px-[8px] py-[6px] rounded-[var(--radius-button-small)] cursor-pointer transition-colors group/clause ${
                        isActive
                          ? 'bg-[var(--sidebar-primary)] ring-1 ring-[var(--primary)]'
                          : 'hover:bg-[var(--sidebar-primary)]'
                      }`}
                    >
                      <span className="font-semibold text-[14px] text-[var(--foreground)] leading-[20px] shrink-0">
                        {clause.number}.
                      </span>
                      <p className="flex-1 text-[14px] text-[var(--sidebar-primary-foreground)] leading-[20px]">
                        {clause.title}
                      </p>
                      {/* Feedback indicator */}
                      <div className={`shrink-0 mt-[3px] ${hasFeedback ? 'text-[#6820ff]' : 'text-[var(--muted-foreground)] opacity-0 group-hover/clause:opacity-100'} transition-opacity`}>
                        {hasFeedback ? <IconFeedbackFilled /> : <IconFeedback />}
                      </div>
                    </div>

                    {/* Feedback display for clause */}
                    {clauseFeedbacks.map(fb => (
                      <FeedbackDisplay key={fb.id} feedback={fb} />
                    ))}

                    {/* Feedback input for clause */}
                    <AnimatePresence>
                      {isActive && (
                        <FeedbackInput
                          onSubmit={(text) => handleSubmitFeedback(clauseNodeId, buildNodeLabel(clause), text)}
                          onCancel={() => setSelectedNodeId(null)}
                        />
                      )}
                    </AnimatePresence>

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
                          const scFeedbacks = getFeedbacksForNode(scNodeId);
                          const scHasFeedback = scFeedbacks.length > 0;
                          const scIsActive = selectedNodeId === scNodeId;

                          return (
                            <div key={subClause.id} className="mb-[4px]">
                              {/* Sub-clause row */}
                              <div
                                onClick={() => handleNodeClick(scNodeId)}
                                className={`flex items-start gap-[8px] px-[8px] py-[4px] rounded-[var(--radius-button-small)] cursor-pointer transition-colors group/subclause ${
                                  scIsActive
                                    ? 'bg-[var(--sidebar-primary)] ring-1 ring-[var(--primary)]'
                                    : 'hover:bg-[var(--sidebar-primary)]'
                                }`}
                              >
                                <span className="text-[14px] text-[var(--sidebar-primary-foreground)] leading-[20px] shrink-0">
                                  ({subClause.number})
                                </span>
                                <p className="flex-1 text-[14px] text-[var(--sidebar-primary-foreground)] leading-[20px]">
                                  {subClause.content}
                                </p>
                                <div className={`shrink-0 mt-[3px] ${scHasFeedback ? 'text-[#6820ff]' : 'text-[var(--muted-foreground)] opacity-0 group-hover/subclause:opacity-100'} transition-opacity`}>
                                  {scHasFeedback ? <IconFeedbackFilled /> : <IconFeedback />}
                                </div>
                              </div>

                              {/* Feedback display for sub-clause */}
                              {scFeedbacks.map(fb => (
                                <FeedbackDisplay key={fb.id} feedback={fb} />
                              ))}

                              {/* Feedback input for sub-clause */}
                              <AnimatePresence>
                                {scIsActive && (
                                  <FeedbackInput
                                    onSubmit={(text) => handleSubmitFeedback(scNodeId, buildNodeLabel(clause, subClause), text)}
                                    onCancel={() => setSelectedNodeId(null)}
                                  />
                                )}
                              </AnimatePresence>

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
                                    const itemFeedbacks = getFeedbacksForNode(itemNodeId);
                                    const itemHasFeedback = itemFeedbacks.length > 0;
                                    const itemIsActive = selectedNodeId === itemNodeId;

                                    return (
                                      <div key={item.id} className="mb-[2px]">
                                        {/* Item row */}
                                        <div
                                          onClick={() => handleNodeClick(itemNodeId)}
                                          className={`flex items-start gap-[8px] px-[6px] py-[4px] rounded-[var(--radius-button-small)] cursor-pointer transition-colors group/item ${
                                            itemIsActive
                                              ? 'bg-[var(--sidebar-primary)] ring-1 ring-[var(--primary)]'
                                              : 'hover:bg-[var(--sidebar-primary)]'
                                          }`}
                                        >
                                          <span className="text-[14px] text-[var(--sidebar-primary-foreground)] leading-[20px] shrink-0">
                                            ({toLowerRomanNumeral(item.number)})
                                          </span>
                                          <p className="flex-1 text-[14px] text-[var(--sidebar-primary-foreground)] leading-[20px]">
                                            {item.content}
                                          </p>
                                          <div className={`shrink-0 mt-[3px] ${itemHasFeedback ? 'text-[#6820ff]' : 'text-[var(--muted-foreground)] opacity-0 group-hover/item:opacity-100'} transition-opacity`}>
                                            {itemHasFeedback ? <IconFeedbackFilled /> : <IconFeedback />}
                                          </div>
                                        </div>

                                        {/* Feedback display for item */}
                                        {itemFeedbacks.map(fb => (
                                          <FeedbackDisplay key={fb.id} feedback={fb} />
                                        ))}

                                        {/* Feedback input for item */}
                                        <AnimatePresence>
                                          {itemIsActive && (
                                            <FeedbackInput
                                              onSubmit={(text) => handleSubmitFeedback(itemNodeId, buildNodeLabel(clause, subClause, item), text)}
                                              onCancel={() => setSelectedNodeId(null)}
                                            />
                                          )}
                                        </AnimatePresence>

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
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-[var(--muted-foreground)] text-[14px]">Select a chapter to review</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}