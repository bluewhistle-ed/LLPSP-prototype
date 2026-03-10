// ── Government / Ministry Mock Data ─────────────────────────────────────────
// Single source of truth for ministry data, Tier 1/2 allocations, speaker lists.

import {
  FLAG_UPP, FLAG_TRP, FLAG_CVP,
  AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4,
  AVATAR_5, AVATAR_6, AVATAR_7,
} from '../assets';
import type {
  Ministry, Committee, MinistryWithMinisters, SpeakerEntry, AllocatedBerth,
} from '../../types';

// ── Admin Global Lists: Ministries & Committees ─────────────────────────────

export const INITIAL_MINISTRIES: Ministry[] = [
  { id: 1, name: 'Ministry of Justice and Legal Affairs', status: 'active' },
  { id: 2, name: 'Ministry of Finance and Economic Planning', status: 'active' },
  { id: 3, name: 'Ministry of Education and Research', status: 'active' },
  { id: 4, name: 'Ministry of Health and Public Welfare', status: 'inactive' },
  { id: 5, name: 'Ministry of Foreign Affairs and Diplomacy', status: 'active' },
  { id: 6, name: 'Ministry of Environmental Conservation', status: 'active' },
  { id: 7, name: 'Ministry of Science and Technology Innovation', status: 'inactive' },
  { id: 8, name: 'Ministry of Social Justice and Equality', status: 'active' },
  { id: 9, name: 'Ministry of Cultural Heritage and the Arts', status: 'inactive' },
  { id: 10, name: 'Ministry of Infrastructure and Transportation', status: 'active' },
];

export const INITIAL_COMMITTEES: Committee[] = [
  { id: 1, name: 'Committee on Arts and Creative Expression' },
  { id: 2, name: 'Committee on Public Communications and Media' },
  { id: 3, name: 'Committee on Innovation and Entrepreneurship' },
  { id: 4, name: 'Committee on Cultural Heritage and the Arts' },
  { id: 5, name: 'Committee on Environmental Sustainability' },
  { id: 6, name: 'Committee on Infrastructure and Transportation' },
  { id: 7, name: 'Committee on Public Health and Wellness' },
  { id: 8, name: 'Committee on Democracy and Electoral Reforms' },
  { id: 9, name: 'Committee on Financial Stability and Fiscal Policy' },
  { id: 10, name: 'Committee on Digital Innovation and Technology' },
];

// ── Tier 1: Ministries for PM allocation (MinistryAllocationModal) ──────────

export const ALLOCATION_MINISTRIES: Ministry[] = [
  { id: 1, name: "Ministry of Finance" },
  { id: 2, name: "Ministry of Home Affairs" },
  { id: 3, name: "Ministry of External Affairs" },
  { id: 4, name: "Ministry of Education" },
  { id: 5, name: "Ministry of Health & Family Welfare" },
  { id: 6, name: "Ministry of Defence" },
];

// ── Tier 2: Simulated PM allocation for ChooseMinistersModal ────────────────

export const PM_ALLOCATION: Record<number, AllocatedBerth[]> = {
  1: [
    { ministryId: 1, ministryName: "Ministry of Finance", roleType: "Minister" },
    { ministryId: 2, ministryName: "Ministry of Home Affairs", roleType: "Minister" },
    { ministryId: 4, ministryName: "Ministry of Education", roleType: "MoS" },
    { ministryId: 6, ministryName: "Ministry of Defence", roleType: "MoS" },
  ],
  2: [
    { ministryId: 3, ministryName: "Ministry of External Affairs", roleType: "Minister" },
    { ministryId: 5, ministryName: "Ministry of Health & Family Welfare", roleType: "Minister" },
    { ministryId: 5, ministryName: "Ministry of Health & Family Welfare", roleType: "MoS" },
    { ministryId: 1, ministryName: "Ministry of Finance", roleType: "MoS" },
  ],
  3: [
    { ministryId: 4, ministryName: "Ministry of Education", roleType: "Minister" },
    { ministryId: 6, ministryName: "Ministry of Defence", roleType: "Minister" },
    { ministryId: 2, ministryName: "Ministry of Home Affairs", roleType: "MoS" },
  ],
};

// ── GovernmentTab: Council of Ministers (fully assigned) ─────────────────────

export const COUNCIL_OF_MINISTERS: MinistryWithMinisters[] = [
  {
    id: 1,
    name: "Finance",
    description: "Responsible for the management of government finances, fiscal policy, taxation, public expenditure, and financial regulation. This ministry oversees the Union Budget, monitors macroeconomic indicators, and coordinates economic reforms across sectors.",
    minister: { name: "Aleta H. Starcher", avatar: AVATAR_3, partyName: "UPP", partyFlag: FLAG_UPP },
    mos: { name: "Nathan S. Wright", avatar: AVATAR_2, partyName: "TRP", partyFlag: FLAG_TRP },
    questionThemes: [
      { id: 1, theme: "Union Budget Allocations", questionsReceived: 8 },
      { id: 2, theme: "GST Implementation", questionsReceived: 5 },
      { id: 3, theme: "Public Debt Management", questionsReceived: 3 },
      { id: 4, theme: "Banking Sector Reforms", questionsReceived: 6 },
    ],
  },
  {
    id: 2,
    name: "Home Affairs",
    description: "Handles internal security, law enforcement, border management, and disaster response. The ministry coordinates with state governments on policing, communal harmony, and the maintenance of public order across the nation.",
    minister: { name: "Latricia W. Silletti", avatar: AVATAR_5, partyName: "UPP", partyFlag: FLAG_UPP },
    mos: { name: "Emily R. Thompson", avatar: AVATAR_4, partyName: "CVP", partyFlag: FLAG_CVP },
    questionThemes: [
      { id: 5, theme: "Border Security Operations", questionsReceived: 7 },
      { id: 6, theme: "Cybercrime Prevention", questionsReceived: 4 },
      { id: 7, theme: "Disaster Response Readiness", questionsReceived: 2 },
    ],
  },
  {
    id: 3,
    name: "External Affairs",
    description: "Manages India's foreign relations, diplomatic missions, consular services, and international treaties. The ministry shapes foreign policy, fosters bilateral and multilateral partnerships, and protects the interests of citizens abroad.",
    minister: { name: "David R. Patterson", avatar: AVATAR_6, partyName: "TRP", partyFlag: FLAG_TRP },
    mos: null,
    questionThemes: [
      { id: 8, theme: "Bilateral Trade Agreements", questionsReceived: 5 },
      { id: 9, theme: "Diaspora Welfare Programmes", questionsReceived: 3 },
    ],
  },
  {
    id: 4,
    name: "Education",
    description: "Oversees national education policy, school and higher education standards, curriculum development, and research funding. The ministry works to ensure equitable access to quality education and promote skill development across demographics.",
    minister: { name: "Alice Thompson", avatar: AVATAR_3, partyName: "CVP", partyFlag: FLAG_CVP },
    mos: { name: "Mai G. Sollom", avatar: AVATAR_4, partyName: "UPP", partyFlag: FLAG_UPP },
    questionThemes: [
      { id: 10, theme: "National Education Policy", questionsReceived: 9 },
      { id: 11, theme: "Digital Literacy Programmes", questionsReceived: 4 },
      { id: 12, theme: "University Funding & Research", questionsReceived: 6 },
      { id: 13, theme: "Mid-day Meal Scheme", questionsReceived: 2 },
    ],
  },
  {
    id: 5,
    name: "Health & Family Welfare",
    description: "Responsible for public health infrastructure, disease prevention, medical research, and family welfare programmes. The ministry administers national health insurance schemes and regulates pharmaceutical standards and medical education.",
    minister: { name: "Marcus T. Reynolds", avatar: AVATAR_7, partyName: "TRP", partyFlag: FLAG_TRP },
    mos: { name: "Adrianne P. Tillis", avatar: AVATAR_6, partyName: "UPP", partyFlag: FLAG_UPP },
    questionThemes: [
      { id: 14, theme: "Rural Healthcare Access", questionsReceived: 7 },
      { id: 15, theme: "Vaccination Programmes", questionsReceived: 5 },
      { id: 16, theme: "Mental Health Initiatives", questionsReceived: 3 },
    ],
  },
  {
    id: 6,
    name: "Defence",
    description: "Manages national defence strategy, armed forces modernisation, defence procurement, and veteran welfare. The ministry coordinates with the three services to ensure territorial integrity and readiness for security challenges.",
    minister: { name: "Isabella M. Chen", avatar: AVATAR_1, partyName: "CVP", partyFlag: FLAG_CVP },
    mos: null,
    questionThemes: [
      { id: 17, theme: "Defence Modernisation", questionsReceived: 6 },
      { id: 18, theme: "Veteran Welfare Schemes", questionsReceived: 4 },
      { id: 19, theme: "Indigenous Equipment Production", questionsReceived: 3 },
    ],
  },
];

// ── GovernmentTab: Speaker Lists ────────────────────────────────────────────

export const DAY1_SPEAKERS: SpeakerEntry[] = [
  { id: 1, name: "Sheilah T. Sayasane", avatar: AVATAR_1, partyName: "UPP", partyFlag: FLAG_UPP, time: "5 min" },
  { id: 2, name: "Alex Johnson", avatar: AVATAR_4, partyName: "TRP", partyFlag: FLAG_TRP, time: "8 min" },
  { id: 3, name: "Aleta H. Starcher", avatar: AVATAR_3, partyName: "UPP", partyFlag: FLAG_UPP, time: "5 min" },
  { id: 4, name: "Isabella M. Chen", avatar: AVATAR_7, partyName: "CVP", partyFlag: FLAG_CVP, time: "7 min" },
  { id: 5, name: "Roy X. Hinde", avatar: AVATAR_2, partyName: "UPP", partyFlag: FLAG_UPP, time: "5 min" },
];

export const DAY2_SPEAKERS: SpeakerEntry[] = [
  { id: 6, name: "Marcus T. Reynolds", avatar: AVATAR_5, partyName: "TRP", partyFlag: FLAG_TRP, time: "10 min" },
  { id: 7, name: "Alice Thompson", avatar: AVATAR_6, partyName: "CVP", partyFlag: FLAG_CVP, time: "6 min" },
];

// ── NewEventForm: Ministries with themes ────────────────────────────────────

export const EVENT_FORM_MINISTRIES = [
  {
    id: 'ministry-1',
    name: 'Ministry of Education',
    themes: ['Curriculum Development', 'Teacher Training', 'Student Assessment', 'Infrastructure', 'Digital Learning'],
  },
  {
    id: 'ministry-2',
    name: 'Ministry of Health',
    themes: ['Public Health', 'Healthcare Access', 'Medical Research', 'Disease Prevention', 'Mental Health'],
  },
  {
    id: 'ministry-3',
    name: 'Ministry of Finance',
    themes: ['Budget Planning', 'Tax Policy', 'Economic Growth', 'Financial Regulation', 'Public Debt'],
  },
  {
    id: 'ministry-4',
    name: 'Ministry of Environment',
    themes: ['Climate Change', 'Conservation', 'Pollution Control', 'Renewable Energy', 'Wildlife Protection'],
  },
  {
    id: 'ministry-5',
    name: 'Ministry of Transportation',
    themes: ['Infrastructure Development', 'Public Transit', 'Road Safety', 'Aviation', 'Maritime'],
  },
  {
    id: 'ministry-6',
    name: 'Ministry of Agriculture',
    themes: ['Food Security', 'Sustainable Farming', 'Rural Development', 'Livestock', 'Crop Production'],
  },
  {
    id: 'ministry-7',
    name: 'Ministry of Technology',
    themes: ['Digital Innovation', 'Cybersecurity', 'AI & ML', 'Telecommunications', 'Data Privacy'],
  },
];

// ── NoticeForm: Themes dropdown ─────────────────────────────────────────────

export const NOTICE_THEMES = [
  'Education',
  'Healthcare',
  'Infrastructure',
  'Agriculture',
  'Economy',
  'Environment',
  'Social Welfare',
  'Technology',
  'Security',
  'Other',
];