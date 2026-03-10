// ── Legislative Business (Sitting Tab): Mock Data ───────────────────────────
// Reuses the same bill from BillAmendmentView (preparation layer) and adds
// session-specific data: speaker queues, clause amendments with voting, etc.

import {
  FLAG_UPP, FLAG_TRP, FLAG_CVP,
  AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4,
  AVATAR_5, AVATAR_6, AVATAR_7,
  SESSION_AVATAR_A, SESSION_AVATAR_B, SESSION_AVATAR_C, SESSION_AVATAR_D,
} from '../../data/assets';

// ── Bill Data Types (shared with BillAmendmentView) ─────────────────────────

export interface SpecialBlock {
  id: string;
  type: 'proviso' | 'explanation' | 'illustration';
  content: string;
}

export interface BillItem {
  id: string;
  number: number;
  content: string;
  specialBlocks: SpecialBlock[];
}

export interface SubClause {
  id: string;
  number: number;
  content: string;
  items: BillItem[];
  specialBlocks: SpecialBlock[];
}

export interface Clause {
  id: string;
  number: number;
  title: string;
  subClauses: SubClause[];
  specialBlocks: SpecialBlock[];
}

export interface Chapter {
  id: string;
  name: string;
  number: number;
  clauses: Clause[];
}

export interface BillData {
  title: string;
  preamble: string;
  chapters: Chapter[];
}

// ── Speaker Queue Types ─────────────────────────────────────────────────────

export interface LBSpeaker {
  id: string;
  name: string;
  avatar: string;
  party: string;
  partyFlag: string;
  role: string;
  allocatedTime: number;  // total seconds allocated
  elapsedTime: number;    // seconds already spoken (for completed/active)
  status: 'completed' | 'active' | 'upcoming';
}

// ── Clause Amendment Types ──────────────────────────────────────────────────

export type LBAmendmentType = 'substitute' | 'omit' | 'insert';

export interface LBClauseAmendment {
  id: string;
  clauseId: string;
  clauseLabel: string;        // e.g. "Clause 4(2)"
  type: LBAmendmentType;
  proposedText?: string;
  reason?: string;
  originalText: string;
  submittedBy: {
    name: string;
    avatar: string;
    party: string;
    partyFlag: string;
  };
  votingResult?: {
    ayes: number;
    nays: number;
    passed: boolean;
  };
}

export type ClauseVoteStatus = 'passed' | 'rejected' | 'active' | 'upcoming';

export interface ClauseStatus {
  clauseId: string;
  status: ClauseVoteStatus;
}

// ── The Bill ────────────────────────────────────────────────────────────────
// Same bill used in BillAmendmentView (preparation layer).

export const SITTING_BILL: BillData = {
  title: "THE MEDICINAL AND AROMATIC PLANTS (PROMOTION AND DEVELOPMENT) BILL, 2026",
  preamble: "A Bill to provide for the promotion, development and regulation of medicinal and aromatic plants in India, to establish a National Board for the conservation and sustainable utilisation of such plants, and for matters connected therewith or incidental thereto.",
  chapters: [
    {
      id: "ch-1",
      name: "PRELIMINARY",
      number: 1,
      clauses: [
        {
          id: "cl-1", number: 1,
          title: "This Act may be called the Medicinal and Aromatic Plants (Promotion and Development) Act, 2026.",
          subClauses: [
            { id: "sc-1-1", number: 1, content: "It shall extend to the whole of India.", items: [], specialBlocks: [] },
            { id: "sc-1-2", number: 2, content: "It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.", items: [], specialBlocks: [] }
          ],
          specialBlocks: []
        },
        {
          id: "cl-2", number: 2,
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

// ── Roman Numeral Helper ────────────────────────────────────────────────────

export const toRomanNumeral = (num: number): string => {
  const pairs: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  for (const [value, numeral] of pairs) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

// ── Speaker Queue — General Consideration ───────────────────────────────────
// Sitting 1: General Consideration is in progress with speakers debating the bill.

export const SITTING_1_SPEAKERS: LBSpeaker[] = [
  // 2 completed
  {
    id: 'spk-1',
    name: 'Nathan S. Wright',
    avatar: AVATAR_2,
    party: 'TRP',
    partyFlag: FLAG_TRP,
    role: 'Private Member',
    allocatedTime: 300,
    elapsedTime: 300,
    status: 'completed',
  },
  {
    id: 'spk-2',
    name: 'Sheilah T. Sayasane',
    avatar: AVATAR_1,
    party: 'UPP',
    partyFlag: FLAG_UPP,
    role: 'Private Member',
    allocatedTime: 300,
    elapsedTime: 287,
    status: 'completed',
  },
  // 1 active
  {
    id: 'spk-3',
    name: 'Isabella M. Chen',
    avatar: SESSION_AVATAR_A,
    party: 'CVP',
    partyFlag: FLAG_CVP,
    role: 'Minister',
    allocatedTime: 300,
    elapsedTime: 138,
    status: 'active',
  },
  // 4 upcoming
  {
    id: 'spk-4',
    name: 'Roy X. Hinde',
    avatar: AVATAR_2,
    party: 'UPP',
    partyFlag: FLAG_UPP,
    role: 'Private Member',
    allocatedTime: 300,
    elapsedTime: 0,
    status: 'upcoming',
  },
  {
    id: 'spk-5',
    name: 'Marcus T. Reynolds',
    avatar: AVATAR_7,
    party: 'TRP',
    partyFlag: FLAG_TRP,
    role: 'Private Member',
    allocatedTime: 300,
    elapsedTime: 0,
    status: 'upcoming',
  },
  {
    id: 'spk-6',
    name: 'Emily R. Thompson',
    avatar: AVATAR_4,
    party: 'CVP',
    partyFlag: FLAG_CVP,
    role: 'Private Member',
    allocatedTime: 240,
    elapsedTime: 0,
    status: 'upcoming',
  },
  {
    id: 'spk-7',
    name: 'Aleta H. Starcher',
    avatar: AVATAR_3,
    party: 'UPP',
    partyFlag: FLAG_UPP,
    role: 'Minister',
    allocatedTime: 300,
    elapsedTime: 0,
    status: 'upcoming',
  },
];

// Sitting 2 — Clause-by-Clause is in progress (bill already had general discussion on day 1).
export const SITTING_2_SPEAKERS: LBSpeaker[] = [
  // All completed for sitting 2 (general consideration done on day 1)
  {
    id: 'spk-2-1',
    name: 'Addie V. Biela',
    avatar: SESSION_AVATAR_B,
    party: 'TRP',
    partyFlag: FLAG_TRP,
    role: 'Private Member',
    allocatedTime: 300,
    elapsedTime: 300,
    status: 'completed',
  },
  {
    id: 'spk-2-2',
    name: 'Kavya Reddy',
    avatar: SESSION_AVATAR_C,
    party: 'CVP',
    partyFlag: FLAG_CVP,
    role: 'Private Member',
    allocatedTime: 300,
    elapsedTime: 245,
    status: 'completed',
  },
  {
    id: 'spk-2-3',
    name: 'Smayan S.',
    avatar: SESSION_AVATAR_D,
    party: 'TRP',
    partyFlag: FLAG_TRP,
    role: 'President',
    allocatedTime: 300,
    elapsedTime: 300,
    status: 'completed',
  },
];

// ── Clause-by-Clause Amendments ─────────────────────────────────────────────
// Amendments submitted to specific clauses, with voting results for completed ones.

export const CLAUSE_AMENDMENTS: LBClauseAmendment[] = [
  // ── Chapter 1: PRELIMINARY ──────────────────────────────────────────────
  // Clause 1(2) — substitute: change commencement provision
  {
    id: 'lb-amd-1',
    clauseId: 'sc-1-2',
    clauseLabel: 'Clause 1(2)',
    type: 'substitute',
    proposedText: 'It shall come into force on the ninetieth day from the date of its publication in the Official Gazette.',
    originalText: 'It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.',
    reason: 'A fixed commencement date ensures timely implementation rather than leaving it to executive discretion.',
    submittedBy: { name: 'Roy X. Hinde', avatar: AVATAR_2, party: 'UPP', partyFlag: FLAG_UPP },
    votingResult: { ayes: 10, nays: 15, passed: false },
  },
  // Clause 2(3) — substitute: broaden cultivation zone definition
  {
    id: 'lb-amd-2',
    clauseId: 'sc-2-3',
    clauseLabel: 'Clause 2(3)',
    type: 'substitute',
    proposedText: '"Cultivation Zone" means any area designated by the State Government, in consultation with local Panchayati Raj institutions, for the systematic cultivation, conservation, and propagation of medicinal and aromatic plants;',
    originalText: '"Cultivation Zone" means any area designated by the State Government for the systematic cultivation of medicinal and aromatic plants;',
    reason: 'Including local governance bodies ensures community participation in zone designation.',
    submittedBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, party: 'UPP', partyFlag: FLAG_UPP },
    votingResult: { ayes: 16, nays: 9, passed: true },
  },
  // Clause 2(4) — insert: add a fourth item to the medicinal plant definition
  {
    id: 'lb-amd-3',
    clauseId: 'sc-2-4',
    clauseLabel: 'Clause 2(4)',
    type: 'insert',
    proposedText: '(iv) nutraceutical and dietary supplement preparations recognised by the Food Safety and Standards Authority of India.',
    originalText: '"Medicinal Plant" means any plant or part thereof… which possesses therapeutic properties and is used in—',
    reason: 'The nutraceutical sector is a major consumer of medicinal plants and should be within scope.',
    submittedBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, party: 'TRP', partyFlag: FLAG_TRP },
  },

  // ── Chapter 2: ESTABLISHMENT AND CONSTITUTION OF THE BOARD ──────────────
  // Clause 4(2) — substitute: change "six members" to "eight members"
  {
    id: 'lb-amd-4',
    clauseId: 'sc-4-2',
    clauseLabel: 'Clause 4(2)',
    type: 'substitute',
    proposedText: 'eight members to be nominated by the Central Government, of whom\u2014',
    originalText: 'six members to be nominated by the Central Government, of whom\u2014',
    reason: 'Increasing Board representation to include more diverse stakeholders.',
    submittedBy: { name: 'Roy X. Hinde', avatar: AVATAR_2, party: 'UPP', partyFlag: FLAG_UPP },
    votingResult: { ayes: 14, nays: 11, passed: true },
  },
  // Clause 4(2)(ii) — substitute: broaden NE representation
  {
    id: 'lb-amd-5',
    clauseId: 'it-4-2-2',
    clauseLabel: 'Clause 4(2)(ii)',
    type: 'substitute',
    proposedText: 'two shall be representatives of State Governments, with at least one from the North-Eastern States and one from a State with significant tribal population;',
    originalText: 'two shall be representatives of State Governments from North-Eastern States;',
    reason: 'Broadening geographic representation beyond the North-East to include tribal States like Jharkhand and Chhattisgarh.',
    submittedBy: { name: 'Emily R. Thompson', avatar: AVATAR_4, party: 'CVP', partyFlag: FLAG_CVP },
    votingResult: { ayes: 13, nays: 12, passed: true },
  },
  // Clause 4(3) proviso — substitute: include persons with disabilities
  {
    id: 'lb-amd-6',
    clauseId: 'sb-4-3-1',
    clauseLabel: 'Clause 4(3) Proviso',
    type: 'substitute',
    proposedText: 'the Central Government shall ensure adequate representation of women, members of Scheduled Tribes, and persons with disabilities in the composition of the Board.',
    originalText: 'the Central Government shall ensure adequate representation of women and members of Scheduled Tribes in the composition of the Board.',
    reason: 'Including persons with disabilities to ensure wider representation.',
    submittedBy: { name: 'Emily R. Thompson', avatar: AVATAR_4, party: 'CVP', partyFlag: FLAG_CVP },
    votingResult: { ayes: 18, nays: 7, passed: true },
  },
  // Clause 5 — substitute: extend term from 3 to 4 years
  {
    id: 'lb-amd-7',
    clauseId: 'cl-5',
    clauseLabel: 'Clause 5',
    type: 'substitute',
    proposedText: 'The Chairperson and members of the Board shall hold office for a term of four years from the date of their appointment and shall be eligible for re-appointment for one additional term.',
    originalText: 'The Chairperson and members of the Board shall hold office for a term of three years from the date of their appointment and shall be eligible for re-appointment for one additional term.',
    reason: 'A four-year term aligns with common statutory body practices and provides better continuity.',
    submittedBy: { name: 'Nathan S. Wright', avatar: AVATAR_2, party: 'TRP', partyFlag: FLAG_TRP },
  },

  // ── Chapter 3: FUNCTIONS AND POWERS OF THE BOARD ────────────────────────
  // Clause 6(2) — insert: add climate resilience mandate
  {
    id: 'lb-amd-8',
    clauseId: 'sc-6-2',
    clauseLabel: 'Clause 6(2)',
    type: 'insert',
    proposedText: 'develop and implement climate-resilient conservation strategies for medicinal and aromatic plant species identified as vulnerable to environmental degradation;',
    originalText: 'coordinate with State Governments, research institutions, and stakeholders for the conservation and sustainable harvesting of such plants;',
    reason: 'Climate change poses a direct threat to medicinal plant biodiversity; the Board must have an explicit mandate to address it.',
    submittedBy: { name: 'Isabella M. Chen', avatar: SESSION_AVATAR_A, party: 'CVP', partyFlag: FLAG_CVP },
  },
  // Clause 6(5) explanation — omit
  {
    id: 'lb-amd-9',
    clauseId: 'sb-6-5-1',
    clauseLabel: 'Clause 6(5) Explanation',
    type: 'omit',
    originalText: 'For the purposes of this clause, "bio-piracy" means the appropriation of traditional knowledge or genetic resources of medicinal plants without the prior informed consent of the communities or the country of origin.',
    reason: 'The definition of bio-piracy should be in the definitions section (Clause 2), not inline.',
    submittedBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, party: 'UPP', partyFlag: FLAG_UPP },
  },
  // Clause 7(3) — substitute: add enforcement power
  {
    id: 'lb-amd-10',
    clauseId: 'sc-7-3',
    clauseLabel: 'Clause 7(3)',
    type: 'substitute',
    proposedText: 'issue guidelines and standards for the quality control of medicinal and aromatic plant products, and enforce compliance through periodic inspection and certification mechanisms;',
    originalText: 'issue guidelines and standards for the quality control of medicinal and aromatic plant products.',
    reason: 'Without enforcement mechanisms, quality standards remain advisory and ineffective.',
    submittedBy: { name: 'Sheilah T. Sayasane', avatar: AVATAR_1, party: 'UPP', partyFlag: FLAG_UPP },
  },

  // ── Chapter 4: FINANCIAL PROVISIONS ─────────────────────────────────────
  // Clause 8 — insert: additional funding sources
  {
    id: 'lb-amd-11',
    clauseId: 'cl-8',
    clauseLabel: 'Clause 8',
    type: 'insert',
    proposedText: 'The Board shall also be empowered to receive grants, donations, and contributions from international organisations and non-governmental bodies, subject to prior approval of the Central Government.',
    originalText: 'The Central Government shall, after due appropriation made by Parliament by law in this behalf, pay to the Board by way of grants such sums of money as the Central Government may think fit for being utilised for the purposes of this Act.',
    reason: 'Enabling additional funding sources to supplement government grants.',
    submittedBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, party: 'TRP', partyFlag: FLAG_TRP },
  },
  // Clause 9(2) — substitute: add deadline
  {
    id: 'lb-amd-12',
    clauseId: 'sc-9-2',
    clauseLabel: 'Clause 9(2)',
    type: 'substitute',
    proposedText: 'The Board shall furnish to the Central Government, before the thirtieth day of September each year, its annual report containing a full account of its activities during the previous financial year, and such report shall be laid before each House of Parliament.',
    originalText: 'The Board shall furnish to the Central Government, before such date as may be prescribed, its annual report containing a full account of its activities during the previous financial year.',
    reason: 'Fixing a specific deadline for the annual report and requiring parliamentary tabling ensures transparency and accountability.',
    submittedBy: { name: 'Kavya Reddy', avatar: SESSION_AVATAR_C, party: 'CVP', partyFlag: FLAG_CVP },
  },

  // ── Chapter 5: MISCELLANEOUS ────────────────────────────────────────────
  // Clause 10(1)(iv) — omit: remove State-level cultivation zone provision
  {
    id: 'lb-amd-13',
    clauseId: 'it-10-1-4',
    clauseLabel: 'Clause 10(1)(iv)',
    type: 'omit',
    originalText: 'the designation and management of cultivation zones by State Governments.',
    reason: 'Cultivation zone management should remain under State-level legislation to respect federal principles; Central rules should not prescribe on this.',
    submittedBy: { name: 'Addie V. Biela', avatar: SESSION_AVATAR_B, party: 'TRP', partyFlag: FLAG_TRP },
  },
  // Clause 11 — insert: add whistleblower protection
  {
    id: 'lb-amd-14',
    clauseId: 'cl-11',
    clauseLabel: 'Clause 11',
    type: 'insert',
    proposedText: 'Any person who, in good faith, reports a violation of the provisions of this Act or the rules made thereunder shall be protected from any civil or criminal liability arising from such disclosure.',
    originalText: 'No suit, prosecution, or other legal proceeding shall lie against the Board, the Chairperson, or any member or officer of the Board for anything which is done or intended to be done in good faith under this Act or the rules made thereunder.',
    reason: 'Whistleblower protections are essential for ensuring accountability and deterring misuse of Board authority.',
    submittedBy: { name: 'Smayan S.', avatar: SESSION_AVATAR_D, party: 'TRP', partyFlag: FLAG_TRP },
  },
  // Clause 12 proviso — substitute: extend from 2 to 3 years
  {
    id: 'lb-amd-15',
    clauseId: 'sb-12-1',
    clauseLabel: 'Clause 12 Proviso',
    type: 'substitute',
    proposedText: 'no order shall be made under this section after the expiry of three years from the date of commencement of this Act.',
    originalText: 'no order shall be made under this section after the expiry of two years from the date of commencement of this Act.',
    reason: 'Extending the difficulty-removal window from two to three years for adequate implementation.',
    submittedBy: { name: 'Latricia W. Silletti', avatar: AVATAR_5, party: 'UPP', partyFlag: FLAG_UPP },
  },
];

// ── Clause Status for Sitting 2 (Clause-by-Clause phase) ────────────────────
// During Sitting 2, the house is in Clause-by-Clause consideration.
// Clauses 1-4 are done, Clause 5 is active, rest upcoming.

export const SITTING_2_CLAUSE_STATUSES: ClauseStatus[] = [
  { clauseId: 'cl-1', status: 'passed' },
  { clauseId: 'cl-2', status: 'passed' },
  { clauseId: 'cl-3', status: 'passed' },
  { clauseId: 'cl-4', status: 'passed' },
  { clauseId: 'cl-5', status: 'active' },
  { clauseId: 'cl-6', status: 'upcoming' },
  { clauseId: 'cl-7', status: 'upcoming' },
  { clauseId: 'cl-8', status: 'upcoming' },
  { clauseId: 'cl-9', status: 'upcoming' },
  { clauseId: 'cl-10', status: 'upcoming' },
  { clauseId: 'cl-11', status: 'upcoming' },
  { clauseId: 'cl-12', status: 'upcoming' },
];

// ── Helper: Count amendments per clause ─────────────────────────────────────

export function getAmendmentCountForClause(clauseId: string): number {
  return CLAUSE_AMENDMENTS.filter(a => {
    // Check if amendment is directly on this clause or on a sub-element of this clause
    // Simple: match clauseId prefix
    const clause = SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === clauseId);
    if (!clause) return false;
    // Collect all node IDs under this clause
    const nodeIds = new Set<string>([clause.id]);
    clause.subClauses.forEach(sc => {
      nodeIds.add(sc.id);
      sc.items.forEach(it => {
        nodeIds.add(it.id);
        it.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      });
      sc.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    });
    clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    return nodeIds.has(a.clauseId);
  }).length;
}

export function getAmendmentCountForChapter(chapterId: string): number {
  const chapter = SITTING_BILL.chapters.find(ch => ch.id === chapterId);
  if (!chapter) return 0;
  return chapter.clauses.reduce((sum, cl) => sum + getAmendmentCountForClause(cl.id), 0);
}