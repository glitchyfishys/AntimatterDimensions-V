
export const breakinfinityUG = [
  {
    name: "limited space",
    id: 0,
    requirement: "reach 1e500 antimater up to 4 dimboosts",
    hasFailed: () => player.dime > 4 ,
    checkRequirement: () => player.antimatter.e >= 500,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "IP muliplier from antimatter galaxies (pelle effective)",
    effect: () => 1 + Math.pow(player.galaxies, 1.25),
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "infinitly limiting",
    id: 1,
    requirement: "reach 1000 (pending) infinity points with up to four dimboost and one antimatter galaxy",
    hasFailed: () => player.dimensionBoosts > 4 || player.galaxies > 1 ,
    checkRequirement: () =>  gainedInfinityPoints().greaterThan(1000),
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "x10 infinity points (pelle effective)",
    effect: () => 10,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "chaos",
    id: 2,
    requirement: "finish IC1 without infinity dimensions",
    hasFailed: () => player.dimensions.infinity[0].amount.greaterThan(0),
    checkRequirement: () => player.antimatter.greaterThan(1.79e308) && player.challenge.infinity.current == 1,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "1e50 more infinity points",
    effect: () => 1e50,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "cosmic infinity",
    id: 3,
    requirement: "have 1e150 infinity points",
    hasFailed: () => false,
    checkRequirement: () => player.infinityPoints.e >= 150,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "IP muliplier from antimatter galaxies (pelle effective)",
    effect: () => 1 + Math.pow(player.galaxies, 3.5),
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
