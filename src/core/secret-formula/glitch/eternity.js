
export const eternityUG = [
  {
    name: "eternal forces",
    id: 0,
    requirement: "reach 1e350 infinity points on your first eternit",
    hasFailed: () => PlayerProgress.eternityUnlocked(),
    checkRequirement: () => player.infinityPoints.e >= 350 && !PlayerProgress.eternityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain x5 more EP (pelle effective)",
    effect: () => 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "eternity power",
    id: 1,
    requirement: "complete your second eternity without a time dimensions",
    hasFailed: () => !player.dimensions.time[0].equals(0) || PlayerProgress.realityUnlocked() || !player.eternities.equals(1),
    checkRequirement: () => player.dimensions.time[0].equals(0) && player.eternities.equals(1) && !PlayerProgress.realityUnlocked() && player.infinityPoints.greaterThanOrEqualTo(1.79e308),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "free tick speed threshold decreased to 1.3",
    effect: () => 1.3,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "rifted",
    id: 2,
    requirement: "have exacly 15 replacnti galaxys",
    hasFailed: () => false,
    checkRequirement: () => player.replicanti.galaxies == 15,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "gain 3 additonal RG",
    effect: () => 3,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "study forever",
    id: 3,
    requirement: "reach 1e20 EP ",
    hasFailed: () => false,
    checkRequirement: () => player.eternityPoints.greaterThanOrEqualTo(1e20),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "250 free tick speed upgrades (pelle effective)",
    effect: () => 250,
    formatEffect: value => formatX(value, 2, 2)
  },

];
