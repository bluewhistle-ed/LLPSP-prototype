import svgPaths from "../../imports/svg-0xunaepwpg";
import { useState, useRef, useEffect, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CloseButton } from "./CloseButton";
import { StatusChip } from "./StatusChip";

interface BillDraftingFormProps {
  onClose: () => void;
}

// Auto-resize textarea component
function AutoResizeTextarea({ 
  value, 
  onChange, 
  placeholder, 
  className,
  minRows = 1,
  onKeyDown,
  inputRef
}: { 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  minRows?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  inputRef?: (ref: HTMLTextAreaElement | null) => void;
}) {
  const internalRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const activeRef = internalRef.current;
    if (activeRef) {
      activeRef.style.height = 'auto';
      activeRef.style.height = activeRef.scrollHeight + 'px';
    }
  }, [value]);

  const handleRef = (ref: HTMLTextAreaElement | null) => {
    (internalRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = ref;
    if (inputRef) {
      inputRef(ref);
    }
  };

  return (
    <textarea
      ref={handleRef}
      value={value}
      onChange={onChange}
      onKeyDown={(e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'a') {
          e.preventDefault();
          e.stopPropagation();
          if (internalRef.current) {
            internalRef.current.select();
          }
          return;
        }
        if (onKeyDown) {
          onKeyDown(e);
        }
      }}
      placeholder={placeholder}
      className={`whitespace-normal break-words ${className}`}
      rows={minRows}
      style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
      readOnly={false}
      disabled={false}
    />
  );
}

// Helper functions for numbering
const toRomanNumeral = (num: number): string => {
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
  return result;
};

const toLowerRomanNumeral = (num: number): string => {
  return toRomanNumeral(num).toLowerCase();
};

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

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_add" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
          <rect fill="#D9D9D9" height="16" width="16" x="-0.000782013" />
        </mask>
        <g mask="url(#mask_add)">
          <path d={svgPaths.pa72bc00} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsChatBubble() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_chat" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_chat)">
          <path d={svgPaths.p29178780} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsVisibility() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_vis" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
          <rect fill="#D9D9D9" height="16" width="16" x="-0.000782013" />
        </mask>
        <g mask="url(#mask_vis)">
          <path d={svgPaths.p3acea900} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

function IconsDragIndicator() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_drag" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_drag)">
          <path d={svgPaths.pd02e680} fill="#6E7CA8" />
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip_arrow)">
          <path d={svgPaths.p20ea8b80} fill="#98A2B3" />
        </g>
        <defs>
          <clipPath id="clip_arrow">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconsDelete() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M4 5.33333V13.3333C4 13.6869 4.14048 14.0261 4.39052 14.2761C4.64057 14.5262 4.97971 14.6667 5.33333 14.6667H10.6667C11.0203 14.6667 11.3594 14.5262 11.6095 14.2761C11.8595 14.0261 12 13.6869 12 13.3333V5.33333M6.66667 5.33333V4C6.66667 3.64638 6.80714 3.30724 7.05719 3.05719C7.30724 2.80714 7.64638 2.66667 8 2.66667C8.35362 2.66667 8.69276 2.80714 8.94281 3.05719C9.19286 3.30724 9.33333 3.64638 9.33333 4V5.33333M2.66667 5.33333H13.3333" stroke="#C94A4A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

const CHAPTER_DND_TYPE = 'CHAPTER';

// Draggable Chapter Item Component
function DraggableChapterItem({
  chapter,
  index,
  isSelected,
  onSelect,
  onDelete,
  moveChapter,
}: {
  chapter: Chapter;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  moveChapter: (dragIndex: number, hoverIndex: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: CHAPTER_DND_TYPE,
    item: () => ({ id: chapter.id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: CHAPTER_DND_TYPE,
    hover(item: { id: string; index: number }, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      if (!clientOffset) return;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveChapter(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  dragPreview(drop(ref));

  return (
    <div
      ref={ref}
      onClick={onSelect}
      className={`bg-white flex gap-[4px] items-start px-[8px] py-[8px] rounded-[4px] cursor-pointer hover:bg-[#f1f2f8] transition-colors ${
        isSelected ? 'ring-1 ring-[#2766da]' : ''
      } ${isDragging ? 'opacity-40' : ''}`}
    >
      <div ref={(node) => { drag(node); }} className="shrink-0 mt-[1px] cursor-grab active:cursor-grabbing">
        <IconsDragIndicator />
      </div>
      <p className={`flex-1 leading-[16px] text-[14px] break-words ${chapter.name === '' ? 'text-[#98a3c5]' : 'text-[#3c4c7c]'}`}>
        {chapter.name
          ? chapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
          : 'Chapter Name'}
      </p>
      <StatusChip label={`Ch ${chapter.number}`} variant="inactive" />
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(); }}
        className="shrink-0"
      >
        <IconsDelete />
      </button>
    </div>
  );
}

export function BillDraftingForm({ onClose }: BillDraftingFormProps) {
  const [billTitle, setBillTitle] = useState("");
  const [billPreamble, setBillPreamble] = useState("");
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());
  const [focusSubClauseId, setFocusSubClauseId] = useState<string | null>(null);
  const [focusItemId, setFocusItemId] = useState<string | null>(null);
  const [focusClauseId, setFocusClauseId] = useState<string | null>(null);
  const [openActionCardId, setOpenActionCardId] = useState<string | null>(null);
  const [hoveredElementId, setHoveredElementId] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState(false);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const preambleRef = useRef<HTMLTextAreaElement>(null);
  const subClauseRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const itemRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const clauseRefs = useRef<Record<string, HTMLTextAreaElement | null>>({});
  const actionCardRef = useRef<HTMLDivElement>(null);

  // Close action card on click outside
  useEffect(() => {
    if (!openActionCardId) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (actionCardRef.current && !actionCardRef.current.contains(e.target as Node)) {
        setOpenActionCardId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openActionCardId]);

  const handleElementHover = (elementId: string) => {
    setHoveredElementId(elementId);
    if (openActionCardId && openActionCardId !== elementId) {
      setOpenActionCardId(null);
    }
  };

  // Effect to focus the newly created sub-clause
  useEffect(() => {
    if (focusSubClauseId && subClauseRefs.current[focusSubClauseId]) {
      setTimeout(() => {
        subClauseRefs.current[focusSubClauseId]?.focus();
        const element = subClauseRefs.current[focusSubClauseId];
        if (element) {
          element.selectionStart = element.value.length;
          element.selectionEnd = element.value.length;
        }
      }, 0);
      setFocusSubClauseId(null);
    }
  }, [focusSubClauseId]);

  useEffect(() => {
    if (focusItemId && itemRefs.current[focusItemId]) {
      setTimeout(() => {
        itemRefs.current[focusItemId]?.focus();
        const element = itemRefs.current[focusItemId];
        if (element) {
          element.selectionStart = element.value.length;
          element.selectionEnd = element.value.length;
        }
      }, 0);
      setFocusItemId(null);
    }
  }, [focusItemId]);

  useEffect(() => {
    if (focusClauseId && clauseRefs.current[focusClauseId]) {
      setTimeout(() => {
        clauseRefs.current[focusClauseId]?.focus();
        const element = clauseRefs.current[focusClauseId];
        if (element) {
          element.selectionStart = element.value.length;
          element.selectionEnd = element.value.length;
        }
      }, 0);
      setFocusClauseId(null);
    }
  }, [focusClauseId]);

  const handleBillTitleChange = (value: string) => {
    const filtered = value.replace(/[^a-zA-Z0-9,&\-\s]/g, '');
    setBillTitle(filtered.toUpperCase());
  };

  const handleBillPreambleChange = (value: string) => {
    setBillPreamble(value.toLowerCase());
  };

  const handlePublish = () => {
    // Validate that bill has required content
    if (!billTitle.trim()) {
      alert('Please add a bill title before publishing.');
      return;
    }
    if (chapters.length === 0) {
      alert('Please add at least one chapter before publishing.');
      return;
    }
    
    // TODO: Add API call to publish the bill
    setIsPublished(true);
    
    // Show success message and close after a brief delay
    setTimeout(() => {
      alert('Bill published successfully!');
      onClose();
    }, 300);
  };

  const handleAddChapter = () => {
    const newChapter: Chapter = {
      id: `ch-${Date.now()}`,
      name: "",
      number: chapters.length + 1,
      clauses: []
    };
    setChapters([...chapters, newChapter]);
    setSelectedChapter(newChapter.id);
  };

  const toggleChapter = (chapterId: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterId)) {
      newExpanded.delete(chapterId);
    } else {
      newExpanded.add(chapterId);
    }
    setExpandedChapters(newExpanded);
  };

  const handleDeleteChapter = (chapterId: string) => {
    const updatedChapters = chapters.filter(ch => ch.id !== chapterId);
    const renumberedChapters = updatedChapters.map((ch, index) => ({
      ...ch,
      number: index + 1
    }));
    setChapters(renumberedChapters);
    
    if (selectedChapter === chapterId) {
      setSelectedChapter(null);
    }
  };

  const handleAddClause = (chapterId: string) => {
    let newClauseId = '';
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const newClauseNumber = ch.clauses.length + 1;
        const newClause: Clause = {
          id: `cl${newClauseNumber}-${Date.now()}`,
          number: newClauseNumber,
          title: "",
          subClauses: [],
          specialBlocks: []
        };
        newClauseId = newClause.id;
        return { ...ch, clauses: [...ch.clauses, newClause] };
      }
      return ch;
    });
    setChapters(updatedChapters);
    setFocusClauseId(newClauseId);
  };

  const handleDeleteClause = (chapterId: string, clauseId: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const filteredClauses = ch.clauses.filter(cl => cl.id !== clauseId);
        const renumbered = filteredClauses.map((cl, idx) => ({ ...cl, number: idx + 1 }));
        return { ...ch, clauses: renumbered };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleUpdateClauseTitle = (chapterId: string, clauseId: string, title: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl =>
          cl.id === clauseId ? { ...cl, title } : cl
        );
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleAddSubClause = (chapterId: string, clauseId: string) => {
    let newSubClauseId = '';
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const newSubClause: SubClause = {
              id: `sc${cl.subClauses.length + 1}-${Date.now()}`,
              number: cl.subClauses.length + 1,
              content: "",
              items: [],
              specialBlocks: []
            };
            newSubClauseId = newSubClause.id;
            return { ...cl, subClauses: [...cl.subClauses, newSubClause] };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
    setFocusSubClauseId(newSubClauseId);
  };

  const handleDeleteSubClause = (chapterId: string, clauseId: string, subClauseId: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const filtered = cl.subClauses.filter(sc => sc.id !== subClauseId);
            const renumbered = filtered.map((sc, idx) => ({ ...sc, number: idx + 1 }));
            return { ...cl, subClauses: renumbered };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleUpdateSubClause = (chapterId: string, clauseId: string, subClauseId: string, content: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updated = cl.subClauses.map(sc =>
              sc.id === subClauseId ? { ...sc, content } : sc
            );
            return { ...cl, subClauses: updated };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleAddItem = (chapterId: string, clauseId: string, subClauseId: string) => {
    let newItemId = '';
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const newItem: Item = {
                  id: `it${sc.items.length + 1}-${Date.now()}`,
                  number: sc.items.length + 1,
                  content: "",
                  specialBlocks: []
                };
                newItemId = newItem.id;
                return { ...sc, items: [...sc.items, newItem] };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
    setFocusItemId(newItemId);
  };

  const handleDeleteItem = (chapterId: string, clauseId: string, subClauseId: string, itemId: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const filtered = sc.items.filter(it => it.id !== itemId);
                const renumbered = filtered.map((it, idx) => ({ ...it, number: idx + 1 }));
                return { ...sc, items: renumbered };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleUpdateItem = (chapterId: string, clauseId: string, subClauseId: string, itemId: string, content: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const updated = sc.items.map(it =>
                  it.id === itemId ? { ...it, content } : it
                );
                return { ...sc, items: updated };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  // Special block management for Clauses
  const handleAddClauseSpecialBlock = (chapterId: string, clauseId: string, type: 'proviso' | 'explanation' | 'illustration') => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const newBlock: SpecialBlock = {
              id: `sb-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
              type,
              content: ''
            };
            return { ...cl, specialBlocks: [...cl.specialBlocks, newBlock] };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleUpdateClauseSpecialBlock = (chapterId: string, clauseId: string, blockId: string, content: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updated = cl.specialBlocks.map(sb =>
              sb.id === blockId ? { ...sb, content } : sb
            );
            return { ...cl, specialBlocks: updated };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleDeleteClauseSpecialBlock = (chapterId: string, clauseId: string, blockId: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            return { ...cl, specialBlocks: cl.specialBlocks.filter(sb => sb.id !== blockId) };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  // Special block management for Sub-clauses
  const handleAddSubClauseSpecialBlock = (chapterId: string, clauseId: string, subClauseId: string, type: 'proviso' | 'explanation' | 'illustration') => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const newBlock: SpecialBlock = {
                  id: `sb-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
                  type,
                  content: ''
                };
                return { ...sc, specialBlocks: [...sc.specialBlocks, newBlock] };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleUpdateSubClauseSpecialBlock = (chapterId: string, clauseId: string, subClauseId: string, blockId: string, content: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const updated = sc.specialBlocks.map(sb =>
                  sb.id === blockId ? { ...sb, content } : sb
                );
                return { ...sc, specialBlocks: updated };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleDeleteSubClauseSpecialBlock = (chapterId: string, clauseId: string, subClauseId: string, blockId: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                return { ...sc, specialBlocks: sc.specialBlocks.filter(sb => sb.id !== blockId) };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  // Special block management for Items
  const handleAddItemSpecialBlock = (chapterId: string, clauseId: string, subClauseId: string, itemId: string, type: 'proviso' | 'explanation' | 'illustration') => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const updatedItems = sc.items.map(it => {
                  if (it.id === itemId) {
                    const newBlock: SpecialBlock = {
                      id: `sb-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
                      type,
                      content: ''
                    };
                    return { ...it, specialBlocks: [...it.specialBlocks, newBlock] };
                  }
                  return it;
                });
                return { ...sc, items: updatedItems };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleUpdateItemSpecialBlock = (chapterId: string, clauseId: string, subClauseId: string, itemId: string, blockId: string, content: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const updatedItems = sc.items.map(it => {
                  if (it.id === itemId) {
                    const updated = it.specialBlocks.map(sb =>
                      sb.id === blockId ? { ...sb, content } : sb
                    );
                    return { ...it, specialBlocks: updated };
                  }
                  return it;
                });
                return { ...sc, items: updatedItems };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  const handleDeleteItemSpecialBlock = (chapterId: string, clauseId: string, subClauseId: string, itemId: string, blockId: string) => {
    const updatedChapters = chapters.map(ch => {
      if (ch.id === chapterId) {
        const updatedClauses = ch.clauses.map(cl => {
          if (cl.id === clauseId) {
            const updatedSubClauses = cl.subClauses.map(sc => {
              if (sc.id === subClauseId) {
                const updatedItems = sc.items.map(it => {
                  if (it.id === itemId) {
                    return { ...it, specialBlocks: it.specialBlocks.filter(sb => sb.id !== blockId) };
                  }
                  return it;
                });
                return { ...sc, items: updatedItems };
              }
              return sc;
            });
            return { ...cl, subClauses: updatedSubClauses };
          }
          return cl;
        });
        return { ...ch, clauses: updatedClauses };
      }
      return ch;
    });
    setChapters(updatedChapters);
  };

  // Helper component for rendering special blocks
  const SpecialBlockRenderer = ({ block, onUpdate, onDelete, index, totalOfType }: {
    block: SpecialBlock;
    onUpdate: (content: string) => void;
    onDelete: () => void;
    index: number;
    totalOfType: number;
  }) => {
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
      <div className={`${getBgColor()} rounded-[4px] p-[12px] flex gap-[8px] group mb-[8px]`}>
        <span className="font-semibold text-[12px] text-[#3c4c7c] leading-[16px] shrink-0">
          {getPrefix()}
        </span>
        <AutoResizeTextarea
          value={block.content}
          onChange={(e) => onUpdate(e.target.value)}
          className="flex-1 text-[14px] text-[#3c4c7c] leading-[20px] border-none focus:outline-none bg-transparent resize-none overflow-hidden"
          placeholder={`Enter ${block.type} content...`}
          minRows={2}
        />
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
        >
          <IconsDelete />
        </button>
      </div>
    );
  };

  // Helper function to sort and render special blocks
  const renderSpecialBlocks = (
    blocks: SpecialBlock[],
    onUpdate: (blockId: string, content: string) => void,
    onDelete: (blockId: string) => void
  ) => {
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
        <SpecialBlockRenderer
          key={block.id}
          block={block}
          onUpdate={(content) => onUpdate(block.id, content)}
          onDelete={() => onDelete(block.id)}
          index={currentIndex}
          totalOfType={countByType[block.type] || 0}
        />
      );
    });
  };

  const selectedChapterData = chapters.find(ch => ch.id === selectedChapter);

  const moveChapter = useCallback((dragIndex: number, hoverIndex: number) => {
    setChapters((prevChapters) => {
      const updated = [...prevChapters];
      const [removed] = updated.splice(dragIndex, 1);
      updated.splice(hoverIndex, 0, removed);
      return updated.map((ch, idx) => ({ ...ch, number: idx + 1 }));
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="bg-white absolute content-stretch flex inset-0 overflow-hidden">
      <div className="content-stretch flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <div className="w-[40%] border-r border-[#e3e6f0] flex flex-col bg-[#f8f9fb] overflow-y-auto scrollbar-hide">
          <div className="bg-white flex flex-col gap-[12px] px-[16px] py-[16px] border-b border-[#e3e6f0]">
            <StatusChip label={isPublished ? 'Published' : 'Unpublished'} variant={isPublished ? 'approved' : 'inactive'} />
            
            <AutoResizeTextarea
              value={billTitle}
              onChange={(e) => handleBillTitleChange(e.target.value)}
              className="w-full font-semibold leading-[20px] text-[#2f3e6d] text-[16px] border-none focus:outline-none bg-transparent resize-none overflow-hidden min-h-[20px]"
              placeholder="Bill Title"
              minRows={1}
            />
            <AutoResizeTextarea
              value={billPreamble}
              onChange={(e) => handleBillPreambleChange(e.target.value)}
              className="w-full leading-[16px] text-[#3c4c7c] text-[12px] border-none focus:outline-none bg-transparent resize-none overflow-hidden min-h-[32px]"
              placeholder="Bill preamble or description"
              minRows={2}
            />
          </div>

          <div className="bg-white flex flex-col gap-[8px] px-[16px] py-[12px] border-b border-[#e3e6f0]">
            <div className="content-stretch flex gap-[8px] items-center justify-between">
              <button
                onClick={handleAddChapter}
                className="content-stretch flex gap-[4px] h-[28px] items-center px-[8px] rounded-[6px] hover:bg-[#f1f2f8] transition-colors"
              >
                <IconsAddCircle />
                <p className="leading-[14px] text-[#2f3e6d] text-[12px]">Add Chapter</p>
              </button>
              
              <button className="bg-white cursor-pointer relative rounded-[6px] shrink-0 hover:bg-[#f1f2f8] transition-colors">
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative">
                  <p className="leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">View Draft</p>
                </div>
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-[4px] p-[8px]">
            {chapters.map((chapter, index) => (
              <DraggableChapterItem
                key={chapter.id}
                chapter={chapter}
                index={index}
                isSelected={selectedChapter === chapter.id}
                onSelect={() => setSelectedChapter(chapter.id)}
                onDelete={() => handleDeleteChapter(chapter.id)}
                moveChapter={moveChapter}
              />
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {/* Fixed header with chapter chip + action buttons */}
          <div className="flex items-end justify-between gap-[8px] px-[16px] py-[16px] shrink-0">
            <div>
              {selectedChapterData && (
                <StatusChip label={`CHAPTER ${selectedChapterData.number}`} variant="inactive" />
              )}
            </div>
            <div className="flex items-center gap-[8px]">
              {!isPublished && (
                <button
                  onClick={handlePublish}
                  className="bg-[var(--primary)] cursor-pointer h-[32px] relative rounded-[var(--radius-button-small)] shrink-0 hover:opacity-90 transition-opacity"
                >
                  <div className="flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[12px] text-left text-[var(--primary-foreground)] whitespace-nowrap">
                      <p className="leading-[14px]">Publish Bill</p>
                    </div>
                  </div>
                </button>
              )}
              <CloseButton onClick={onClose} />
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto scrollbar-hide px-[16px] pb-[16px]">
          {selectedChapterData ? (
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <AutoResizeTextarea
                  value={selectedChapterData.name}
                  onChange={(e) => {
                    const updatedChapters = chapters.map(ch =>
                      ch.id === selectedChapterData.id ? { ...ch, name: e.target.value.toUpperCase() } : ch
                    );
                    setChapters(updatedChapters);
                  }}
                  className="font-semibold text-[length:var(--text-h4)] text-[var(--foreground)] leading-[20px] border-none focus:outline-none bg-transparent resize-none overflow-hidden cursor-text"
                  placeholder="CHAPTER NAME"
                  minRows={1}
                />
              </div>

              {selectedChapterData.clauses.length === 0 ? (
                <div className="bg-[#f8f9fb] border border-[#e3e6f0] rounded-[8px] p-[24px] flex flex-col items-center gap-[12px]">
                  <p className="text-[#6e7ca8] text-[14px] leading-[20px]">No clauses added yet</p>
                  <button 
                    onClick={() => handleAddClause(selectedChapterData.id)}
                    className="bg-[#2766da] text-white px-[12px] py-[6px] rounded-[6px] text-[12px] leading-[14px] hover:bg-[#1e54b7] transition-colors"
                  >
                    Add Clause
                  </button>
                </div>
              ) : (
                <div onMouseLeave={() => { setHoveredElementId(null); setOpenActionCardId(null); }}>
                  {selectedChapterData.clauses.map((clause) => (
                    <div key={clause.id} className="group/clause mb-[16px]">
                      {/* Clause */}
                      <div className="flex items-start gap-[8px] mb-[0px] px-[8px] py-[6px] rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors" onMouseEnter={() => handleElementHover(clause.id)}>
                        <div className="flex-1">
                          <div className="flex items-baseline gap-[8px]">
                            <span className="font-semibold text-[14px] text-[#2f3e6d] leading-[20px] shrink-0">
                              {clause.number}.
                            </span>
                            <AutoResizeTextarea
                              value={clause.title}
                              onChange={(e) => handleUpdateClauseTitle(selectedChapterData.id, clause.id, e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  handleAddClause(selectedChapterData.id);
                                } else if (e.key === 'Backspace' && clause.title === '') {
                                  e.preventDefault();
                                  const currentIndex = selectedChapterData.clauses.findIndex(cl => cl.id === clause.id);
                                  if (currentIndex > 0) {
                                    const previousClause = selectedChapterData.clauses[currentIndex - 1];
                                    const lastSubClause = previousClause.subClauses[previousClause.subClauses.length - 1];
                                    if (lastSubClause && lastSubClause.items.length > 0) {
                                      const lastItem = lastSubClause.items[lastSubClause.items.length - 1];
                                      setFocusItemId(lastItem.id);
                                    } else if (lastSubClause) {
                                      setFocusSubClauseId(lastSubClause.id);
                                    } else {
                                      setFocusClauseId(previousClause.id);
                                    }
                                  }
                                  handleDeleteClause(selectedChapterData.id, clause.id);
                                }
                              }}
                              className="flex-1 text-[14px] text-[#3c4c7c] leading-[20px] border-none focus:outline-none bg-transparent resize-none overflow-hidden"
                              placeholder="Clause content"
                              minRows={1}
                              inputRef={(ref) => { clauseRefs.current[clause.id] = ref; }}
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteClause(selectedChapterData.id, clause.id)}
                          className="opacity-0 group-hover/clause:opacity-100 transition-opacity"
                        >
                          <IconsDelete />
                        </button>
                      </div>

                      {/* Floating action card for Clause */}
                      <div className="ml-[24px] mt-[4px] relative">
                        <button
                          onClick={() => setOpenActionCardId(openActionCardId === clause.id ? null : clause.id)}
                          className={`${hoveredElementId === clause.id || openActionCardId === clause.id ? 'inline-flex' : 'hidden'} items-center px-[8px] py-[4px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm hover:bg-[var(--sidebar-primary)] transition-colors`}
                        >
                          Actions
                        </button>
                        {openActionCardId === clause.id && (
                          <div ref={actionCardRef} className="absolute left-0 top-[calc(100%+4px)] z-20 flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm py-[4px] w-fit">
                            <button
                              onClick={() => { handleAddSubClause(selectedChapterData.id, clause.id); setOpenActionCardId(null); }}
                              className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                            >
                              + Add Sub-clause
                            </button>
                            <button
                              onClick={() => { handleAddClauseSpecialBlock(selectedChapterData.id, clause.id, 'proviso'); setOpenActionCardId(null); }}
                              className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                            >
                              + Add Proviso
                            </button>
                            <button
                              onClick={() => { handleAddClauseSpecialBlock(selectedChapterData.id, clause.id, 'explanation'); setOpenActionCardId(null); }}
                              className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                            >
                              + Add Explanation
                            </button>
                            <button
                              onClick={() => { handleAddClauseSpecialBlock(selectedChapterData.id, clause.id, 'illustration'); setOpenActionCardId(null); }}
                              className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                            >
                              + Add Illustration
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Special Blocks for Clause */}
                      {renderSpecialBlocks(
                        clause.specialBlocks,
                        (blockId, content) => handleUpdateClauseSpecialBlock(selectedChapterData.id, clause.id, blockId, content),
                        (blockId) => handleDeleteClauseSpecialBlock(selectedChapterData.id, clause.id, blockId)
                      )}

                      {/* Sub-clauses */}
                      {(clause.subClauses.length > 0) && (
                        <div className="ml-[24px] mt-[8px]">
                          {clause.subClauses.map((subClause) => (
                            <div key={subClause.id} className="group/subclause mb-[8px]">
                              {/* Sub-clause */}
                              <div className="flex items-start gap-[8px] mb-[0px] px-[8px] py-[4px] rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors" onMouseEnter={() => handleElementHover(subClause.id)}>
                                <span className="text-[14px] text-[#3c4c7c] leading-[20px] shrink-0">
                                  ({subClause.number})
                                </span>
                                <AutoResizeTextarea
                                  value={subClause.content}
                                  onChange={(e) => handleUpdateSubClause(selectedChapterData.id, clause.id, subClause.id, e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                      e.preventDefault();
                                      handleAddSubClause(selectedChapterData.id, clause.id);
                                    } else if (e.key === 'Backspace' && subClause.content === '') {
                                      e.preventDefault();
                                      const currentIndex = clause.subClauses.findIndex(sc => sc.id === subClause.id);
                                      if (currentIndex > 0) {
                                        const previousSubClause = clause.subClauses[currentIndex - 1];
                                        setFocusSubClauseId(previousSubClause.id);
                                      } else {
                                        setFocusClauseId(clause.id);
                                      }
                                      handleDeleteSubClause(selectedChapterData.id, clause.id, subClause.id);
                                    }
                                  }}
                                  className="flex-1 text-[14px] text-[#3c4c7c] leading-[20px] border-none focus:outline-none bg-transparent resize-none overflow-hidden"
                                  placeholder="Sub-clause content"
                                  minRows={1}
                                  inputRef={(ref) => { subClauseRefs.current[subClause.id] = ref; }}
                                />
                                <button
                                  onClick={() => handleDeleteSubClause(selectedChapterData.id, clause.id, subClause.id)}
                                  className="opacity-0 group-hover/subclause:opacity-100 transition-opacity shrink-0"
                                >
                                  <IconsDelete />
                                </button>
                              </div>

                              {/* Floating action card for Sub-clause */}
                              <div className="ml-[32px] mt-[4px] relative">
                                <button
                                  onClick={() => setOpenActionCardId(openActionCardId === subClause.id ? null : subClause.id)}
                                  className={`${hoveredElementId === subClause.id || openActionCardId === subClause.id ? 'inline-flex' : 'hidden'} items-center px-[8px] py-[4px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm hover:bg-[var(--sidebar-primary)] transition-colors`}
                                >
                                  Actions
                                </button>
                                {openActionCardId === subClause.id && (
                                  <div ref={actionCardRef} className="absolute left-0 top-[calc(100%+4px)] z-20 flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm py-[4px] w-fit">
                                    <button
                                      onClick={() => { handleAddItem(selectedChapterData.id, clause.id, subClause.id); setOpenActionCardId(null); }}
                                      className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                                    >
                                      + Add Item
                                    </button>
                                    <button
                                      onClick={() => { handleAddSubClauseSpecialBlock(selectedChapterData.id, clause.id, subClause.id, 'proviso'); setOpenActionCardId(null); }}
                                      className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                                    >
                                      + Add Proviso
                                    </button>
                                  </div>
                                )}
                              </div>

                              {/* Special Blocks for Sub-clause */}
                              {renderSpecialBlocks(
                                subClause.specialBlocks,
                                (blockId, content) => handleUpdateSubClauseSpecialBlock(selectedChapterData.id, clause.id, subClause.id, blockId, content),
                                (blockId) => handleDeleteSubClauseSpecialBlock(selectedChapterData.id, clause.id, subClause.id, blockId)
                              )}

                              {/* Items */}
                              {subClause.items.length > 0 && (
                                <div className="ml-[24px] mt-[4px]">
                                  {subClause.items.map((item) => (
                                    <div key={item.id} className="group/item mb-[4px]">
                                      <div className="flex items-start gap-[8px] mb-[0px] px-[6px] py-[4px] rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors" onMouseEnter={() => handleElementHover(item.id)}>
                                        <span className="text-[14px] text-[#3c4c7c] leading-[20px] shrink-0">
                                          ({toLowerRomanNumeral(item.number)})
                                        </span>
                                        <AutoResizeTextarea
                                          value={item.content}
                                          onChange={(e) => handleUpdateItem(selectedChapterData.id, clause.id, subClause.id, item.id, e.target.value)}
                                          onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                              e.preventDefault();
                                              handleAddItem(selectedChapterData.id, clause.id, subClause.id);
                                            } else if (e.key === 'Backspace' && item.content === '') {
                                              e.preventDefault();
                                              const currentIndex = subClause.items.findIndex(it => it.id === item.id);
                                              if (currentIndex > 0) {
                                                const previousItem = subClause.items[currentIndex - 1];
                                                setFocusItemId(previousItem.id);
                                              } else {
                                                setFocusSubClauseId(subClause.id);
                                              }
                                              handleDeleteItem(selectedChapterData.id, clause.id, subClause.id, item.id);
                                            }
                                          }}
                                          className="flex-1 text-[14px] text-[#3c4c7c] leading-[20px] border-none focus:outline-none bg-transparent resize-none overflow-hidden"
                                          placeholder="Item content"
                                          minRows={1}
                                          inputRef={(ref) => { itemRefs.current[item.id] = ref; }}
                                        />
                                        <button
                                          onClick={() => handleDeleteItem(selectedChapterData.id, clause.id, subClause.id, item.id)}
                                          className="opacity-0 group-hover/item:opacity-100 transition-opacity shrink-0"
                                        >
                                          <IconsDelete />
                                        </button>
                                      </div>

                                      {/* Floating action card for Item */}
                                      <div className="ml-[32px] mt-[4px] relative">
                                        <button
                                          onClick={() => setOpenActionCardId(openActionCardId === item.id ? null : item.id)}
                                          className={`${hoveredElementId === item.id || openActionCardId === item.id ? 'inline-flex' : 'hidden'} items-center px-[8px] py-[4px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm hover:bg-[var(--sidebar-primary)] transition-colors`}
                                        >
                                          Actions
                                        </button>
                                        {openActionCardId === item.id && (
                                          <div ref={actionCardRef} className="absolute left-0 top-[calc(100%+4px)] z-20 flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm py-[4px] w-fit">
                                            <button
                                              onClick={() => { handleAddItemSpecialBlock(selectedChapterData.id, clause.id, subClause.id, item.id, 'proviso'); setOpenActionCardId(null); }}
                                              className="w-full text-left px-[12px] py-[6px] text-[12px] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap"
                                            >
                                              + Add Proviso
                                            </button>
                                          </div>
                                        )}
                                      </div>

                                      {/* Special Blocks for Item */}
                                      {renderSpecialBlocks(
                                        item.specialBlocks,
                                        (blockId, content) => handleUpdateItemSpecialBlock(selectedChapterData.id, clause.id, subClause.id, item.id, blockId, content),
                                        (blockId) => handleDeleteItemSpecialBlock(selectedChapterData.id, clause.id, subClause.id, item.id, blockId)
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Add Clause Button */}
                  <button
                    onClick={() => handleAddClause(selectedChapterData.id)}
                    className="bg-[#2766da] text-white px-[12px] py-[6px] rounded-[6px] text-[12px] leading-[14px] hover:bg-[#1e54b7] transition-colors self-start"
                  >
                    Add Clause
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-[#6e7ca8] text-[14px]">Select a chapter to view details</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
    </DndProvider>
  );
}