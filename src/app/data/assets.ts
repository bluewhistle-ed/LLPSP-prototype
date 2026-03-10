// ── Centralized Asset Registry ──────────────────────────────────────────────
// All party flags and member avatars imported once, referenced everywhere.
// Components import from here instead of importing figma:asset directly.

// Party Flags
export { default as FLAG_UPP } from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
export { default as FLAG_TRP } from "figma:asset/f3d28dab76472dda8be30af14710d0d9220a3f6c.png";
export { default as FLAG_CVP } from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";

// Member Avatars (shared across PartyManagement, GovernmentTab, ChooseMinistersModal, etc.)
export { default as AVATAR_1 } from "figma:asset/2255efa6e3d4e9cd3d5daf58f5f5df679f8ce61b.png";
export { default as AVATAR_2 } from "figma:asset/bdd8fbc00e625d0c6fe14c2c8af968a19e0b5258.png";
export { default as AVATAR_3 } from "figma:asset/666aaf651ac2fa50457b5314dddb3ef527236357.png";
export { default as AVATAR_4 } from "figma:asset/0c010bee9a65e7abc8fbcfcd9aabb12192721142.png";
export { default as AVATAR_5 } from "figma:asset/4fe1dc6012c7950c64680d0050aa8870cf6b7629.png";
export { default as AVATAR_6 } from "figma:asset/970678de1f18c883f87566bc9d6cb8a33ce7c22b.png";
export { default as AVATAR_7 } from "figma:asset/1fe3a74538117eb749053e9327f4316a11266495.png";

// ── Current User Avatar ─────────────────────────────────────────────────────
// Used in PageHeader, SharedNavBar, MissionControlTab for logged-in user display.
export { default as USER_AVATAR } from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";

// ── Session-Level Avatars ───────────────────────────────────────────────────
// Shared across Questions, Notices, QuestionForm, BillReview, PartyManagement.
// These represent session participants whose data doesn't yet live in a provider.
export { default as SESSION_AVATAR_A } from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";
export { default as SESSION_AVATAR_B } from "figma:asset/ba2f16d42d47f4ee59f03debf98e6bdc2a4d8653.png";
export { default as SESSION_AVATAR_C } from "figma:asset/f6ba6f3786e668346bbfc663e520ac1bacb87949.png";
export { default as SESSION_AVATAR_D } from "figma:asset/072958e13f38abd0a42ad7f8edae5e3aa7e2ff2b.png";

// ── MissionControl-Only Avatars ─────────────────────────────────────────────
// Timeline / chat participants unique to MissionControlTab.
export { default as MC_AVATAR_1 } from "figma:asset/4a8f8e72f5fe25465071d4ab7006bf2930bf6fc5.png";
export { default as MC_AVATAR_2 } from "figma:asset/7e0d7ab070d39f3cfc9f86f2768f90e8f6c155d2.png";
export { default as MC_AVATAR_3 } from "figma:asset/e754befde01d23dc9b0ee961c7db7f0d45c70f90.png";
export { default as MC_AVATAR_4 } from "figma:asset/40f6d59c4c64e58f45df1ad8a583decfd06e5817.png";
export { default as MC_AVATAR_5 } from "figma:asset/25865008497d19d3e4a672e5cc60b40969e02c3f.png";
export { default as MC_AVATAR_6 } from "figma:asset/7d537f4f1b05e605b168f4447189c4a1b187cdb6.png";

// ── MissionControl Banner ───────────────────────────────────────────────────
export { default as MC_BANNER } from "figma:asset/aa54fa5a3bd4d263bcb864f95f6d443a92beae03.png";