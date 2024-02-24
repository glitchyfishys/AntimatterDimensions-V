
export const preinfinityUG = [
  {
    name: "dimless",
    id: 0,
    requirement: "reach 1e15 antimater without dimboosts",
    hasFailed: () => player.dimensionBoosts != 0 ,
    checkRequirement: () => player.antimatter.e >= 15 && player.dimensionBoosts === 0,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "costless",
    id: 1,
    requirement: " have 1e25 antimatter with one dimboost",
    hasFailed: () => player.dimensionBoosts != 1 ,
    checkRequirement: () => player.antimatter.e >= 25 && player.dimensionBoosts === 1,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
  name: "h",
    id: 2,
    requirement: " have 1e50 antimatter with two dimboosts",
    hasFailed: () => player.dimensionBoosts != 2 ,
    checkRequirement: () => player.antimatter.e >= 50 && player.dimensionBoosts === 2,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  {
    name: "hi",
    id: 3,
    requirement: " have 1e150 antimatter with four dimboosts",
    hasFailed: () => player.galaxys == 1,
    checkRequirement: () => player.antimatter.e >= 150 && player.dimensionBoosts === 4,
    checkevent: GAME_EVENT.GAME_TICK_BEFORE,
    description: "AD muliplier from dimboosts",
    effect: () => 1 + player.dimensionBoosts / 5,
    formatEffect: value => formatX(value, 2, 2)
  },
  
];
