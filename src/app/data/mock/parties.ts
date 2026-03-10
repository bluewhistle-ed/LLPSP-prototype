// ── Centralized Party & Member Mock Data ────────────────────────────────────
// Single source of truth for all party and member data.
// Previously duplicated across 6+ component files.

import {
  FLAG_UPP, FLAG_TRP, FLAG_CVP,
  AVATAR_1, AVATAR_2, AVATAR_3, AVATAR_4,
  AVATAR_5, AVATAR_6, AVATAR_7,
} from '../assets';
import type { Party, PartyMember } from '../../types';

// ── All Members (UPP — the "current user's" party) ─────────────────────────

export const UPP_MEMBERS: PartyMember[] = [
  { id: 1, name: "Sheilah T. Sayasane", role: "President", avatar: AVATAR_1 },
  { id: 2, name: "Roy X. Hinde", role: "V.President", avatar: AVATAR_2 },
  { id: 3, name: "Aleta H. Starcher", role: "Member", avatar: AVATAR_3 },
  { id: 4, name: "Mai G. Sollom", role: "Member", avatar: AVATAR_4 },
  { id: 5, name: "Latricia W. Silletti", role: "Minister", avatar: AVATAR_5 },
  { id: 6, name: "Adrianne P. Tillis", role: "Member", avatar: AVATAR_6 },
  { id: 7, name: "Elvira E. Aus", role: "Member", avatar: AVATAR_7 },
  { id: 8, name: "Marcus T. Reynolds", role: "Member", avatar: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5Njk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 9, name: "Isabella M. Chen", role: "Member", avatar: "https://images.unsplash.com/photo-1701096351544-7de3c7fa0272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk5NDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 10, name: "David R. Patterson", role: "Minister", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTkzMTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 11, name: "Sophia L. Martinez", role: "Member", avatar: "https://images.unsplash.com/photo-1752650735547-990f918bd028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcGhvdG98ZW58MXx8fHwxNzcyMDI2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 12, name: "James K. Anderson", role: "Member", avatar: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NzE5OTU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 13, name: "Emily R. Thompson", role: "Member", avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3MjAxMjIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 14, name: "Nathan S. Wright", role: "Minister", avatar: "https://images.unsplash.com/photo-1769636929261-e913ed023c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5MTUzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 15, name: "Olivia H. Bennett", role: "Member", avatar: "https://images.unsplash.com/photo-1613473350016-1fe047d6d360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4NjM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

export const TRP_MEMBERS: PartyMember[] = [
  { id: 101, name: "Alex Johnson", role: "President", avatar: AVATAR_4 },
  { id: 102, name: "Marcus T. Reynolds", role: "V.President", avatar: AVATAR_7 },
  { id: 103, name: "David R. Patterson", role: "Member", avatar: AVATAR_6 },
  { id: 104, name: "Sophia L. Martinez", role: "Member", avatar: AVATAR_5 },
  { id: 105, name: "Nathan S. Wright", role: "Member", avatar: AVATAR_2 },
];

export const CVP_MEMBERS: PartyMember[] = [
  { id: 201, name: "Alice Thompson", role: "President", avatar: AVATAR_3 },
  { id: 202, name: "Isabella M. Chen", role: "V.President", avatar: AVATAR_1 },
  { id: 203, name: "James K. Anderson", role: "Member", avatar: AVATAR_7 },
  { id: 204, name: "Emily R. Thompson", role: "Member", avatar: AVATAR_4 },
];

// ── All Parties (full data for house/coalition operations) ──────────────────

export const ALL_PARTIES: Party[] = [
  {
    id: 1,
    name: "Unity Progress Party",
    shortName: "UPP",
    flag: FLAG_UPP,
    president: "Sheilah T. Sayasane",
    tagline: "Forging Together, Advancing Forward",
    memberCount: 15,
    members: UPP_MEMBERS.slice(0, 7), // Display subset
  },
  {
    id: 2,
    name: "Techno-Revolution Party",
    shortName: "TRP",
    flag: FLAG_TRP,
    president: "Alex Johnson",
    tagline: "Innovation for the People",
    memberCount: 12,
    members: TRP_MEMBERS,
  },
  {
    id: 3,
    name: "Citizen's Voice Party",
    shortName: "CVP",
    flag: FLAG_CVP,
    president: "Alice Thompson",
    tagline: "Power to the People",
    memberCount: 10,
    members: CVP_MEMBERS,
  },
  {
    id: 4,
    name: "National Democratic Front",
    shortName: "NDF",
    flag: FLAG_TRP,
    president: "Rajiv M. Kapoor",
    tagline: "Justice Through Governance",
    memberCount: 9,
    members: [],
  },
  {
    id: 5,
    name: "Green Future Alliance",
    shortName: "GFA",
    flag: FLAG_CVP,
    president: "Priya S. Nair",
    tagline: "Sustainable Governance for Tomorrow",
    memberCount: 8,
    members: [],
  },
  {
    id: 6,
    name: "People's Reform Party",
    shortName: "PRP",
    flag: FLAG_UPP,
    president: "David K. Osei",
    tagline: "Reform from the Ground Up",
    memberCount: 11,
    members: [],
  },
];

// ── Government Coalition Parties (post-coalition-lock subset) ───────────────

export const GOVERNMENT_PARTY_IDS = [1, 2, 3];

export function getGovernmentParties(): Party[] {
  return ALL_PARTIES.filter(p => GOVERNMENT_PARTY_IDS.includes(p.id));
}

// ── Opposition Parties ──────────────────────────────────────────────────────

export const OPPOSITION_PARTIES: Party[] = [
  {
    id: 101,
    name: "People's Democratic Front",
    shortName: "PDF",
    flag: FLAG_CVP,
    president: "Rajesh K. Malhotra",
    tagline: "Democracy Through Dissent",
    memberCount: 8,
    members: [
      { id: 301, name: "Rajesh K. Malhotra", role: "President", avatar: AVATAR_6 },
      { id: 302, name: "Priya N. Deshmukh", role: "V.President", avatar: AVATAR_3 },
      { id: 303, name: "Carlos D. Mendez", role: "Member", avatar: AVATAR_7 },
      { id: 304, name: "Fiona A. McCarthy", role: "Member", avatar: AVATAR_1 },
      { id: 305, name: "Samuel T. Okonkwo", role: "Member", avatar: AVATAR_4 },
    ],
  },
  {
    id: 102,
    name: "National Reform Alliance",
    shortName: "NRA",
    flag: FLAG_TRP,
    president: "Ananya R. Sharma",
    tagline: "Reform, Rebuild, Renew",
    memberCount: 6,
    members: [
      { id: 306, name: "Ananya R. Sharma", role: "President", avatar: AVATAR_5 },
      { id: 307, name: "Viktor J. Petrov", role: "V.President", avatar: AVATAR_2 },
      { id: 308, name: "Helena G. Santos", role: "Member", avatar: AVATAR_4 },
      { id: 309, name: "Derek M. O'Brien", role: "Member", avatar: AVATAR_7 },
    ],
  },
  {
    id: 103,
    name: "Green Future Party",
    shortName: "GFP",
    flag: FLAG_UPP,
    president: "Lena P. Johansson",
    tagline: "Sustainable Governance for All",
    memberCount: 4,
    members: [
      { id: 310, name: "Lena P. Johansson", role: "President", avatar: AVATAR_2 },
      { id: 311, name: "Kwame A. Mensah", role: "V.President", avatar: AVATAR_6 },
      { id: 312, name: "Irene L. Costa", role: "Member", avatar: AVATAR_3 },
    ],
  },
];

// ── House Configuration ─────────────────────────────────────────────────────

export const TOTAL_HOUSE_SEATS = ALL_PARTIES.reduce((sum, p) => sum + p.memberCount, 0);
export const MAJORITY_THRESHOLD = Math.floor(TOTAL_HOUSE_SEATS / 2) + 1;
export const TOTAL_HOUSE_STRENGTH = 50; // Display-level constant used in Gov/Opp tabs

// ── Current Party (the logged-in user's party) ─────────────────────────────

export const CURRENT_PARTY_ID = 1;
