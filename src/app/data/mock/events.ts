// ── Events / PSP Mock Data ──────────────────────────────────────────────────

import type { PSPEvent } from '../../types';

export const INITIAL_EVENTS: PSPEvent[] = [
  { id: 1, title: 'Parliamentary Debate on Education Reform', date: '2026-02-20', status: 'Ongoing' },
  { id: 2, title: 'Budget Session 2026', date: '2026-02-25', status: 'Ongoing' },
  { id: 3, title: 'Committee Meeting on Healthcare', date: '2026-03-01', status: 'Ongoing' },
  { id: 4, title: 'Winter Session 2025', date: '2025-12-15', status: 'Completed' },
  { id: 5, title: 'Constitutional Amendment Discussion', date: '2026-01-10', status: 'Completed' },
  { id: 6, title: 'Infrastructure Development Review', date: '2026-03-15', status: 'Draft' },
];

// ── Partners: Available partners for event creation ─────────────────────────

export const AVAILABLE_PARTNERS = [
  'St. Mary\'s High School',
  'Lincoln Academy',
  'Riverside International School',
  'Greenwood Public School',
  'Summit Preparatory School',
  'Perry Traditional Academy',
  'Peabody High School',
  'Oakland Catholic High School',
  'Northgate Junior - Senior High School',
  'Oliver High School',
  'Pittsburgh Central Catholic',
  'Diplomatic Summit Hall',
  'InnovateEd Tech Expo Center',
  'Future Learning Center',
  'Wellness Convention Center',
];
