// ── Sitting of the House: Mock Data ─────────────────────────────────────────
// 10–12 questions per sitting, matching the shape used in QuestionsPage.

import {
  FLAG_UPP, FLAG_TRP, FLAG_CVP,
  AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4,
  AVATAR_5, AVATAR_6, AVATAR_7,
  SESSION_AVATAR_A, SESSION_AVATAR_B, SESSION_AVATAR_C, SESSION_AVATAR_D,
} from '../assets';

// ── Types ────────────────────────────────────────────────────────────────────

export interface SittingQuestionPerson {
  name: string;
  avatar: string;
  role: string;        // 'Private Member' | 'Minister' | 'MoS' | 'President' etc.
  party: string;
  partyFlag: string;
}

export interface SittingQuestion {
  id: string;
  ministry: string;
  theme: string;
  questions: string[];
  askedBy: SittingQuestionPerson;
  answeredBy: SittingQuestionPerson;
  status: 'active' | 'pending' | 'disposed';
  answer?: string;
}

// ── Sitting One (Day 1) — 12 questions ──────────────────────────────────────

export const SITTING_1_QUESTIONS: SittingQuestion[] = [
  // ── 3 disposed ─────────────────────────────────────────────────────────────
  {
    id: 's1-q1',
    ministry: 'To the Ministry of Finance',
    theme: 'Union Budget Allocations',
    questions: [
      'i. Whether the Government has assessed the impact of the revised allocation for rural infrastructure in the current Union Budget on farm-to-market connectivity;',
      'ii. If so, the State-wise breakdown of funds released and utilised under the Pradhan Mantri Gram Sadak Yojana during the last three financial years; and',
      'iii. What corrective steps are proposed where utilisation remains below 60 per cent?',
    ],
    askedBy: { name: 'Sheilah T. Sayasane', avatar: AVATAR_1, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, role: 'Minister', party: 'UPP', partyFlag: FLAG_UPP },
    status: 'disposed',
    answer: 'The revised allocation for rural infrastructure under the current Union Budget stands at ₹19,000 crore, an increase of 12% over the previous year. Of this, ₹14,200 crore has been released to States, with an overall utilisation rate of 74%. States with utilisation below 60% — namely Jharkhand, Bihar, and Assam — have been issued advisories and are required to submit corrective action plans by Q2.',
  },
  {
    id: 's1-q2',
    ministry: 'To the Ministry of External Affairs',
    theme: 'Bilateral Trade Agreements',
    questions: [
      'i. Whether the Government is aware that the proposed India-EU Free Trade Agreement negotiations have stalled on the question of data-localisation requirements;',
      'ii. If so, what specific concessions or alternative frameworks have been proposed by both sides; and',
      'iii. The expected timeline for the conclusion of the agreement?',
    ],
    askedBy: { name: 'Isabella M. Chen', avatar: SESSION_AVATAR_A, role: 'Private Member', party: 'CVP', partyFlag: FLAG_CVP },
    answeredBy: { name: 'David R. Patterson', avatar: AVATAR_6, role: 'Minister', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'disposed',
    answer: 'Eight rounds of negotiations have been completed with the EU. Both sides have agreed to a phased data-localisation framework that balances privacy concerns with market access. Key areas of convergence include goods, services, and intellectual property. We expect the agreement to be concluded by Q3 of this year.',
  },
  {
    id: 's1-q3',
    ministry: 'To the Ministry of Home Affairs',
    theme: 'Cybercrime Prevention',
    questions: [
      'i. Whether the Ministry has compiled disaggregated data on the categories of cyber fraud targeting senior citizens over the past two years;',
      'ii. If so, the total financial losses reported and the recovery rate achieved by law-enforcement agencies; and',
      'iii. What dedicated institutional mechanisms are being established at the district level for faster redressal?',
    ],
    askedBy: { name: 'Roy X. Hinde', avatar: AVATAR_2, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Latricia W. Silletti', avatar: AVATAR_5, role: 'Minister', party: 'UPP', partyFlag: FLAG_UPP },
    status: 'disposed',
    answer: 'The Ministry launched a dedicated Cyber Crime Prevention Unit with a 24/7 helpline (1930). Over 1.2 lakh complaints from senior citizens were registered in 2025, with a recovery rate of 38%. Over 150 district-level cyber cells have been established, and targeted awareness campaigns have reached 2 crore citizens through the "Cyber Jagrookta" programme.',
  },

  // ── 1 active ───────────────────────────────────────────────────────────────
  {
    id: 's1-q4',
    ministry: 'To the Ministry of Education',
    theme: 'National Education Policy Implementation',
    questions: [
      'i. Whether the Government has conducted any assessment of learning outcomes under the National Education Policy 2020 since its implementation;',
      'ii. If so, what measurable improvements have been recorded in foundational literacy and numeracy at the primary-school level across States; and',
      'iii. What steps are being taken to address the digital divide in rural schools that hinders effective implementation of the policy\'s technology-driven pedagogy goals?',
    ],
    askedBy: { name: 'Nathan S. Wright', avatar: AVATAR_2, role: 'Private Member', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'Alice Thompson', avatar: AVATAR_4, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'active',
    answer: 'A comprehensive assessment of learning outcomes under NEP 2020 was conducted by NCERT covering 36 States and UTs. Foundational literacy rates improved by 18% in primary schools, with the greatest gains in States that adopted the NIPUN Bharat framework early. To address the digital divide, 14,500 PM eVIDYA centres have been established in rural blocks, and 3.2 lakh teachers have completed digital pedagogy training.',
  },

  // ── 8 pending ──────────────────────────────────────────────────────────────
  {
    id: 's1-q5',
    ministry: 'To the Ministry of Health & Family Welfare',
    theme: 'Rural Healthcare Access',
    questions: [
      'i. Whether the Government is aware of the increasing shortage of specialist doctors in district hospitals across rural India;',
      'ii. If so, what data has been collected on the current vacancy rates for specialist positions in government hospitals at the district and sub-district level; and',
      'iii. What concrete measures are proposed to incentivise specialist doctors to serve in underserved and remote areas?',
    ],
    askedBy: { name: 'Emily R. Thompson', avatar: AVATAR_4, role: 'Private Member', party: 'CVP', partyFlag: FLAG_CVP },
    answeredBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, role: 'Minister', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'As of March 2026, there are 11,438 vacant specialist positions across district hospitals. The Government has introduced a Rural Service Incentive Package offering 40% salary enhancement, accelerated promotions, and housing for specialists serving in underserved areas. A new telemedicine bridge programme connects 850 district hospitals with AIIMS-tier institutions for specialist consultations.',
  },
  {
    id: 's1-q6',
    ministry: 'To the Ministry of Finance',
    theme: 'GST Implementation & MSME Impact',
    questions: [
      'i. What is the current compliance rate for GST return filings among micro, small, and medium enterprises (MSMEs);',
      'ii. Whether the Government has evaluated the compliance burden placed on MSMEs with turnover below ₹5 crore; and',
      'iii. Are there plans to further simplify the return-filing process or introduce a single consolidated quarterly return?',
    ],
    askedBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Nathan S. Wright', avatar: AVATAR_2, role: 'MoS', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'The overall GST compliance rate for MSMEs stands at 82%. For enterprises with turnover below ₹5 crore, a simplified quarterly return (GSTR-3BQ) was introduced with a compliance rate of 76%. The Government is developing a single consolidated return framework expected to launch in Q4 2026.',
  },
  {
    id: 's1-q7',
    ministry: 'To the Ministry of Defence',
    theme: 'Indigenous Equipment Production',
    questions: [
      'What progress has been made in indigenising defence-equipment manufacturing under the "Aatmanirbhar Bharat" initiative?',
      'What percentage of the total defence-procurement budget is now allocated to indigenous vendors?',
    ],
    askedBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, role: 'Private Member', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'Isabella M. Chen', avatar: SESSION_AVATAR_A, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'pending',
    answer: 'Under the Aatmanirbhar Bharat initiative, 68% of the defence procurement budget is now allocated to indigenous vendors, up from 54% three years ago. 124 defence items have been placed on the positive indigenisation list, and domestic production has crossed ₹1.27 lakh crore in FY 2025-26.',
  },
  {
    id: 's1-q8',
    ministry: 'To the Ministry of Commerce & Industry',
    theme: 'Production Linked Incentive (PLI) Scheme',
    questions: [
      'i. Whether the Government has evaluated the impact of the Production Linked Incentive (PLI) scheme on employment generation in the manufacturing sector since its inception;',
      'ii. If so, what is the sector-wise breakdown of jobs created under PLI across all 14 notified sectors; and',
      'iii. What corrective measures are being considered for sectors where PLI uptake and employment targets remain significantly below projections?',
    ],
    askedBy: { name: 'Addie V. Biela', avatar: SESSION_AVATAR_B, role: 'Private Member', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'David R. Patterson', avatar: AVATAR_6, role: 'MoS', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'The PLI scheme has generated approximately 8.6 lakh direct jobs across 14 sectors. Electronics manufacturing leads with 3.2 lakh jobs, followed by pharmaceuticals at 1.4 lakh. Sectors underperforming on employment targets — notably textiles and specialty steel — are being reviewed for enhanced incentive structures.',
  },
  {
    id: 's1-q9',
    ministry: 'To the Ministry of Health & Family Welfare',
    theme: 'Vaccination Programmes',
    questions: [
      'i. Whether the Government has assessed the coverage gaps in the Universal Immunisation Programme (UIP) across tribal and hard-to-reach areas;',
      'ii. What is the current full-immunisation rate for children under five in the bottom-performing 100 districts; and',
      'iii. What targeted outreach strategies are being deployed to improve last-mile vaccine delivery?',
    ],
    askedBy: { name: 'Latricia W. Silletti', avatar: AVATAR_5, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, role: 'Minister', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'The Universal Immunisation Programme has achieved 89% coverage nationally, but tribal areas average only 71%. The bottom 100 districts have a full-immunisation rate of 63%. The Government has deployed 2,400 mobile vaccination teams and expanded the cold-chain network by 35% in these regions.',
  },
  {
    id: 's1-q10',
    ministry: 'To the Ministry of Education',
    theme: 'Mid-day Meal Scheme',
    questions: [
      'Whether the Government has data on the nutritional impact of the PM POSHAN (Mid-day Meal) scheme on reduction of anaemia and stunting among school-going children?',
      'If so, what improvements have been recorded in the last three years?',
    ],
    askedBy: { name: 'Kavya Reddy', avatar: SESSION_AVATAR_C, role: 'Private Member', party: 'CVP', partyFlag: FLAG_CVP },
    answeredBy: { name: 'Alice Thompson', avatar: AVATAR_4, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'pending',
    answer: 'PM POSHAN has contributed to a 4.2 percentage point reduction in anaemia among school-going children aged 6-14 over three years. Stunting prevalence in participating schools has decreased from 31% to 26.8%. The programme now covers 11.8 crore children across 11.2 lakh schools.',
  },
  {
    id: 's1-q11',
    ministry: 'To the Ministry of External Affairs',
    theme: 'Diaspora Welfare Programmes',
    questions: [
      'i. How many distress calls have been received by Indian missions abroad from Indian nationals in the Gulf countries during the past 12 months;',
      'ii. What institutional support mechanisms exist for repatriation and legal aid; and',
      'iii. Whether the Government proposes to expand the Pravasi Bharatiya Sahayata Kendra network?',
    ],
    askedBy: { name: 'Smayan S.', avatar: SESSION_AVATAR_D, role: 'President', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'David R. Patterson', avatar: AVATAR_6, role: 'Minister', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'Indian missions abroad received 42,600 distress calls from Gulf countries in the past 12 months. Repatriation assistance was provided to 8,400 nationals and legal aid to 3,200. The Government proposes to expand the PBSK network to 12 additional countries by end of 2026.',
  },
  {
    id: 's1-q12',
    ministry: 'To the Ministry of Defence',
    theme: 'Veteran Welfare Schemes',
    questions: [
      'i. Whether the One Rank One Pension (OROP) scheme has been fully implemented across all ranks and categories of ex-servicemen;',
      'ii. If not, what anomalies persist and the estimated number of veterans still awaiting revised pensions; and',
      'iii. What timeline has been set for full resolution of these outstanding claims?',
    ],
    askedBy: { name: 'Roy X. Hinde', avatar: AVATAR_2, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Isabella M. Chen', avatar: SESSION_AVATAR_A, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'pending',
    answer: 'OROP has been implemented for 98.7% of eligible ex-servicemen. Approximately 18,400 veterans across 12 anomaly categories are still awaiting revised pensions. A dedicated OROP Anomaly Redressal Committee has been constituted with a mandate to resolve all outstanding claims by September 2026.',
  },
];

// ── Sitting Two (Day 2) — 10 questions ──────────────────────────────────────

export const SITTING_2_QUESTIONS: SittingQuestion[] = [
  // ── 2 disposed ─────────────────────────────────────────────────────────────
  {
    id: 's2-q1',
    ministry: 'To the Ministry of Finance',
    theme: 'Banking Sector Reforms',
    questions: [
      'i. Whether the Government has evaluated the impact of the merger of public-sector banks on credit flow to agriculture and priority sectors;',
      'ii. If so, the comparative data on agricultural credit disbursement before and after the mergers; and',
      'iii. What safeguards have been instituted to ensure that merged entities do not reduce branch presence in rural and semi-urban areas?',
    ],
    askedBy: { name: 'Sheilah T. Sayasane', avatar: AVATAR_1, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, role: 'Minister', party: 'UPP', partyFlag: FLAG_UPP },
    status: 'disposed',
    answer: 'The merger of public-sector banks has resulted in operational efficiencies while maintaining branch presence in rural areas. Agricultural credit disbursement has grown from ₹13.4 lakh crore in 2022-23 to ₹16.1 lakh crore in 2024-25. No net branch closures have occurred in Tier 4-6 centres; in fact, 1,200 new banking outlets were opened in unbanked panchayats.',
  },
  {
    id: 's2-q2',
    ministry: 'To the Ministry of Home Affairs',
    theme: 'Border Security Operations',
    questions: [
      'i. Whether the Government has completed the proposed integration of surveillance technology along the India-Bangladesh border;',
      'ii. The total length of border now covered by the Comprehensive Integrated Border Management System (CIBMS); and',
      'iii. What is the revised timeline for full coverage of all vulnerable stretches?',
    ],
    askedBy: { name: 'Emily R. Thompson', avatar: AVATAR_4, role: 'Private Member', party: 'CVP', partyFlag: FLAG_CVP },
    answeredBy: { name: 'Latricia W. Silletti', avatar: AVATAR_5, role: 'Minister', party: 'UPP', partyFlag: FLAG_UPP },
    status: 'disposed',
    answer: 'CIBMS deployment currently covers 1,046 km out of the 4,096 km India-Bangladesh border. Phase II covering an additional 800 km is under implementation with completion expected by December 2026. Vulnerable riverine stretches are being equipped with floating sensor platforms as a supplementary measure.',
  },

  // ── 1 active ───────────────────────────────────────────────────────────────
  {
    id: 's2-q3',
    ministry: 'To the Ministry of Defence',
    theme: 'Defence Modernisation',
    questions: [
      'i. Whether the Government has finalised the long-pending revision of the Defence Procurement Procedure to accelerate the acquisition of critical platforms;',
      'ii. If so, the key changes introduced in the revised procedure; and',
      'iii. How many procurement proposals valued above ₹500 crore are currently pending at various stages of approval?',
    ],
    askedBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, role: 'Private Member', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'Isabella M. Chen', avatar: SESSION_AVATAR_A, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'active',
    answer: 'The revised Defence Procurement Procedure (DPP 2025) was notified in January 2026. Key changes include a 30% reduction in approval timelines, a new fast-track category for critical operational requirements, and mandatory indigenous content thresholds of 60% for all Buy (Indian) acquisitions. Currently, 23 procurement proposals valued above ₹500 crore are pending at various stages.',
  },

  // ── 7 pending ──────────────────────────────────────────────────────────────
  {
    id: 's2-q4',
    ministry: 'To the Ministry of Education',
    theme: 'Digital Literacy Programmes',
    questions: [
      'i. How many students across government and government-aided schools have been provided tablets or laptops under the Digital India initiative;',
      'ii. Whether the Government has assessed the actual utilisation and learning outcomes from these devices; and',
      'iii. What measures are in place to ensure maintenance, internet connectivity, and content updates for these devices?',
    ],
    askedBy: { name: 'Addie V. Biela', avatar: SESSION_AVATAR_B, role: 'Private Member', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'Alice Thompson', avatar: AVATAR_4, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'pending',
    answer: 'Under the Digital India initiative, 1.24 crore tablets and laptops have been distributed to students in government schools. An impact assessment by NIEPA found that only 58% of devices are actively used for learning. The Government has launched a Device Lifecycle Management programme covering maintenance, connectivity via BharatNet, and quarterly content updates.',
  },
  {
    id: 's2-q5',
    ministry: 'To the Ministry of Finance',
    theme: 'Public Debt Management',
    questions: [
      'i. What is the current ratio of India\'s public debt to GDP and how does it compare with the FRBM Act target;',
      'ii. Whether rising interest payments are crowding out developmental expenditure in the Union Budget; and',
      'iii. What medium-term strategy has the Government adopted for debt consolidation?',
    ],
    askedBy: { name: 'Alice Thompson', avatar: AVATAR_4, role: 'Private Member', party: 'CVP', partyFlag: FLAG_CVP },
    answeredBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, role: 'Minister', party: 'UPP', partyFlag: FLAG_UPP },
    status: 'pending',
    answer: 'India\'s public debt-to-GDP ratio stands at 56.8% against the FRBM target of 40%. Interest payments constitute 24% of revenue receipts. The Government\'s medium-term strategy includes fiscal consolidation targeting 4.5% fiscal deficit by 2027-28, liability management through buyback of high-cost debt, and revenue augmentation through asset monetisation.',
  },
  {
    id: 's2-q6',
    ministry: 'To the Ministry of Commerce & Industry',
    theme: 'District Export Hubs Initiative',
    questions: [
      'i. Whether the Ministry has assessed the effectiveness of the District Export Hubs (DEH) initiative in achieving its stated objective of promoting exports from all districts;',
      'ii. If so, how many districts have achieved measurable export growth attributable to the DEH programme since its launch; and',
      'iii. What capacity-building measures are being implemented to address the lack of export infrastructure and awareness in aspirational districts?',
    ],
    askedBy: { name: 'Kavya Reddy', avatar: SESSION_AVATAR_C, role: 'Private Member', party: 'CVP', partyFlag: FLAG_CVP },
    answeredBy: { name: 'David R. Patterson', avatar: AVATAR_6, role: 'MoS', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'The DEH initiative has been operational in 741 districts. Of these, 234 districts have shown measurable export growth above 15% attributable to the programme. Capacity-building includes establishment of 450 Trade Facilitation Centres, training of 28,000 MSMEs in export procedures, and dedicated e-commerce onboarding drives in 150 aspirational districts.',
  },
  {
    id: 's2-q7',
    ministry: 'To the Ministry of Health & Family Welfare',
    theme: 'Mental Health Initiatives',
    questions: [
      'i. Whether the Government has any data on the prevalence of mental-health disorders among the 15–29 age group in India;',
      'ii. If so, what dedicated programmes exist under the National Mental Health Programme (NMHP) to address youth mental health; and',
      'iii. How many District Mental Health Programmes are currently operational and adequately staffed?',
    ],
    askedBy: { name: 'Smayan S.', avatar: SESSION_AVATAR_D, role: 'President', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'Marcus T. Reynolds', avatar: AVATAR_7, role: 'Minister', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'NIMHANS survey data indicates a 12.5% prevalence of mental-health disorders in the 15-29 age group. Under NMHP, 14 Centres of Excellence for youth mental health have been established. Currently, 692 out of 767 targeted District Mental Health Programmes are operational, but only 41% have full staffing complements including psychiatrists, psychologists, and social workers.',
  },
  {
    id: 's2-q8',
    ministry: 'To the Ministry of External Affairs',
    theme: 'Climate Diplomacy',
    questions: [
      'What is India\'s current position on Loss and Damage funding commitments at the UNFCCC negotiations?',
      'Whether any bilateral climate-finance partnerships have been signed in the last 12 months?',
    ],
    askedBy: { name: 'Latricia W. Silletti', avatar: AVATAR_5, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'David R. Patterson', avatar: AVATAR_6, role: 'Minister', party: 'TRP', partyFlag: FLAG_TRP },
    status: 'pending',
    answer: 'India maintains that developed nations must honour their historical responsibility for Loss and Damage financing. Three bilateral climate-finance partnerships were signed — with Germany (€1.5B green hydrogen), France (€800M solar manufacturing), and UAE ($2B mangrove restoration). India\'s cumulative climate-finance mobilisation stands at $42 billion.',
  },
  {
    id: 's2-q9',
    ministry: 'To the Ministry of Commerce & Industry',
    theme: 'Textile Exports & Trade Agreements',
    questions: [
      'i. Whether the Government is aware that several Export Promotion Councils have reported a decline in India\'s share of global textile exports over the past three years;',
      'ii. If so, what specific policy interventions have been introduced to reverse this trend, particularly for handloom and handicraft exporters; and',
      'iii. Whether any new bilateral or multilateral trade agreements are under negotiation that specifically address market access for Indian MSMEs?',
    ],
    askedBy: { name: 'Nathan S. Wright', avatar: AVATAR_2, role: 'Private Member', party: 'TRP', partyFlag: FLAG_TRP },
    answeredBy: { name: 'Aleta H. Starcher', avatar: AVATAR_3, role: 'MoS', party: 'UPP', partyFlag: FLAG_UPP },
    status: 'pending',
    answer: 'India\'s share of global textile exports has declined from 5.4% to 4.8% over three years. The Government has introduced the PM MITRA Mega Textile Park scheme and enhanced the RoSCTL rebate. FTA negotiations with the UK, EU, and GCC include specific textile chapters addressing zero-duty access for handloom and handicraft products.',
  },
  {
    id: 's2-q10',
    ministry: 'To the Ministry of Education',
    theme: 'University Funding & Research',
    questions: [
      'i. Whether the Government is aware of the declining Gross Enrolment Ratio (GER) in postgraduate and doctoral programmes in public universities;',
      'ii. If so, what correlation, if any, has been identified between research-fellowship amounts and the declining intake; and',
      'iii. What revised fellowship or scholarship frameworks are being considered to arrest this trend?',
    ],
    askedBy: { name: 'Roy X. Hinde', avatar: AVATAR_2, role: 'Private Member', party: 'UPP', partyFlag: FLAG_UPP },
    answeredBy: { name: 'Alice Thompson', avatar: AVATAR_4, role: 'Minister', party: 'CVP', partyFlag: FLAG_CVP },
    status: 'pending',
    answer: 'GER in postgraduate programmes has declined from 4.8% to 4.1% over five years. A direct correlation has been identified with fellowship amounts that have not kept pace with inflation. The Government proposes a 40% enhancement in JRF/SRF fellowship amounts and introduction of a Performance-Linked Research Grant of up to ₹5 lakh per annum for PhD scholars.',
  },
];