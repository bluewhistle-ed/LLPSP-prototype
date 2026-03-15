// ── Shared Domain Types ─────────────────────────────────────────────────────
// Single source of truth for all data shapes used across the application.
// Components import from here instead of defining their own interfaces.

// ── Party & Members ─────────────────────────────────────────────────────────

export interface PartyMember {
  id: number;
  name: string;
  role: string;        // 'President' | 'V.President' | 'Minister' | 'Member' | 'MoS'
  avatar: string;
}

export interface Party {
  id: number;
  name: string;
  shortName: string;
  flag: string;
  president: string;
  tagline: string;
  memberCount: number;
  members: PartyMember[];
}

/** Lightweight party reference (used in dropdowns, coalition modals, etc.) */
export interface PartyRef {
  id: number;
  name: string;
  shortName: string;
  flag: string;
}

// ── House Configuration ─────────────────────────────────────────────────────

export type HouseSideType = 'government' | 'opposition';

export interface HouseConfig {
  totalSeats: number;
  majorityThreshold: number;
}

// ── Coalition ───────────────────────────────────────────────────────────────

export interface CoalitionResult {
  hasMajority: boolean;
  finalSeats: number;
  totalSeats: number;
  partnerPartyIds: number[];
}

// ── Ministry & Government ───────────────────────────────────────────────────

export interface Ministry {
  id: number;
  name: string;
  status?: string;   // 'active' | 'inactive' — used in admin GlobalListsPage
}

export interface Committee {
  id: number;
  name: string;
}

/** A single berth in a ministry (used in Tier 1 allocation) */
export interface BerthAllocation {
  cabinetMinisterPartyId: number;
  mosPartyId: number | null;
}

/** A berth allocated to a specific party (used in Tier 2 / ChooseMinistersModal) */
export interface AllocatedBerth {
  ministryId: number;
  ministryName: string;
  roleType: 'Minister' | 'MoS';
}

/** Berths grouped by ministry for card rendering */
export interface MinistryGroup {
  ministryId: number;
  ministryName: string;
  hasMinister: boolean;
  hasMoS: boolean;
}

/** Full ministry with assigned ministers (used in GovernmentTab Council of Ministers) */
export interface MinistryWithMinisters {
  id: number;
  name: string;
  description: string;
  minister: MinisterPerson;
  mos: MinisterPerson | null;
  questionThemes: QuestionTheme[];
}

export interface MinisterPerson {
  name: string;
  avatar: string;
  partyName: string;
  partyFlag: string;
}

export interface QuestionTheme {
  id: number;
  theme: string;
  questionsReceived: number;
}

// ── Speaker List ────────────────────────────────────────────────────────────

export interface SpeakerEntry {
  id: number;
  name: string;
  avatar: string;
  partyName: string;
  partyFlag: string;
  time: string;
}

// ── Events / PSPs ───────────────────────────────────────────────────────────

export type EventStatus = 'Ongoing' | 'Completed' | 'Draft';

export interface PSPEvent {
  id: number;
  title: string;
  date: string;
  status: EventStatus;
}

// ── Partners / Schools ──────────────────────────────────────────────────────