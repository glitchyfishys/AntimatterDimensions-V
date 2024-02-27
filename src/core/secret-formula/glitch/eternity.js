
export const eternityUG = [
  {
    name: "eternal forces",
    id: 0,
    requirement: "reach 1e350 infinity points on your first eternity",
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
    requirement: "complete your second eternity without time dimensions",
    hasFailed: () => !player.dimensions.time[0].amount.equals(0) || PlayerProgress.realityUnlocked() || !player.eternities.equals(1),
    checkRequirement: () => player.dimensions.time[0].amount.equals(0) && player.eternities.equals(1) && !PlayerProgress.realityUnlocked() && player.infinityPoints.greaterThanOrEqualTo(1.79e308),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "free tick speed threshold decreased to 1.3",
    effect: () => 1.3,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "rifted",
    id: 2,
    requirement: "have exactly 15 replacnti galaxys",
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
    requirement: "reach 1e20 EP",
    hasFailed: () => false,
    checkRequirement: () => player.eternityPoints.greaterThanOrEqualTo(1e20),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "250 free tick speed upgrades (pelle effective)",
    effect: () => 250,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "wrong timeline",
    id: 4,
    requirement: "complete another EC first rather that EC1 ",
    hasFailed: () => EternityChallenges.completions >= 1 || EternityChallenges.all[0].completions == 0 || PlayerProgress.realityUnlocked(),
    checkRequirement: () => EternityChallenges.completions >= 1 && EternityChallenges.all[0].completions == 0 && !PlayerProgress.realityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "x15 EP gain (pelle effective)",
    effect: () => 15,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "logical tictonics",
    id: 5,
    requirement: "get time study 181 without fully compleing EC1, EC2, E3",
    hasFailed: () => EternityChallenges.all[0].completions == 5 || EternityChallenges.all[1].completions == 5 || EternityChallenges.all[2].completions == 5 || PlayerProgress.realityUnlocked(),
    checkRequirement: () => player.timestudy.studies.includes(181) && !EternityChallenges.all[0].completions == 5 && !EternityChallenges.all[1].completions == 5 && !EternityChallenges.all[2].completions == 5 && !PlayerProgress.realityUnlocked(),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "5000 free tick speed upgrades",
    effect: () => 5000,
    formatEffect: value => formatX(value, 2, 2)
  },

];
